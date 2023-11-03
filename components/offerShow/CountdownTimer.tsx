import { useState, useEffect } from 'preact/hooks';

export interface Props {
  targetDate: string;
}

const CountdownTimer = (props: Props) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(props.targetDate).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [props.targetDate]);

  return (
    <div class="flex gap-1">
      <div class="flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black">
        <span class="text-lg">{countdown.days}</span>
				<span class="text-[8px] uppercase">Dias</span>
    	</div>
      <div class="flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black">
        <span class="text-lg">{countdown.hours}</span>
				<span class="text-[8px] uppercase">Horas</span>
    	</div>
      <div class="flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black">
        <span class="text-lg">{countdown.minutes}</span>
				<span class="text-[8px] uppercase">Minutos</span>
    	</div>
      <div class="flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black">
        <span class="text-lg">{countdown.seconds}</span>
				<span class="text-[8px] uppercase">Segundos</span>
    	</div>
    </div>
  );
};

export default CountdownTimer;