import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const {name, phone} = useLoaderData();
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default FriendDetail;