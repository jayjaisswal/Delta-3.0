import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import "./Card.css";
function Card({ EachCourse, likedCourses, setLikedCourses }) {
  function likeHandler() {
    //  likedCourses.include(EachCourse.id)-->This checks if the id of EachCourse is present in the likedCourses array
    if (likedCourses.includes(EachCourse.id)) {

      // pehle se like h to ushko dislike kr rhe hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== EachCourse.id));
      toast.warning("Pasand nhi aaya ohh!")
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([EachCourse.id]);
      }
      else{
        setLikedCourses((prev) => [...prev, EachCourse.id ])
      }

      toast.success("Mzaa aa gya! thankyou for LOVE")
    }
  }
  return (
    <div className=" ParentCard">
      <div>
        <img src={EachCourse.image.url} alt={EachCourse.image.alt}></img>
      </div>

      <div className="heart">
        <button onClick={likeHandler}>
          <FcLike />
        </button>
      </div>
      <div className="title">
        <p>{EachCourse.title}</p>
      </div>
      <div className="desc">
        <p>{EachCourse.description}</p>
      </div>
    </div>
  );
}
export default Card;
