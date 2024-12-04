let input=document.getElementById('inputbox');
let btn=document.querySelectorAll('button');
let string="";
let arr=Array.from(btn);
arr.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="0";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            input.value=string;
        }
        else if(e.target.innerHTML=='^'){
            string+='**';
            input.value=string;
        }
        else{
            string = string+e.target.innerHTML;
            input.value=string;
        }
    })
})

