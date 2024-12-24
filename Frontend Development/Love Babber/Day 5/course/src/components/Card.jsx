import { FcLike } from "react-icons/fc";
import "./Card.css";
function Card({ EachCourse }) {
  return (
    <div>
      <div className=" ParentCard">
        <div>
        <img src={EachCourse.image.url} alt={EachCourse.image.alt}></img>
      </div>

      <div>
        <button>
          <FcLike />
        </button>
      </div>
      <div>
        <p>{EachCourse.title}</p>
      </div>
      <div>
        <p>{EachCourse.description}</p>
      </div>
    </div>
    </div>
  );
}
export default Card;
