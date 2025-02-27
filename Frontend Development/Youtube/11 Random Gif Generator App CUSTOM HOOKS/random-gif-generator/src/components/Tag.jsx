import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Tag() {
  const [tag, setTag] = useState("bike");
  //   const [gif, setGif] = useState([]);
  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     // console.log(imageSource);
  //     setGif(imageSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();

  //   }, []);
  const [gif, loading, fetchData] = useGif(tag);

  function clickHandler(tag) {
    fetchData(tag);
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="flex flex-col bg-blue-500 w-1/2 rounded-lg mt-6 border border-blue-300 shadow-2xl items-center">
      <h1 className="text-center font-bold text-2xl underline mt-2 mb-3">
        RANDOM {tag.toUpperCase(tag)} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width={450} />}

      <input
        className="mt-4 w-7/9 bg-white text-center text-lg py-2 rounded-lg mb-[3px]"
        type="text"
        value={tag}
        placeholder="Search GIFS"
        onChange={changeHandler}
      />
      <button
        onClick={clickHandler}
        className="bg-yellow-300 w-7/9 py-2 rounded-lg cursor-pointer text-lg text-center text-grey mb-4 mt-3"
      >
        Generate
      </button>
    </div>
  );
}
export default Tag;
