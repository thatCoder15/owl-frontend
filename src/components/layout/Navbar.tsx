// "use client";

// import Link from "next/link";
// import { Container } from "@/components/common/Container";
// import { Button } from "@/components/ui/button";

// const navItems = [
//   {
//     name: "About",
//     href: "#about",
//   },
//   {
//     name: "Skills",
//     href: "#skills",
//   },
//   {
//     name: "Projects",
//     href: "#projects",
//   },
//   {
//     name: "Contact",
//     href: "#contact",
//   },
// ];

// export function Navbar() {
//   return (
//     // <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
//     <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
//       <Container className="flex h-16 items-center justify-between">
//         <Link
//           href="/"
//           className="text-xl font-bold"
//         >
//           Portfolio
//         </Link>

//         <nav className="hidden gap-8 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-sm transition hover:text-primary"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         <Button>Resume</Button>
//       </Container>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          Portfolio
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Resume</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}