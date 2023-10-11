import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h3>My total friends are :{friends.length}</h3>
            <div className='grid md:grid-cols-4 gap-3'>
                {
                    friends.map(friend => <Friend key = {friend.id} friend = {friend}></Friend> )
                }
            </div>
        </div>
    );
};

export default Friends;