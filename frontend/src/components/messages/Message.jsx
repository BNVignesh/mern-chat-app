import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../conversation/useConversation';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;

    const className = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubblebgcolor = fromMe ? 'bg-blue-500' : '';

    // Format the createdAt timestamp to only show the time
    const messageTime = new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={`chat ${className}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Profile" src={profilePic} />
                </div>
            </div>
            <div className="chat-header">
                {fromMe ? authUser.name : selectedConversation?.name}
                <time className="text-xs opacity-50">{messageTime}</time>
            </div>
            <div className={`chat-bubble text-white ${bubblebgcolor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex items-center">
                Delivered
            </div>
        </div>
    );
}

export default Message;
