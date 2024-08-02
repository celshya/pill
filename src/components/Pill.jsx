import React from 'react'

const Pill = ({selectedItems,handlePillClick}) => {
  return (
    <>
    
        {selectedItems.map((ele,ind)=>{
            return <span className='pill' onClick={()=>handlePillClick(ele.email)}key={ele.email}>{ele.lastName} {ele.firstName} &times;</span>
        })}
     </>   
  )
}

export default Pill