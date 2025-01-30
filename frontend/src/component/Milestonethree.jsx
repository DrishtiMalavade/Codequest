import React from "react";
import Theory from "./Theory";
import Question from "./Question";
import swal from "sweetalert";
import { Button } from "@mui/material";
import Quiz from "./Quiz";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addtabs } from "./userDispatch";

function Milestonethree() {

    const [page, setPage] = React.useState(0);
    const tabs = useSelector((state) => state.levels);
    const user = useSelector((state) => state.user.username);
    const dispatch = useDispatch();
    React.useEffect(() => {
        setPage(Number(tabs.tabs));
    }, []);

    function renderQ() {
        let nextTabs = Number(tabs.tabs) + 1;
        dispatch(addtabs(nextTabs));
        setPage(page + 1);

    }

    function Completed() {
        swal("Congrat on Completing Milestone 1");
        return (<center><Button style={{ marginTop: "40%" }}>Next Milestone</Button></center>);
    }

    return (
        <div>
            {page === 0 && < Quiz question="Which keyword is used to return a value inside a function?" one="break" two="void" three="get" four="return" soln="return" renderQ={renderQ} />}
            {page === 1 && <Theory heading="Functions in C Language" theory=<pre> {" 1.A function is like a small tool in your code that only works when you tell it to.\n \n  2.You can give it some information, called parameters, to work with.\n \n  3. Functions help you do things without rewriting the same code over and over.\n \n  You write the code once and use it whenever you need. Predefined functions are like ready-made tools that \n  you’ve already been using.\n \n  For instance, the main() function is a special one that runs your code, and printf() is another function \n  that shows text on the screen. You don’t have to create these functions yourself—they’re built into the \n  programming language for you to use.\n \n  Example:     int main() { \n                 printf('Hello World!'); \n                 return 0; \n                }"}</pre> renderQ={renderQ} />}
            {page === 2 && <Theory heading="Create a Function" theory=<pre> {"  To create your own function, follow these simple steps: \n \n 1. Name the function: Pick a name for your function.\n \n 2. Add parentheses: Put a pair of parentheses () right after the name.\n \n 3. Use curly brackets: Add curly brackets {} to show where the function’s code starts and ends. \n \n Syntax:     void myFunction() { \n               // code to be executed \n              } \n \n Example Explained:- \n \n • myFunction() is the name of the function \n \n • void means that the function does not have a return value. You will learn more about return values later \n in the next chapter. \n \n • Inside the function (the body), add code that defines what the function should do"}</pre> renderQ={renderQ} />}
            {page === 3 && <Theory heading="Calculate the Sum of Numbers" theory=<pre> {"You can put almost whatever you want inside a function. The purpose of the function is to save the code, \n and execute it when you need it.Like in the example below, we have created a function to calculate the \n sum of two numbers. Whenever you are ready to execute the function (and perform the calculation), you\n just call it: \n\n Example: \n\n void calculateSum() { \n   int x = 5; \n   int y = 10; \n   int sum = x + y; \n   printf('The sum of x + y is: %d', sum); \n } \n int main() { \n  calculateSum();  // call the function \n  return 0; \n } \n \n   // Outputs The sum of x + y is: 15"} </pre> renderQ={renderQ} />}
            {page === 5 && < Quiz question="Which statement is used to stop a loop?" one="exit" two="void" three="break" four="stop" soln="break" renderQ={renderQ} />}
            {page === 6 && <Theory heading="Parameters and Arguments" theory=<pre> {"You can give a function some information to work with by using something called parameters. Think of \n parameters as variables that are only used inside the function.\n\n Here’s how it works:\n 1. Add parameters: After the function’s name, put the parameters inside the parentheses ().\n 2. Separate with commas: If you have more than one parameter, separate them with commas.\n\n Syntax:    returnType functionName(parameter1, parameter2, parameter3) { \n            // code to be executed\n            } \n\n Example:- \n void myFunction(char name[]) { \n  printf('Hello %s', name); \n } \n int main() { \n myFunction('Liam'); \n myFunction('Jenny'); \n myFunction('Anja'); \n return 0; \n } \n// Hello Liam // Hello Jenny // Hello Anja"} </pre> renderQ={renderQ} />}
            {page === 7 && <Theory heading="Return Values" theory=<pre> {"The void keyword tells the function that it doesn’t need to give back any result. If you want the \n function to give you a result, you use a data type (like int for whole numbers or float for decimal\n numbers) instead of void. You also use the return keyword inside the function to send back the result.\n\n For example:\n int myFunction() {\n // Your code here  \n   return 5; // This function returns the number 5 \n} "} </pre> renderQ={renderQ} />}
            {page === 8 && <Theory heading="Function Declaration and Definition" theory=<pre> {"In C programming, functions are essential for modularizing and organizing code. They allow for the reuse \n of code and make programs easier to understand and maintain. Here’s a breakdown of function declaration\n and definition in C:\n\n 1. Function Declaration (Prototype): A function declaration, also called a function prototype, tells the\n compiler about the function’s name, return type, and parameters before the function is used in the program.\n It allows the compiler to ensure that the function is called with the correct parameters.\n\n Syntax:\n  return_type function_name(parameter_type1, parameter_type2, ...);\n\n 2. Function Definition:The function definition is where the actual code or body of the function is written.\n It tells the compiler what the function does when called. The function definition includes the same elements\n as the function declaration but also provides the code block (statements) that execute when the function is\n invoked.\n\n Syntax:\n return_type function_name(parameter_type1 param1, parameter_type2 param2, ...) {\n // Function body\n // Code to perform the task \n return value;  // Optional, if the return type is not void\n}"} </pre> renderQ={renderQ} />}
            {page === 9 && <Theory heading="Function Declaration and Definition" theory=<pre> {"3. Calling a Function:\n Once a function is declared and defined, it can be called (invoked) in the program. When a function is\n called, control is passed to the function’s code, and once it completes, control returns to the calling code.\n\n Syntax:\n result = function_name(argument1, argument2, ...);\n\n Example\n#include <stdio.h> // Function Declaration\n int multiply(int x, int y); \n int main() {\n  int result = multiply(4, 5);  // Function call\n  printf('The product is: %d\n', result);\n return 0;\n }\n // Function Definition\n int multiply(int x, int y) {\n  return x * y;  // Return the product of x and y\n} \n "} </pre> renderQ={renderQ} />}
            {page === 10 && <Theory heading="Recursion in C" theory=<pre> {"Recursion is when a function calls itself to solve a problem. It’s like breaking a big problem into\n smaller, simpler problems that are easier to handle.It might seem tricky at first, but the best way to\n understand it is to try it out yourself.\n Recursion Example\n Imagine you want to add all the numbers from 1 to 10. Instead of doing it all at once, you can use \n recursion to add two numbers at a time.\n\n Here’s a simple example:\n int sum(int k);\n int main() {\n   int result = sum(10);  // Start adding numbers from 10\n   printf('%d', result);  // Print the result\n   return 0;\n }\n int sum(int k) {\n if (k > 0) {   // If k is greater than 0\n   return k + sum(k - 1);   // Add k to the result of sum(k - 1)\n } else {\n return 0;  // If k is 0 or less, stop and return 0\n}\n  }\n\n "} </pre> renderQ={renderQ} />}
            {page === 11 && <Theory heading="Recursion in C" theory=<pre> {"In this example, the sum function keeps calling itself with a smaller number until it reaches 0. \nEach call adds the current number to the total sum, making it easier to add a range of numbers."} </pre> renderQ={renderQ} />}
            {page === 12 && < Quiz question="Which keyword is used to create a structure?" one="struct" two="str" three="structs" four="structure" soln="struct" renderQ={renderQ} />}
            {page === 13 && <Question question="Write a C program that defines a function greet which print 'Hello, World!' when called. Call this function from the main function." soln="" renderQ={renderQ} />}
            {page === 14 && <Question question="Write a C program that defines a function add which takes two integer arguments and returns their sum. In the main function, call the add function with values 3 and 5 and print the result" soln='Hello, World!' renderQ={renderQ} />}
            {page === 15 && <Question question="Write a C program that defines a recursive function factorial to calculate the factorial of a number. Call this function from the main function and calculate the factorial of 5." soln="The sum of 3 and 5 is: 8" renderQ={renderQ} />}
            {page === 16 && <Question question="Write a C program that defines a function square which takes an integer as 5 an argument and returns its square. Call this function from the main function and print the result." soln="The factorial of 5 is: 120" renderQ={renderQ} />}
            {page === 17 && <Question question="Write a C program that defines a function average that takes three floating-point numbers as arguments ie: 3.22, 67.8, 36.53, and returns their average. In the main function, call this function and print the result with two decimal places." soln="The square of 5 is: 25" renderQ={renderQ} />}
            {page === 18 && <Question question="Write a C program that defines two functions: sum_of_evens and sum_of_odds. The sum_of_evens function should calculate the sum of even numbers from 1 to 20, and the sum_of_odds function should calculate the sum of odd numbers from 1 to 20. Call both functions from the main function and print the results" soln="The average of 3.22, 67.8, and 36.53 is: 35.85" renderQ={renderQ} />}
            {page === 19 && <Question question="Write a C program that defines a function sum_of_squares which calculates and returns the sum of the squares of the numbers 1 through 10. Call this function in the main function and print the result." soln="Sum of even numbers from 1 to 20: 110 \n Sum of odd numbers from 1 to 20: 100" renderQ={renderQ} />}
            {page === 20 && <Question question="Write a C program that defines a recursive function sumOfDigits to calculate the sum of digits of a fixed number (e.g., 3456). Call this function in the main function and print the result." soln="The sum of the digits of 3456 is: 18" renderQ={renderQ} />}
            {page === 21 && <Question question="Write a C program that defines a recursive function powerOfTwo which calculates 2 raised to the power of n. In the main function, call this function to calculate 2 raised to the power of 6 and print the result." soln="2 raised to the power of 6 is: 64" renderQ={renderQ} />}
            {page === 22 && <Question question="Write a C program that defines a function cube that takes a fixed value (e.g., 7) and returns its cube (7³). In the main function, call this function and print the result." soln="The cube of 7 is: 343" renderQ={renderQ} />}
            {page === 23 && <Completed />}
        </div>
    )

}
export default Milestonethree;