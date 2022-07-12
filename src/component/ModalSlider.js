import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color : rgb(58, 57, 57,.2);;
width:100%;
height:100vh;
z-index:9999
`

const Modal = styled.div`
width:100%;
height:100%;
display :flex;
justify-content:center;
align-items:center
`

const Content = styled.div`
width:400px;
height:300px;
overflow:hidden;
position:relative;
`
const Wrapper = styled.div`
width:100%;
height:100%;
display :flex;
`

const Item = styled.div`
flex:1 0 100%;
height:100%;
background-color : ${p => p.bg};
transition:all .5s;
transform:translate(${props=> props.count * -100}%)
`

const Imgs = styled.img`
width:100%;
height:100%;
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
background-color: rgb(89, 89, 92,.7);
`
const Close = styled.div`
position:absolute;
width:40px;
height:40px;
background-color: rgb(89, 89, 92,.5);
top:10px;
left:10px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
color:white;
cursor:pointer;
`
const ModalSlider = ({arr,HandleCloseModal}) => {
 const [btn, setBtn] = useState(false)
 const [btnRight , setBtnRight] = useState(false)
 const [count , setCount] = useState(0)

 const HandleCount = (dir)=>{
   console.log(dir)
   if(dir == 'right'){

   
      if(count >= arr.length -1 ){
        setBtn(true)
      }else{
        setCount(count +  1)
      }
   }else{
    
    if(count <= 0 ){
       setBtn(false)
    }else{
      setCount(count - 1)
    }
   }
 }


  return (
    <Container>
       <Modal >
           <Content>

        {
          btn ? (
            <Button dir='left' className="carousel-control-next" type="button" onClick={()=> HandleCount('left')} >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </Button>
          ) :(

            <Button dir='right' className="carousel-control-next" type="button" onClick={()=> HandleCount('right')}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </Button>
          )
        }

               <Wrapper>
               {
                 arr.map((i,index)=>{
                  return(
                    <Item count={count} key={index}>
                      <Imgs src={i} />
                    </Item>
                  )
                 })
               }

               </Wrapper>

           <Close onClick={HandleCloseModal}><i class="fas fa-times"></i></Close>
           </Content>
       </Modal>
    </Container>
  )
}

export default ModalSlider