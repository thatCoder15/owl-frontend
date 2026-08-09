import Link from "next/link";
// import { ArrowRight, Github, Linkedin } from "lucide-react";
import {  FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border px-4 py-1 text-sm">
            Full Stack Developer
          </span>

          {/* <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
            Hi,
            <br />
            I&apos;m Your Name
          </h1> */}

          <h1 className="mt-8 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl">
  Hi,
  <br />
  I&apos;m Your Name
</h1>

          {/* <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            I build scalable web applications using
            Next.js, NestJS, PostgreSQL and AI.
          </p> */}

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
  Building modern web applications using
  TypeScript, Next.js, NestJS,
  PostgreSQL and AI.
</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button asChild size="lg">
              <Link href="#projects">
                View Projects
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Resume
            </Button>

          </div>

          <div className="mt-10 flex justify-center gap-6">

            {/* <Github />

            <Linkedin /> */}

            <FaGithub className="h-6 w-6 cursor-pointer transition hover:scale-110" />

  <FaLinkedin className="h-6 w-6 cursor-pointer transition hover:scale-110" />

          </div>

        </div>

      </Container>
    </section>
  );
}