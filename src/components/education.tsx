import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { resumeData } from '@/lib/resume-data';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <div>
      <h2 className="font-headline text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
       <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl text-foreground">B.Sc. Computer Hardware Engineering</CardTitle>
            </CardHeader>
            <CardContent>
                <h3 className="font-bold text-lg text-foreground">{resumeData.education.degree}</h3>
                <p className="text-muted-foreground">{resumeData.education.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">{resumeData.education.period}</p>
                <p className="mt-4 text-foreground/80" dangerouslySetInnerHTML={{ __html: resumeData.education.details.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-foreground/90">$1</strong>') }} />
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
