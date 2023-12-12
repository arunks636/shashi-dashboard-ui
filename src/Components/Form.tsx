import React , {useEffect,useState} from "react";
import styled from 'styled-components';

const FormStyle = styled.div`
    background: #f0f0f0;
    padding: 20px;
    margin: 0 auto;
    border-radius: 5px;
    @media (min-width: 992px){
        max-width: 50%;
    }
    label{
        font-size: 12px;
        display: block;
        width: 100%;
        margin-bottom: 10px;
        sup{
            color: red;
            font-size: 10px;
        }
    }
    
    input, textarea{
        border-radius: 5px;
        display: block;
        width: 100%;
        background: #fff;
        border: 1px solid #b7b7b7;
        margin-bottom: 20px;
    }

    input{
        height: 30px;
    }
    textarea{
        height: 120px;
    }

    button{
        width: 100%;
        border: 0;
        background-color: #000;
        color: #fff;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
    }
`;

export default function FormUi(){
    return (
        <FormStyle>
            <div>
                <label>Name <sup>*</sup></label>
                <input type="text" />
            </div>
            <div>
                <label>Brand <sup>*</sup></label>
                <input type="text" />
            </div>
            <div>
                <label>Description <sup>*</sup></label>
                <textarea></textarea>
            </div>
            <div>
                <label>Image public URL<sup>*</sup></label>
                <input type="text" />
            </div>
            <div><button>Save</button></div>
        </FormStyle>
    )
}