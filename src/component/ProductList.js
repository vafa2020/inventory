import ProductDetails from "./ProductDetails";

const ProductList = ({ products, onDelete }) => {
    console.log(products);
  return (
    <div className="mt-5">
      <h2 className="text-green-500">Product List</h2>
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
