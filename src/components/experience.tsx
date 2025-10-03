import { Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/lib/resume-data';

export function Experience() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-headline text-4xl font-bold text-center mb-16 text-foreground">Professional Experience</h2>
      <div className="relative border-l-2 border-primary/20 ml-3 sm:ml-4">
        {resumeData.experience.map((job, index) => (
          <div key={index} className="mb-12 pl-8 md:pl-12">
            <div className="absolute w-6 h-6 bg-primary rounded-full -left-3.5 border-4 border-background flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>
            <div className="p-1 rounded-lg">
              <p className="text-sm text-muted-foreground flex items-center"><Calendar className="mr-2 h-4 w-4"/>{job.period}</p>
              <h3 className="font-headline text-2xl font-bold mt-1 text-foreground">{job.role}</h3>
              <p className="text-lg text-foreground/80 font-medium">{job.company} &middot; {job.location}</p>
              <ul className="mt-4 space-y-3 list-disc list-inside text-foreground/80">
                {job.description.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-foreground/90">$1</strong>') }} />
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
