import React, { useState, useEffect } from "react";
import moment from "moment";

const Timer = ({ endTime }: { endTime: string }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = moment(endTime).diff(now);

      if (diff > 0) {
        const duration = moment.duration(diff);
        const minutes = Math.floor(duration.asMinutes());
        const seconds = Math.floor(duration.seconds());
        setTimeLeft(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
      } else {
        setTimeLeft("Expired");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="mt-5 mb-5">
      <h3 className="card-title">Payment time left</h3>
      <h4 className="card-text">{timeLeft}</h4>
    </div>
  );
};

export default Timer;
