import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SocialLinks } from "@/components/SocialLinks";
import { TechStack } from "@/components/TechStack";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-12 md:py-20">
      <Hero />

      <div className="mb-12">
        <SocialLinks />
      </div>

      <Projects />
      <WorkExperience />
      <TechStack />

      <footer className="mt-20 pt-8 border-t border-border text-sm text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Pedro Azevedo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
