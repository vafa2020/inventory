import { useState } from "react";
import Category from "./component/Category";
import NavBar from "./component/NavBar";
import Product from "./component/Product";
import ProductList from "./component/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const onDelete = (id) => {
    console.log(id);
    const afterDelete = products.filter((product) => product.id !== id);
    setProducts(afterDelete);
  };
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar products={products} />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategories={setCategories} />
        <Product categories={categories} setProducts={setProducts} />
        <ProductList products={products} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
