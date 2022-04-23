import React from 'react';
import './Chat.css';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Chat = () => {
    return (
        <WhatsAppWidget 
        phoneNumber='XXXXXXXX' 
        textReplyTime="Typically replies within a day"
        message="Hello! Wanna contact wiht us?"
        widgetWidth="300px"
		widgetWidthMobile="260px"
        iconSize="56"
        />
    );
};

export default Chat;