import React, {useState} from 'react';
  
  const Selection = (props) =>  {
    const {applyColor} = props;
    const [background,setBackground] = useState("");

    const handleClick = () =>{
        applyColor(setBackground)
        // console.log("called")
    }
	return (
	  <div
        className='fix-box'
        onClick={handleClick}
        style={{background:background,width:"100px",height:"100px",border:"1px solid black"}}
      >

	  </div>
	);
  }
  
  export default Selection;
  
