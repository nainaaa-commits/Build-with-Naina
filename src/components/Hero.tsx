import { Heart, ArrowRight, CuboidIcon } from "lucide-react";
import Image from "next/image";
import hero from "../../public/assets/hero.png";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="bg-brand-navy h-108 p-10 flex">
      <div>
        <div>
          <Heart className="h-4 w-4 text-brand-coral fill-brand-coral mx-2" />
          <span className="text-brand-coral/50 text-xs">Mini Projects.</span>
          <span className="text-brand-coral text-xs">Big learning.</span>
        </div>
        <div className="text-7xl font-bold my-2">
          <span className="text-brand-white/80">Build with</span>
          <span className="bg-linear-to-r from-brand-coral to-brand-cyan bg-clip-text text-transparent">
            {" "}
            Naina
          </span>
        </div>
        <div className="w-120 text-brand-muted text-s">
          Focused mini products built with Next.js to practice frontend
          fundamentals, interaction design, and product-minded engineering.
        </div>
        <div className="flex gap-4 py-4">
          <Button icon={<ArrowRight className="h-4 w-4" />}>
            Explore Projects
          </Button>
          <Button
            icon={<CuboidIcon className="h-4 w-4" />}
            className="border border-brand-coral bg-transparent shadow-coral-glow"
          >
            About this hub
          </Button>
        </div>
        <div className="text-brand-muted text-xs">
          New project <span className="text-brand-coral">coming soon</span>.
          Stay tuned!
        </div>
      </div>
      <div className="flex flex-1 justify-end items-end">
        <Image src={hero} alt="Naina" className="w-210 h-110"></Image>
      </div>
    </div>
  );
};

export default Hero;
