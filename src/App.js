import { useEffect, useState } from "react";
import Category from "./component/Category";
import NavBar from "./component/NavBar";
import Product from "./component/Product";
import ProductList from "./component/ProductList";
import Filter from "./component/Filter";

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilterProducts(result);
  }, [products, sort, searchValue]);

  const onDelete = (id) => {
    const afterDelete = products.filter((product) => product.id !== id);
    setProducts(afterDelete);
  };
  const searchHandler = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const filterSearchTitle = (array) => {
    return array.filter((product) =>
      product.title.includes(searchValue.trim().toLowerCase())
    );
  };

  const sortHandler = (e) => {
    const { value } = e.target;
    setSort(value);
  };

  const sortDate = (array) => {
    return array.sort((a, b) => {
      if (sort === "newest") {
        return a.createdAt > b.createdAt ? -1 : 1;
      } else if (sort === "oldest") {
        return a.createdAt > b.createdAt ? 1 : -1;
      }
    });
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
