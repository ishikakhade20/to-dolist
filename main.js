// class TodoItemFormat {
//     formatTask(task){
//         return task.length > 14 ? task.slice(0 , 14) + "...." :task;
//     }

//     formatDueDate(dueDate){
//         return dueDate || "noduedate";
//     }
     
//     formatStatus(completed){
//         return completed , "complete" , "pending";
//     }
// }

// class ToDoManager{
//     constructor(todoItemformatter){
//         this.todos=JSON.parse(localStorage.getItem("todo")) || [];
//         this.todoItemformatter = todoItemformatter;
//     }

//     addToDo(task, dueDate){
//         const newToDo={
//             id:this.getRandomId(),
//             task:this.todoItemformatter.formatTask(task),
//             dueDate:this.formatDueDate.formatDueDate(dueDate),
//             completed: false,
//             status: "pending",
//         }
//     }
// }