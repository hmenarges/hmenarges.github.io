"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resume-data';
import { generatePdf } from '@/lib/generate-pdf';

export function Hero() {
  const linkedInSocial = resumeData.socials.find(s => s.name === 'LinkedIn');

  const handleDownloadPdf = () => {
    generatePdf(resumeData);
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-primary/5 to-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex-grow">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              {resumeData.name}
            </h1>
            <p className="font-headline mt-3 text-xl md:text-3xl text-foreground/80">
              {resumeData.title}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted-foreground">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center hover:text-primary transition-colors">
                <Mail className="mr-2 h-4 w-4" /> {resumeData.contact.email}
              </a>
              {resumeData.socials.map((social) => (
                 <React.Fragment key={social.name}>
                    <span className='hidden sm:inline'>|</span>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="flex items-center gap-2 hover:text-primary transition-colors">
                        <social.icon className="h-4 w-4" />
                        {social.name}
                    </a>
                 </React.Fragment>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handleDownloadPdf} size="lg" variant="outline" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              {linkedInSocial && (
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
                  <a href={linkedInSocial.url} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Contact on LinkedIn
                  </a>
                </Button>
              )}
               <Button asChild size="lg" variant="outline" className="rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20 border-primary/50 text-primary/80 hover:bg-primary/10 hover:text-primary">
                  <Link href="#about">
                    <ArrowDown className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
