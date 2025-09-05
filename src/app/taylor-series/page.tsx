import { TheorySection } from '@/components/TheorySection';
import { ExampleSection } from '@/components/ExampleSection';
import { TaylorSeriesCalculator } from '@/components/Calculator';
import { DisplayFormula, InlineFormula } from '@/components/MathFormula';
import { Separator } from '@/components/ui/separator';

export default function TaylorSeriesPage() {
  const examples = [
    {
      title: "Contoh 1: Deret Taylor sin(x) di sekitar x = 0",
      problem: "Tentukan deret Taylor untuk sin(x) di sekitar x = 0 sampai suku ke-5",
      difficulty: 'medium' as const,
      steps: [
        {
          step: 1,
          title: "Hitung turunan-turunan sin(x)",
          content: (
            <div>
              <ul className="space-y-1">
                <li>f(x) = sin(x), f(0) = 0</li>
                <li>f'(x) = cos(x), f'(0) = 1</li>
                <li>f''(x) = -sin(x), f''(0) = 0</li>
                <li>f'''(x) = -cos(x), f'''(0) = -1</li>
                <li>f⁴(x) = sin(x), f⁴(0) = 0</li>
                <li>f⁵(x) = cos(x), f⁵(0) = 1</li>
              </ul>
            </div>
          )
        },
        {
          step: 2,
          title: "Terapkan rumus deret Taylor",
          content: (
            <div>
              <p>Menggunakan rumus deret Taylor di sekitar a = 0:</p>
              <DisplayFormula>f(x) = \sum_{{n=0}}^{{\infty}} \frac{{f^{{(n)}}(0)}}{{n!}}x^n</DisplayFormula>
            </div>
          )
        },
        {
          step: 3,
          title: "Substitusi nilai turunan",
          content: (
            <div>
              <DisplayFormula>
                \sin(x) = \frac{0}{0!}x^0 + \frac{1}{1!}x^1 + \frac{0}{2!}x^2 + \frac{-1}{3!}x^3 + \frac{0}{4!}x^4 + \frac{1}{5!}x^5 + \cdots
              </DisplayFormula>
            </div>
          )
        }
      ],
      solution: (
        <div>
          <DisplayFormula>
            \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!}x^{2n+1}
          </DisplayFormula>
        </div>
      )
    },
    {
      title: "Contoh 2: Deret Taylor e^x di sekitar x = 1",
      problem: "Tentukan deret Taylor untuk e^x di sekitar x = 1 sampai suku ke-4",
      difficulty: 'medium' as const,
      steps: [
        {
          step: 1,
          title: "Hitung turunan e^x di x = 1",
          content: (
            <div>
              <p>Semua turunan dari e^x adalah e^x itu sendiri:</p>
              <ul className="space-y-1">
                <li>f(x) = e^x, f(1) = e</li>
                <li>f'(x) = e^x, f'(1) = e</li>
                <li>f''(x) = e^x, f''(1) = e</li>
                <li>f'''(x) = e^x, f'''(1) = e</li>
              </ul>
            </div>
          )
        },
        {
          step: 2,
          title: "Terapkan rumus deret Taylor di sekitar a = 1",
          content: (
            <div>
              <DisplayFormula>f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(1)}{n!}(x-1)^n</DisplayFormula>
            </div>
          )
        },
        {
          step: 3,
          title: "Substitusi nilai-nilai",
          content: (
            <div>
              <DisplayFormula>
                e^x = \frac{e}{0!}(x-1)^0 + \frac{e}{1!}(x-1)^1 + \frac{e}{2!}(x-1)^2 + \frac{e}{3!}(x-1)^3 + \cdots
              </DisplayFormula>
            </div>
          )
        }
      ],
      solution: (
        <div>
          <DisplayFormula>
            e^x = e\left[1 + (x-1) + \frac{(x-1)^2}{2!} + \frac{(x-1)^3}{3!} + \cdots\right] = e\sum_{n=0}^{\infty} \frac{(x-1)^n}{n!}
          </DisplayFormula>
        </div>
      )
    },
    {
      title: "Contoh 3: Aproksimasi cos(0.1) menggunakan deret MacLaurin",
      problem: "Gunakan deret MacLaurin cos(x) untuk menghitung cos(0.1) dengan akurasi 4 tempat desimal",
      difficulty: 'hard' as const,
      steps: [
        {
          step: 1,
          title: "Tulis deret MacLaurin untuk cos(x)",
          content: (
            <div>
              <DisplayFormula>
                \cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \cdots
              </DisplayFormula>
            </div>
          )
        },
        {
          step: 2,
          title: "Substitusi x = 0.1",
          content: (
            <div>
              <div>
                <p>Hitung suku demi suku:</p>
                <ul className="space-y-1 text-sm">
                  <li>Suku 1: 1</li>
                  <li>Suku 2: -(0.1)²/2! = -0.01/2 = -0.005</li>
                  <li>Suku 3: (0.1)⁴/4! = 0.0001/24 = 0.0000041667</li>
                  <li>Suku 4: -(0.1)⁶/6! = -0.000001/720 = -0.0000000014</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          step: 3,
          title: "Jumlahkan suku-suku",
          content: (
            <div>
              <p>cos(0.1) ≈ 1 - 0.005 + 0.0000041667 - 0.0000000014 + ...</p>
              <p>cos(0.1) ≈ 0.9950041653</p>
            </div>
          )
        }
      ],
      solution: (
        <div>
          <p>cos(0.1) ≈ <strong>0.9950</strong> (dengan akurasi 4 tempat desimal)</p>
          <p className="text-sm text-muted-foreground mt-2">
            Nilai eksak: cos(0.1) = 0.9950041653...
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Deret Taylor
          </h1>
          <p className="text-xl text-muted-foreground">
            Pahami ekspansi Taylor untuk aproksimasi fungsi dan aplikasinya dalam matematika
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Teori Section - Konsep Dasar */}
            <TheorySection
              title="Konsep Dasar Deret Taylor"
              description="Memahami definisi dan konsep fundamental deret Taylor"
              level="intermediate"
              tags={["Deret", "Aproksimasi", "Fungsi"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Apa itu Deret Taylor?</h3>
                    <p>
                      <strong>Deret Taylor</strong> adalah representasi suatu fungsi sebagai jumlah tak hingga 
                      dari suku-suku yang dihitung dari nilai turunan fungsi tersebut di suatu titik tertentu.
                    </p>
                    <p className="mt-3">
                      Deret Taylor memungkinkan kita untuk mengaproksimasi fungsi kompleks dengan polinomial 
                      yang lebih mudah dihitung, terutama berguna dalam komputasi numerik dan analisis matematis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Rumus Umum Deret Taylor</h3>
                    <p>Untuk fungsi f(x) yang dapat diturunkan tak hingga kali di sekitar titik a:</p>
                    <DisplayFormula>
                      f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
                    </DisplayFormula>
                    <DisplayFormula>
                      = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots
                    </DisplayFormula>
                    
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-3">
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        <strong>Keterangan:</strong> f⁽ⁿ⁾(a) adalah turunan ke-n dari f(x) dievaluasi di x = a
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Deret MacLaurin</h3>
                    <p>
                      <strong>Deret MacLaurin</strong> adalah kasus khusus deret Taylor ketika titik ekspansi a = 0:
                    </p>
                    <DisplayFormula>
                      f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots
                    </DisplayFormula>
                    
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mt-3">
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        <strong>Kegunaan:</strong> Deret MacLaurin sering digunakan karena perhitungan di x = 0 
                        umumnya lebih sederhana
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Deret Taylor untuk Fungsi Dasar"
              description="Ekspansi deret Taylor untuk fungsi-fungsi matematika fundamental"
              level="intermediate"
              tags={["Fungsi Trigonometri", "Fungsi Eksponensial", "Logaritma"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Deret MacLaurin untuk Fungsi Eksponensial</h3>
                    <DisplayFormula>
                      e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots
                    </DisplayFormula>
                    <p className="text-sm text-muted-foreground">Konvergen untuk semua x ∈ ℝ</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Deret MacLaurin untuk Fungsi Sinus</h3>
                    <DisplayFormula>
                      \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!}x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
                    </DisplayFormula>
                    <p className="text-sm text-muted-foreground">Konvergen untuk semua x ∈ ℝ</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Deret MacLaurin untuk Fungsi Cosinus</h3>
                    <DisplayFormula>
                      \cos(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!}x^{2n} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
                    </DisplayFormula>
                    <p className="text-sm text-muted-foreground">Konvergen untuk semua x ∈ ℝ</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Deret MacLaurin untuk Fungsi Logaritma</h3>
                    <DisplayFormula>
                      \ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}x^n = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots
                    </DisplayFormula>
                    <p className="text-sm text-muted-foreground">Konvergen untuk -1 {"<"} x ≤ 1</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Deret Binomial</h3>
                    <DisplayFormula>
                      (1+x)^r = \sum_{n=0}^{\infty} \binom{r}{n}x^n = 1 + rx + \frac{r(r-1)}{2!}x^2 + \frac{r(r-1)(r-2)}{3!}x^3 + \cdots
                    </DisplayFormula>
                    <p className="text-sm text-muted-foreground">Konvergen untuk |x| {"<"} 1 (r bukan bilangan bulat non-negatif)</p>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Aplikasi dan Kegunaan Deret Taylor"
              description="Penerapan deret Taylor dalam berbagai bidang matematika dan sains"
              level="advanced"
              tags={["Aproksimasi", "Komputasi", "Analisis Numerik"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aproksimasi Numerik</h3>
                    <p>
                      Deret Taylor digunakan untuk menghitung nilai fungsi dengan akurasi tinggi menggunakan 
                      operasi aritmetika dasar (penjumlahan, pengurangan, perkalian, pembagian).
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-purple-800 dark:text-purple-200">Contoh Aplikasi:</p>
                      <ul className="list-disc list-inside text-purple-700 dark:text-purple-300 text-sm mt-2">
                        <li>Kalkulator saintifik menggunakan deret Taylor untuk sin, cos, exp</li>
                        <li>Algoritma komputasi dalam software matematika</li>
                        <li>Perhitungan dalam pemrograman komputer</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Analisis Error dan Konvergensi</h3>
                    <p>Sisa (remainder) deret Taylor memberikan informasi tentang akurasi aproksimasi:</p>
                    <DisplayFormula>
                      R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
                    </DisplayFormula>
                    <p className="text-sm">dimana ξ berada di antara a dan x (Teorema Taylor dengan Sisa Lagrange)</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aplikasi dalam Fisika</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Pendulum:</strong> Aproksimasi sin θ ≈ θ untuk sudut kecil</li>
                      <li><strong>Relativitas:</strong> Ekspansi untuk kecepatan mendekati cahaya</li>
                      <li><strong>Termodinamika:</strong> Aproksimasi fungsi keadaan</li>
                      <li><strong>Mekanika Kuantum:</strong> Operator dalam representasi momentum</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pengembangan Formula</h3>
                    <p>
                      Deret Taylor digunakan untuk menurunkan formula baru dan memahami perilaku fungsi 
                      di sekitar titik tertentu, seperti:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Limit menggunakan ekspansi deret</li>
                      <li>Integralsi fungsi kompleks</li>
                      <li>Solusi persamaan diferensial</li>
                      <li>Analisis stabilitas sistem</li>
                    </ul>
                  </div>
                </div>
              }
            />

            <Separator className="my-8" />

            {/* Examples Section */}
            <ExampleSection examples={examples} />
          </div>

          {/* Calculator Sidebar */}
          <div className="lg:col-span-1">
            <TaylorSeriesCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}