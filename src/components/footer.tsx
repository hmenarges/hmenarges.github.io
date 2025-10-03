import { resumeData } from '@/lib/resume-data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {currentYear} {resumeData.name}. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Designed and built with professional care.
        </p>
        <p className="text-sm mt-2">
          <a href="https://github.com/hmenarges/hmenarges.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline">View source on GitHub</a>
        </p>
      </div>
    </footer>
  );
}
