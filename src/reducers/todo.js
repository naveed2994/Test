const initialData = {

    list: []
}

const TodoReduce = (state = initialData, action) => {

    switch (action.type) {
        case "add":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "edit":
            const lit = state.list.filter((elem) => elem.id == action.id?elem.data=action.data:elem.data);
        //    const nlist= state.list.map((a) =>{
                     
        //         if(a.id === action.id )
        //          {
        //              a.data=action.data
        //             } 
                 
        //          // transform the one with a matching id
        //       return  a;
        //          }
              //)
            return {
                 ...state,
                 
                 list: lit
            }
            break;
        case "delete":

            const newList = state.list.filter((elem) => elem.id !== action.id);
            return {
                ...state,
                list: newList
            }
            break;

        default:
            return state;
    }
}

export default TodoReduce;