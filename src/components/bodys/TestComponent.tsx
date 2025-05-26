// import React from "react";
// import { useState } from "react";
// const courses = [
//     {
//         id: 1,
//         name: "Course1"
//     },
//     {
//         id: 2,
//         name: "Course2"
//     },
//     {
//         id: 3,
//         name: "Course3"
//     }
// ]
// function TestComponent() {

//     // const [checkedRadio, setCheckedRadio] = useState();
//     const [checkedCheckbox, setCheckedCheckbox] = useState([]);

//     // const handleCheckedRadioButton = (id) => {
//     //     setCheckedRadio(id);
//     // }
//     const handleCheckedCheckbox = (id) => {
//         setCheckedCheckbox(prevValue => {
//             const isChecked = checkedCheckbox.includes(id);
//             if (isChecked) {
//                 return checkedCheckbox.filter(item => item.id !== id);
//             }
//             else {
//                 return [...prevValue, id];
//             }
//         });
//     }
//     const HandleClick = () => {
//         console.log(checkedCheckbox);
//     }
//     return (
//         <div style={{ padding: 30 }}>
//             {/* <h1>Redio button example</h1>
//             {courses.map(course => (
//                 <div key={course.id}>
//                     <input type="radio"
//                         checked={setCheckedRadio === course.id}
//                         onChange={() => handleCheckedRadioButton(course.id)}>
//                     </input>
//                     <label>{course.name}</label>
//                 </div>
//             ))} */}
//             <h1>Checkbox example</h1>
//             {courses.map(course => (
//                 <div key={course.id}>
//                     <input type="checkbox"
//                         checked={checkedCheckbox.includes(course.id)}
//                         onChange={() => handleCheckedCheckbox(course.id)}>
//                     </input>
//                     <label>{course.name}</label>
//                 </div>
//             ))}
//             <button onClick={HandleClick}>Submit</button>
//         </div>
//     )
// }
// export default TestComponent;
export { }