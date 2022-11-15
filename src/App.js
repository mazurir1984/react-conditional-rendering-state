import logo from './logo.svg';
import './App.css';
import React from 'react';
import Message from "./component/message/index.jsx";

const messageFromSender = {
    sender: "Test Testenco",
    textMessage: "Hello, my friend",
}

function AppMessage() {
    const { sender, textMessage } = messageFromSender;
    return <Message sender = {sender} textMessage = {textMessage} isRead />
}

export default AppMessage;

