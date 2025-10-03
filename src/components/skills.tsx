import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { resumeData } from '@/lib/resume-data';
import { Code2, Database, Wrench, BrainCircuit, Server, MonitorSmartphone, HardHat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Backend Development': Server,
  'Frontend Development': MonitorSmartphone,
  'Python & Data Science': BrainCircuit,
  'Databases': Database,
  'Tools & DevOps': Wrench,
  'Core Concepts': Code2,
};

export function Skills() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-headline text-4xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(resumeData.skills).map(([category, skills]) => {
          const Icon = iconMap[category] || HardHat;
          return (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <Icon className="w-6 h-6 text-primary" />
                <CardTitle className="font-headline text-xl text-foreground">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 flex-grow">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default" className="bg-primary/90 text-primary-foreground text-sm font-normal">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
