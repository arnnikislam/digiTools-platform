import Stat from "./Stat";

const Stats = () => {
  const stats = [
    { id: 1, value: "50K+", label: "Active Users" },
    { id: 2, value: "200+", label: "Premium Tools" },
    { id: 3, value: "4.9", label: "Rating" },
  ];
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-8 md:py-12">
        {/* individual stat */}
        {stats.map((stat) => (
          <Stat key={stat.id} stat={stat}></Stat>
        ))}
      </div>
    </div>
  );
};

export default Stats;
