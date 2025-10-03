import { Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/lib/resume-data';

export function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-headline text-4xl font-bold text-center mb-12 text-foreground">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="font-headline text-2xl text-foreground">{project.title}</CardTitle>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                  <Github className="w-6 h-6" />
                  <span className="sr-only">View on GitHub</span>
                </a>
              </div>
              <CardDescription>{project.company}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-foreground/80 flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
