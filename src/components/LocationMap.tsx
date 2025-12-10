import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const LocationMap = () => {
  const address = "ул. Садовая, 15";
  const mapUrl = "https://yandex.ru/maps/?text=ул.+Садовая+15";

  return (
    <Card className="border-2 border-primary/20 shadow-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-96 bg-gradient-to-br from-pink-100 to-purple-100">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.617644,55.755826&z=16&l=map"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0"
            title="Карта проезда"
          />
        </div>
        
        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Ресторан "Усадьба"</h3>
              <p className="text-muted-foreground mb-4">{address}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Car" size={18} className="text-primary" />
                  Бесплатная парковка для гостей
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Train" size={18} className="text-primary" />
                  5 минут от метро "Садовая"
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={() => window.open(mapUrl, '_blank')}
              className="flex-1"
              size="lg"
            >
              <Icon name="Navigation" size={20} className="mr-2" />
              Открыть в Яндекс.Картах
            </Button>
            <Button 
              onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(address)}`, '_blank')}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <Icon name="Map" size={20} className="mr-2" />
              Google Maps
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
