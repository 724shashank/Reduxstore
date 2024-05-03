import React from 'react'
import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import { actionCreators } from './State/index'
const Shop = () => {
    const dispatch =useDispatch();
    const action= bindActionCreators(actionCreators,dispatch);
  return (
    <>
    <div>
    <button className="btn btn-primary  mx-3"onClick={()=>{action.withdrawMoney(100)}}>-</button>
     Add the Item to the Cart 
    <button className="btn btn-primary  mx-3"onClick={()=>{action.despositMoney(100)}}>+</button>
    </div>
    </>
  )
}

export default Shop