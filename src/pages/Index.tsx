
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navbar from "@/components/ui/navbar";
import BackToTop from "@/components/ui/back-to-top";
import SectionTitle from "@/components/ui/section-title";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Наблюдаем за всеми секциями
    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const registerSection = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current[id] = element;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section ref={el => registerSection('hero', el)} id="hero" className="relative min-h-screen bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white flex items-center pt-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
              Инновационные <span className="text-gradient">технологические решения</span> для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fadeIn" style={{animationDelay: "0.2s"}}>
              Разрабатываем и производим высокотехнологичное оборудование, которое помогает нашим клиентам увеличивать эффективность и конкурентоспособность.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{animationDelay: "0.4s"}}>
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8B5CF6] animate-pulse-shadow">
                Наши решения
                <Icon name="ArrowRight" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
              <span className="text-sm mb-2">Узнать больше</span>
              <Icon name="ChevronDown" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={el => registerSection('about', el)} 
        id="about" 
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="О компании" 
          />
          
          <div className={`grid md:grid-cols-2 gap-12 items-center ${visibleSections.about ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="animate-slideInLeft" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-4">Передовые технологии и опыт</h3>
              <p className="text-gray-700 mb-6">
                Компания "ТехИнновации" — лидер в области разработки и производства 
                высокотехнологичного оборудования. Мы имеем более 10 лет опыта работы 
                в данной сфере и сотрудничаем с ведущими предприятиями России и СНГ.
              </p>
              <p className="text-gray-700 mb-6">
                Наша миссия — помогать бизнесу внедрять инновационные технологические решения,
                которые обеспечивают рост производительности и конкурентные преимущества.
              </p>
              <div className="flex flex-wrap justify-between gap-4 mt-8">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold text-[#9b87f5]">10+</p>
                  <p className="text-gray-600">лет опыта</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold text-[#9b87f5]">200+</p>
                  <p className="text-gray-600">реализованных проектов</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold text-[#9b87f5]">50+</p>
                  <p className="text-gray-600">инженеров</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-slideInRight" style={{animationDelay: "0.4s"}}>
              <img 
                src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Инженеры за работой" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section 
        ref={el => registerSection('products', el)} 
        id="products" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Наша продукция" 
            subtitle="Мы производим высокотехнологичное оборудование для различных отраслей промышленности"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title="Автоматизированные системы управления"
              description="Современные системы АСУ ТП для повышения эффективности производства"
              visible={visibleSections.products}
              delay={0}
            />
            
            <ProductCard 
              image="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title="Роботизированные комплексы"
              description="Промышленные роботы и автоматические линии производства"
              visible={visibleSections.products}
              delay={0.2}
            />
            
            <ProductCard 
              image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title="Измерительные приборы и системы"
              description="Высокоточное оборудование для контроля и измерения параметров"
              visible={visibleSections.products}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={el => registerSection('services', el)} 
        id="services" 
        className="py-20 bg-[#1A1F2C] text-white"
      >
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Наши услуги" 
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="Settings"
              title="Проектирование"
              description="Разработка технической документации и проектирование оборудования любой сложности"
              visible={visibleSections.services}
              delay={0}
            />
            
            <ServiceCard 
              icon="Cog"
              title="Производство"
              description="Изготовление оборудования с использованием современных материалов и технологий"
              visible={visibleSections.services}
              delay={0.1}
            />
            
            <ServiceCard 
              icon="FileText"
              title="Сертификация"
              description="Сопровождение процесса сертификации продукции по российским и международным стандартам"
              visible={visibleSections.services}
              delay={0.2}
            />
            
            <ServiceCard 
              icon="LifeBuoy"
              title="Техническая поддержка"
              description="Гарантийное и постгарантийное обслуживание поставляемого оборудования"
              visible={visibleSections.services}
              delay={0.3}
            />
            
            <ServiceCard 
              icon="BookOpen"
              title="Обучение персонала"
              description="Проведение тренингов и обучающих курсов для работы с оборудованием"
              visible={visibleSections.services}
              delay={0.4}
            />
            
            <ServiceCard 
              icon="Wrench"
              title="Модернизация"
              description="Обновление и модернизация существующего оборудования для улучшения характеристик"
              visible={visibleSections.services}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={el => registerSection('cta', el)} 
        id="cta" 
        className="py-20 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-white relative overflow-hidden"
      >
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-5"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={visibleSections.cta ? 'animate-fadeIn' : 'opacity-0'}>
            <h2 className="text-3xl font-bold mb-6">Готовы начать проект с нами?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Наши специалисты помогут вам подобрать оптимальное решение для вашего бизнеса
            </p>
            <Button size="lg" className="bg-white text-[#8B5CF6] hover:bg-gray-100 animate-pulse-shadow">
              Запросить консультацию
              <Icon name="PhoneOutgoing" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={el => registerSection('contacts', el)} 
        id="contacts" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Контакты" 
          />

          <div className={`grid md:grid-cols-2 gap-12 ${visibleSections.contacts ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="animate-slideInLeft" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <ContactInfo 
                icon="MapPin"
                title="Адрес"
                text="Москва, ул. Технологическая, 42"
              />
              
              <ContactInfo 
                icon="Phone"
                title="Телефон"
                text="+7 (495) 123-45-67"
              />
              
              <ContactInfo 
                icon="Mail"
                title="Email"
                text="info@techinnovation.ru"
              />
              
              <ContactInfo 
                icon="Clock"
                title="Время работы"
                text="Пн-Пт: 9:00 - 18:00"
              />
              
              <div className="mt-8">
                <h4 className="text-lg font-bold mb-4">Мы в социальных сетях</h4>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors">
                    <Icon name="Facebook" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors">
                    <Icon name="Instagram" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors">
                    <Icon name="Linkedin" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-[#9b87f5] hover:text-white transition-colors">
                    <Icon name="Youtube" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-slideInRight" style={{animationDelay: "0.4s"}}>
              <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
              <form>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                      placeholder="example@mail.ru"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    placeholder="Тема сообщения"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6]">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-[#9b87f5]" size={24} />
                <h1 className="text-xl font-bold">ТехИнновации</h1>
              </div>
              <p className="text-gray-400 mb-4">
                Разработка и производство высокотехнологичного оборудования для различных отраслей промышленности
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  <Icon name="Linkedin" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  <Icon name="Youtube" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Главная</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#9b87f5] transition-colors">О компании</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Продукция</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Услуги</a></li>
                <li><a href="#contacts" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Продукция</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Автоматизированные системы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Роботизированные комплексы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Измерительные приборы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Программное обеспечение</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">Комплектующие</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Icon name="MapPin" size={16} className="shrink-0 mt-1" />
                  <span className="text-gray-400">Москва, ул. Технологическая, 42</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Phone" size={16} className="shrink-0 mt-1" />
                  <span className="text-gray-400">+7 (495) 123-45-67</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Mail" size={16} className="shrink-0 mt-1" />
                  <span className="text-gray-400">info@techinnovation.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 ТехИнновации. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  visible?: boolean;
  delay?: number;
}

const ProductCard = ({ image, title, description, visible = true, delay = 0 }: ProductCardProps) => {
  return (
    <Card 
      className={`overflow-hidden hover:shadow-lg transition-shadow ${visible ? 'animate-fadeIn' : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Button variant="ghost" className="text-[#9b87f5] hover:text-[#8B5CF6] p-0 group">
          Подробнее <Icon name="ChevronRight" className="transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  visible?: boolean;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, visible = true, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className={`bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-all duration-300 hover:shadow-lg ${visible ? 'animate-fadeIn' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6 group">
        <Icon name={icon} size={28} className="text-[#9b87f5] transition-transform group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

interface ContactInfoProps {
  icon: string;
  title: string;
  text: string;
}

const ContactInfo = ({ icon, title, text }: ContactInfoProps) => {
  return (
    <div className="flex items-start gap-4 mb-6 group">
      <div className="mt-1 p-2 bg-[#9b87f5]/10 rounded-full group-hover:bg-[#9b87f5]/20 transition-colors">
        <Icon name={icon} className="text-[#9b87f5]" />
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Index;
