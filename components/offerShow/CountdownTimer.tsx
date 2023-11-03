import { useState, useEffect } from 'preact/hooks';

export interface Props {
  targetDate: string;
  size: string;
}

const CountdownTimer = (props: Props) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timerItem = props.size === 'big' ? 'lg:w-20 lg:h-20' : '';
  const timerItemGap = props.size === 'big' ? 'lg:gap-3' : '';
  const timerSizeNumber = props.size === 'big' ? 'lg:text-4xl' : '';
  const timerSizeText = props.size === 'big' ? 'lg:text-xs' : '';

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
    <div class={`flex gap-1 ${timerItemGap}`}>
      <div class={`flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black ${timerItem}`}>
        <span class={`text-lg ${timerSizeNumber}`}>{countdown.days}</span>
				<span class={`text-[8px] ${timerSizeText} uppercase`}>Dias</span>
    	</div>
      <div class={`flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black ${timerItem}`}>
        <span class={`text-lg ${timerSizeNumber}`}>{countdown.hours}</span>
				<span class={`text-[8px] ${timerSizeText} uppercase`}>Horas</span>
    	</div>
      <div class={`flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black ${timerItem}`}>
        <span class={`text-lg ${timerSizeNumber}`}>{countdown.minutes}</span>
				<span class={`text-[8px] ${timerSizeText} uppercase`}>Minutos</span>
    	</div>
      <div class={`flex flex-col items-center justify-center w-14 h-14 bg-[#1E1C1C] rounded-lg font-black ${timerItem}`}>
        <span class={`text-lg ${timerSizeNumber}`}>{countdown.seconds}</span>
				<span class={`text-[8px] ${timerSizeText} uppercase`}>Segundos</span>
    	</div>
    </div>
  );
};

export default CountdownTimer;