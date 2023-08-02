import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {

    // getting initial todo list
    const localTodoList = window.localStorage.getItem('todoList');
    // if todo list is not empty
    if(localTodoList){
        return JSON.parse(localTodoList);
    }
    window.localStorage.setItem('todoList', []);
    return [];
}

const initailValue = {
    todoList : getInitialTodo()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initailValue,
    reducers: {
        addTodo: (state, action) =>{
            // pushing JSON object in out array
            state.todoList.push(action.payload);
            // taking list from local storage
            const todoList = window.localStorage.getItem('todoList');
            //if list is not empty adding newely added list to localstorage
            if(todoList){
                // parsing that list JSON object to string array 
                const todolistArr = JSON.parse(todoList);
                // then adding new list to array
                todolistArr.push({...action.payload});
                // and again setting local storage again
                window.localStorage.setItem('todoList', JSON.stringify(todolistArr));

            } else {
                window.localStorage.setItem('todoList', 
                JSON.stringify([
                    {...action.payload},
                        ]
                    )
                )
            }
        },
        updateTodo: (state, action) => {
            // i'll take list 
            const todoList = window.localStorage.getItem('todoList');
            // now we'll travel through list and update text of particular ID
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo) =>{
                    if(todo.id === action.payload.id){
                        todo.title = action.payload.title;
                        todo.status = action.payload.status;
                    }
                })
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = [...todoListArr]
            } 
        },

    }
})

export const {addTodo, updateTodo} =
  todoSlice.actions;
export default todoSlice.reducer;