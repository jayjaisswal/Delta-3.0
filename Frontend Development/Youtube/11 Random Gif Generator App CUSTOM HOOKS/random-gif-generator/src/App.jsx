import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
<div className="w-full min-h-screen flex flex-col background  items-center">
{/*items-center and item-center are two different properties*/}
      <h1 className="bg-white w-11/12 mt-5 text-center py-4 font-bold text-3xl rounded-lg  ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
