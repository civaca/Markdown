const {useState,useEffect}=React


let MARKDOWN=()=>{
const[text,setText]=useState("de");
useEffect(()=>handleClick(),[]);


let handleClick=()=>{
    let result=document.getElementById("editor").value;
    setText(result);
    
    document.getElementById("preview").innerHTML = marked.parse(result);
    
    }
   
return(
    <div>
    <textarea id ="editor"onChange={handleClick}># TExt \n ## hola</textarea>
    <div id="preview"></div>
    </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById("final"))
root.render(<MARKDOWN />)