import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TheorySectionProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];
}

export function TheorySection({ 
  title, 
  description, 
  content, 
  level = 'beginner',
  tags = []
}: TheorySectionProps) {
  const levelColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500', 
    advanced: 'bg-red-500'
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-foreground">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="mt-2">
                {description}
              </CardDescription>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge 
              variant="secondary" 
              className={`${levelColors[level]} text-white`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Badge>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="prose prose-slate max-w-none dark:prose-invert">
        {content}
      </CardContent>
    </Card>
  );
}