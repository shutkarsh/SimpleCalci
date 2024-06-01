let string = "";
let buttons = document.querySelectorAll('.key');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        console.log(e.target)
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.getElementById('answer').value = string
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            document.getElementById('answer').value = string
        }

        else{
            string = string + e.target.innerHTML
        document.getElementById('answer').value = string
        }
        
    })
})