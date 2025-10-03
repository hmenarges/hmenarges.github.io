import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { resumeData } from '@/lib/resume-data';
import { Languages as LanguagesIcon } from 'lucide-react';

export function Languages() {
  return (
    <div>
      <h2 className="font-headline text-4xl font-bold text-center mb-12 text-foreground">Languages</h2>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardHeader className="flex flex-row items-center gap-4">
                <LanguagesIcon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl text-foreground">Language Proficiency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {resumeData.languages.map(lang => (
                    <div key={lang.name} className="flex justify-between items-center text-lg">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.proficiency}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
