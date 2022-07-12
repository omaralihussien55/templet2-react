import React from 'react'
import ph2 from '../img/phone2.jpg'
import ph3 from '../img/phone3.jpg'
import ph4 from '../img/phone4.jpg'
const Blog = () => {
  return (
    <div className='bg-light by-4 '>
     <h4 className='px-1 mb-2 pt-4 text-center text-info '>OUR BLOG</h4>
     <div className=''><h3 className='col-lg-4 col-md-8  col-sm-10 m-auto mb-2 p-3 text-center'>Read The Latest News & Articles From Our Blog</h3></div>
      <div className='container'>
         <div className='row  px-2   py-5'>
           <div className='col-md-6 col-lg-4 bg-white mb-2 p-0'>
               <div className='h-100 w-100 mr-1'>
                 <div className='h-50 w-100 mb-3 p-2'>
                    <img src={ph2} className="w-100 h-100" />
                 </div>
                 <div className='d-flex mb-3 align-items-center p-2'>
                 <a href='' className='btn btn-info mr-1'><i className='fas fa-phone'></i></a>
                 <h5 className='mx-4'>Diam amet eos at no eos</h5>
                 </div>
                 <p className='mb-2 p-2 text-muted col-10 mr-auto'>Diam amet eos at no eos sit, amet rebum ipsum clita stet,
                  diam sea est diam eos, sit vero stet justo
                  </p>
                  <ul className='d-flex mb-2 p-2'>
                  <li className='col p-1 '><i className='fas fa-eye text-info'></i>Admin</li>
                  <li className='col p-1 mx-2'><i className='fas fa-eye text-info'></i> WebDesign</li>
                  <li className='col p-1 '><i className='fas fa-eye  text-info'></i>15</li>
                  </ul>
               </div>
           </div>


           <div className='col-md-6 col-lg-4 bg-white mb-2 p-0'>
           <div className='h-100 w-100 mr-1'>
             <div className='h-50 w-100 mb-3 p-2'>
                <img src={ph3} className="w-100 h-100" />
             </div>
             <div className='d-flex mb-3 align-items-center p-2'>
             <a href='' className='btn btn-info mr-1'><i className='fas fa-phone'></i></a>
             <h5 className='mx-4'>Diam amet eos at no eos</h5>
             </div>
             <p className='mb-2 p-2 text-muted col-10 mr-auto'>Diam amet eos at no eos sit, amet rebum ipsum clita stet,
              diam sea est diam eos, sit vero stet justo
              </p>
              <ul className='d-flex mb-2 p-2'>
              <li className='col p-1 '><i className='fas fa-eye text-info'></i>Admin</li>
              <li className='col p-1 mx-2'><i className='fas fa-eye text-info'></i> WebDesign</li>
              <li className='col p-1 '><i className='fas fa-eye  text-info'></i>15</li>
              </ul>
           </div>
       </div>


       <div className='col-md-6 col-lg-4 bg-white mb-2 p-0'>
       <div className='h-100 w-100 mr-1'>
         <div className='h-50 w-100 mb-3 p-2'>
            <img src={ph4} className="w-100 h-100" />
         </div>
         <div className='d-flex mb-3 align-items-center p-2'>
         <a href='' className='btn btn-info mr-1'><i className='fas fa-phone'></i></a>
         <h5 className='mx-4'>Diam amet eos at no eos</h5>
         </div>
         <p className='mb-2 p-2 text-muted col-10 mr-auto'>Diam amet eos at no eos sit, amet rebum ipsum clita stet,
          diam sea est diam eos, sit vero stet justo
          </p>
          <ul className='d-flex mb-2 p-2'>
          <li className='col p-1 '><i className='fas fa-eye text-info'></i>Admin</li>
          <li className='col p-1 mx-2'><i className='fas fa-eye text-info'></i> WebDesign</li>
          <li className='col p-1 '><i className='fas fa-eye  text-info'></i>15</li>
          </ul>
       </div>
   </div>
         </div>
      </div>
     </div>
  )
}

export default Blog