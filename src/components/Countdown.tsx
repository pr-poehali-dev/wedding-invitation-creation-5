import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const weddingDate = new Date('2026-08-01T15:00:00').getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Дней' },
    { value: timeLeft.hours, label: 'Часов' },
    { value: timeLeft.minutes, label: 'Минут' },
    { value: timeLeft.seconds, label: 'Секунд' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {timeUnits.map((unit, index) => (
        <Card key={index} className="border-2 border-primary/20 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              {unit.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Countdown;
