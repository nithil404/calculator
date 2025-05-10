    function display(a){
        let data=document.getElementById("disp")
        if(data.innerHTML =='0'){
            data.innerHTML =a       
         }
         else{
            data.innerHTML += a

         }
    
}

function u_clear(){
    let data = document.getElementById("disp")
    data.innerHTML = 0
    
}

function calculate(){
    let data =document.getElementById("disp")
    let expression = data.innerHTML
    let res = eval(expression)
    console .log(expression)
    data.innerHTML = res
}
