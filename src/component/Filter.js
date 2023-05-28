const Filter = ({
  onChange,
  onSort,
  categories,
  onSortCategory,
  sortCategory,
}) => {
  return (
    <div>
      <h1 className="font-bold border-b-2 mb-5 text-slate-500 border-b-slate-500 py-3">Filter</h1>
      <div className="flex items-center justify-between mb-6">
        <label className="text-slate-500 text-lg">search</label>
        <input
          onChange={onChange}
          type="text"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label className="text-slate-500 text-lg">Sort</label>
        <select
          className="bg-transparent text-slate-400 rounded-xl"
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value={""}>
            select a sort
          </option>
          <option className="bg-slate-500 text-slate-300" value={"newest"}>
            Newest
          </option>
          <option className="bg-slate-500 text-slate-300" value={"oldest"}>
            Oldest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label className="text-slate-500 text-lg">Category</label>
        <select
          className="bg-transparent text-slate-400 rounded-xl"
          onChange={onSortCategory}
          value={sortCategory}
        >
          <option className="bg-slate-500 text-slate-300" value={""}>
            select a category
          </option>
          {categories.map((category) => (
            <option
              key={category.id}
              className="bg-slate-500 text-slate-300"
              value={category.title}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
