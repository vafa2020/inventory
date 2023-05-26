const NavBar = () => {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-600">
      <h1 className="text-slate-300 font-bold text-xl">
        Inventory Application
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 bg-slate-500 text-slate-300 font-bold text-sm ">
        7
      </span>
    </div>
  );
};

export default NavBar;
