console.log("THis is tutorial 65, Last tutorial");
//calculator

let screen = document.getElementById("screen");

let screenValueValue = '';

let buttons = document.querySelectorAll("button");
for(let item of buttons){
    item.addEventListener("click", (e)=>{
        buttonText = item.innerText;
        console.log("Button text is: ", buttonText);

        //logic
        if (buttonText == 'X'){
            buttonText = '*';
            screenValueValue += buttonText;
            screen.value = screenValueValue;
        }
        else if (buttonText == 'C'){
            screenValueValue = '';
            screen.value = screenValueValue;
            
        }
        else if (buttonText == '='){
            screenValueValue = eval(screenValueValue)
            screen.value = screenValueValue;
        }
        else{
            screenValueValue += buttonText;
            screen.value = screenValueValue;
        }
    })
}


// TODO: Backspace Button