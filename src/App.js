import Category from "./component/Category";
import NavBar from "./component/NavBar";
import Product from "./component/Product";

function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category />
        <Product />
      </div>
    </div>
  );
}

export default App;
