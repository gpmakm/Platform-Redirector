import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Navbar'
import tee from "./GroupLogo.png"
import akm from "./AkarshPic.jpg"

function App() {
  //const [count, setCount] = useState(0)
  const toggler = ()=>{
    let sb=document.getElementById('sidebar')
    sb.classList.toggle('open')
  }

  return (
    <>
    <Nav/>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<div id="main">

      <div id="sidebar" className='close'>
        <img src={tee} alt="akm" width={155} height={155} id='imgtee' />
        <div id='image-container'>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        {/* </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        
        <ul>
          <li><a href="https://www.codewithharry.com" target="_blank" rel="noopener noreferrer">CodeWithHarry</a></li>
          <li><a href="https://www.wscubetech.com/" target="_blank" rel="noopener noreferrer">WS CubeTech</a></li>
          <li><a href="https://www.apnacollege.in/" target="_blank" rel="noopener noreferrer">Apna College</a></li>
          <li><a href="https://www.wordpress.com/" target="_blank" rel="noopener noreferrer">Wordpress</a></li>
          <li><a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">W3 School</a></li>
          <li><a href="https://geeksforgeeks.com/" target="_blank" rel="noopener noreferrer">Geeeks For Geeks</a></li>
          <li><a href="https://www.javatpoint.com/" target="_blank" rel="noopener noreferrer">JavaTPoint</a></li>
        </ul>
      </div>
      <div id="sub">
     <div id="info">
      <p>Welcome to the blog page of <span id='company'>The Era Engineers</span>! <br />It is a redirective page to various coding platforms</p>
      Just click on the  navigation button button and select your favourite study platform.
      
     </div>
     <div className="blogs">
      You can also see our blogs here. <u>Just click the below link and see the blogs on latest technologies.</u>
      <br></br><a href="/blog">Blogs</a>
     </div>
     <div className="us">
      <h3>||Radhe-Radhe||</h3>
      <p>I am</p>
     <h2> Akarsh Kumar Mishra</h2> <img src={akm} alt="Akarsh Kumar Mishra" id="img" width={170} height={200} />
      , a student pursuing Diploma in Computer Science from Government Polytechnic Muzaffarpur.
      <span>Founder of The Era Engineers</span>

     
      <h4>My Skills are in </h4>
      <ul>
<li>Web Development</li>
<li>App developemnt</li>
<li>Programming</li>
      </ul>
      <p>Out of the above field my expertise are in Web Development. I have created many projects like
         <ul>
        
        <li>DAS(L) - Digital Attendance System for Labs</li>
        <li>FormToPortfolio - A portfolio generator website using form</li>
        <li>Krishna - A python chatbot which is helpful in modern problems like Breakups,etc.</li>
        <li>Prapatra App - A website/app to fill form and save data.</li></ul></p>
     </div>
     </div>
     </div>
   
    </>
  )
}

export default App
