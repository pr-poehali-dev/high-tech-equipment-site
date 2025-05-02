
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-[#9b87f5]" size={24} />
            <h1 className="text-xl font-bold">ТехИнновации</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-[#9b87f5] transition-colors">О компании</a>
            <a href="#products" className="hover:text-[#9b87f5] transition-colors">Продукция</a>
            <a href="#services" className="hover:text-[#9b87f5] transition-colors">Услуги</a>
            <a href="#contacts" className="hover:text-[#9b87f5] transition-colors">Контакты</a>
          </nav>
          <Button>Связаться с нами</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white flex items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Инновационные технологические решения для вашего бизнеса</h1>
            <p className="text-xl mb-8 text-gray-200">
              Разрабатываем и производим высокотехнологичное оборудование, которое помогает нашим клиентам увеличивать эффективность и конкурентоспособность.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8B5CF6]">
                Наши решения
                <Icon name="ArrowRight" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">О компании</h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
              <div className="flex gap-8 mt-8">
                <div>
                  <p className="text-4xl font-bold text-[#9b87f5]">10+</p>
                  <p className="text-gray-600">лет опыта</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#9b87f5]">200+</p>
                  <p className="text-gray-600">реализованных проектов</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#9b87f5]">50+</p>
                  <p className="text-gray-600">инженеров</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
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
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наша продукция</h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Мы производим высокотехнологичное оборудование для различных отраслей промышленности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Автоматизированные системы" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Автоматизированные системы управления</h3>
                <p className="text-gray-600 mb-4">
                  Современные системы АСУ ТП для повышения эффективности производства
                </p>
                <Button variant="ghost" className="text-[#9b87f5] hover:text-[#8B5CF6] p-0">
                  Подробнее <Icon name="ChevronRight" />
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Роботизированные комплексы" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Роботизированные комплексы</h3>
                <p className="text-gray-600 mb-4">
                  Промышленные роботы и автоматические линии производства
                </p>
                <Button variant="ghost" className="text-[#9b87f5] hover:text-[#8B5CF6] p-0">
                  Подробнее <Icon name="ChevronRight" />
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Измерительные приборы" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Измерительные приборы и системы</h3>
                <p className="text-gray-600 mb-4">
                  Высокоточное оборудование для контроля и измерения параметров
                </p>
                <Button variant="ghost" className="text-[#9b87f5] hover:text-[#8B5CF6] p-0">
                  Подробнее <Icon name="ChevronRight" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-transform">
              <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6">
                <Icon name="Settings" size={28} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Проектирование</h3>
              <p className="text-gray-300">
                Разработка технической документации и проектирование оборудования любой сложности
              </p>
            </div>
            
            <div className="bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-transform">
              <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6">
                <Icon name="Cog" size={28} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Производство</h3>
              <p className="text-gray-300">
                Изготовление оборудования с использованием современных материалов и технологий
              </p>
            </div>
            
            <div className="bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-transform">
              <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6">
                <Icon name="FileText" size={28} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Сертификация</h3>
              <p className="text-gray-300">
                Сопровождение процесса сертификации продукции по российским и международным стандартам
              </p>
            </div>
            
            <div className="bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-transform">
              <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6">
                <Icon name="LifeBuoy" size={28} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Техническая поддержка</h3>
              <p className="text-gray-300">
                Гарантийное и постгарантийное обслуживание поставляемого оборудования
              </p>
            </div>
            
            <div className="bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-transform">
              <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6">
                <Icon name="BookOpen" size={28} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Обучение персонала</h3>
              <p className="text-gray-300">
                Проведение тренингов и обучающих курсов для работы с оборудованием
              </p>
            </div>
            
            <div className="bg-[#2A2F3C] p-8 rounded-lg hover:translate-y-[-5px] transition-transform">
              <div className="rounded-full bg-[#9b87f5]/20 w-16 h-16 flex items-center justify-center mb-6">
                <Icon name="Wrench" size={28} className="text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Модернизация</h3>
              <p className="text-gray-300">
                Обновление и модернизация существующего оборудования для улучшения характеристик
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать проект с нами?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут вам подобрать оптимальное решение для вашего бизнеса
          </p>
          <Button size="lg" className="bg-white text-[#8B5CF6] hover:bg-gray-100">
            Запросить консультацию
            <Icon name="PhoneOutgoing" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <div className="w-20 h-1 bg-[#9b87f5] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1">
                  <Icon name="MapPin" className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-gray-600">Москва, ул. Технологическая, 42</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1">
                  <Icon name="Phone" className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="mt-1">
                  <Icon name="Mail" className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">info@techinnovation.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Icon name="Clock" className="text-[#9b87f5]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Время работы</h4>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
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
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6]">Отправить сообщение</Button>
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
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Linkedin" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Youtube" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Главная</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#9b87f5]">О компании</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-[#9b87f5]">Продукция</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#9b87f5]">Услуги</a></li>
                <li><a href="#contacts" className="text-gray-400 hover:text-[#9b87f5]">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Продукция</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Автоматизированные системы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Роботизированные комплексы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Измерительные приборы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Программное обеспечение</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Комплектующие</a></li>
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
    </div>
  );
};

export default Index;
