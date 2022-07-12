import React from 'react'

const Contact = () => {
  return (
    <div className='mt-3'>
      <div className='container'>
          <div className='row  '>
            <div className='col-lg-4 col-sm-12 mb-2'>
               <div className='d-flex p-1'>
                   <div className='mr-2 d-flex justify-content-center align-items-center icon-font'><i class="fas fa-building text-info"></i></div>
                   <div className='ml-4'>
                       <h3 className='mb-2 p-1'>Our Office</h3>
                       <p className='text-muted'>123 Street, New York, USA</p>
                   </div>
               </div>
            </div>

            <div className='col-lg-4 col-sm-12 mb-2'>
            <div className='d-flex p-1'>
                <div className='mr-2 d-flex justify-content-center align-items-center icon-font'><i class="fas fa-envelope text-info"></i></div>
                <div className='ml-4'>
                    <h3 className='mb-2 p-1 '>Email Us</h3>
                    <p className='text-muted'>mail@domain.com</p>
                </div>
            </div>
         </div>


         <div className='col-lg-4 col-sm-12 mb-2'>
         <div className='d-flex p-1'>
             <div className='mr-2 d-flex justify-content-center align-items-center icon-font'><i class="fas fa-phone text-info"></i></div>
             <div className='ml-4'>
                 <h3 className='mb-2 p-1 '>Call Us</h3>
                 <p className='text-muted'>01093389354</p>
             </div>
         </div>
      </div>
          </div>
      </div>
    </div>
  )
}

export default Contact