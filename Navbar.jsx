import {React} from "react";
export default function Nav(){
    const toggler = ()=>{
        let sb=document.getElementById('sidebar')
        sb.classList.toggle('open')
      }
    return(
        
   
        <nav>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
        <span>The Era Engineers</span>
        
        <button onClick={toggler}>Menu</button>
      
        </nav>
    )
}