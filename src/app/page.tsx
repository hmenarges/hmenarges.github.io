import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Education } from '@/components/education';
import { Languages } from '@/components/languages';
import { Footer } from '@/components/footer';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <div className="bg-primary/5">
          <AnimatedSection id="experience">
            <Experience />
          </AnimatedSection>
        </div>
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <div className="bg-primary/5">
          <AnimatedSection id="skills">
            <Skills />
          </AnimatedSection>
        </div>
         <AnimatedSection id="education">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <Education />
                    <Languages />
                </div>
            </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
