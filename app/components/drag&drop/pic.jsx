import React from 'react'
import {useDrag} from "react-dnd";
const Pic= ({id,url, height, width}) => {
    const [{isDragging},drag]=useDrag(()=>({
        type:"image",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        }),
    }))
  return (
    <div>
      <img ref={drag} src={url} alt="img not found" height={height ? height : "250px"} width={width ? width : "250px"}  style={{border:isDragging?"7px solid black":"0px",border:"1px solid black",borderRadius:"10px"}}/>
    </div>
  )
}

export default Pic
