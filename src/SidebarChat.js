import React from 'react'
import "./SidebarChat.css";
import { Avatar} from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GcpqFYbj9mD5KjEF8PyEBGd9ZZQIvmtXjw&usqp=CAU"/>
            <div className="sidebarChat__info">
                <h2>Room1</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
