import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="container flex flex-col items-center justify-center gap-4 py-20 md:py-32"
    >
      <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Hello, I&apos;m <span className="text-primary">Andino Ferdi</span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
          A passionate developer crafting beautiful digital experiences
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#projects">View My Work</Link>
        </Button>
      </div>
      <div className="mt-12 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}
