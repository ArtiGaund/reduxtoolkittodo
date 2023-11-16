// slice helps you to create a big object, which you export as well, slice is responsible for tracking your initial
// state of the store as well as all of your reducers are collected here.
// nanoid is for unique id
import { createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos: [{ id: 1, text: 'Hello'}],
}

export const todoSlice = createSlice({
    //unique name for slice
    name: "todo",
    initialState,
    // reducers updates the state of the stores
    reducers: {
        // action- you can send data
        //payload is data
        addTodo: (state, action) => {
          //todo take helps from the state to know what is there already in the store
          // through the action you can pass on some data
          // to add things we need to create an object (a single todo) and that todo will be pushed on the array
          const todo = {
            id: nanoid(),
            text: action.payload,
          } 
          state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !==action.payload)
        },
        // add update
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
// this is exported bz it need to be wired up with the store
export default todoSlice.reducer