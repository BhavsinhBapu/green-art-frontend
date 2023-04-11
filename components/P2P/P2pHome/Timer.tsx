import React, { useState, useEffect } from "react";

const Timer = ({ payment_expired_time }: any) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      //@ts-ignore
      const diff: any = new Date(payment_expired_time) - now;

      if (diff > 0) {
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
      } else {
        setTimeLeft("Expired");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [payment_expired_time]);

  return (
    <div className="mt-3">
      <h5 className="card-title">Payment time left</h5>
      <p className="card-text">{timeLeft}</p>
    </div>
  );
};

export default Timer;
