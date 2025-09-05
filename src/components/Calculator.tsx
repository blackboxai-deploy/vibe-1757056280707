"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CalculatorProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Calculator({ title, description, children }: CalculatorProps) {
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          🧮 {title}
        </CardTitle>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

// Kalkulator Deret Taylor
export function TaylorSeriesCalculator() {
  const [functionType, setFunctionType] = useState<'sin' | 'cos' | 'exp' | 'ln'>('sin');
  const [centerPoint, setCenterPoint] = useState('0');
  const [numTerms, setNumTerms] = useState('5');
  const [result, setResult] = useState<{
    series: string[];
    expansion: string;
  } | null>(null);

  const calculateTaylorSeries = () => {
    const a = parseFloat(centerPoint);
    const n = parseInt(numTerms);
    
    if (isNaN(a) || isNaN(n) || n < 1 || n > 10) return;

    let series: string[] = [];
    let expansion = '';

    switch (functionType) {
      case 'sin':
        expansion = `sin(x) ≈ `;
        for (let i = 0; i < n; i++) {
          const power = 2 * i + 1;
          const coeff = Math.pow(-1, i);
          const factorial = factorial_calc(power);
          
          if (a === 0) {
            const term = i === 0 ? 'x' : `${coeff > 0 ? '+' : ''}${coeff}x^${power}/${factorial}`;
            series.push(term);
          } else {
            const term = `${coeff > 0 ? '+' : ''}${coeff}(x-${a})^${power}/${factorial}`;
            series.push(term);
          }
        }
        break;
        
      case 'cos':
        expansion = `cos(x) ≈ `;
        for (let i = 0; i < n; i++) {
          const power = 2 * i;
          const coeff = Math.pow(-1, i);
          const factorial = factorial_calc(power);
          
          if (a === 0) {
            const term = i === 0 ? '1' : `${coeff > 0 ? '+' : ''}${coeff}x^${power}/${factorial}`;
            series.push(term);
          } else {
            const term = i === 0 ? `${coeff}` : `${coeff > 0 ? '+' : ''}${coeff}(x-${a})^${power}/${factorial}`;
            series.push(term);
          }
        }
        break;
        
      case 'exp':
        expansion = `e^x ≈ `;
        for (let i = 0; i < n; i++) {
          const factorial = factorial_calc(i);
          if (a === 0) {
            const term = i === 0 ? '1' : `+x^${i}/${factorial}`;
            series.push(term);
          } else {
            const expA = Math.exp(a);
            const term = i === 0 ? `${expA.toFixed(3)}` : `+${expA.toFixed(3)}(x-${a})^${i}/${factorial}`;
            series.push(term);
          }
        }
        break;
        
      case 'ln':
        if (a <= 0) {
          setResult({ series: ['Error: ln(x) tidak terdefinisi untuk a ≤ 0'], expansion: '' });
          return;
        }
        expansion = `ln(x) ≈ `;
        for (let i = 0; i < n; i++) {
          if (i === 0) {
            series.push(`ln(${a})`);
          } else {
            const coeff = Math.pow(-1, i + 1) / i;
            const term = `${coeff > 0 ? '+' : ''}${coeff.toFixed(3)}(x-${a})^${i}/${a}^${i}`;
            series.push(term);
          }
        }
        break;
    }

    setResult({ series, expansion });
  };

  const factorial_calc = (n: number): number => {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <Calculator 
      title="Kalkulator Deret Taylor"
      description="Generate ekspansi deret Taylor untuk fungsi umum"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="function">Pilih Fungsi:</Label>
          <select
            className="w-full p-2 border rounded-md"
            value={functionType}
            onChange={(e) => setFunctionType(e.target.value as any)}
          >
            <option value="sin">sin(x)</option>
            <option value="cos">cos(x)</option>
            <option value="exp">e^x</option>
            <option value="ln">ln(x)</option>
          </select>
        </div>
        
        <div>
          <Label htmlFor="center">Titik Pusat (a):</Label>
          <Input
            id="center"
            type="number"
            step="0.1"
            value={centerPoint}
            onChange={(e) => setCenterPoint(e.target.value)}
          />
        </div>
        
        <div>
          <Label htmlFor="terms">Jumlah Suku (max 10):</Label>
          <Input
            id="terms"
            type="number"
            min="1"
            max="10"
            value={numTerms}
            onChange={(e) => setNumTerms(e.target.value)}
          />
        </div>
        
        <Button onClick={calculateTaylorSeries} className="w-full">
          Generate Deret Taylor
        </Button>
        
        {result && (
          <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <strong>Ekspansi Deret Taylor:</strong>
            </div>
            <div className="font-mono text-sm">
              {result.expansion}
            </div>
            <div className="space-y-1">
              {result.series.map((term, index) => (
                <div key={index} className="text-sm font-mono">
                  Suku {index + 1}: {term}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Calculator>
  );
}

// Kalkulator Integral Fraksional (sederhana)
export function FractionalIntegralCalculator() {
  const [functionInput, setFunctionInput] = useState('x^2');
  const [alpha, setAlpha] = useState('0.5');
  const [lowerLimit, setLowerLimit] = useState('0');
  const [upperLimit, setUpperLimit] = useState('1');
  const [result, setResult] = useState<string>('');

  const calculateFractionalIntegral = () => {
    const a = parseFloat(alpha);
    const lower = parseFloat(lowerLimit);
    const upper = parseFloat(upperLimit);

    if (isNaN(a) || isNaN(lower) || isNaN(upper)) {
      setResult('Error: Input tidak valid');
      return;
    }

    // Implementasi sederhana untuk x^n
    if (functionInput.startsWith('x^')) {
      const power = parseFloat(functionInput.replace('x^', ''));
      if (!isNaN(power)) {
        // Menggunakan rumus integral fraksional untuk x^n
        // I^α[x^n](x) = x^(n+α) * Γ(n+1) / Γ(n+α+1)
        const gamma_n1 = gamma_approx(power + 1);
        const gamma_na1 = gamma_approx(power + a + 1);
        
        const integral_result = `x^${(power + a).toFixed(3)} * ${gamma_n1.toFixed(3)} / ${gamma_na1.toFixed(3)}`;
        const simplified = `x^${(power + a).toFixed(3)} * ${(gamma_n1/gamma_na1).toFixed(6)}`;
        
        setResult(`Integral fraksional I^${a}[${functionInput}](x) = ${simplified}`);
      } else {
        setResult('Error: Format fungsi tidak valid. Gunakan x^n');
      }
    } else {
      setResult('Error: Hanya mendukung fungsi bentuk x^n');
    }
  };

  // Approximasi fungsi gamma menggunakan Stirling untuk integer dan half-integer
  const gamma_approx = (z: number): number => {
    if (z === 1) return 1;
    if (z === 0.5) return Math.sqrt(Math.PI);
    if (z === 1.5) return 0.5 * Math.sqrt(Math.PI);
    if (z === 2) return 1;
    if (z === 2.5) return 1.5 * 0.5 * Math.sqrt(Math.PI);
    if (z === 3) return 2;
    
    // Stirling approximation for larger values
    if (z > 1) {
      return Math.sqrt(2 * Math.PI / z) * Math.pow(z / Math.E, z);
    }
    return 1;
  };

  return (
    <Calculator 
      title="Kalkulator Integral Fraksional"
      description="Hitung integral fraksional sederhana untuk fungsi x^n"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="function">Fungsi f(x):</Label>
          <Input
            id="function"
            placeholder="x^2"
            value={functionInput}
            onChange={(e) => setFunctionInput(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Format: x^n (contoh: x^2, x^0.5)
          </p>
        </div>
        
        <div>
          <Label htmlFor="alpha">Order α (orde fraksional):</Label>
          <Input
            id="alpha"
            type="number"
            step="0.1"
            min="0"
            max="2"
            value={alpha}
            onChange={(e) => setAlpha(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="lower">Batas Bawah:</Label>
            <Input
              id="lower"
              type="number"
              step="0.1"
              value={lowerLimit}
              onChange={(e) => setLowerLimit(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="upper">Batas Atas:</Label>
            <Input
              id="upper"
              type="number"
              step="0.1"
              value={upperLimit}
              onChange={(e) => setUpperLimit(e.target.value)}
            />
          </div>
        </div>
        
        <Button onClick={calculateFractionalIntegral} className="w-full">
          Hitung Integral Fraksional
        </Button>
        
        {result && (
          <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <strong>Hasil:</strong>
            </div>
            <div className="font-mono text-sm break-all">
              {result}
            </div>
            <div className="text-xs text-muted-foreground">
              <p>* Menggunakan definisi Riemann-Liouville</p>
              <p>* Aproksimasi fungsi Gamma untuk nilai sederhana</p>
            </div>
          </div>
        )}
      </div>
    </Calculator>
  );
}

// Kalkulator untuk Angka Penting
export function SignificantFiguresCalculator() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState<{
    sigFigs: number;
    scientific: string;
    rounded: { [key: number]: string };
  } | null>(null);

  const calculateSignificantFigures = () => {
    if (!number) return;

    const trimmed = number.trim();
    let sigFigs = 0;
    let scientific = '';
    let rounded: { [key: number]: string } = {};

    try {
      const num = parseFloat(trimmed);
      if (isNaN(num)) return;

      // Hitung angka penting
      const cleanNum = trimmed.replace(/[+-]/, '').replace(/^0+/, '');
      const decimalIndex = cleanNum.indexOf('.');
      
      if (decimalIndex === -1) {
        // Integer
        sigFigs = cleanNum.replace(/0+$/, '').length;
      } else {
        // Decimal
        const beforeDecimal = cleanNum.substring(0, decimalIndex).replace(/^0+/, '');
        const afterDecimal = cleanNum.substring(decimalIndex + 1);
        
        if (beforeDecimal === '') {
          // Number like 0.00123
          const firstNonZero = afterDecimal.search(/[1-9]/);
          sigFigs = afterDecimal.substring(firstNonZero).length;
        } else {
          // Number like 123.456
          sigFigs = (beforeDecimal + afterDecimal).length;
        }
      }

      // Notasi ilmiah
      scientific = num.toExponential(Math.max(0, sigFigs - 1));

      // Pembulatan ke berbagai angka penting
      for (let i = 1; i <= 6; i++) {
        if (Math.abs(num) >= 1) {
          rounded[i] = num.toPrecision(i);
        } else {
          rounded[i] = num.toExponential(i - 1);
        }
      }

      setResult({ sigFigs, scientific, rounded });
    } catch (error) {
      console.error('Error calculating significant figures:', error);
    }
  };

  return (
    <Calculator 
      title="Kalkulator Angka Penting"
      description="Hitung jumlah angka penting dan konversi ke notasi ilmiah"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="number">Masukkan angka:</Label>
          <Input
            id="number"
            type="text"
            placeholder="contoh: 123.450"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        
        <Button onClick={calculateSignificantFigures} className="w-full">
          Hitung
        </Button>
        
        {result && (
          <div className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div>
              <strong>Jumlah Angka Penting:</strong> {result.sigFigs}
            </div>
            <div>
              <strong>Notasi Ilmiah:</strong> {result.scientific}
            </div>
            <div>
              <strong>Pembulatan:</strong>
              <ul className="mt-2 space-y-1">
                {Object.entries(result.rounded).map(([figs, value]) => (
                  <li key={figs} className="text-sm">
                    {figs} angka penting: {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Calculator>
  );
}

// Kalkulator Matriks Sederhana
export function MatrixCalculator() {
  const [matrixA, setMatrixA] = useState('1,2\n3,4');
  const [matrixB, setMatrixB] = useState('5,6\n7,8');
  const [operation, setOperation] = useState<'add' | 'multiply' | 'determinant'>('add');
  const [result, setResult] = useState<string>('');

  const parseMatrix = (input: string): number[][] => {
    return input.trim().split('\n').map(row => 
      row.split(',').map(cell => parseFloat(cell.trim()))
    );
  };

  const formatMatrix = (matrix: number[][]): string => {
    return matrix.map(row => row.map(cell => cell.toFixed(2)).join('\t')).join('\n');
  };

  const addMatrices = (a: number[][], b: number[][]): number[][] => {
    return a.map((row, i) => row.map((cell, j) => cell + b[i][j]));
  };

  const multiplyMatrices = (a: number[][], b: number[][]): number[][] => {
    const result: number[][] = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        result[i][j] = 0;
        for (let k = 0; k < b.length; k++) {
          result[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    return result;
  };

  const calculateDeterminant = (matrix: number[][]): number => {
    if (matrix.length === 2 && matrix[0].length === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    return 0; // Simplified for 2x2 only
  };

  const calculate = () => {
    try {
      const a = parseMatrix(matrixA);
      const b = parseMatrix(matrixB);

      let resultMatrix: number[][] | number = [];

      switch (operation) {
        case 'add':
          if (a.length === b.length && a[0].length === b[0].length) {
            resultMatrix = addMatrices(a, b);
            setResult(formatMatrix(resultMatrix as number[][]));
          } else {
            setResult('Error: Matriks harus memiliki dimensi yang sama');
          }
          break;
          
        case 'multiply':
          if (a[0].length === b.length) {
            resultMatrix = multiplyMatrices(a, b);
            setResult(formatMatrix(resultMatrix as number[][]));
          } else {
            setResult('Error: Jumlah kolom A harus sama dengan jumlah baris B');
          }
          break;
          
        case 'determinant':
          if (a.length === 2 && a[0].length === 2) {
            const det = calculateDeterminant(a);
            setResult(`Determinan Matriks A: ${det}`);
          } else {
            setResult('Error: Hanya mendukung matriks 2x2 untuk determinan');
          }
          break;
      }
    } catch (error) {
      setResult('Error: Format matriks tidak valid');
    }
  };

  return (
    <Calculator 
      title="Kalkulator Matriks"
      description="Operasi dasar matriks: penjumlahan, perkalian, dan determinan"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="matrixA">Matriks A (pisahkan dengan koma, baris baru untuk baris):</Label>
          <Textarea
            id="matrixA"
            placeholder="1,2&#10;3,4"
            value={matrixA}
            onChange={(e) => setMatrixA(e.target.value)}
            rows={3}
          />
        </div>
        
        {operation !== 'determinant' && (
          <div>
            <Label htmlFor="matrixB">Matriks B:</Label>
            <Textarea
              id="matrixB"
              placeholder="5,6&#10;7,8"
              value={matrixB}
              onChange={(e) => setMatrixB(e.target.value)}
              rows={3}
            />
          </div>
        )}
        
        <div className="flex gap-2">
          <Button
            variant={operation === 'add' ? 'default' : 'outline'}
            onClick={() => setOperation('add')}
            size="sm"
          >
            A + B
          </Button>
          <Button
            variant={operation === 'multiply' ? 'default' : 'outline'}
            onClick={() => setOperation('multiply')}
            size="sm"
          >
            A × B
          </Button>
          <Button
            variant={operation === 'determinant' ? 'default' : 'outline'}
            onClick={() => setOperation('determinant')}
            size="sm"
          >
            det(A)
          </Button>
        </div>
        
        <Button onClick={calculate} className="w-full">
          Hitung
        </Button>
        
        {result && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <strong>Hasil:</strong>
            <pre className="mt-2 font-mono text-sm whitespace-pre-wrap">
              {result}
            </pre>
          </div>
        )}
      </div>
    </Calculator>
  );
}