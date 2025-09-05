"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const mathTopics = [
  {
    title: 'Pengukuran & Angka Penting',
    href: '/measurement',
    description: 'Konsep angka penting, aturan pembulatan, dan notasi ilmiah'
  },
  {
    title: 'Aljabar Linear Elementer',
    href: '/linear-algebra',
    description: 'Vektor, matriks, determinan, dan sistem persamaan linear'
  },
  {
    title: 'Deret Taylor',
    href: '/taylor-series',
    description: 'Ekspansi Taylor, aproksimasi fungsi, dan deret MacLaurin'
  },
  {
    title: 'Integral Fraksional',
    href: '/fractional-integral',
    description: 'Definisi integral fraksional dan operator Riemann-Liouville'
  }
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
            <span className="hidden font-bold sm:inline-block">
              MathEdu Interactive
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Topik Matematika</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {mathTopics.map((topic) => (
                      <li key={topic.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                              pathname === topic.href ? 'bg-accent' : ''
                            }`}
                            href={topic.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {topic.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {topic.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
              <span className="font-bold">MathEdu</span>
            </Link>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <svg
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M3 5H11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 12H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 19H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                className="flex items-center space-x-2"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                <span className="font-bold">MathEdu Interactive</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Topik Matematika</h4>
                  {mathTopics.map((topic) => (
                    <Link
                      key={topic.href}
                      href={topic.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-muted-foreground hover:text-foreground transition-colors ${
                        pathname === topic.href ? 'text-foreground font-medium' : ''
                      }`}
                    >
                      {topic.title}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}