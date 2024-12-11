import React from 'react'

export default function CustomButton({text,type}) {
    
  let btnClass= 'btn btn-lg rounded-pill shadow ';

  if(type == 'delete'){
    btnClass += 'btn-outline-danger';
  }else if(type =='info'){
    btnClass += 'btn-outline-secondary';
  }else if(type=='create'){
    btnClass += 'btn-outline-primary';
  }


  return (
    <button className={btnClass}>{text}</button>
  )
}
