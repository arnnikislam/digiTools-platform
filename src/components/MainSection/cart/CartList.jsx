import CartItem from "./CartItem";
import EmptyCartState from "./EmptyCartState";

const CartList = ({ cartProducts }) => {
  // let totalPrice = 0;
  return cartProducts.length !== 0 ? (
    <div className="w-[92%] md:w-[80%] mx-auto border border-base-200 rounded-2xl p-2 md:p-8 my-4 md:my-8 shadow-sm">
      <h2 className="font-bold text-2xl mb-5">Your Cart</h2>

      {/* cart items */}
      <div>
        {cartProducts.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
        ))}
      </div>
      <div className="flex justify-between px-2 md:px-4">
        <p>Total:</p>
        <p className="font-bold text-xl italic">
          0
          {/* ${cartProducts.map((product) => (totalPrice += product.price))} */}
        </p>
      </div>
      <div className="px-4 mt-5">
        <button className="btn btn-block border-none rounded-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
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
