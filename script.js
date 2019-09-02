var exp ='', number, decimal, equal, operator, allowSR;
var textview = document.forms['myForm']['textview'];

function  insertNum(num){
    if (equal) {
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    }
    else {
        exp = textview.value + num;
        textview.value = exp;
        number = true;
    }
    if (operator) decimal = false;
    //SR('a');
}