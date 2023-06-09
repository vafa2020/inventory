import { useState } from "react";

const Category = ({ setCategories, categories }) => {
  const [isShow, setIsShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const findIndex = categories.findIndex(
      (category) => category.title === inputValues.title
    );
    if (findIndex === 0) {
      alert("دسته بندی شما تکراریست");
      return;
    }
    const categoryItem = {
      ...inputValues,
      id: Math.floor(Math.random() * 10000),
      createdAt: new Date().toISOString(),
    };
    setCategories((prevCategory) => [...prevCategory, categoryItem]);
    setInputValues({ title: "", description: "" });
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };
  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`}>
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
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
            <textarea
              onChange={changeHandler}
              value={inputValues.description}
              name="description"
              cols={50}
              rows={4}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full form-textarea"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={cancelHandler}
              className="flex-1 text-slate-400 rounded-xl py-2 border border-slate-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div>
        <button
          onClick={() => setIsShow((prevShow) => !prevShow)}
          className="text-slate-600 text-lg mb-4 font-medium"
        >
          Add New Category?
        </button>
      </div>
    </section>
  );
};

export default Category;
