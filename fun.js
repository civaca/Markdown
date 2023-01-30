const {useState,useEffect}=React

marked.setOptions({
    gfm:true,
    breaks:true

});
const intialMark="# Welcome\n## To Markdown Preview\n"+
"## Write your markdown Code to render like so:\n"+
"There's also [links](https://www.freecodecamp.org)\n"+ 
"    This a code block\n\n    return"+
 "\nHeres some code, `<div></div>`, between 2 backticks."+
  "\n![freeCodeCamp Logo](https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90)"+
   "\nYou can also make text **bold**... whoa!"+
    "- And of course there are lists."+ 
    "\n - First item \n1. Hola\n"+ " > Block Quotes!"
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
        <textarea class="form-control"id ="editor"onChange={handleClick}>{intialMark}</textarea>
        <div class="toolbar btn btn-block btn-success">
            <h4>Rendered Elements</h4>
        </div> 
        <div id="preview"></div>
    </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById("final"))
root.render(<MARKDOWN />)