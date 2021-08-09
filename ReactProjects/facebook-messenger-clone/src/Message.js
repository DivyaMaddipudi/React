import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef((props, ref) => {
    const isUser = props.username1 === props.message.username;  
    
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" color="white" component="h2">
            {!isUser && `${props.message.username || 'Unknown User'}: `} {props.message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
})

export default Message;