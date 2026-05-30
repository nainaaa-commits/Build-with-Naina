import Image from "next/image";
import brand from "../../../public/assets/brand.png";
import Button from "../ui/Button";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-20 bg-brand-navy text-brand-white px-6 py-2">
      <div className="mx-auto max-w-8xl flex items-center justify-between">
        <div>
          <Image
            src={brand}
            alt="Build with Naina"
            className="h-24 w-auto bg-brand-navy"
          ></Image>
        </div>
        <div>
          <nav className="flex items-center gap-6">
            <a className="flex flex-col items-center gap-2 text-brand-coral">
              Home
              <span className="h-0.5 w-6 rounded-full bg-brand-coral"></span>
            </a>
            <a className="text-brand-muted hover:text-brand-white">Projects</a>
            <a className="text-brand-muted hover:text-brand-white">About</a>
            <a className="text-brand-muted hover:text-brand-white">Contact</a>
          </nav>
        </div>
        <Button icon={<Heart className="h-4 w-4 fill-brand-white" />}>
          {" "}
          Lets build together
        </Button>
      </div>
    </header>
  );
};

export default Header;
