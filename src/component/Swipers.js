import React,{useState} from 'react'
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
flex:1  0  ${props=> props.flex}%;
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

function Swipers({flex,arr=[],img,h}) {
    
    const [count,SetCount] = useState(0)

    const HandleSwiper = (dir)=>{
       if(dir == 'right'){
           if(count <=0){
              SetCount(arr.length -2)
           }else{
            SetCount(count - 1)
           }
       }else{
        if(count >= arr.length -2 ){
            SetCount(0)
         }else{
          SetCount(count + 1)
         }
       }

       
    }
  return (
    <React.Fragment>

    <Container>
    <Button dir='left' className="carousel-control-next bg-info"  type="button" onClick={()=> HandleSwiper("left")}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </Button>

       <Wrapper>

       {
          arr.map(({title,info,icon},idx)=>{
             return(
               <Item count={count} className="text-center p-2 bg-light"  flex={flex} key={idx}>
                    {h && <h4 className={icon}></h4>}
                    {img&& <img src={icon}/>}
               <h4 className='mb-3 p-2 text-center '>{title}</h4>
               <p className='p-2 mb-2 text-center text-muted'>
               {info}
               </p>
            </Item>
             )
          })
       }

       </Wrapper>

    <Button dir='right' className="carousel-control-next bg-info" type="button" onClick={()=> HandleSwiper("right")}>
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
     </Button>
    </Container>
    </React.Fragment>
  )
}

export default Swipers