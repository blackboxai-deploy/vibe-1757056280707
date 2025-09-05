import { TheorySection } from '@/components/TheorySection';
import { SignificantFiguresCalculator } from '@/components/Calculator';
import { DisplayFormula, InlineFormula } from '@/components/MathFormula';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MeasurementPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Pengukuran & Angka Penting
          </h1>
          <p className="text-xl text-muted-foreground">
            Pelajari konsep fundamental tentang angka penting, aturan pembulatan, dan notasi ilmiah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Teori Section */}
            <TheorySection
              title="Konsep Dasar Angka Penting"
              description="Memahami definisi dan pentingnya angka penting dalam pengukuran"
              level="beginner"
              tags={["Pengukuran", "Akurasi", "Presisi"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Apa itu Angka Penting?</h3>
                    <p>
                      <strong>Angka penting</strong> (significant figures) adalah semua angka yang diketahui secara pasti 
                      ditambah satu angka terakhir yang diragukan (tidak pasti) dalam suatu pengukuran atau perhitungan.
                    </p>
                    <p className="mt-3">
                      Angka penting mencerminkan tingkat ketelitian atau ketidakpastian dari suatu pengukuran. 
                      Semakin banyak angka penting, semakin teliti pengukurannya.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aturan Menentukan Angka Penting</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Semua digit bukan nol adalah angka penting</li>
                      <li>Nol yang terletak di antara digit bukan nol adalah angka penting</li>
                      <li>Nol di awal angka (leading zeros) bukan angka penting</li>
                      <li>Nol di akhir angka (trailing zeros) setelah titik desimal adalah angka penting</li>
                      <li>Nol di akhir bilangan bulat tanpa titik desimal umumnya bukan angka penting</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contoh Penerapan Aturan</h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <ul className="space-y-2">
                        <li>• 123.45 → 5 angka penting (semua digit bukan nol)</li>
                        <li>• 102.03 → 5 angka penting (nol di tengah dihitung)</li>
                        <li>• 0.00456 → 3 angka penting (nol di awal tidak dihitung)</li>
                        <li>• 1.200 → 4 angka penting (nol setelah desimal dihitung)</li>
                        <li>• 1200 → 2 angka penting (nol di akhir tidak dihitung)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Operasi Matematika dengan Angka Penting"
              description="Aturan dalam melakukan operasi matematika yang melibatkan angka penting"
              level="intermediate"
              tags={["Penjumlahan", "Perkalian", "Pembulatan"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aturan untuk Penjumlahan dan Pengurangan</h3>
                    <p>
                      Hasil penjumlahan atau pengurangan dibatasi oleh angka yang memiliki 
                      <strong> tempat desimal paling sedikit</strong>.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-blue-800 dark:text-blue-200">Contoh:</p>
                      <DisplayFormula>12.1 + 0.035 + 1.2345 = 13.3695 \approx 13.4</DisplayFormula>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                        Dibulatkan menjadi 1 tempat desimal mengikuti 12.1
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Aturan untuk Perkalian dan Pembagian</h3>
                    <p>
                      Hasil perkalian atau pembagian dibatasi oleh angka yang memiliki 
                      <strong> jumlah angka penting paling sedikit</strong>.
                    </p>
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-green-800 dark:text-green-200">Contoh:</p>
                      <DisplayFormula>2.5 \times 3.456 = 8.64 \approx 8.6</DisplayFormula>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                        Dibulatkan menjadi 2 angka penting mengikuti 2.5
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <Separator className="my-8" />

            {/* Contoh Soal Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contoh Soal & Penyelesaian</h2>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      Contoh 1: Menentukan Jumlah Angka Penting
                    </CardTitle>
                    <Badge className="bg-green-500 text-white">
                      Easy
                    </Badge>
                  </div>
                  <CardDescription className="text-base font-medium bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">Soal: </span>
                    Tentukan jumlah angka penting dari angka-angka berikut: 123.450, 0.00456, 1200, dan 1.200 × 10³
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 1: Menganalisis 123.450
                      </h4>
                      <div>
                        <p>Angka 123.450 memiliki:</p>
                        <ul className="list-disc list-inside mt-2">
                          <li>Semua digit bukan nol: 1, 2, 3, 4, 5</li>
                          <li>Nol terakhir setelah titik desimal: 0</li>
                        </ul>
                        <p className="mt-2">Total: <strong>6 angka penting</strong></p>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 2: Menganalisis 0.00456
                      </h4>
                      <div>
                        <p>Angka 0.00456 memiliki:</p>
                        <ul className="list-disc list-inside mt-2">
                          <li>Nol di awal tidak dihitung: 0.00</li>
                          <li>Digit signifikan: 4, 5, 6</li>
                        </ul>
                        <p className="mt-2">Total: <strong>3 angka penting</strong></p>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        Jawaban:
                      </h4>
                      <div>
                        <ul className="space-y-2">
                          <li>• 123.450 → 6 angka penting</li>
                          <li>• 0.00456 → 3 angka penting</li>
                          <li>• 1200 → 2 angka penting</li>
                          <li>• 1.200 × 10³ → 4 angka penting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      Contoh 2: Operasi dengan Angka Penting
                    </CardTitle>
                    <Badge className="bg-yellow-500 text-white">
                      Medium
                    </Badge>
                  </div>
                  <CardDescription className="text-base font-medium bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">Soal: </span>
                    Hitung hasil dari 12.34 + 5.6 + 0.789 dengan memperhatikan aturan angka penting
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 1: Lakukan perhitungan
                      </h4>
                      <DisplayFormula>12.34 + 5.6 + 0.789 = 18.729</DisplayFormula>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        Jawaban:
                      </h4>
                      <p>Hasil penjumlahan dengan memperhatikan angka penting adalah <strong>18.7</strong></p>
                      <p className="text-sm mt-2">
                        (Dibulatkan ke 1 tempat desimal mengikuti 5.6)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Calculator Sidebar */}
          <div className="lg:col-span-1">
            <SignificantFiguresCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}