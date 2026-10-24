import ProductCardFeature from "./ProductCardFeature";

const ProductCard = ({ product }) => {
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <div className="card-body relative">
        <span
          className={`badge badge-md border-none rounded-full badge-warning text-right absolute top-5 right-4 ${product.tagType === "best-seller" && "text-[#BB4D00] bg-[#FEF3C6]"} ${product.tagType === "new" && "text-[#0A883E] bg-[#DBFCE7]"} ${product.tagType === "popular" && "text-[#9514FA] bg-[#E1E7FF]"}`}
        >
          {product.tag}
        </span>
        <div className="h-12 w-12 flex justify-center items-center border border-base-300 rounded-full">
          <img
            className="h-10 w-10 block p-2"
            src={product.icon}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-[#627382]">{product.description}</p>
          <p className="text-xl">
            <span className="font-bold text-3xl">${product.price}</span>/
            <span className="text-[##627382]">{product.period}</span>
          </p>
        </div>
        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {product.features.map((feature, index) => (
            <ProductCardFeature
              key={index}
              feature={feature}
            ></ProductCardFeature>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-block border-none text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
