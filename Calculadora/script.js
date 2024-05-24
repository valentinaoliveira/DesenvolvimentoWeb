
 var equation = "";
 var operator = "";
 var output = document.querySelector('#output');
 var previousEquation = document.querySelector("#previous");
 var count = 0;
 var operation_clicked = false;
 var decimalCount = 0;
 
 

 function Operation(char){ 
    if(char == "+"){
       
        equation += output.value + "@";
        
       if(count > 0){
        var slice = equation.split("@");

        var int1 = parseFloat(slice[0]);
        var int2 = parseFloat(slice[1]);
        
        solution = Compute(int1, int2);

        output.value = solution;

        equation = solution + "@";
       }

       operator = "+";
       count++;
       operation_clicked = true;
       decimalCount = 0;

    }

    else if(char == "-"){
        
        equation += output.value + "@";
        
       
       if(count > 0){
            var slice = equation.split("@");
            var int1 = parseFloat(slice[0]);
            var int2 = parseFloat(slice[1]);
            console.log(equation);
            solution = Compute(int1, int2);
            output.value = solution;
            equation = solution + "@";
       }
       operator = "-";
       count++;
       operation_clicked = true;
       decimalCount = 0;

    }

    else if(char == "/"){
        
        equation += output.value + "@";
        
       
       if(count > 0){
            var slice = equation.split("@");
            var int1 = parseFloat(slice[0]);
            var int2 = parseFloat(slice[1]);
            console.log(equation);
            solution = Compute(int1, int2);
            output.value = solution;
            equation = solution + "@";
       }
       operator = "/";
       count++;
       operation_clicked = true;
       decimalCount = 0;

    }

    else if(char == "*"){
        
        equation += output.value + "@";
        
       
       if(count > 0){
            var slice = equation.split("@");
            var int1 = parseFloat(slice[0]);
            var int2 = parseFloat(slice[1]);
            console.log(equation);
            solution = Compute(int1, int2);
            output.value = solution;
            equation = solution + "@";
       }
       operator = "*";
       count++;
       operation_clicked = true;
       decimalCount = 0;

    }

 }



 function Append(char){
    if (output.value.length > 18 && !(operation_clicked)){
        return 0;
    }
    
    if (operation_clicked){
        output.value = char;
        operation_clicked = false;
        
    }
    else{
        output.value += char;
    }
    
 }

 function AppendDec(char){
    
    if (output.value.length > 18){
        return 0;
    }
    
    if (operation_clicked){
        output.value = char;
        decimalCount++;
        operation_clicked = false;
    }
    
    else if (decimalCount == 0){
        output.value += char;

        decimalCount++;
    }
    
    
 }

 function Clear(){
    count = 0;
    equation = "";
    operator = "";
    output.value = "";
    previousEquation.value = "";
    decimalCount = 0;
 }

 function Backspace(){
    str = output.value;

    str = str.substring(0, str.length-1);

    output.value = str;
    
 }

 function Compute(int1, int2){
    var prevEq = storeEquation(int1, int2);
    previousEquation.value = prevEq;
    
    var solution = 0

    if (operator == "+"){
        solution = int1 + int2;
    }
    if (operator == "-"){
        solution = int1 - int2;
    }
    if (operator == "*"){
        solution = int1 * int2;
    }
    if (operator == "/"){
        solution = int1 / int2;
    }
    
    return solution.toString();
    
    
 }

 function Equals(){
    
    if (operator != ""){
        equation += output.value + "@";

        var slice = equation.split("@");

        var int1 = parseFloat(slice[0]);
        var int2 = parseFloat(slice[1]);
        
        solution = Compute(int1, int2);
        
        output.value = solution;

        equation = solution + "@";

        count = 0;
        operation_clicked = true;
        operator = "";
        equation = "";
    }
    else{
        return 0;
    }

 }


 function Percent(){

    var num = parseFloat(output.value);

    
    output.value = (num / 100).toString();
 }

 function storeEquation(int1, int2){
    var string = "";

    string = int1 + " " + operator + " " + int2 + " " + "=";

    
    
    return string;

 }

