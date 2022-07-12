import React, {useState} from 'react'
import styled from 'styled-components'
import ph1 from '../img/phone1.jpg'
import ph2 from '../img/phone2.jpg'
import ph3 from '../img/phone3.jpg'
import ph4 from '../img/phone4.jpg'
import ph5 from '../img/phone5.jpg'
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
const Item = styled.div `
flex:1  0  100%;
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
display: flex;
justify-content: center;
align-items: center;

`
const Img = styled.img`
width:60px;
height:60px;
border-radius:50%
`
const Testimonial = () => {
    
    const [count,SetCount] = useState(0)

    const HandleSwiper = (dir)=>{
       if(dir == 'right'){
           if(count <=0){
              SetCount(3)
           }else{
            SetCount(count - 1)
           }
       }else{
        if(count >= 3){
            SetCount(0)
         }else{
          SetCount(count + 1)
         }
       }

       
    }
  return (
    <div className='p-2 '>
       <div className='container'>
         <div className='row p-2'>
           <div className='col-md-8 bg-light'>
                <h6 className='p-1 mb-1 text-info'>Testimonial</h6>
                  <div className=''>
                  <Container>

  
                     <Wrapper>
                         <Item count={count} className="text-center p-2 bg-light">
                           <div className='d-flex justify-content-start align-items-center p-2'>
                           <Img src={ph1}  className="mr-2"/>
                             <div className='ml-2'>
                             <h5 className='p-1'>Bedrom Design</h5>
                             <h6 className='p-1 text-center text-muted '>Bedrom Design</h6>
                             </div>
                           </div>
                            <p className='p-2 mb-2 text-center text-muted'>
                            lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                            lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                            lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                            lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                            lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                            lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                            </p>
                         </Item>
                        
                         <Item count={count} className="text-center p-2 bg-light">
                         <div className='d-flex justify-content-start align-items-center p-2'>
                         <Img src={ph2}  className="mr-2"/>
                           <div className='ml-2'>
                           <h5 className='p-1'>Bedrom Design</h5>
                           <h6 className='p-1 text-center text-muted '>Bedrom Design</h6>
                           </div>
                         </div>
                          <p className='p-2 mb-2 text-center text-muted'>
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                          lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                          </p>
                       </Item>

                       <Item count={count} className="text-center p-2 bg-light">
                       <div className='d-flex justify-content-start align-items-center p-2'>
                       <Img src={ph3}  className="mr-2"/>
                         <div className='ml-2'>
                         <h5 className='p-1'>Bedrom Design</h5>
                         <h6 className='p-1 text-center text-muted '>Bedrom Design</h6>
                         </div>
                       </div>
                        <p className='p-2 mb-2 text-center text-muted'>
                        lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                        lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                        lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                        lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                        lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                        lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                        </p>
                     </Item>

                     
                     <Item count={count} className="text-center p-2 bg-light">
                     <div className='d-flex justify-content-start align-items-center p-2'>
                     <Img src={ph3}  className="mr-2"/>
                       <div className='ml-2'>
                       <h5 className='p-1'>Bedrom Design</h5>
                       <h6 className='p-1 text-center text-muted '>Bedrom Design</h6>
                       </div>
                     </div>
                      <p className='p-2 mb-2 text-center text-muted'>
                      lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                      lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                      lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                      lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                      lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc, 
                      lorem ipsum hutd ffss gzf gdfdevelop fcfsfdc,
                      </p>
                   </Item>
                     </Wrapper>

                  </Container>
                  </div>
                   <div className='d-flex mt-2 p-2'>
                   <Button className="btn btn-outline-info mr-3 "  type="button" onClick={()=> HandleSwiper("left")}>
                   <i class="fas fa-arrow-alt-circle-left"></i> </Button>
                <Button className="btn btn-outline-info mr-3" type="button" onClick={()=> HandleSwiper("right")}>
                <i class="fas fa-arrow-alt-circle-right"></i>
                </Button>


                   </div>
           </div>

           <div className='col-md-4'>
            <img src={ph1} className="h-100 w-100"/>
           </div>
          </div>
       </div>
    </div>
  )
}

export default Testimonial