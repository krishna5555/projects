import React, { useEffect, useState } from 'react';
import './Chatspace.css';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import {withRouter} from 'react-router-dom';

function Chatspace(){
    const [roomName, setRoomName] = useState([]);

    useEffect(() => {
        console.log(window.location.href);
        setRoomName(window.location.href.split("/rooms/")[1]);
    }, [window.location.href]);

    return (
        <div className="chat_space">
            {/* header */}
            <div className="chat_space_header">
                <Avatar src="https://avatars.dicebear.com/api/human/1854.svg"/>

                <div className="chat_space_header_info">
                    <h4>{roomName}</h4>
                    <p>Last seen at....</p>
                </div>
                
                <div className="chat_space_header_more_options">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* chat area */}
            <div className="chat_space_area">
                <h1>Chat area</h1>
            </div>

            {/* footer */}
            <div className="chat_space_footer">
                <InsertEmoticonIcon />
                <input type="text" placeholder="Type a message" />
                <MicIcon />
                <SendIcon />
            </div>
        </div>
    );
}

export default withRouter(Chatspace);