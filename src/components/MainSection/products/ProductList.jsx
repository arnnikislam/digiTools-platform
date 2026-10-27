import ProductCard from "./ProductCard";

const ProductList = ({ productsData, cartProducts, setCartProducts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-[92%] md:w-[80%] mx-auto my-8">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        ></ProductCard>
      ))}
    </div>
  );
};

export default ProductList;
