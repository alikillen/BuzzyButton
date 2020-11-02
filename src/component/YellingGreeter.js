import React from "react"
import { render } from "react-dom";

class YellingGreeter extends React.Component {
  constructor(props){
    super(props)
    this.YellingGreeter = this.YellingGreeter.bind(this)
  }

  function YellingGreeterFunc () {
    let handleSubmit = (event) => {
  // need to take in a string - form input- as a prop
  // take that string, capitalise it, return it in H1
    event.preventDefault();
    alert('You have submitted the form.')
  }
}
 render() {
   return(
     <div className="wrapper">
       <h1>Yelling Greeter</h1>
       <form onSubmit={handleSubmit}>
         <fieldset>
           <label>
             <p>Input</p>
             <input name="input" />
           </label>
         </fieldset>
         <button type="submit">Submit</button>
       </form>
     </div>
   )
 }

 }

export default YellingGreeterFunc

// function YellingGreeter(){

//   return (
//     <div>
//       <YellingGreeter message = "this is me being quiet!"/>
//     </div>
//   )
// }