const Stat = ({ stat }) => {
  return (
    <div className="flex items-center">
      <div className="text-white text-center space-y-2">
        <p className="font-bold text-3xl md:text-6xl">{stat.value}</p>
        <p className="text-lg md:text-xl">{stat.label}</p>
      </div>
      {stat.id !== 3 && (
        <div className="hidden md:block w-px h-16 bg-white/40 ml-12"></div>
      )}
    </div>
  );
};

export default Stat;
