import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="container py-12 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <div className="flex justify-center md:order-last">
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Andino Ferdi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            About Me
          </h2>
          <p className="text-muted-foreground">
            I&apos;m a passionate developer with a strong focus on creating
            clean, efficient, and user-friendly applications. With years of
            experience in web development, I specialize in building modern
            websites and applications using the latest technologies.
          </p>
          <p className="text-muted-foreground">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or enjoying
            outdoor activities.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
