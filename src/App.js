import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  const items = ["volvo", "mercedes", "Audi"];

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-12 ">
        <div className="w-96 h-56 p-1  bg-orange-400 rounded-md"> 

        <h1 className="text-2xl">Should you use a dropdown ?</h1>
        <Dropdown items={items} />
        </div>
      </div>
    </>
  );
}

export default App;
