import { useState, useEffect } from 'react';


const CurrentDayPeriod = () => {
  const [timeData, setTimeData] = useState({
    period: "",
    emoji: "",
    message: "",
    hour: 0
  });


  const getTimeData = (timezone = 'Asia/Kolkata') => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      hour12: false
    });
    
    const hour = parseInt(formatter.format(new Date()));
    
    if (hour >= 5 && hour < 12) {
      return {
        period: "morning",
        emoji: "🌅",
        message: "शुभ प्रभात",
        hour: hour
      };
    } else if (hour >= 12 && hour < 16) {
      return {
        period: "afternoon",
        emoji: "☀️",
        message: "शुभ दोपहर",
        hour: hour
      };
    } else if (hour >= 16 && hour < 19) {
      return {
        period: "evening",
        emoji: "🌆",
        message: "शुभ संध्या",
        hour: hour
      };
    } else {
      return {
        period: "night",
        emoji: "🌑",
        message: "शुभ रात्रि",
        hour: hour
      };
    }
  };


  useEffect(() => {
    setTimeData(getTimeData());

    const interval = setInterval(() => {
      setTimeData(getTimeData());
    }, 60000); // 60sec

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="flex items-center space-x-2 text-2xl font-semibold">
      <span>{timeData.emoji}</span>
      <span>{timeData.message}</span>
    </div>
  );
};

export default CurrentDayPeriod;