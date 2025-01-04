import React from "react";

interface StatisticsItemProps {
  icon: React.ReactNode;
  number: number;
  text: string;
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
