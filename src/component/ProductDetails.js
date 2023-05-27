const ProductDetails = ({ product, onDelete }) => {
  return (
    <div className="flex items-center justify-between mb-2 mt-5 w-full min-w-[400]">
      <span className="text-slate-400">{product.title}</span>
      <div className="flex items-center gap-x-3">
        <span className="text-slate-400">
          {new Date(product.createdAt).toLocaleDateString("fa-IR")}
        </span>
        <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
          {product.category}
        </span>
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
          {product.quantity}
        </span>
        <button
          onClick={onDelete}
          className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
