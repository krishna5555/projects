import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'

function Chat(props){
    const [avatar_no, setAvatarNo] = useState();

    useEffect(() => {
        setAvatarNo(Math.random(1,50));
        return avatar_no;
    }, []);

    return (
        <div className="chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${avatar_no}.svg`}/>
            <div className="chat_detail">
                <div className="chatName">
                    <h4>{props.name}</h4>
                </div>
                <div className="chatLastMessage">
                    <p>Last message</p>
                </div>
            </div>
        </div>
    );
}

export default Chat;