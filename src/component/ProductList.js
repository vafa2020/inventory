import ProductDetails from "./ProductDetails";

const ProductList = ({ products, onDelete }) => {
  console.log(products);
  return (
    <div className="mt-5">
      <h1 className="font-bold border-b-2 mb-5 text-slate-500 border-b-slate-500 py-3">
        ProductList
      </h1>

      {products.map((product) => (
        <ProductDetails
          key={product.id}
          product={product}
          onDelete={() => onDelete(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
