import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
  todos: [{id:1,text:'Hello world'}]
}

export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers: {
    // State will give the access that what value is 
    // present in initialState 
    // Updated state value in the store
    
    // Action will give the value of id
    addTodo: (state,action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
    },
    updateTodo: (state,action) =>{
        
    }
  }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer

// 2nd this to do