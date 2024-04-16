import inquirer from "inquirer";
{
    let todos = [];
    let condition = true;
    while (condition) {
        let addTask = await inquirer.prompt([
            {
                name: "todos",
                type: "input",
                message: "what want to add in your todos"
            },
            {
                name: "add",
                type: "confirm",
                message: "do ypu want to add more ",
                default: "false"
            }
        ]);
        todos.push(addTask.todos);
        condition = addTask.add;
        console.log(todos);
        todos.forEach(function (item) {
            console.log(item);
        });
    }
}
