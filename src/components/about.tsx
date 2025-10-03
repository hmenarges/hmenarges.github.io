import { resumeData } from '@/lib/resume-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center gap-4">
          <UserCircle2 className="w-8 h-8 text-primary"/>
          <CardTitle className="font-headline text-3xl text-foreground">About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-foreground/80 leading-relaxed">
          {resumeData.summary.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground/90">$1</strong>') }} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
