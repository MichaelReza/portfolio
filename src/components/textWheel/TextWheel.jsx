import React from 'react';
import './textwheel.css'
// import '../../routes/home/home.css'

const TextWheel = (props) => {
  const styles = {
    wheelContainer: {
      color: props.color,
      backgroundColor: props.backgroundColor,
      padding: props.padding,
    }
  }



  return (
    <div className="text__carousel">
      <div className="text__intro">
        <h1>{props.beginningText}</h1>
      </div>
      <div className="text__mask">
        <ul>
          <li><h1>{props.text[0]}</h1></li>  
          <li><h1>{props.text[1]}</h1></li>  
          <li><h1>{props.text[2]}</h1></li>  
          <li><h1>{props.text[3]}</h1></li>  
        </ul>
      </div>
    </div>
  );
};

export default TextWheel;
