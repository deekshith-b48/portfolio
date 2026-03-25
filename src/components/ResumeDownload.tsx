import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Eye } from "lucide-react";
import { useState } from "react";

export function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Using local PDF file from public directory
  const resumeUrl = "/Deekshith_B_Resume.pdf";

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Deekshith_B_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-white/[0.07] bg-card/50 backdrop-blur-sm hover:border-accent/20 transition-all duration-200">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex-shrink-0">
          <FileText className="w-4 h-4 text-accent" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Deekshith B Gowda — Resume</p>
          <p className="text-xs text-muted-foreground">Full Stack Developer · Updated 2025</p>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleView}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:text-foreground transition-all duration-200"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">View</span>
        </button>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, hsl(258 90% 65%), hsl(200 90% 55%))" }}
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isDownloading ? "Saving…" : "Download"}</span>
        </button>
      </div>
    </div>
  );
}
