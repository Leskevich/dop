import React from 'react';

type ButtonPropsType={
    name:string
    collBack:()=>void
}

export const Button = (props:ButtonPropsType) => {
    const {name,collBack}=props
    const onClickHandler=()=>{
        collBack()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

