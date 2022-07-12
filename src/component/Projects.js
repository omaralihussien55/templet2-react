import React, { useState } from 'react'
import styled from 'styled-components'
import ModalSlider from './ModalSlider'
import ph1 from '../img/phone1.jpg'
import ph2 from '../img/phone2.jpg'
import ph3 from '../img/phone3.jpg'
import ph4 from '../img/phone4.jpg'
import ph5 from '../img/phone5.jpg'
import ph6 from '../img/phone7.jpg'
const Images = styled.img`
width:100%;
height:100%
`
const Content = styled.div`
height:100%;
width:100%;
display:none;
justify-content:center;
align-items:center;
`
const Child = styled.div`
height:0%;
width:100%;
position:absolute;
bottom:0;
left:0;
background-color:#252531;
z-index:11;
transition:all .5s;
&:hover ${Content}{
display:flex
}
`
const ContainerImg = styled.div`
height:300px;
position:relative;
&:hover ${Child}{
height:100%;
}
`
const array = [
    {id:1,photo:ph1,data:"runing" ,arrmodal:[ph1,ph2,ph3,ph4,ph5]},
    {id:2,photo:ph2,data:"runing",arrmodal:[ph5,ph1,ph4,ph2,ph3]},
    {id:3,photo:ph3,data:"runing",arrmodal:[ph2,ph4,ph1,ph5,ph3]},
    {id:4,photo:ph4,data:"complet",arrmodal:[ph3,ph4,ph2,ph5,ph1]},
    {id:5,photo:ph5,data:"upcomping",arrmodal:[ph3,ph5,ph1,ph4,ph2]},
    {id:6,photo:ph6,data:"complet",arrmodal:[ph1,ph3,ph2,ph5,ph4]},
]

const Projects = () => {
    const [project ,setProject] = useState(array)
    const [modalArry ,setModalArry] = useState(array[0].arrmodal)
     const [showModal ,setShowModal] = useState(false)
  const HandleDisplay = (dis)=>{

if(dis == 'all'){
    setProject(array)
}else{
    let item = array.filter((i)=>{
        return i.data == dis
    })

    setProject(item)
}

  }
  const HandlModal = (index) =>{

// let item = array.filter((i)=>{
//   return i.id == id 
// })

setModalArry(array[index].arrmodal)
setShowModal(true)
  }
  const HandleCloseModal =(e)=>{
    
    setShowModal(false)
    }

  return (
    <div className='mt-3'>
     {showModal&& <ModalSlider arr={modalArry} HandleCloseModal={HandleCloseModal} />}
         <div className='container'>
           <ul className='row col-sm-11 col-md-7 mx-auto p-2 ul-project'>
            <li className='col rounded p-2 ml-2 mb-2 text-info border border-info text-center active' onClick={() => HandleDisplay("all")}>All</li>
            <li className='col rounded p-2 ml-2 mb-2 text-info border border-info text-center' onClick={() => HandleDisplay("complet")}>Complete</li>
            <li className='col rounded p-2 ml-2 mb-2 text-info border border-info text-center'  onClick={() => HandleDisplay("runing")}>Runing</li>
            <li className='col rounded p-2 ml-2 mb-2 text-info border border-info text-center'  onClick={() => HandleDisplay("upcomping")}>Upcomping</li>
           </ul>

           <div className='row mt-4 p-2 ' >
            
             {
                 project.map(({photo,id},index)=>{

                    return(
                        <ContainerImg className='col-md-6 col-lg-4 m-0 p-0 upcomping block' key={index}>
                        <Images src={photo} />
                        <Child>
                        <Content>
                            <div className=''>
                             <h3 className='text-white p-1 mb-3 text-center'>Project Name</h3>
                             <ul className='d-flex justify-content-center align-items-center '>
                               <li  className='px-4 py-2  ml-2 border border-info project-link'><i className='fas fa-phone text-info'></i></li>
                               <li  className='px-4 py-2 ml-2 border border-info project-link' onClick={()=> HandlModal(index)}><i className='fas fa-eye text-info'></i></li>
                             </ul> 
                             </div>
                         </Content>
                        </Child>
              
                     </ContainerImg>

                    )
                 })
             }

            
           </div>
         </div>
    </div>
  )
}

export default Projects