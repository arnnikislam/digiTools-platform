import { Bounce, toast } from "react-toastify";
import CartItem from "./CartItem";
import EmptyCartState from "./EmptyCartState";

const CartList = ({ cartProducts, setCartProducts }) => {
  // clear all products if click on proceed btn
  const handleProceedCheckout = () => {
    toast.error("All products removed from cart.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setCartProducts([]);
  };
  // calculating total prices
  const totalPrice = cartProducts.reduce((sum, item) => sum + item.price, 0);
  return cartProducts.length !== 0 ? (
    <div className="w-[92%] md:w-[80%] mx-auto border border-base-200 rounded-2xl p-2 md:p-8 my-4 md:my-8 shadow-sm">
      <h2 className="font-bold text-2xl mb-5">Your Cart</h2>

      {/* cart items */}
      <div>
        {cartProducts.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          ></CartItem>
        ))}
      </div>
      <div className="flex justify-between px-2 md:px-4">
        <p>Total:</p>
        <p className="font-bold text-xl italic">${totalPrice}</p>
      </div>
      <div className="px-4 mt-5">
        <button
          onClick={handleProceedCheckout}
          className="btn btn-block border-none rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  ) : (
    <div>
      <EmptyCartState></EmptyCartState>
    </div>
  );
};

export default CartList;
