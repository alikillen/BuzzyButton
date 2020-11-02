import React from 'react';

function Button() {

  function buzzBuzz() {
    alert('button has been clicked! buzz time!');
    window.navigator.vibrate(200);
  }
  
  return (
    <button onClick={buzzBuzz}>
      Click me!
    </button>
  );
}

export default Button;




// import React from "react"

// class Button extends Component {

//   constructor(props) {
//   super(props)
//   this.buttonClicked = this.buttonClicked.bind(this);
//  }

//  buttonClicked() {
//    alert("i've been clicked! now do something.")
//  }

//  return(
//    <button onClick={this.buttonClicked}>
//      Click me!
//    </button>
//  )

// }

// export default Button;