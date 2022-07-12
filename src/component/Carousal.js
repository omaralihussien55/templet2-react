import React from 'react'
import styled from 'styled-components'
import img from '../left/img4.jpg'
const Button = styled.div`
width:50px;
height: 40px;
pading:5px;
background-color:green;
position:absolute;
top:50%;
left : ${props=>props.dir=="left" && 5}px;
right : ${props=>props.dir=="right" && 5}px;
display: flex;
justify-content: center;
align-items: center;
color:white;
`
const Carousal = ({CarslRef,he}) => {
  return (
    <div className='w-100  mt-3' style={{height:`${he}px`}} ref={CarslRef}> 
      <div className='col-11 col-md-9 col-lg-7 mx-auto h-100 '>
      <div id="carouselExampleCaptions" className="w-100 h-100 carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner w-100 h-100">
        <div className="carousel-item active  w-100 h-100">
          <img src={img} className="w-100 h-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item w-100 h-100">
          <img src={img} className="w-100 h-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item w-100 h-100">
          <img src={img} className="w-100 h-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <Button dir='left' className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </Button>
      <Button dir='right' className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </Button>
    </div>

      </div>
          
    </div>
  )
}

export default Carousal