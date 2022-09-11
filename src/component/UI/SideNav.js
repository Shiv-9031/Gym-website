
//  import "../UI/SideNav.css";
 import React,{useState} from "react";


function SideNav(props){
  
    const [NewTitle,SetNewTitle]=useState(' ');
    const [title,newTitle]=useState(props.title);
    let [Title,setTitle]=useState();

    const EventHandle=(event)=>{
        SetNewTitle(event.target.value);
        
        
    }
    const clickHandler=()=>{
        if(title===props.title){
            newTitle(NewTitle);
            setTitle(NewTitle);
            SetNewTitle(" ");
        }
        else{
            newTitle(()=>{
                return props.title;
            });
            setTitle(' ');
            SetNewTitle(NewTitle);
        }

    }

    return(
        <div className="SideNav">
            <ul>
                <li><button onClick={clickHandler}>{title}</button><h1>{Title}</h1></li>
                <input type="text" value={NewTitle} onChange={EventHandle}/>
            </ul>    
        </div>
    );
    
}
export default SideNav;