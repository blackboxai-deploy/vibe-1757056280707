import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface ExampleStep {
  step: number;
  title: string;
  content: React.ReactNode;
  formula?: string;
}

interface ExampleProps {
  title: string;
  problem: string;
  steps: ExampleStep[];
  solution: React.ReactNode;
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface ExampleSectionProps {
  examples: ExampleProps[];
}

export function ExampleSection({ examples }: ExampleSectionProps) {
  const difficultyColors = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-red-500'
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground mb-4">Contoh Soal & Penyelesaian</h2>
      
      {examples.map((example, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {example.title}
              </CardTitle>
              {example.difficulty && (
                <Badge 
                  className={`${difficultyColors[example.difficulty]} text-white`}
                >
                  {example.difficulty.charAt(0).toUpperCase() + example.difficulty.slice(1)}
                </Badge>
              )}
            </div>
            <CardDescription className="text-base font-medium bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
              <span className="text-blue-700 dark:text-blue-300 font-semibold">Soal: </span>
              {example.problem}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="steps" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="steps">Langkah-langkah</TabsTrigger>
                <TabsTrigger value="solution">Jawaban Final</TabsTrigger>
              </TabsList>
              
              <TabsContent value="steps" className="mt-6">
                <div className="space-y-4">
                  {example.steps.map((step) => (
                    <div key={step.step} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah {step.step}: {step.title}
                      </h4>
                      <div className="prose prose-slate max-w-none dark:prose-invert">
                        {step.content}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="solution" className="mt-6">
                <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                    Jawaban:
                  </h4>
                  <div className="prose prose-slate max-w-none dark:prose-invert">
                    {example.solution}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}