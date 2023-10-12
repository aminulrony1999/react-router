import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const {name, phone} = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Phone : {phone}</p>
            <button onClick={() => navigate(-1)}>Back previous page.</button>
        </div>
    );
};

export default FriendDetail;