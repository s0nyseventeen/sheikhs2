interface StatisticsItemProps {
  icon: string;
  number: number;
  text: string;
}

export default function Statistics() {
  const stats = [
    { icon: "Icon", number: 286, text: "виконаних замовлень" },
    { icon: "Icon", number: 152, text: "унікальних дизайнів" },
    { icon: "Icon", number: 68, text: "задоволених клієнтів" },
  ];

  return (
    <div className="flex justify-center gap-24">
      {stats.map((stat, idx) => (
        <StatisticsItem
          key={idx}
          icon={stat.icon}
          number={stat.number}
          text={stat.text}
        />
      ))}
    </div>
  );
}

function StatisticsItem({ icon, number, text }) {
  return (
    <div className="flex flex-col gap-6">
      <div>{icon}</div>
      <div>{number}</div>
      <div>{text}</div>
    </div>
  );
}
