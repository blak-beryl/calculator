function getnum(num){
    let input_num = document.getElementById("textview");
    switch(num) {
        case 1:
            input_num.value +="1";
            break;
        case 2:
            input_num.value +="2";
            break;
        case 3:
            input_num.value +="3";
            break;
        case 4:
            input_num.value +="4";
            break;
        case 5:
            input_num.value +="5";
            break;
        case 6:
            input_num.value +="6";
            break;
        case 7:
            input_num.value +="7";
            break;
        case 8:
            input_num.value +="8";
            break;
        case 9:
            input_num.value +="9";
            break;
        case 0:
            input_num.value +="0";
            break;
    }
}

//clear screen function
function clearnum(){
    document.getElementById("textview").value ="";
}

//operators
function operator(sign){
    let input_num =document.getElementById("textview")
    switch(sign){
        case "+":
                input_num.value +="+";
                break;
            case "-":
                input_num.value +="-";
                break;
            case "*":
                input_num.value +="*";
                break;
            case "/":
                input_num.value +="/";
                break; 
                  case "%":
                input_num.value +="%";
                break;
            case ".":
                input_num.value +=".";
                break;
          
    }
}

//backspace
    function backspace() {
        let input_num = document.getElementById("textview");
        let bspace = input_num.value;

        if (bspace.length > 0) {
            bspace = bspace.substring(0, bspace.length-1);
            input_num.value = bspace;
        }
        
    }

    //EqualTo Function
    function compute() {
        let input_num = document.getElementById("textview");
        ans = Math.floor(+eval(input_num.value));
        document.getElementById('textview').value = "=" + ans;
    }

    function powerbtn(){
        moyo=document.getElementById("power").value
        switch(moyo){
            case("OFF"):document.getElementById("power").value="ON"
            break
            case("ON"):document.getElementById("power").value="OFF"
        }
    }