import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/img/7dab795e-f679-44c6-93eb-60ddee53cd22.jpg"
              alt="RemPlay"
              className="w-10 h-10 rounded-lg"
            />
            <h1 className="text-2xl font-heading font-bold text-gray-900">
              RemPlay
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#donate"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Донат
            </a>
            <a
              href="#rules"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Правила
            </a>
            <a
              href="#support"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Поддержка
            </a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl font-heading font-bold text-gray-900 mb-6">
            Добро пожаловать на сервер
            <span className="text-blue-600 block">RemPlay</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Лучший Minecraft сервер с уникальными возможностями, дружелюбным
            сообществом и захватывающими приключениями. Присоединяйтесь к
            тысячам игроков!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать лаунчер
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-blue-600" />
              </div>
              <CardTitle className="font-heading text-xl">
                Высокая производительность
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Мощные сервера обеспечивают стабильную работу без лагов и
                задержек
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-green-600" />
              </div>
              <CardTitle className="font-heading text-xl">
                Активное сообщество
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Тысячи игроков онлайн, регулярные события и соревнования
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-purple-600" />
              </div>
              <CardTitle className="font-heading text-xl">
                Надежная защита
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Современная система защиты от читеров и нарушителей
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Привилегии сервера
          </h3>
          <p className="text-xl text-gray-600">
            Поддержите проект и получите эксклюзивные возможности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-100 text-green-700">Популярно</Badge>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-white" />
              </div>
              <CardTitle className="font-heading text-2xl">VIP</CardTitle>
              <CardDescription className="text-lg">
                Базовые привилегии
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-gray-900">
                  299₽
                </span>
                <span className="text-gray-600 block">на 30 дней</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  Цветной ник в чате
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  Доступ к VIP зонам
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  Приоритет в очереди
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-600 mr-2"
                  />
                  Набор ресурсов
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full">
                Купить VIP
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border-2 border-blue-200">
            <div className="absolute top-4 right-4">
              <Badge className="bg-blue-100 text-blue-700">Лучший выбор</Badge>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Crown" size={32} className="text-white" />
              </div>
              <CardTitle className="font-heading text-2xl">Premium</CardTitle>
              <CardDescription className="text-lg">
                Расширенные возможности
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-gray-900">
                  599₽
                </span>
                <span className="text-gray-600 block">на 30 дней</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  Все привилегии VIP
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  Полёт в лобби
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  Дополнительные команды
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  Приватный варп
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-blue-600 mr-2" />
                  Эксклюзивные скины
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                Купить Premium
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-purple-100 text-purple-700">Эксклюзив</Badge>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gem" size={32} className="text-white" />
              </div>
              <CardTitle className="font-heading text-2xl">Deluxe</CardTitle>
              <CardDescription className="text-lg">
                Максимальные привилегии
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-gray-900">
                  999₽
                </span>
                <span className="text-gray-600 block">на 30 дней</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  Все привилегии Premium
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  Кастомные эффекты
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  Админские команды
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  Личная территория
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-purple-600 mr-2"
                  />
                  Поддержка 24/7
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 rounded-full">
                Купить Deluxe
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Правила сервера
          </h3>
          <p className="text-xl text-gray-600">
            Соблюдайте правила для комфортной игры
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-lg text-gray-900 flex items-center">
                    <Icon
                      name="Shield"
                      size={20}
                      className="text-green-600 mr-2"
                    />
                    Основные правила
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Уважайте других игроков</li>
                    <li>• Не используйте читы и моды</li>
                    <li>• Не спамьте в чате</li>
                    <li>• Не стройте неподходящие постройки</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-heading font-semibold text-lg text-gray-900 flex items-center">
                    <Icon
                      name="AlertTriangle"
                      size={20}
                      className="text-red-600 mr-2"
                    />
                    Запрещено
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Гриферство и воровство</li>
                    <li>• Оскорбления и мат</li>
                    <li>• Реклама других серверов</li>
                    <li>• Нарушение игрового баланса</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Поддержка
          </h3>
          <p className="text-xl text-gray-600">
            Нужна помощь? Мы всегда готовы помочь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-blue-600"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">
                Discord
              </h4>
              <p className="text-gray-600 mb-4">
                Присоединяйтесь к нашему сообществу
              </p>
              <Button variant="outline" className="rounded-full">
                Перейти в Discord
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-green-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Email</h4>
              <p className="text-gray-600 mb-4">Напишите нам на почту</p>
              <Button variant="outline" className="rounded-full">
                support@remplay.ru
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HelpCircle" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">FAQ</h4>
              <p className="text-gray-600 mb-4">Часто задаваемые вопросы</p>
              <Button variant="outline" className="rounded-full">
                Открыть FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/img/7dab795e-f679-44c6-93eb-60ddee53cd22.jpg"
              alt="RemPlay"
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="text-xl font-heading font-bold">RemPlay</h1>
          </div>
          <p className="text-gray-400 mb-4">
            Лучший Minecraft сервер с уникальными возможностями
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Users" size={20} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
            © 2024 RemPlay. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
