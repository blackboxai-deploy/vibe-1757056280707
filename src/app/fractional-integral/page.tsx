import { TheorySection } from '@/components/TheorySection';
import { ExampleSection } from '@/components/ExampleSection';
import { FractionalIntegralCalculator } from '@/components/Calculator';
import { DisplayFormula, InlineFormula } from '@/components/MathFormula';
import { Separator } from '@/components/ui/separator';

export default function FractionalIntegralPage() {
  const examples = [
    {
      title: "Contoh 1: Integral Fraksional dari x",
      problem: "Hitung integral fraksional I^(1/2)[x](x) menggunakan definisi Riemann-Liouville",
      difficulty: 'medium' as const,
      steps: [
        {
          step: 1,
          title: "Gunakan rumus integral fraksional untuk x^n",
          content: (
            <div>
              <p>Untuk f(x) = x^n, integral fraksional Riemann-Liouville adalah:</p>
              <DisplayFormula>I^{\alpha}[x^n](x) = \frac{\Gamma(n+1)}{\Gamma(n+\alpha+1)}x^{n+\alpha}</DisplayFormula>
              <p className="mt-2">Dengan n = 1 dan α = 1/2:</p>
            </div>
          )
        },
        {
          step: 2,
          title: "Hitung nilai fungsi Gamma",
          content: (
            <div>
              <ul className="space-y-1">
                <li>Γ(n+1) = Γ(2) = 1</li>
                <li>Γ(n+α+1) = Γ(2.5) = 1.5 × Γ(1.5) = 1.5 × 0.5 × √π ≈ 1.329</li>
              </ul>
            </div>
          )
        },
        {
          step: 3,
          title: "Substitusi nilai",
          content: (
            <div>
              <DisplayFormula>I^{1/2}[x](x) = \frac{1}{1.329}x^{1.5} = 0.752x^{1.5}</DisplayFormula>
            </div>
          )
        }
      ],
      solution: (
        <div>
          <DisplayFormula>I^{1/2}[x](x) = \frac{2\sqrt{\pi}}{3}x^{3/2}</DisplayFormula>
        </div>
      )
    },
    {
      title: "Contoh 2: Integral Fraksional dari Konstanta",
      problem: "Hitung I^(3/4)[1](x) untuk fungsi konstan f(x) = 1",
      difficulty: 'easy' as const,
      steps: [
        {
          step: 1,
          title: "Identifikasi parameter",
          content: (
            <div>
              <p>Untuk f(x) = 1 = x^0:</p>
              <ul className="list-disc list-inside">
                <li>n = 0</li>
                <li>α = 3/4</li>
              </ul>
            </div>
          )
        },
        {
          step: 2,
          title: "Aplikasikan rumus",
          content: (
            <div>
              <DisplayFormula>I^{3/4}[1](x) = \frac{\Gamma(1)}{\Gamma(7/4)}x^{3/4}</DisplayFormula>
              <p>Γ(1) = 1 dan Γ(7/4) ≈ 0.919</p>
            </div>
          )
        }
      ],
      solution: (
        <div>
          <DisplayFormula>I^{3/4}[1](x) = \frac{x^{3/4}}{\Gamma(7/4)} \approx 1.089x^{3/4}</DisplayFormula>
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
            Integral Fraksional
          </h1>
          <p className="text-xl text-muted-foreground">
            Jelajahi konsep integral fraksional dan operator Riemann-Liouville
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Teori Section - Konsep Dasar */}
            <TheorySection
              title="Pengantar Integral Fraksional"
              description="Memahami konsep dasar dan motivasi di balik integral fraksional"
              level="advanced"
              tags={["Integral", "Fraksional", "Generalisasi"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Apa itu Integral Fraksional?</h3>
                    <p>
                      <strong>Integral Fraksional</strong> adalah generalisasi konsep integral biasa ke orde 
                      yang tidak harus berupa bilangan bulat. Ini merupakan bagian dari <strong>Kalkulus Fraksional</strong> 
                      yang memperluas operasi diferensial dan integral ke orde sewenang-wenang.
                    </p>
                    <p className="mt-3">
                      Konsep ini memungkinkan kita untuk mendefinisikan operasi seperti "integral setengah" 
                      atau "turunan 1.5", yang memiliki aplikasi luas dalam fisika, teknik, dan matematika terapan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Motivasi Historis</h3>
                    <p>
                      Ide kalkulus fraksional pertama kali muncul dari pertanyaan Leibniz kepada L'Hôpital pada 1695: 
                      "Apa makna d^n y/dx^n jika n = 1/2?" Sejak itu, matematikawan seperti Euler, Laplace, 
                      Riemann, dan Liouville mengembangkan teori ini.
                    </p>
                    
                    <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-amber-800 dark:text-amber-200">Fakta Menarik:</p>
                      <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                        Abel menggunakan integral fraksional untuk menyelesaikan masalah tautochrone pada 1823, 
                        menunjukkan kegunaan praktis konsep ini.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Hubungan dengan Integral Biasa</h3>
                    <p>
                      Integral biasa berulang dapat dipahami sebagai kasus khusus integral fraksional:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                      <li>Integral satu kali: I¹[f](x)</li>
                      <li>Integral dua kali: I²[f](x) = ∫∫ f(t) dt dt</li>
                      <li>Integral fraksional: I^α[f](x) dengan α > 0 (tidak harus integer)</li>
                    </ul>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Definisi Riemann-Liouville"
              description="Definisi formal integral fraksional menurut Riemann-Liouville"
              level="advanced"
              tags={["Riemann-Liouville", "Definisi", "Operator"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Definisi Riemann-Liouville</h3>
                    <p>
                      Integral fraksional Riemann-Liouville dari orde α > 0 untuk fungsi f(t) didefinisikan sebagai:
                    </p>
                    <DisplayFormula>
                      I^{\alpha}[f](x) = \frac{1}{\Gamma(\alpha)} \int_a^x (x-t)^{\alpha-1} f(t) dt
                    </DisplayFormula>
                    <p className="text-sm text-muted-foreground mt-2">
                      dimana Γ(α) adalah fungsi Gamma dan a adalah batas bawah integral.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Fungsi Gamma</h3>
                    <p>
                      Fungsi Gamma Γ(z) adalah generalisasi faktorial untuk bilangan kompleks:
                    </p>
                    <DisplayFormula>\Gamma(z) = \int_0^{\infty} t^{z-1} e^{-t} dt</DisplayFormula>
                    
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">Sifat Penting:</p>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                        <li>• Γ(n) = (n-1)! untuk n bilangan bulat positif</li>
                        <li>• Γ(1/2) = √π</li>
                        <li>• Γ(z+1) = z·Γ(z) (relasi rekursif)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Kasus Khusus untuk x^n</h3>
                    <p>
                      Untuk fungsi power f(x) = x^n, integral fraksional memiliki bentuk eksplisit:
                    </p>
                    <DisplayFormula>
                      I^{\alpha}[x^n](x) = \frac{\Gamma(n+1)}{\Gamma(n+\alpha+1)} x^{n+\alpha}
                    </DisplayFormula>
                    
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-green-800 dark:text-green-200">Contoh:</p>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        I^(1/2)[1](x) = Γ(1)/Γ(3/2) · x^(1/2) = 1/(√π/2) · √x = 2√(x/π)
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Sifat-sifat Integral Fraksional"
              description="Sifat matematika dan hubungan antar operator integral fraksional"
              level="advanced"
              tags={["Sifat", "Linearitas", "Komposisi"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sifat Linearitas</h3>
                    <p>
                      Integral fraksional bersifat linear, sama seperti integral biasa:
                    </p>
                    <DisplayFormula>I^{\alpha}[af(x) + bg(x)] = aI^{\alpha}[f](x) + bI^{\alpha}[g](x)</DisplayFormula>
                    <p className="text-sm text-muted-foreground">dimana a dan b adalah konstanta.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sifat Komposisi (Semigroup Property)</h3>
                    <p>
                      Integral fraksional memenuhi sifat komposisi:
                    </p>
                    <DisplayFormula>I^{\alpha}[I^{\beta}[f]](x) = I^{\alpha+\beta}[f](x)</DisplayFormula>
                    <p className="mt-2">
                      Ini berarti mengaplikasikan integral fraksional berulang kali sama dengan 
                      mengaplikasikan integral dengan orde yang dijumlahkan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Hubungan dengan Turunan Fraksional</h3>
                    <p>
                      Integral fraksional berkaitan erat dengan turunan fraksional (Caputo derivative):
                    </p>
                    <DisplayFormula>D^{\alpha}[I^{\alpha}[f]](x) = f(x)</DisplayFormula>
                    <p className="text-sm text-muted-foreground">
                      dalam kondisi tertentu, keduanya merupakan operasi inverse.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aplikasi dalam Berbagai Bidang</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded">
                        <h4 className="font-medium text-purple-800 dark:text-purple-200">Fisika</h4>
                        <p className="text-purple-700 dark:text-purple-300 text-sm">
                          Difusi anomali, viskoelastisitas, elektrodinamika
                        </p>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-950 p-3 rounded">
                        <h4 className="font-medium text-orange-800 dark:text-orange-200">Teknik</h4>
                        <p className="text-orange-700 dark:text-orange-300 text-sm">
                          Sistem kontrol, pemrosesan sinyal, robotika
                        </p>
                      </div>
                      <div className="bg-cyan-50 dark:bg-cyan-950 p-3 rounded">
                        <h4 className="font-medium text-cyan-800 dark:text-cyan-200">Biologi</h4>
                        <p className="text-cyan-700 dark:text-cyan-300 text-sm">
                          Epidemiologi, dinamika populasi, biokinetika
                        </p>
                      </div>
                      <div className="bg-pink-50 dark:bg-pink-950 p-3 rounded">
                        <h4 className="font-medium text-pink-800 dark:text-pink-200">Ekonomi</h4>
                        <p className="text-pink-700 dark:text-pink-300 text-sm">
                          Model memori panjang, volatilitas finansial
                        </p>
                      </div>
                    </div>
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
            <FractionalIntegralCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}