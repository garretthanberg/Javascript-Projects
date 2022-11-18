//CREATES AN OBJECT TO KEEP TRACK OF VALUES.
const Calculator = {
    //THIS WILL DISPLAY 0 ON THE CALCULATOR SCREEN.
    Display_Value: "0",
    //THIS WILL HOLD THE FIRST OPERAND FOR ANY EXPRESSIONS, WE SET IT TO NULL FOR NOW.
    First_Operand: null,
    //THIS CHECKS WETHER OR NOT THE SECOND OPERAND HAS BEEN INPUTTED BY THE USER.
    Wait_Second_Operand: false,
    //THIS WILL HOLD THE OPERATOR, WE SET IT TO NULL FOR NOW.
    operator: null,
};

//THIS MODIFES VALUES EACH TIME A BUTTON IS CLICKED ON.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //THIS CHECKS IF THE WAIT_SECOND_OPERAND IS TRUE AND SETS DISPLAY_VALUE
    //TO THE KEY THAT WAS CLICKED ON.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //THIS OVERWRITES DISPLAY_VALUE IF THE CURRENT VALUE IS 0
        //OTHERWISE IT ADDS ONTO IT.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//THIS SECTION HANDLES DECIMAL POINTS.
function Input_Decimal(dot) {
    //THIS ENSURES THAT ACCIDENTAL CLICKING OF THE DECIMAL POINT DOESN'T
    //CAUSE BUGS IN THE OPERATION
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //WE ARE SAYING THAT IF THE DISPLAY_VALUE DOES NOT CONTAIN A DECIMAL POINT
        //WE WANT TO ADD A DECIMAL POINT.
        Calculator.Display_Value += dot;
    }
}

//THIS SECTION HANDLES OPERATORS
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //WHEN AN OPERATOR KEY IS PRESSED WE CONVERT THE CURRENT NUMBER
    //DISPLAYED ON THE SCREEN TO A NUMBER AND THEN STORE THE RESULT IN
    //CALCULATOR.FIRST_OPERAND IF IT DOESN'T ALREADY EXIST.
    const Value_of_Input = parseFloat(Display_Value);
    //CHECKS IF AN OPERATOR ALREADY EXISTS AND IF WAIT_SECOND_OPERAND IS TRUE,
    //THEN UPDATES THE OPERATOR AN EXITS FROM THE FUNCTION.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//CHECKS IF AN OPERATOR ALREADY EXISTS
        const Value_Now = First_Operand || 0;
        //IF OPERATOR EXISTS, PROPERTY LOOKUP IS PERFORMED FOR THE OPERATOR
        //IN THE PERFORM_CALCULATION OBJECT AND THE FUNCTION THAT MATCHES THE
        //OPERATOR IS EXECUTED.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //HERE WE ADD A FIXED AMOUNT OF NUMBERS AFTER THE DECIMAL.
        result = Number(result).toFixed (9);
        //THIS WILL REMOVE ANY TRAILING 0'S
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;        
}
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//THIS FUNCTION UPDATES THE CALCULATOR SCREEN WITH THE CONTENTS OF DISPLAY_VALUE
function Update_Display() {
    //MAKES USE OF THE CALCULATOR-SCREEN CLASS TO TARGET THE
    //INPUT TAG IN THE HTML DOCUMENT
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//THIS SECTION MONITORS BUTTON CLICKS
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //THE TARGET VARIABLE IS AN OBJECT THAT REPRESENTS THE ELEMENT
    //THAT WAS CLICKED.
    const { target } = event;
    //IF THE ELEMENT THAT WAS CLICKED ON IS NOT A BUTTON, EXIT THE FUNCTION.
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ENSURES THAT AC CLEARS ALL INPUTS FROM THE CALCULATOR SCREEN.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})