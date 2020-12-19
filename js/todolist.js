export class ToDoList{
    constructor() {
        this.todoList = [];
    }
    addToDo(todo) {
        this.todoList.push(todo);
    }
    removeTodo(index) {
        this.todoList.splice(index, 1);
    }
    renderToDo() {

        let content = "";
        // duyet mang phai qua trai
        content = this.todoList.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textToDo}</span>
                    <div class="buttons">
                        <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete data-index="${index}" data-status="${item.status}" onclick="completeToDo(event)">
                            <i class="fa fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
            return tdContent;
        }, '');

        return content;
    }
    sortToDoList(isDES) {
        this.todoList.sort((todo, nextToDo) => {
            const textA = todo.textToDo.toLowerCase();
            const textB = nextToDo.textToDo.toLowerCase();
            //ASC
            return textB.localeCompare(textA);
        });
        if(isDES) {
            this.todoList.reverse();
        }
    }
}