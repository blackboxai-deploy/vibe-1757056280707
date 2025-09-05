import { TheorySection } from '@/components/TheorySection';
import { MatrixCalculator } from '@/components/Calculator';
import { DisplayFormula, InlineFormula } from '@/components/MathFormula';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function LinearAlgebraPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Aljabar Linear Elementer
          </h1>
          <p className="text-xl text-muted-foreground">
            Eksplorasi dunia vektor, matriks, determinan, dan sistem persamaan linear
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Teori Section - Matriks */}
            <TheorySection
              title="Konsep Dasar Matriks"
              description="Memahami definisi, notasi, dan jenis-jenis matriks"
              level="beginner"
              tags={["Matriks", "Notasi", "Jenis Matriks"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Definisi Matriks</h3>
                    <p>
                      <strong>Matriks</strong> adalah susunan bilangan-bilangan (real atau kompleks) yang disusun 
                      dalam baris dan kolom berbentuk persegi panjang dan ditulis di antara tanda kurung.
                    </p>
                    <p className="mt-3">
                      Matriks dengan m baris dan n kolom disebut matriks berordo m×n atau matriks m×n.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Jenis-jenis Matriks</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Matriks Persegi</h4>
                        <p>Matriks yang jumlah baris sama dengan jumlah kolom (n×n)</p>
                        <DisplayFormula>A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}</DisplayFormula>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Matriks Identitas</h4>
                        <p>Matriks persegi dengan elemen diagonal utama = 1, yang lain = 0</p>
                        <DisplayFormula>I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}</DisplayFormula>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Operasi Matriks"
              description="Penjumlahan, pengurangan, dan perkalian matriks"
              level="intermediate"
              tags={["Operasi", "Penjumlahan", "Perkalian"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Penjumlahan dan Pengurangan Matriks</h3>
                    <p>Dua matriks dapat dijumlahkan atau dikurangkan jika dan hanya jika kedua matriks memiliki ordo yang sama.</p>
                    
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">Rumus:</p>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Setiap elemen dijumlahkan atau dikurangkan dengan elemen yang bersesuaian
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Perkalian Matriks</h3>
                    <p>
                      Matriks A (m×p) dapat dikalikan dengan matriks B (p×n) jika jumlah kolom A sama dengan jumlah baris B. 
                      Hasil perkaliannya adalah matriks C (m×n).
                    </p>
                    
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-green-800 dark:text-green-200 mb-2">Rumus:</p>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Elemen (i,j) = jumlah perkalian elemen baris i dari A dengan kolom j dari B
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            <TheorySection
              title="Determinan Matriks"
              description="Konsep dan perhitungan determinan matriks persegi"
              level="intermediate"
              tags={["Determinan", "Matriks Persegi", "Invertible"]}
              content={
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Definisi Determinan</h3>
                    <p>
                      <strong>Determinan</strong> adalah suatu nilai skalar yang dapat dihitung dari elemen-elemen 
                      suatu matriks persegi. Determinan matriks A ditulis sebagai det(A) atau |A|.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Determinan Matriks 2×2</h3>
                    <p>Untuk matriks 2×2:</p>
                    <DisplayFormula>
                      \det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc
                    </DisplayFormula>
                    
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mt-3">
                      <p className="font-medium text-purple-800 dark:text-purple-200 mb-2">Contoh:</p>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        det([[3,2],[1,4]]) = (3)(4) - (2)(1) = 12 - 2 = 10
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sifat-sifat Determinan</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>det(AB) = det(A) × det(B)</li>
                      <li>det(A^T) = det(A)</li>
                      <li>Jika det(A) ≠ 0, maka A memiliki invers</li>
                      <li>Jika det(A) = 0, maka A singular (tidak memiliki invers)</li>
                    </ul>
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
                      Contoh 1: Penjumlahan Matriks
                    </CardTitle>
                    <Badge className="bg-green-500 text-white">
                      Easy
                    </Badge>
                  </div>
                  <CardDescription className="text-base font-medium bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">Soal: </span>
                    Hitung A + B jika A = [[2,3], [1,4]] dan B = [[1,2], [3,1]]
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 1: Periksa dimensi matriks
                      </h4>
                      <p>Kedua matriks A dan B berukuran 2×2, sehingga penjumlahan dapat dilakukan.</p>
                    </div>
                    
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 2: Lakukan penjumlahan elemen demi elemen
                      </h4>
                      <p>Jumlahkan setiap elemen yang bersesuaian:</p>
                      <DisplayFormula>A + B = \begin{pmatrix} 2+1 & 3+2 \\ 1+3 & 4+1 \end{pmatrix}</DisplayFormula>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        Jawaban:
                      </h4>
                      <DisplayFormula>A + B = \begin{pmatrix} 3 & 5 \\ 4 & 5 \end{pmatrix}</DisplayFormula>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                      Contoh 2: Determinan Matriks 2×2
                    </CardTitle>
                    <Badge className="bg-green-500 text-white">
                      Easy
                    </Badge>
                  </div>
                  <CardDescription className="text-base font-medium bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
                    <span className="text-blue-700 dark:text-blue-300 font-semibold">Soal: </span>
                    Hitung determinan dari matriks C = [[3,2], [1,4]]
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 1: Gunakan rumus determinan 2×2
                      </h4>
                      <p>Untuk matriks 2×2, determinannya adalah:</p>
                      <DisplayFormula>\det(C) = ad - bc</DisplayFormula>
                    </div>
                    
                    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2">
                      <h4 className="font-semibold text-foreground mb-2">
                        Langkah 2: Substitusi nilai
                      </h4>
                      <p>Dengan a = 3, b = 2, c = 1, d = 4:</p>
                      <DisplayFormula>\det(C) = (3)(4) - (2)(1) = 12 - 2 = 10</DisplayFormula>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">
                        Jawaban:
                      </h4>
                      <p>Determinan matriks C adalah <strong>10</strong></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Calculator Sidebar */}
          <div className="lg:col-span-1">
            <MatrixCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}