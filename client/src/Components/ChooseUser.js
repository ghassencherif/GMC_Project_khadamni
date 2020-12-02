import React from 'react'
import './style/chooseuser.css'

function ChooseUser() {
    return (
        <div>
            <div className = "choose-type">
                <div className="green">
                <img src="https://lh3.googleusercontent.com/proxy/OIfl0dFsc-uVkZFEDZp_g1EPQpoHceAAQK8GXqOuLwpNpBd1QXfXbZavTIkoAMIclkQ6z3knVqEGIzdVQtDGkSW23BxXQSSDqx0M-XsNzjiDFYU5QUu8zL-2Uf8" alt="particulier" width="500" height="600" />
                    <a href = "#" className = "particulier" >Client</a>
                </div>
                <div className = "vl"></div>
                <div className="red">
                <img src="https://icon-library.com/images/career-icon-png/career-icon-png-1.jpg" alt="particulier" width="500" height="600" />
                    <a href = "#" className = "professionel" >Agent</a>
                </div>
            </div>
        </div>
    )
}

export default ChooseUser
