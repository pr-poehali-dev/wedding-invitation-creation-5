import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !email || attending === null) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите имя, email и ваш ответ",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Спасибо за ответ! 💕",
      description: `Мы ждем вас, ${guestName}!`,
    });

    setGuestName('');
    setEmail('');
    setGuestCount('1');
    setAttending(null);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('details')} className="hover:text-primary transition-colors">Детали</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('rsvp')} className="hover:text-primary transition-colors">RSVP</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">
            Валерия & Алексей
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
            Приглашаем вас разделить с нами самый важный день
          </p>
          <div className="flex items-center justify-center gap-4 text-xl">
            <Icon name="Calendar" size={24} className="text-accent" />
            <span className="font-semibold">1 августа 2026</span>
          </div>
          <Button 
            onClick={() => scrollToSection('rsvp')} 
            size="lg" 
            className="mt-12 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Подтвердить присутствие
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Наша История</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-pink-100 shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Coffee" size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Первая встреча</h3>
                  <p className="text-sm text-muted-foreground mb-4">Осень 2020</p>
                </div>
                <p className="text-center text-muted-foreground leading-relaxed">
                  Мы встретились в уютной кофейне в центре города. С первого взгляда поняли, что это судьба. Разговор длился до закрытия заведения.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all animate-scale-in">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Heart" size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Предложение</h3>
                  <p className="text-sm text-muted-foreground mb-4">Весна 2024</p>
                </div>
                <p className="text-center text-muted-foreground leading-relaxed">
                  На закате в парке, где проходили наши первые свидания, Алексей опустился на одно колено. Конечно, ответ был "Да!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/a313a95b-37d3-4800-944b-f4de797ebc7f/files/732b0ad2-ac0d-40a8-88f4-d8a3185c9288.jpg"
              alt="Наша история"
              className="rounded-2xl shadow-2xl mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="details" className="py-24 px-4 bg-white/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Детали Празднования</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-pink-100 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Место</h3>
                <p className="text-muted-foreground mb-2">Ресторан "Усадьба"</p>
                <p className="text-sm text-muted-foreground">ул. Садовая, 15</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Время</h3>
                <p className="text-muted-foreground mb-2">15:00 - Церемония</p>
                <p className="text-sm text-muted-foreground">16:00 - Банкет</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shirt" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Дресс-код</h3>
                <p className="text-muted-foreground mb-2">Коктейльный стиль</p>
                <p className="text-sm text-muted-foreground">Пастельные оттенки</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-pink-50 to-purple-50">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Info" size={32} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Важная информация</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Подтвердите присутствие до 1 июля 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Парковка доступна для всех гостей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Детская комната и анимация для малышей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Фотограф будет работать весь вечер</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Галерея</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Моменты нашей любви</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/a313a95b-37d3-4800-944b-f4de797ebc7f/files/732b0ad2-ac0d-40a8-88f4-d8a3185c9288.jpg"
                alt="Фото 1"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/a313a95b-37d3-4800-944b-f4de797ebc7f/files/c973f25a-d4d7-4bca-90a2-85791c3e6adb.jpg"
                alt="Фото 2"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/a313a95b-37d3-4800-944b-f4de797ebc7f/files/7ba3d4a8-b098-44a6-ab92-5d4c6d824b18.jpg"
                alt="Фото 3"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="rsvp" className="py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Подтверждение</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Пожалуйста, сообщите нам о вашем присутствии до 1 июля 2026
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
                  <Input 
                    id="name"
                    placeholder="Иван Иванов"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-lg">Количество персон *</Label>
                  <Input 
                    id="guests"
                    type="number"
                    min="1"
                    max="5"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="h-12 text-lg"
                    required
                  />
                  <p className="text-sm text-muted-foreground">Укажите общее количество гостей (включая вас)</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <Label className="text-lg">Сможете ли вы присутствовать? *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={attending === true ? "default" : "outline"}
                      size="lg"
                      onClick={() => setAttending(true)}
                      className="h-16 text-lg"
                    >
                      <Icon name="Check" size={24} className="mr-2" />
                      С удовольствием!
                    </Button>
                    <Button
                      type="button"
                      variant={attending === false ? "default" : "outline"}
                      size="lg"
                      onClick={() => setAttending(false)}
                      className="h-16 text-lg"
                    >
                      <Icon name="X" size={24} className="mr-2" />
                      Не смогу
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg mt-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Контакты</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8">
              По всем вопросам обращайтесь к нам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-2 border-pink-100 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Валерия</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={18} />
                    +7 (999) 123-45-67
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} />
                    valeria@example.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Алексей</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={18} />
                    +7 (999) 765-43-21
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} />
                    alexey@example.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <Icon name="Heart" size={32} className="text-primary mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Валерия & Алексей</p>
          <p className="text-muted-foreground">1 августа 2026</p>
          <p className="text-sm text-muted-foreground mt-4">С любовью создано для наших дорогих гостей 💕</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;