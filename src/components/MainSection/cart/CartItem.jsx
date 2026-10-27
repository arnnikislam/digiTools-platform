import { Bounce, toast } from "react-toastify";

const CartItem = ({ cartItem, cartProducts, setCartProducts }) => {
  const handleRemoveProduct = () => {
    toast.warn("Product removed from cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    const newCartItems = cartProducts.filter(
      (cartProduct) => cartProduct.id !== cartItem.id,
    );
    setCartProducts(newCartItems);
  };
  return (
    <div className="flex item bg-center justify-between bg-[#F9FAFC] rounded-2xl p-3 mb-4">
      <div className="flex gap-2">
        <div className="h-10 w-10 flex justify-center items-center border border-base-300 rounded-full">
          <img
            className="h-10 w-10 block p-2"
            src={cartItem.icon}
            alt={cartItem.name}
          />
        </div>
        <div>
          <h2 className="font-bold">{cartItem.name} </h2>
          <p className="text-[#627382] text-sm">${cartItem.price} </p>
        </div>
      </div>
      <button onClick={handleRemoveProduct} className="text-red-500 font-bold">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
