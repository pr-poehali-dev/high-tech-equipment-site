
import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={scrollToTop}
        className="bg-[#9b87f5] text-white p-3 rounded-full shadow-lg hover:bg-[#8B5CF6] transition-colors focus:outline-none"
        aria-label="Вернуться наверх"
      >
        <Icon name="ChevronUp" size={24} />
      </button>
    </div>
  );
};

export default BackToTop;
