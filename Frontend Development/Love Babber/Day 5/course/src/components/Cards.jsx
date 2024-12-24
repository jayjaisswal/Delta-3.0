import Card from "./Card";
import './card.css';
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
          <Card key={EachCourse.id} EachCourse={EachCourse}></Card>
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
