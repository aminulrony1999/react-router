import React from 'react';
import './Friend.css';
import { Link, useNavigate } from 'react-router-dom';
const Friend = ({friend}) => {
    const {name, email, phone,id } = friend;
    const navigate = useNavigate();
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email :{email}</p>
            <p>Phone : {phone}</p>
            <p><Link to={`/friend/${id}`}><button>Click here to see details</button></Link></p>
            <button onClick={() => navigate(`/friend/${id}`)}>With button handler</button>
        </div>
    );
};

export default Friend;