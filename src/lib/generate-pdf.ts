import jsPDF from 'jspdf';
import type { ResumeData } from './resume-data';

// Simple text cleaning function to remove markdown for non-link text
const cleanText = (text: string): string => {
  return text.replace(/<strong[^>]*>|<\/strong>|\*\*/g, '');
};

export const generatePdf = (data: ResumeData) => {
  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });

  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  let y = margin;

  // Set default font
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  const addLine = () => {
    y += 4; // Increased space before line
    doc.setDrawColor(220, 220, 220); // A light gray
    doc.line(margin, y, pageWidth - margin, y);
    y += 8; // Increased space after line
  };

  const checkPageEnd = (buffer = 20) => {
    if (y + buffer > pageHeight - margin) { // Check against margin
      doc.addPage();
      y = margin;
    }
  };

  // --- Header ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(47, 54, 64); // Gunmetal Gray
  doc.text(data.name, margin, y);
  y += 9;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(47, 54, 64); // Slightly less prominent
  doc.text(data.title, margin, y);
  y += 6;
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100); // Muted gray
  
  // Contact Info with clickable links
  let x = margin;
  doc.textWithLink(data.contact.email, x, y, { url: `mailto:${data.contact.email}` });
  x += doc.getTextWidth(data.contact.email) + 3;

  data.socials.forEach(social => {
    doc.textWithLink('|', x, y, {});
    x += 3;
    doc.textWithLink(social.name, x, y, { url: social.url });
    x += doc.getTextWidth(social.name) + 3;
  });


  // --- Summary ---
  y += 6;
  addLine();
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(47, 54, 64);
  doc.text('Summary', margin, y);
  y += 7;
  
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);

  data.summary.forEach((paragraph) => {
    const parts = paragraph.split(/(\*\*.*?\*\*)/g).filter(part => part.length > 0);
    let currentX = margin;
    const maxWidth = pageWidth - margin * 2;
    
    parts.forEach(part => {
      const isBold = part.startsWith('**') && part.endsWith('**');
      const text = isBold ? part.slice(2, -2) : part;

      doc.setFont('helvetica', isBold ? 'bold' : 'normal');

      // Split text into words to handle wrapping gracefully
      const words = text.split(' ');
      words.forEach(word => {
        const wordWidth = doc.getTextWidth(word + ' ');
        if (currentX + wordWidth > margin + maxWidth) {
          currentX = margin;
          y += 4.5;
        }
        doc.text(word + ' ', currentX, y);
        currentX += wordWidth;
      });
    });
    currentX = margin;
    y += 6; // Paragraph spacing
  });


  // --- Professional Experience ---
  checkPageEnd(60);
  addLine();
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(47, 54, 64);
  doc.text('Professional Experience', margin, y);
  y += 8;

  data.experience.forEach(job => {
    checkPageEnd(40);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(47, 54, 64);
    doc.text(job.role, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const companyDate = `${job.company} | ${job.location} | ${job.period}`;
    doc.text(companyDate, margin, y + 5);
    y += 12;
    
    doc.setTextColor(80, 80, 80);
    job.description.forEach(item => {
      checkPageEnd(12);
      const bulletPoint = `• `;
      const text = cleanText(item);
      const lines = doc.splitTextToSize(text, pageWidth - margin * 2 - 6);
      doc.text(bulletPoint, margin + 1, y);
      doc.text(lines, margin + 6, y);
      y += lines.length * 4.5 + 2;
    });

    y += 4;
    const techStackText = `Tech Stack: ${job.techStack.join(', ')}`;
    const techLines = doc.splitTextToSize(techStackText, pageWidth - margin * 2);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(120, 120, 120);
    doc.text(techLines, margin, y);
    doc.setFont('helvetica', 'normal');
    y += techLines.length * 4.5 + 8; // Increased bottom margin for job
  });

  // --- Education ---
  checkPageEnd(30);
  addLine();
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(47, 54, 64);
  doc.text('Education', margin, y);
  y += 8;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(data.education.degree, margin, y);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`${data.education.institution} | ${data.education.period}`, margin, y + 5);
  y += 12;
  
  // --- Skills ---
  checkPageEnd(50);
  addLine();
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(47, 54, 64);
  doc.text('Skills', margin, y);
  y += 8;
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  
  Object.entries(data.skills).forEach(([category, skills]) => {
      checkPageEnd(15);
      doc.setFont('helvetica', 'bold');
      doc.text(category, margin, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      const skillsText = skills.join(', ');
      const skillLines = doc.splitTextToSize(skillsText, pageWidth - margin * 2);
      doc.text(skillLines, margin, y);
      y += skillLines.length * 4.5 + 4; // Added extra space
  });

  // --- Languages ---
  checkPageEnd(25);
  addLine();
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(47, 54, 64);
  doc.text('Languages', margin, y);
  y+=8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  data.languages.forEach(lang => {
      doc.text(`${lang.name}: ${lang.proficiency}`, margin, y);
      y+=6;
  });


  doc.save('Narges_Hashemi_Resume.pdf');
};
