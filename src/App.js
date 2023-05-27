import { useEffect, useState } from "react";
import Category from "./component/Category";
import NavBar from "./component/NavBar";
import Product from "./component/Product";
import ProductList from "./component/ProductList";
import Filter from "./component/Filter";

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const onDelete = (id) => {
    const afterDelete = products.filter((product) => product.id !== id);
    setProducts(afterDelete);
  };
  const searchHandler = (e) => {
    const { value } = e.target;
    const afterSearch = products.filter((product) =>
      product.title.includes(value.toLowerCase())
    );
    setFilterProducts(afterSearch);
  };
  const sortHandler = (e) => {
    const { value } = e.target;
    setSort(value);

    const afterSort = products.sort((a, b) => {
      if (sort === "newest") {
        return a.createdAt > b.createdAt ? 1 : -1;
      }
      return a.createdAt > b.createdAt ? -1 : 1;
    });
    setFilterProducts(afterSort);
  };
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar products={products} />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategories={setCategories} categories={categories} />
        <Product categories={categories} setProducts={setProducts} />
        <Filter onChange={searchHandler} onSort={sortHandler} />
        <ProductList products={filterProducts} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
