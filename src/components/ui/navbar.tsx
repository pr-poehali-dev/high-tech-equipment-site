
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface NavbarProps {
  logo?: string;
  companyName?: string;
}

const Navbar = ({ logo = "Zap", companyName = "ТехИнновации" }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1A1F2C] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name={logo} className="text-[#9b87f5]" size={24} />
          <h1 className="text-xl font-bold">{companyName}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-[#9b87f5] transition-colors">О компании</a>
          <a href="#products" className="hover:text-[#9b87f5] transition-colors">Продукция</a>
          <a href="#services" className="hover:text-[#9b87f5] transition-colors">Услуги</a>
          <a href="#contacts" className="hover:text-[#9b87f5] transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:block">
          <Button>Связаться с нами</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1A1F2C] py-4 animate-fadeIn">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="py-2 hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </a>
            <a 
              href="#products" 
              className="py-2 hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукция
            </a>
            <a 
              href="#services" 
              className="py-2 hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#contacts" 
              className="py-2 hover:text-[#9b87f5] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="mt-2">Связаться с нами</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
