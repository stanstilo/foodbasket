import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Download(props) {
    return (
        <div className="not-active">
            <p>No downloads available yet.</p>
            <button>Browse Products 
                <span style={{paddingLeft:"1rem"}}><FontAwesomeIcon icon='shopping-basket' /></span>
            </button>
        </div>
    )
}
