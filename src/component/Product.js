import { useState } from "react";

const Product = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    quantity: "",
    category: "",
  });
  const [products, setProducts] = useState([]);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const categoryItem = {
      ...inputValues,
      id: Math.floor(Math.random() * 10000),
      createdAt: new Date().toISOString(),
    };
    setProducts([...products, categoryItem]);
    setInputValues({ title: "", description: "" });
  };

  return (
    <section>
      <div className={"mb-6"}>
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Product
        </h2>
        <form
          onSubmit={submitHandler}
          className="bg-slate-600 p-4 rounded-xl flex flex-col gap-y-4"
        >
          <div>
            <label className="block mb-1 text-slate-400">title</label>
            <input
              onChange={changeHandler}
              value={inputValues.title}
              name="title"
              type="text"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto form-input"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-400">description</label>
            <input
              onChange={changeHandler}
              value={inputValues.quantity}
              name="quantity"
              type="number"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto form-input"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-400">category</label>
            <select className="text-slate-400 bg-transparent rounded-xl w-full form-select">
              <option value={"شیر"}>شیر</option>
            </select>
          </div>
          <button
            type="submit"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default Product;
