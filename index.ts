#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyan.bold("\t>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
console.log(chalk.green.bold("\tWelcome to 'Areesha Iqbal' Currency Converter"));
console.log(chalk.cyan.bold("\t>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));


const currency: any = {
  USD: 1, // Base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.yellow.italic("Enter from Currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: chalk.yellow.italic("Enter To Currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: chalk.yellow.italic("Enter Your Amount"),
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
