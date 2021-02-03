import React, { useState } from 'react';
import "./Chat.css";
import { Avatar, IconButton} from '@material-ui/core';
import {MoreVert, AttachFile, SearchOutlined, InsertEmoticon, Mic} from '@material-ui/icons'
import axios from './axios';

function Chat({ messages }) {

    const[input,setInput] = useState('');

    const submit = async (e) =>{
        e.preventDefault();
        await  axios.post("/messages/new",{
            message:input,
            name:"Suraj",
            timestamp:"demo timestamp",
            received: true
        });

        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GcpqFYbj9mD5KjEF8PyEBGd9ZZQIvmtXjw&usqp=CAU"/>
                <div className="chat__headerInfo">
                    <h3>Room No 1</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((msg) => (
                    <p className={`chat__message ${msg.received && "chat__reciever"}`}>
                      <span className="chat__name">{msg.name}</span>
                      {msg.message}
                      <span className="chat__timestamp">{msg.timestamp}</span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input value={input} placeholder="Type a message" type="text" onChange={e=>setInput(e.target.value)}/>
                    <button onClick ={submit} type="submit">Send a Message</button>
                </form>
                <Mic/>
            </div>
        </div>
    )
}

export default Chat
