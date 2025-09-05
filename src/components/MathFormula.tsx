"use client";

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathFormulaProps {
  children: string;
  inline?: boolean;
  className?: string;
}

export function MathFormula({ children, inline = false, className = "" }: MathFormulaProps) {
  const mathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mathRef.current) {
      try {
        katex.render(children, mathRef.current, {
          displayMode: !inline,
          throwOnError: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        if (mathRef.current) {
          mathRef.current.innerHTML = `<span style="color: red;">Math Error: ${children}</span>`;
        }
      }
    }
  }, [children, inline]);

  return (
    <div 
      ref={mathRef}
      className={`math-formula ${className} ${inline ? 'inline' : 'block'}`}
    />
  );
}

// Komponen khusus untuk formula inline dalam teks
export function InlineFormula({ children, className = "" }: { children: string; className?: string }) {
  return <MathFormula inline className={className}>{children}</MathFormula>;
}

// Komponen khusus untuk formula blok/display
export function DisplayFormula({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`my-4 text-center ${className}`}>
      <MathFormula>{children}</MathFormula>
    </div>
  );
}