
export default function (state = {todos: []}, action) {
    const index = state.todos
        .indexOf(state.todos.find(todo => todo.id === action.id));

    switch (action.type) {
        case 'ADD':
        console.log(action.task.text);
            state.todos.push({text: action.task.text, lastReviseTime: action.task.lastReviseTime,timeId:action.task.timeId});
            return {todos: [...state.todos]};

        case 'REVISE':
            console.log(action.task);

        case 'REMOVE':
            state.todos.splice(index, 1);
            return {todos: [...state.todos],name:state.name};

        case 'SELECTNAME':
            return {todos: [...state.todos], name:action.name};

        case 'CLEARCOM':
            return {todos: clearCompleted(state.todos)}
    }

    return state;
}
