import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import profileImage from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section className="container max-w-screen-2xl px-6 pt-16 pb-24">
      <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
        <div className="relative">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-accent/20 animate-float">
            <AvatarImage 
              src={profileImage} 
              alt="Chaitanya Bajpai"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl font-semibold">CB</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-background animate-pulse-soft"></div>
        </div>
        
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Hi, I'm Chaitanya
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            21, Delhi | Full Stack Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions. 
            From writing secure smart contracts to building intuitive Web3 interfaces, I turn 
            complex blockchain concepts into user-friendly experiences.
          </p>
        </div>
      </div>
    </section>
  );
}