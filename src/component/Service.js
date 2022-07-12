import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
width:100%;
height: 250px;
overflow: hidden;
position:relative;
`
const Wrapper = styled.div`
width:100%;
height:100%;
display: flex;


`
const Item = styled.div`
flex:1  0  50%;
height:100%;
margin-right: 2%;
transition:all .5s;
transform:translate(${props=> props.count * -100}%)
`
const Button = styled.div`
width:50px;
height: 40px;
pading:5px;
border-radius:10px;
position:absolute;
opacity:.3;
top:50%;
left : ${props=>props.dir=="left" && 5}px;
right : ${props=>props.dir=="right" && 5}px;
display: flex;
justify-content: center;
align-items: center;
color:white;
`
let num = 0
const Service = () => {

    const [count,SetCount] = useState(0)

    const HandleSwiper = (dir)=>{
       if(dir == 'right'){
           if(count <=0){
              SetCount(2)
           }else{
            SetCount(count - 1)
           }
       }else{
        if(count >= 2){
            SetCount(0)
         }else{
          SetCount(count + 1)
         }
       }

       
    }

    // let memo = useMemo(()=>{
    //     let r =setTimeout(()=>{
    //         let num = num + 1
    //         if(num >= 2){
    //             num = 0
    //          }
    //     },2400)

    //     return num
    // })

    useEffect(()=>{
    },[count])
  return (
    <div className='mt-3'>
      <div className='container'>
         <div className='row p-2'>
              <div className='col-md-6'>
                  <div className=''>
                      <h6 className='p-2 mb-2 text-info '>OUR AWESOME SERVICES</h6>
                     <h4 className='col-9 mx-auto p-1 mb-3 text-dark inf-about'>
                     Awesome Interior Designing Services For Your Home
                     </h4>
                     <p className='p-2 mb-3 text-muted'>
                     Invidunt lorem justo clita. Erat lorem labore ea, 
                     justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                      justo sed sed diam. Ea et erat ut sed diam sea ipsum
                     </p>

                     <a href='' className=' btn btn-info mb-3 '>View More</a>
                  </div>
              </div>

              <div className='col-md-6'>
                <Container>
                <Button dir='left' className="carousel-control-next bg-info"  type="button" onClick={()=> HandleSwiper("left")}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </Button>

                   <Wrapper>
                       <Item count={count} className="text-center p-2 bg-light">
                          <h3 className='fas fa-phone mb-4 mt-3'></h3>
                          <h4 className='mb-3 p-2 text-center '>Bedrom Design</h4>
                          <p className='p-2 mb-2 text-center text-muted'>
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                          </p>
                       </Item>
                       <Item   count={count} className="text-center p-2 bg-light">
                       <h3 className='fas fa-phone mb-4 mt-3'></h3>
                       <h4 className='mb-3 p-2 text-center'>Bedrom Design</h4>
                       <p className='p-2 mb-2 text-center text-muted'>
                       lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                       lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                       </p>
                       </Item>
                       <Item  count={count} className="text-center p-2 bg-light">
                       <h3 className='fas fa-phone mb-4 mt-3'></h3>
                       <h4 className='mb-3 p-2 text-center'>Bedrom Design</h4>
                       <p className='p-2 mb-2 text-center text-muted'>
                       lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                       lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                       </p>
                       </Item>
                       <Item  count={count} className="text-center p-2 bg-light">
                       <h3 className='fas fa-phone mb-4 mt-3'></h3>
                       <h4 className='mb-3 p-2 text-center'>Bedrom Design</h4>
                       <p className='p-2 mb-2 text-center text-muted'>
                       lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                       lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                       </p>
                       </Item>
                   </Wrapper>

                <Button dir='right' className="carousel-control-next bg-info" type="button" onClick={()=> HandleSwiper("right")}>
                   <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 </Button>
                </Container>
              </div>
         </div>
      </div>
    </div>
  )
}

export default Service