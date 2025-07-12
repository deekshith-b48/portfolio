import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import profileImage from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section className="container max-w-screen-2xl px-6 pt-16 pb-24">
      <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
        <div className="relative">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-accent/20 animate-float">
            <AvatarImage 
              src="/lovable-uploads/2ff8e71d-bc1f-475a-b7d6-ee036deb909e.png" 
              alt="Deekshith B Gowda"
              className="object-cover"
              key="profile-image-v3"
            />
            <AvatarFallback className="text-2xl font-semibold">DG</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-background animate-pulse-soft"></div>
        </div>
        
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Hi, I'm Deekshith B Gowda
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Computer Science Engineering Student | Full Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Results-driven Computer Science Engineering student with 1+ year of hands-on experience 
            in full-stack web development. I build scalable applications using React, Node.js, and 
            modern technologies with strong problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
}