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
  const [sortCategory, setSortCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = sortedCategory(result);
    setFilterProducts(result);
  }, [products, sort, searchValue, sortCategory]);
  useEffect(() => {
    setCategories(JSON.parse(localStorage.getItem("categories")) || []);
    setProducts(JSON.parse(localStorage.getItem("products")) || []);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);
  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

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
  const onSortCategory = (e) => {
    const { value } = e.target;
    setSortCategory(value);
  };
  const sortedCategory = (array) => {
    if (!sortCategory) return array;
    return array.filter((product) => product.category === sortCategory);
  };
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar products={products} />
      <div className="container flex items-start justify-evenly p-10">
        <div className="flex-auto mx-10">
          <Category setCategories={setCategories} categories={categories} />
          <Product categories={categories} setProducts={setProducts} />
        </div>
        <div className="flex-auto mx-10">
          <Filter
            onChange={searchHandler}
            onSort={sortHandler}
            categories={categories}
            onSortCategory={onSortCategory}
            sortCategory={sortCategory}
          />
          <ProductList products={filterProducts} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
