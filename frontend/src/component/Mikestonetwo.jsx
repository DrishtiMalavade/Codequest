import React from "react";
import Theory from "./Theory";
import Question from "./Question";
import swal from "sweetalert";
import { Button } from "@mui/material";
import Quiz from "./Quiz";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addtabs } from "./userDispatch";

function Milestonetwo() {

    const [page, setPage] = React.useState(1);
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
            {page === 0 && < Quiz question="In C, code statements must end with a semicolon (;)" one="True" two="False" three="Could be True and False" four="None of the Above" soln="True" renderQ={renderQ} />}
            {page === 1 && < Quiz question="How can you create a variable with the numeric value 5?" one="num = 5;" two="int num = 5;" three="val num = 5;" four="num = 5 int;" soln="int num = 5;" renderQ={renderQ} />}
            {page === 2 && <Theory heading="Conditional statements" theory=<pre> {" Decision Making in C: \n \n The conditional statements (also known as decision control structures) such as if, if else, switch, etc. \n are used for decision-making purposes in C programs.They are also known as Decision-Making Statements \n and are used to evaluate one or more conditions and make the decision whether to execute a set of\n statements or not. These decision-making statements in programming languages decide the direction of\n the flow of program execution.\n \n Need of Conditional Statements \n \n There come situations in real life when we need to make some decisions and based on these decisions, we \n decide what should we do next. Similar situations arise in programming also where we need to make \n some decisions and based on these decisions we will execute the next block of code. \n \n C supports the usual logical conditions from mathematics: \n  \n   •Less than: a < b \n   •Less than or equal to: a <= b \n   •Greater than: a > b  \n   •Greater than or equal to: a >= b  \n   •Equal to a == b  \n   •Not Equal to: a != b  \n \n"}</pre> renderQ={renderQ} />}
            {page === 3 && <Theory heading="Structure of “if” Statememt" theory=<pre> {" Structure of “if” Statement is: - \n \n Use if to specify a block of code to be executed, if a specified condition is true.An if statement in C\n is used to make decisions in a program. It checks a condition, and if that condition is true, it runs a\n block of code. If the condition is false, it skips that block of code.\n \n if (condition) { \n \n  // block of code to be executed if the condition is true \n \n  } \n \n  1)Example: -\n \n  if (20 > 18){ \n \n  printf('20 is greater than 18'); \n  \n  }"}</pre> renderQ={renderQ} />}
            {page === 4 && < Quiz question="How do you start writing an if statement in C?" one="if x > y then" two="if (x > y)" three="if x > y()" four="if x > y" soln="if (x > y)" renderQ={renderQ} />}
            {page === 5 && <Theory heading="Structure of the “else” Statement " theory=<pre> {" Use the else statement to specify a block of code to be executed if the condition is false.The else\n  statement in programming is used to handle situations where a condition is not met. Think of it\n  as a 'backup plan' in your code.\n \n  Here is a simple way to understand it:\n \n  •If Condition: First, you check a condition (e.g., if (score >= 60)).\n  If this condition is true, you perform a specific action (e.g., printf('Pass');). \n \n  •Else Statement: If the condition is not true (e.g., score < 60), the else statement provides an \n  alternative action (e.g., printf('Fail');). \n  \n  if (condition) {\n \n // block of code to be executed if the condition is true \n \n  } else { \n \n // block of code to be executed if the condition is false \n \n  } "} </pre> renderQ={renderQ} />}
            {page === 6 && <Theory heading="Structure of the “else if” Statement" theory=<pre> {"Use the else if statement to specify a new condition if the first condition is false.The else if statement\n in C is used when you want to check multiple conditions in a sequence.\n \n Here's a simple way to understand it:\n \n 1.if Statement: This checks the first condition. If it's true, the code inside the if block runs.\n \n 2.else if Statement: If the first condition is false, the else if statement checks another condition.\n If this second condition is true, the code inside this else if block runs.\n \n 3.else Statement: If none of the previous conditions (the if and else if conditions) are true, the code\n inside the else block runs. This is optional and handles cases where none of the if or else if conditions\n were met.\n \n if (condition1) {\n  // block of code to be executed if condition1 is true \n } else if (condition2) { \n // block of code to be executed if the condition1 is false and condition2 is true \n } else {\n // block of code to be executed if the condition1 is false and condition2 is false \n }"} </pre> renderQ={renderQ} />}
            {page === 7 && <Theory heading="Structure of the “switch” Statement" theory=<pre> {"You can use the switch statement instead of writing many if..else statements.\n The switch statement selects one of many code blocks to be executed:\n switch (expression) {\n case x:\n // code block \n break;\n case y:\n // code block \n break;\n default:\n // code block \n }\n This is how the switch works: -\n \n 1.	The switch expression is checked.\n 2.	Its value is compared to each case value.\n 3.	If a match is found, the related code runs.\n 4.	The break statement exits the switch block and stops further execution.\n 5.	The default statement is optional and runs if no case matches.\n \n The break keyword stops the code inside a switch block. When the code finds a match and finishes its job,\n it uses break to stop checking other cases and end the block."} </pre> renderQ={renderQ} />}
            {page === 8 && < Quiz question="Which function is often used to output values and print text?" one="print('')" two="System.out.printline('')" three="printf('')" four="None of the Above" soln="printf('')" renderQ={renderQ} />}
            {page === 9 && <Theory heading="Loops in C Language" theory=<pre> {"In C programming, loops are used to repeat a block of code multiple times.\n There are three main types of loops: for, while, and do-while.\n \n 1. for Loop:\n The for loop is used when you know in advance how many times you want to execute a block of code.\n It consists of three parts:\n •Initialization: Sets up a variable to start with.\n •Condition: Checks if the loop should continue running.\n •Update: Changes the variable after each iteration.\n \n for (initialization; condition; update) {\n // Code to be executed\n }"} </pre> renderQ={renderQ} />}
            {page === 10 && <Theory heading="Loops in C Language" theory=<pre> {"2. while Loop:The while loop is used when you want to execute a block of code as long as a condition is\n true. You don't necessarily know how many times the loop will run.\n  \n •Initialization: Before entering the loop, you often need to initialize variables used in the condition.\n •Condition Checking: The condition is checked before each iteration. If the condition is false initially,\n  the loop's body will not execute at all.\n •Iteration: The loop's body executes as long as the condition remains true. Ensure that the condition \n  eventually  becomes false to avoid creating an infinite loop.\n •Update: Inside the loop, you usually update variables involved in the condition to ensure that the loop \n  eventually terminates.\n \n while (condition) {\n   \n // Code to be executed\n  \n }\n  "} </pre> renderQ={renderQ} />}
            {page === 11 && < Quiz question="How do you call a function in C?" one="myFunction;" two="myFunction();" three="(myFunction);" four="myFunction[];" soln="" renderQ={renderQ} />}
            {page === 12 && <Theory heading="Loops in C Language" theory=<pre> {"3. do-while Loop:\n \n The do-while loop is similar to the while loop, but it guarantees that the block of code will be executed \n at least once before checking the condition.\n  \n •Code to be executed: The loop body is executed at least once before the condition is checked.\n •Condition: This is evaluated after each iteration. If true, the loop continues. If false, the loop\n  terminates.\n"} </pre> renderQ={renderQ} />}
            {page === 13 && <Question question="Write a C program to compare three numbers a = 20, b = 40, and c = 10. Print the largest of the three." soln="The Largest Number is 40" renderQ={renderQ} />}
            {page === 14 && <Question question="Write a C program that assigns a integer score of 85 and prints the grade based on the score using else if statements. The grading scale is as follows: 90-100: A 80-89: B 70-79: C 60-69: D Below 60: F" soln="The Grade is B" renderQ={renderQ} />}
            {page === 15 && <Question question="Write a C program that uses a switch statement to print the name of a day of the week based on an integer input from 1 to 7, where input should be 2. Include a default case for invalid inputs. (1 for Monday, 2 for Tuesday, up to 7 for Sunday.)" soln="Today is Sunday" renderQ={renderQ} />}
            {page === 16 && <Question question="Write a C program that uses a for loop to print the multiplication table of a 5 from 1 to 10. Eg:-   5x1=5 5x2=10 etc." soln="5 10 15 20" renderQ={renderQ} />}
            {page === 17 && <Question question="Write a C program that uses a while loop to print the sum of all integers from 1 to a positive integer 12 (the program should calculate the sum from 1 to 12). Ensure that the program only processes positive integers." soln="78" renderQ={renderQ} />}
            {page === 18 && <Question question=" Write a C program that uses a do-while loop to print the numbers from 10 down to 1. Each number should be printed . Ensure the loop terminates correctly after printing all the numbers." soln="10 9 8 7 6 5 4 3 2 1" renderQ={renderQ} />}
            {page === 19 && <Question question="Write a C program that uses a while loop to generate and print the first 10 terms of the following sequence: 1, 4, 9, 16, 25, ... " soln="1 4 9 16 25 36 49 64 81 100" renderQ={renderQ} />}
            {page === 20 && <Completed />}
        </div>
    )
}

export default Milestonetwo;