import Card from "./Card";
import './card.css';
import { useState } from "react";
function Cards({ allCourse }) {
  // console.log(allCourse);

   // function getCourses()
  // {
  //     Object.value(allCourse).forEach((array)=>{
  //         array.forEach((courseData)=>{
  //             courses.push(courseData)
  //         })
  //     })
  //     return courses;
  // }

  const [likedCourses, setLikedCourses] = useState([]);
  let courses = [];
  Object.values(allCourse).forEach((array) => {
    array.forEach((courseData) => {
      courses.push(courseData);
    });
  });
  return (
    <div className="cardss">
      {
        courses.map((EachCourse) => (
  
  <Card key={EachCourse.id} EachCourse={EachCourse} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        ))

        // Using return in map function and without return
        //     courses.map((EachCourse)=> {
        //     return <Card key={EachCourse.id} EachCourse={EachCourse}></Card>
        // })
      }
    </div>
  );


 
}
export default Cards;
