
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface NavbarProps {
  logo?: string;
  companyName?: string;
}

const Navbar = ({ logo = "Zap", companyName = "ТехИнновации" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1A1F2C]/95 backdrop-blur-sm py-2 shadow-md' : 'bg-[#1A1F2C] py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name={logo} className="text-[#9b87f5]" size={24} />
          <h1 className="text-xl font-bold text-white">{companyName}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white hover:text-[#9b87f5] transition-colors">О компании</a>
          <a href="#products" className="text-white hover:text-[#9b87f5] transition-colors">Продукция</a>
          <a href="#services" className="text-white hover:text-[#9b87f5] transition-colors">Услуги</a>
          <a href="#contacts" className="text-white hover:text-[#9b87f5] transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6]">
            <Icon name="Phone" className="mr-2" size={16} />
            Связаться с нами
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-white" 
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1F2C] py-4 animate-fadeIn shadow-lg">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="py-2 text-white hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </a>
            <a 
              href="#products" 
              className="py-2 text-white hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </a>
            <a 
              href="#services" 
              className="py-2 text-white hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#contacts" 
              className="py-2 text-white hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="mt-2 bg-[#9b87f5] hover:bg-[#8B5CF6] w-full">
              <Icon name="Phone" className="mr-2" size={16} />
              Связаться с нами
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
