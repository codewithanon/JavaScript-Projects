let result=document.getElementById("khanoo");


let calculate =(number)=>{
    result.value+=number;
} 
let Result=()=>{
    try{
        result.value=eval(result.value)
    }

catch
    (err){
       alert("Sahi Ta Likh");
    }
}
function clr(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1)
}