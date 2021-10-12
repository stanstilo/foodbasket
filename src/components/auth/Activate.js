import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from 'actions/auth/actions';
import { Button } from "@material-ui/core"


const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;
        const verifyValues = {uid, token}
        verify(verifyValues);
        setTimeout(()=>{
            setVerified(true);
    }, 5000)}  
   if (verified) {
        return <Redirect to='/auth'/>
    }


    return (
        <>
        <div className='container verify-container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '100px' }}
            >
                <h1>Verify your Account:</h1>
                <p>Kindly verify your account to enable you login</p>
                <Button
                    onClick={verify_account}
                    type='button'
                    className='verify-btn'
                >
                    Verify
                </Button>
            </div>
        </div>
        </>
    );
};


export default connect(null, {verify})(Activate);
