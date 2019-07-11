import React from 'react';

export default function CustomMessage(message){
    const messages={
        success: {style:' alert alert-success'},
        info   : {style:'alert alert-info'},
        default: {style:''},
        error  : {style:'alert alert-danger'},
        warning: {style:'alert alert-warning'}
    };
    return(
        <div className={messages[message.type].style}>
            {message.messageText}
        </div>
    );

}