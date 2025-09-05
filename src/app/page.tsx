import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mathTopics = [
  {
    title: 'Pengukuran & Angka Penting',
    href: '/measurement',
    description: 'Pelajari konsep angka penting, aturan pembulatan, dan notasi ilmiah dalam pengukuran fisika.',
    level: 'Pemula',
    color: 'from-blue-500 to-cyan-500',
    features: ['Aturan Angka Penting', 'Notasi Ilmiah', 'Kalkulator Interaktif']
  },
  {
    title: 'Aljabar Linear Elementer',
    href: '/linear-algebra',
    description: 'Eksplorasi dunia vektor, matriks, determinan, dan sistem persamaan linear.',
    level: 'Menengah',
    color: 'from-purple-500 to-pink-500',
    features: ['Operasi Matriks', 'Determinan', 'Sistem Persamaan']
  },
  {
    title: 'Deret Taylor',
    href: '/taylor-series',
    description: 'Pahami ekspansi Taylor untuk aproksimasi fungsi dan aplikasinya dalam matematika.',
    level: 'Lanjutan',
    color: 'from-green-500 to-emerald-500',
    features: ['Ekspansi Taylor', 'Deret MacLaurin', 'Visualisasi']
  },
  {
    title: 'Integral Fraksional',
    href: '/fractional-integral',
    description: 'Jelajahi konsep integral fraksional dan operator Riemann-Liouville.',
    level: 'Expert',
    color: 'from-red-500 to-orange-500',
    features: ['Integral Fraksional', 'Operator R-L', 'Aplikasi']
  }
];

const features = [
  {
    title: 'Rumus Interaktif',
    description: 'Rumus matematika ditampilkan dengan jelas menggunakan rendering LaTeX',
    icon: '📐'
  },
  {
    title: 'Kalkulator Built-in',
    description: 'Kalkulator interaktif untuk setiap topik membantu memahami konsep',
    icon: '🧮'
  },
  {
    title: 'Contoh Soal Lengkap',
    description: 'Contoh soal dengan penyelesaian step-by-step yang mudah dipahami',
    icon: '📝'
  },
  {
    title: 'Responsif & Modern',
    description: 'Desain responsif yang dapat diakses dari berbagai perangkat',
    icon: '📱'
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20"></div>
        <div className="relative container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              ∫
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            MathEdu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Interactive</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Website pembelajaran matematika interaktif dengan materi lengkap, rumus yang jelas, 
            dan kalkulator untuk membantu pemahaman konsep matematika.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Link href="#topics">Mulai Belajar</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Link href="#features">Lihat Fitur</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Topik Matematika
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih topik matematika yang ingin Anda pelajari. Setiap topik dilengkapi 
              dengan teori, contoh soal, dan kalkulator interaktif.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mathTopics.map((topic, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${topic.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {topic.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-4 shrink-0">
                      {topic.level}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Yang akan Anda pelajari:</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full group-hover:bg-primary/90">
                    <Link href={topic.href}>
                      Pelajari Sekarang
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nikmati pengalaman belajar matematika yang interaktif dan menyenangkan 
              dengan berbagai fitur canggih yang kami sediakan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Siap Menguasai Matematika?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Mulai perjalanan pembelajaran matematika Anda sekarang. Pilih topik yang 
              ingin dipelajari dan nikmati pengalaman belajar yang interaktif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/measurement">Mulai dengan Angka Penting</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="/linear-algebra">Atau Aljabar Linear</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}