import { DepthChart } from "pennant";
import "pennant/dist/style.css";
import React from "react";

const AAPL_data = {
  buy: [
    { price: 132.79743, volume: 339 },
    { price: 132.79742, volume: 713 },
    { price: 132.79741, volume: 421 },
    { price: 132.7974, volume: 853 },
    { price: 132.79739, volume: 152 },
    { price: 132.79738, volume: 243 },
    { price: 132.79737, volume: 296 },
    { price: 132.79736, volume: 123 },
    { price: 132.79735, volume: 158 },
    { price: 132.79734, volume: 238 },
    { price: 132.79733, volume: 164 },
    { price: 132.79732, volume: 273 },
    { price: 132.79731, volume: 35 },
    { price: 132.79729, volume: 30 },
    { price: 132.79726, volume: 29 },
    { price: 132.79722, volume: 484 },
    { price: 132.79721, volume: 458 },
    { price: 132.7972, volume: 244 },
    { price: 132.79719, volume: 10 },
    { price: 132.79698, volume: 124 },
  ],
  sell: [
    { price: 132.79744, volume: 847 },
    { price: 132.79745, volume: 2412 },
    { price: 132.79746, volume: 635 },
    { price: 132.79747, volume: 323 },
    { price: 132.79748, volume: 828 },
    { price: 132.79749, volume: 322 },
    { price: 132.7975, volume: 268 },
    { price: 132.79751, volume: 92 },
    { price: 132.79752, volume: 249 },
    { price: 132.79753, volume: 189 },
    { price: 132.79754, volume: 179 },
    { price: 132.79755, volume: 122 },
    { price: 132.79756, volume: 28 },
    { price: 132.7976, volume: 114 },
    { price: 132.79764, volume: 27 },
    { price: 132.79767, volume: 10 },
    { price: 132.79772, volume: 31 },
    { price: 132.79785, volume: 484 },
    { price: 132.79786, volume: 364 },
    { price: 132.79787, volume: 244 },
  ],
};

export default function DepthChartView() {
  const theme = localStorage.getItem("theme");
  return (
    <div style={{ height: "570px", width: "100%" }}>
      <DepthChart data={AAPL_data} theme={theme == "dark" ? "dark" : "light"} />
    </div>
  );
}
