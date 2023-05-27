const Filter = ({ onChange,onSort }) => {
  return (
    <div>
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
        <select className="bg-transparent text-slate-400 rounded-xl" onChange={onSort}>
          <option className="bg-slate-500 text-slate-300" value={""}>
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value={"newest"}>
            Newest
          </option>
          <option className="bg-slate-500 text-slate-300" value={"oldest"}>
            Oldest
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
