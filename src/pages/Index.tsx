import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="p-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Дарья Карась
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="hover:text-purple-300 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#cases"
              className="hover:text-purple-300 transition-colors"
            >
              Кейсы
            </a>
            <a
              href="#reviews"
              className="hover:text-purple-300 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="hover:text-purple-300 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            Оставить заявку
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Цифровые сотрудники для вашего бизнеса
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Автоматизирую рутину, чтобы вы занимались ростом, а не
                таблицами.
                <br className="hidden md:block" />
                Всё на Python + ChatGPT: быстро, эффективно, красиво.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4"
              >
                <Icon name="Rocket" className="mr-2" />
                Получить бесплатную консультацию
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="/img/9a7a3ba7-301f-4765-a5d0-d5a3526197ad.jpg"
                alt="AI Technology Visualization"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Что я могу сделать для вас
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Каждый проект — как костюм по фигуре. Всё под вас.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bot" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white">
                  Автоматизация процессов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Чат-боты, автоматизация таблиц, создание воронок продаж
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white">Внедрение ИИ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Аналитика данных, обработка запросов, автоматические ответы
                  клиентам
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Puzzle" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white">
                  Индивидуальные решения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Цифровые решения под ваш бизнес, интеграция с CRM и системами
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Как это работает на практике
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="MessageSquare" className="mr-2" />
                  Автоматизация заявок
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Создала чат-бота, который обрабатывает входящие заявки и
                  распределяет их по менеджерам, экономя 4 часа в день
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="HeadphonesIcon" className="mr-2" />
                  ИИ-консультант
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Внедрила ИИ-помощника для консультаций клиентов, который
                  отвечает на 80% вопросов без участия человека
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="BarChart" className="mr-2" />
                  Аналитика данных
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Автоматизировала сбор и анализ данных из Google Sheets, создав
                  dashboard для принятия решений
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    А
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">Андрей Козлов</p>
                    <p className="text-gray-400">Директор IT-компании</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Дарья создала для нас систему автоматизации, которая
                  сэкономила компании 30% времени на рутинных задачах.
                  Профессиональный подход!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-semibold">Мария Петрова</p>
                    <p className="text-gray-400">Руководитель отдела продаж</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Внедрённый ИИ-помощник увеличил конверсию наших лидов на 40%.
                  Рекомендую Дарью как эксперта в области ИИ!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Готова обсудить ваш проект
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Оставьте заявку, и я свяжусь с вами в течение часа
            </p>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <Input
                    placeholder="WhatsApp или Telegram"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <Textarea
                    placeholder="Кратко опишите вашу задачу"
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Дарья Карась. Все права защищены.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
