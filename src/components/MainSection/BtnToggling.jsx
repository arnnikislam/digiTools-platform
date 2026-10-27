const BtnToggling = ({ tab, activeBtn, setActiveBtn, cartProducts }) => {
  return (
    <button
      onClick={() => setActiveBtn(tab)}
      className={`btn border-none  rounded-full ${activeBtn === tab && "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"}`}
    >
      {tab === "Cart" ? `${tab} (${cartProducts.length})` : `${tab}`}
    </button>
  );
};

export default BtnToggling;
