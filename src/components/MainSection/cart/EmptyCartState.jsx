import { ShoppingCart } from "lucide-react";

const EmptyCartState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4 gap-3">
      <div className="bg-base-200 rounded-full p-5">
        <ShoppingCart className="w-10 h-10 text-base-content/40" />
      </div>
      <h3 className="text-2xl font-semibold">Your cart is empty</h3>
      <p className="text-[16px] text-base-content/60 max-w-xs">
        Looks like you haven't added any tools yet. Browse the products and add
        something!
      </p>
    </div>
  );
};

export default EmptyCartState;
