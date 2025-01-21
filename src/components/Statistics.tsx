import React from "react";

import MagicPen from "./icons/MagicPen";
import People from "./icons/People";
import ShieldTick from "./icons/ShieldTick";

interface StatisticsItemProps {
  icon: React.ReactNode;
  number: number;
  text: string;
}

export default function Statistics() {
  const stats = [
    { icon: <ShieldTick />, number: 286, text: "виконаних замовлень" },
    { icon: <MagicPen />, number: 152, text: "унікальних дизайнів" },
    { icon: <People />, number: 68, text: "задоволених клієнтів" },
  ];

  return (
    <section className="container mx-auto mb-28">
      <div className="flex justify-center items-center content-around gap-36">
        {stats.map((stat, idx) => (
          <StatisticsItem key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatisticsItem({ icon, number, text }: StatisticsItemProps) {
  return (
    <div className="flex flex-col gap-2 items-center max-w-20 text-center">
      <div>{icon}</div>
      <p>{number}</p>
      <p>{text}</p>
    </div>
  );
}
