import React from "react";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Head from "./component/Head";
import About from "./component/About";
import Service from "./component/Service";
import Projects from "./component/Projects";
import Members from "./component/Members";
import Testimonial from "./component/Testimonial";
import Blog from "./component/Blog";
import Nav from "./component/Nav";
import Contact from "./component/Contact";
function App() {
  return (
<BrowserRouter>
 <Nav/>
<Routes>
  <Route path="/" index  element={ <Head/>} />
  <Route path="about"   element={  <About/>} />
  <Route path="service"  element={ <Service/>} />
  <Route path="project"   element={ <Projects/>} />
  <Route path="member"  element={ <Members/>} />
  <Route path="contact"  element={ <Contact/>} />
  <Route>
    <Route path="blog">
           <Route   index element={<Blog/>}/>
           <Route path="test" element={<Testimonial/>}/>
    </Route>
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
