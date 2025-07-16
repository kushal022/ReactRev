//^ Todo Reducer Function:
export const todoReducer = (state,action)=>{
    switch(action.type){
        case 'add':
            return [...state,{
                id: Date.now(),
                text:action.payload,
                isCompleted:false,
                isEdit:false
            }];
        case 'check':
            return state.map(todo=>
                todo.id === action.payload ? 
                {...todo, isCompleted: !todo.isCompleted } : todo
            );
        case 'edit':
            return state.map(todo=>
               todo.id === action.payload ?
               {...todo, isEdit: true} : todo
            )
        case 'cancel':
            return state.map(todo=>
                todo.isEdit === true ?
                {...todo,isEdit:false} : todo
            )
        case 'update':
            return state.map(todo=>
                todo.isEdit===true ? 
                {...todo, text:action.payload, isEdit:false} : todo
            )
        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        case 'clearCompleted':
            return state.filter(todo => !todo.isCompleted); // filter completed todos
        default:
            return state;
    }
}