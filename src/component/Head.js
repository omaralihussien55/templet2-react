import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import Contact from './Contact'
import Carousal from './Carousal'
import { Carousls } from './Carousal'
const Home = styled.div`

`
const Head = () => {
const HeadRef = useRef()
const HomeRef = useRef()
const CarslRef = useRef()
const [he,setHe] = useState(100)

// offsetHeight
// clientHeight
useEffect(()=>{
  setHe(HomeRef.current.clientHeight - HeadRef.current.clientHeight)
window.onresize = function(){
  setHe(HomeRef.current.clientHeight - HeadRef.current.clientHeight)
}


})
  return (
    <Home className='home' ref={HomeRef} >
<div className='head' ref={HeadRef} id='head'>
<Contact/>
</div>
<Carousal  CarslRef={CarslRef} he={he}/>

   
    </Home>
  )
}

export default Head