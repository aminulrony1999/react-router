import React from 'react';
import './Friend.css';
const Friend = ({friend}) => {
    const {name, email, phone,id } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email :{email}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default Friend;