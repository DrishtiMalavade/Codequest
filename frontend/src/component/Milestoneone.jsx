import React from "react";
import Theory from "./Theory";
import Question from "./Question";
import swal from "sweetalert";
import { Button } from "@mui/material";
import Quiz from "./Quiz";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addtabs } from "./userDispatch";

function Milestoneone() {

    const [page, setPage] = React.useState(0);
    const tabs = useSelector((state) => state.levels);
    const user = useSelector((state) => state.user.username);
    const dispatch = useDispatch();
    React.useEffect(() => {
        setPage(Number(tabs.tabs));
    }, []);



    async function renderQ() {
        let nextTabs = Number(tabs.tabs) + 1;
        dispatch(addtabs(nextTabs))
        setPage(page + 1);
    }

    function Completed() {
        swal("Congrat on Completing Milestone 1");
        return (<center><Button style={{ marginTop: "40%" }}>Next Milestone</Button></center>);
    }

    return (
        <div>

            {page === 0 && <Theory heading="History of C" theory=<pre > {"1.The C programming language was developed by Dennis Ritchie at Bell Labs (AT&T) in 1972. It was created\n as an evolution of the B language, which itself was derived from BCPL (Basic Combined Programming\n Language)\n  \n 2. C was initially designed to improve the UNIX operating system. Before C, UNIX was written in assembly\n language, which was low-level and hardware-specific. The goal was to create a language that was powerful\n yet sufficiently abstract to write system software\n \n 3.C is a low-level, portable, structured language ideal for system-level programming, enabling modular\n and clean code development, and offering fast, efficient performance for performance-critical\n applications\n \n 4.K&R C, published in 1978, standardized the C programming language. ANSI C, introduced in 1989,\n provided a more consistent and portable version. ISO introduced C99 in 1999, which included new features.\n C11, introduced in 2011, improved multithreading and atomic operations. C18, introduced in 2018, made\n small adjustments to maintain consistency."} </pre> renderQ={renderQ} />}
            {page === 1 && <Theory heading="Application of C" theory=<pre> {"1.System Programming: C is a key component in the development of operating systems like UNIX and\n embedded systems, particularly in microcontrollers, IoT devices, and real-time systems.\n \n 2.Game Development: C is commonly utilized in game development for performance-critical parts of game\n engines and graphics libraries, with many popular game engines' core written in C/C++.\n \n 3.Network Programming: C is widely utilized in network programming for implementing network protocols\n like TCP/IP and HTTP, enabling direct manipulation of network packets and sockets.\n \n 4.High-Performance Computing: C is a high-performance computing language used in scientific computing\n applications like simulations, mathematical computations, and large-scale data processing.\n \n 5.Embedded Firmware: C is the preferred language for writing firmware for hardware devices such as\n microcontrollers, automotive systems, and medical systems."}</pre> renderQ={renderQ} />}
            {page === 2 && <Theory heading="Basic Structure of C program" theory=<pre> {"  In C programming, the basic structure of a C program is essential to understand how a C program is\n   organized and executed.\n \n   1.Preprocessor Directives: You may find preprocessor directives at the top of a C program. These lines\n   start with a # symbol and are processed before the actual compilation of the code.\n   The most common directive is:#include <stdio.h>:\n   This directive includes the Standard Input/Output header file which provides functions like printf and \n   scanf used for input and output operations.\n  \n   2.Function Prototypes: Function prototypes declare the functions used in the program. They are usually \n   placed before the main() function, allowing the compiler to know about these functions before their \n   actual definition:void myFunction();:\n   This declares a function named myFunction that takes no arguments and returns no value (void).\n   Function   prototypes are optional but help organize code, especially larger programs.\n \n   3.Main Function: The main() function is the entry point of every C program. Execution of the program\n   begins here.\n   The main() function is defined as:        int main() {// Code goes here return 0;}\n \n   4.Variable Declarations & Code Statements: In the main() function, variables store data with a\n   specific data type. Statements perform operations like printing text and user input.int number; \n   printf(); \n "} </pre> renderQ={renderQ}></Theory>}
            {page === 3 && <Theory heading="Basic Structure of C program" theory=<pre> {"5.Function Definitions: If you have defined additional functions, their definitions usually come after\n the main() function.\n \n Here is an example:void myFunction() {printf(//if will print your output); \n \n void myFunction(): Defines a function named myFunction that prints a message. Functions can be used to\n organize code and perform specific tasks."}</pre> renderQ={renderQ}></Theory>}
            {page === 4 && <Theory heading="Variables and Data Types in C" theory=<pre> {"•Variables: are containers for storing data values.\n \n In C, every variable must be declared with a  specific data type before it can be used.Declaration: To\n declare a variable, specify the data type followed by the variable name: int age; \n Here, int is the data type, and age is the variable name.\n \n •Data Types: Data types define the type of data a variable can hold. \n \n They determine the size and type of values that can be stored.\n \n int: Stores integers (whole numbers).int count = 10;\n \n float: Stores floating-point numbers (numbers with decimals).float price = 12.99;\n \n char: Stores single characters.char grade = 'A';\n \n double: Stores double-precision floating-point numbers (more precise than float).double pi = 3.14159;\n \n void: Represents the absence of a value, often used in functions that don’t return anything"}</pre> renderQ={renderQ} ></Theory>}
            {page === 5 && < Quiz question="How do you insert COMMENTS in C code?" one="# This is a comment" two="-- This is a comment" three="* This is a comment" four="// This is a comment" soln="// This is a comment" renderQ={renderQ} />}
            {page == 6 && < Quiz question="What is a correct syntax to output 'Hello World' in C?" one="System.out.printline('Hello World')" two="printf('Hello World')" three="cout<<'Hello World'" four="Console.Writeline('Hello World')" soln="printf('Hello World')" renderQ={renderQ} />}
            {page === 7 && <Theory heading="Input and Output Function" renderQ={renderQ} theory=<pre> {"printf - Output Function\n \n • Purpose: Used to print data to the console (output screen).\n •Syntax:printf('format string', variables);\n •Example:int num = 10;printf('The number is %d', num);\n •Explanation: %d is a format specifier for integers. \n \n scanf - Input Function \n \n •Purpose: Used to read data from the user (input).\n •Syntax:scanf('format string', &variables);\n •Example:  int num; scanf('%d', &num);\n •Explanation: %d is a format specifier for integers. &num provides the address of the variable where the \n  input will be stored."} </pre> ></Theory>}
            {page === 8 && < Quiz question="When a variable is created in C, a memory address is assigned to the variable." one="True" two="False" three="Could be True and False" four="None of the Above" soln="True" renderQ={renderQ} />}
            {page === 9 && <Question question=" Write a C program that prints Hello, World! to the console." soln="Hello World" renderQ={renderQ} />}
            {page === 10 && <Question question="Write a C program  that stores number 5 and  prints it as :Number is 5" soln="Number is 5" renderQ={renderQ} />}
            {page === 11 && <Question question="Write a C program to store number 5.5 and print it as :Number is 5.5" soln="Number is 5.500000" renderQ={renderQ} />}
            {page === 12 && <Question question="Write  a C program to store  a word  Prgramming and print it as:Programming" soln="Programming" renderQ={renderQ} />}
            {page === 13 && <Question question="Create a character variable called newLetter of type char, assign it a value, and print a message that combines both text and the variable. Separate the text and the variable with a comma inside the printf() function?" soln="The letter is A and its the first letter of the alphabet" renderQ={renderQ} />}
            {page === 14 && <Question question="Create a program that initializes two boolean variables, A and B, with values true and false,respectively. Print the result of the expression A || B." soln="The result of A || B is:true" renderQ={renderQ} />}
            {page === 15 && <Question question="Write a program that declares a double variable to store a high-precision value such as 12345.6789. Print this value to the console with two decimal places." soln="The value is:12345.68" renderQ={renderQ} />}
            {page === 16 && <Question question="Write a C program that:1. Declare a string variable and initialize it with the value :Alice. 2. Use this string in the program. 3. Print a greeting message that includes the name stored in the variable." soln="Hello Alice Welcome to the program." renderQ={renderQ} />}
            {page === 17 && <Completed />}
        </div>
    )
}


export default Milestoneone;