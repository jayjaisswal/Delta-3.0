import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Card.css";
function Card({ person }) {
  return (
    <div className="card">
      <div className="imageParent">
        <img className="imageChild" src={person.image} alt={person.name} />
      </div>

      <div>
        <p className="name">{person.name}</p>
      </div>
      <p className="job">{person.job}</p>
      <div></div>
      <div className="icon">
        <FaQuoteLeft />
      </div>
      <div>
        <p className="desc">{person.text}</p>
      </div>
      <div className="icon">
        <FaQuoteRight />
      </div>
    
    </div>
  );
}
export default Card;
