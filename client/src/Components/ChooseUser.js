import React,{useEffect} from 'react'
import './style/chooseuser.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';






function ChooseUser() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);

    return (
        <div>
            <h1 className="titre1">YOU ARE ?</h1>
            <div className = "choose-type">
                <div className="green">
                <img src="https://www.mramma.tn/sites/default/files/part.png" alt="particulier" width="500" height="600" />
                <Link to="/chooseuser/signup" className="particulier" >Client</Link>
                </div>
                <div className = "vl"></div>
                <div className="red">
                <img src="https://www.mramma.tn/sites/default/files/pro.png" alt="particulier" width="500" height="600" />
                <Link to="/agent"  className="particulier" >Agent</Link>
                </div>
            </div>
        </div>
    )
}

export default ChooseUser
