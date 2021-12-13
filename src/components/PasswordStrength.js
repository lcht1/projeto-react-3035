import React, { useState } from 'react';
import './PasswordStrength.css'
import zxcvbn from 'zxcvbn';

const PasswordStrength = ({ password }) => {


    const testResult = zxcvbn(password);
    const num = testResult.score * 100 / 4;


    const createPassLabel = () => {
        switch (testResult.score) {
            case 0:
                return 'Muito fraca';
            case 1:
                return 'Fraca';
            case 2:
                return 'Média';
            case 3:
                return 'Boa';
            case 4:
                return 'Forte';
            default:
                return '';
        }
    }

    console.log(createPassLabel())

    const funcProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#BDBDBD';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';


        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,

        background: funcProgressColor()

    })

    return (

        <>
            <div className='indicator'>
                <span  style={changePasswordColor()}></span>
                <span></span>
            </div>

        </>
    )

}

export default PasswordStrength;