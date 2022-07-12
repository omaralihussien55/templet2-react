import React,{useState} from 'react'
import styled from 'styled-components'
import ph1 from '../img/phone1.jpg'
import ph2 from '../img/phone2.jpg'
import ph3 from '../img/phone3.jpg'
import ph4 from '../img/phone4.jpg'
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
const Content = styled.div`
width:100%;
height:100%;
display: none;
justify-content: center;
align-items: center;
`
const Child = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-color: rgb(89, 89, 92,.4);
padding:0;
display:none;
&:hover ${Content}{
    display:flex
}
`

const Item = styled.div`
position:relative;
height:100%;
margin-right: 2%;
transition:all .5s;
transform:translate(${props=> props.count * -100}%);
&:hover ${Child}{
display:block
}
`
const Img = styled.img`
width:100%;
height:75%;
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
const Member= styled.div`
height: 400px;
`

const Members = () => {
    
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
  return (
    <Member>
       <div className='container h-100'>
           <div className='row h-100 p-2'>
            <div className='col-md-3 bg-info'>
              <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
               <h6 className='mb-2 px-1 text-white text-center mt-4 pt-3'>OUR TEAM</h6>
               <h2 className='text-center p-1 mb-2 font-weight-bolder '>Meet Our Team Members</h2>
              </div>
            </div>
              <div className='col-md-9 h-100 d-flex justify-content-center align-items-center bg-light'>
              <Container>
              <Button dir='left' className="carousel-control-next bg-info"  type="button" onClick={()=> HandleSwiper("left")}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </Button>

                 <Wrapper>
                     <Item count={count} className="text-center  bg-light col-12 col-md-6 col-lg-4 p-0" >
                     <Img src={ph1}/>

                     <div className='bg-dark p-1'>
                        <h4 className='mb-1 p-1 text-center text-white '>Bedrom Design</h4>
                        <p className='p-2 mb-1 text-center text-muted'>
                        lorem ipsum 
                        </p>
                    </div>
                      <Child>
                        <Content>
                          <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-facebook'></i></a>
                          <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-twitter'></i></a>
                          <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-youtube'></i></a>
                                                
                        </Content>
                      </Child>
                     </Item>
                     <Item   count={count} className="text-center p-0 bg-light col-12 col-md-6 col-lg-4">
                     <Img src={ph2}/>
                     <div className='bg-dark p-1'>
                     <h4 className='mb-1 p-1 text-center text-white '>Bedrom Design</h4>
                     <p className='p-2 mb-1 text-center text-muted'>
                     lorem ipsum 
                     </p>
                 </div>
                 <Child>
                 <Content>
                   <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-facebook'></i></a>
                   <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-twitter'></i></a>
                   <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-youtube'></i></a>
                                         
                 </Content>
               </Child>
                     </Item>
                     <Item  count={count} className="text-center p-0 bg-light col-12 col-md-6 col-lg-4">
                     <Img src={ph3}/>
                     <div className='bg-dark p-1'>
                        <h4 className='mb-1 p-1 text-center text-white '>Bedrom Design</h4>
                        <p className='p-2 mb-1 text-center text-muted'>
                        lorem ipsum 
                        </p>
                    </div>
                    <Child>
                    <Content>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-facebook'></i></a>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-twitter'></i></a>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-youtube'></i></a>
                                            
                    </Content>
                  </Child>
                     </Item>
                     <Item  count={count} className="text-center p-0 bg-light col-12 col-md-6 col-lg-4">
                     <Img src={ph4}/>
                     <div className='bg-dark p-1'>
                        <h4 className='mb-1 p-1 text-center text-white '>Bedrom Design</h4>
                        <p className='p-2 mb-1 text-center text-muted'>
                        lorem ipsum 
                        </p>
                    </div>
                    <Child>
                    <Content>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-facebook'></i></a>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-twitter'></i></a>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-youtube'></i></a>
                                            
                    </Content>
                  </Child>
                     </Item>
                     <Item  count={count} className="text-center p-0 bg-light col-12 col-md-6 col-lg-4">
                     <Img src={ph4}/>
                     <div className='bg-dark p-1'>
                        <h4 className='mb-1 p-1 text-center text-white '>Bedrom Design</h4>
                        <p className='p-2 mb-1 text-center text-muted'>
                        lorem ipsum 
                        </p>
                    </div>
                    <Child>
                    <Content>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-facebook'></i></a>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-twitter'></i></a>
                      <a href='' className='border border-info py-2 px-3 ml-2 member-link'><i className='fab fa-youtube'></i></a>
                                            
                    </Content>
                  </Child>
                     </Item>
                 </Wrapper>

              <Button dir='right' className="carousel-control-next bg-info" type="button" onClick={()=> HandleSwiper("right")}>
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
               </Button>
              </Container>
              </div>
           </div>
       </div>
    </Member>
  )
}

export default Members