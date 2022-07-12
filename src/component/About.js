import React, { useEffect, useRef } from 'react'

function About() {

  return (
    <div className='mt-5'>
      <div className='container'>
            <div className='row p-2 parent' >
               <div className='col-sm-12 col-md-6 mb-1 same-height ' >
                 <div className='p-2 d-flex flex-column justify-content-center h-100 align-items-center bg-info'>
                      <i className='fas fa-phone mb-4 p-2 mt-4 text-dark'></i>
                      <h1 className='mb-4 p-3 text-dark'>25+</h1>
                      <p className='mb-4 p-3 text-dark font-weight-bolder '>Years Experience</p>
                 </div>
               </div>
               <div className='col-sm-12 col-md-6 p-2 bg-light '>
                   <h5 className='p-2 mb-2 text-info mt-4'>LEARN ABOUT US</h5>
                   <p className='font-weight-bolder mb-2 col-9 mx-auto inf-about p-2'>
                      We Are The Best Interior Designing Firm In Your City
                   </p>

                   <p className='font-weight-bolder mb-3 p-2 text-muted '>
                   Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                    justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo 
                   sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                </p>

                 <div className='row m-0 p-2'>
                    <div className='col-md-6 mb-2 '>
                        <div className='d-flex p-2'>
                               <h4 className='fas fa-phone text-info p-2 mr-1  '></h4>
                               <h6 className='p-2 ml-3 text-dark '>Project Planning</h6>
                       </div>
                     </div>


                 <div className='col-md-6 mb-2 '>
                     <div className='d-flex p-2'>
                         <h4 className='fas fa-phone text-info p-2 mr-1 '></h4>
                            <h6 className='p-1 ml-3 text-dark '>Exterior & Interior</h6>
                    </div>
                  </div>


                <div className='col-md-6 mb-2 '>
                  <div className='d-flex p-2'>
                      <h4 className='fas fa-phone text-info p-2 mr-1 '></h4>
                      <h6 className='p-1 ml-3 text-dark '>Commercial Design</h6>
                 </div>
               </div>

            <div className='col-md-6 mb-2 '>
               <div className='d-flex p-2'>
                       <h4 className='fas fa-phone text-info p-2 mr-1 '></h4>
                       <h6 className='p-1 ml-3 text-dark '>Residential Design</h6>
              </div>
            </div>

                 
                 </div>
               </div>
            </div>
      </div>
    </div>
  )
}

export default About