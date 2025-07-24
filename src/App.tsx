import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsPage } from "@/pages/SkillsPage";
import { AchievementsPage } from "@/pages/AchievementsPage";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrapper components for sections that need page styling
const EducationPage = () => (
  <div className="min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      <EducationSection />
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      <ProjectsSection />
    </div>
  </div>
);

const CertificationsPage = () => (
  <div className="min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      <CertificationsSection />
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen p-8">
    <div className="max-w-6xl mx-auto">
      <ContactSection />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
