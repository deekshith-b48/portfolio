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
    <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10 hover:border-accent/40 transition-all duration-300">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-3 rounded-lg bg-accent/20 border border-accent/30">
              <FileText className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm md:text-base">Download Resume</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Get my latest resume in PDF format
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleView}
              className="flex-1 sm:flex-none border-accent/30 hover:border-accent/50 hover:bg-accent/10 text-xs md:text-sm"
            >
              <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden xs:inline">View</span>
            </Button>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              size="sm"
              className="flex-1 sm:flex-none bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm"
            >
              <Download className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              {isDownloading ? (
                <span className="hidden xs:inline">Downloading...</span>
              ) : (
                <span className="hidden xs:inline">Download</span>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
