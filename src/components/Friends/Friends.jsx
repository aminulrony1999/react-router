import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h3>My total friends are :{friends.length}</h3>
            <p>They are : 
                {
                    friends.map(friend => <li key = {friend.id}>{friend.name}</li>)
                }
            </p>
        </div>
    );
};

export default Friends;