import React from 'react'

const Helper = () => {
  return (
      <div className='bg-dark helper'>
    <div className='row m-0 p-2'>
     <div className='col-md-6'>
      <div className='d-flex justify-content-md-start justify-content-center'>
        <a href='#' className='p-2 ml-1 text-white'>FAQs</a>
        <span className='p-2 ml-1 text-white'>|</span>
        <a href='#' className='p-2 ml-1 text-white'>Help</a>
        <span className='p-2 ml-1 text-white'>|</span>
        <a href='#' className='p-2 ml-1 text-white'>Support</a>

      </div>
     </div>
       <div className='col-md-6'>
         <div className='d-flex justify-content-md-end justify-content-center '>
          <a href='' className='ml-1 p-2'><i className='fab fa-facebook text-white'></i></a>
          <a href='' className='ml-1 p-2'><i className='fab fa-youtube text-white'></i></a>
          <a href='' className='ml-1 p-2'><i className='fab fa-google-plus text-white'></i></a>
          <a href='' className='ml-1 p-2'><i className='fab fa-twitter text-white'></i></a>
         </div>
       </div>
    </div>
    </div>
  )
}

export default Helper