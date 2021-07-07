import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, edit, remove } from '../actions';



const Todo = (props) => {

    const dispatch = useDispatch();
    const list = useSelector((state) => state.TodoReduce.list);
    const [inputData, setInputData] = useState();
    const [isEdit,SetIsEdit]=useState(null);
    const inputUp = (event) => {
        setInputData(event.target.value);
    }
    const func = (data) => {
        return (


            <tr>
                <td style={{ textAlign: 'left', paddingLeft: 11, width: 20 }} ><i className="fa fa-check " style={{ fontWeight: 'lighter' }}></i></td>
                <td style={{ textAlign: 'left', width: 200 }}>{data.data}</td>
                <td style={{ textAlign: 'right', paddingRight: 15, width: 100 }}><i className="fa fa-pencil  " style={{ fontWeight: 'lighter', marginRight: 10 }} onClick={() => {
                     setInputData(data.data)
                     SetIsEdit(data.id)
                }}></i>  <i className="fa fa-trash-alt " aria-hidden="true" style={{ fontWeight: 'lighter' }} onClick={() => dispatch(remove(data.id))}></i></td>
            </tr>


        )
    }


    return (
        <>
            <div className="container w-25 mx-auto d-flex mt-5">
                <input type="text" placeholder="Add Items..."
                    className='form-control'
                    value={inputData}
                    onChange={inputUp}
                />
                
               {isEdit !=null? <button style={{marginLeft:2}} className=" btn btn-outline-dark " onClick={() => dispatch(edit(inputData,isEdit),
                    setInputData(''), SetIsEdit(null))}  >Edit</button>:
                <button style={{marginLeft:2}} className=" btn btn-outline-dark ml-2" onClick={() => dispatch(add(inputData),
                    setInputData(''))}  >Add</button>}
            </div>
            <div className="contianer w-50  mx-auto mt-2">
                <table class="table text-left table-dark  m-0 " >
                    <tbody>
                        {list.map(func)}
                    </tbody>
                </table>
            </div>
        </>
    );
}
Todo.prototype = {
    list: []
}
export default Todo;


