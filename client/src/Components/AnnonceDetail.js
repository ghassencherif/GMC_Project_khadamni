import React from 'react'
import { Link } from 'react-router-dom'

function AnnonceDetail(props) {
    const add= props.annonce.find(el=>el.title===props.match.params.title)
    return (
        <div >
            <div className="white-box">
                <Link to='/' >
                    <div className="flech">🢀</div>
                </Link>
                        
            
            </div>
        </div>
    )
}

export default AnnonceDetail
