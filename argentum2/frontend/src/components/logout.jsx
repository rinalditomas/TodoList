import React from 'react';
import {useDispatch,useSelector} from "react-redux"
import {selectUser} from '../state/slice'
import {sendLogoutRequest} from '../state/user'




  export default function logout() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
  
  
    const handleSubmit= (e)=> {
        e.preventDefault();
        dispatch(sendLogoutRequest())
    }
    return(
        <div>
            <button onClick={handleSubmit}>
                logout
            </button>
        </div>
    )
  }