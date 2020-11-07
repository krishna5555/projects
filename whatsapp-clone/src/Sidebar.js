import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Chat from './Chat';
import {Link} from 'react-router-dom';

function Sidebar(){
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms([{"data":{"roomName":"Dance"}},
                  {"data":{"roomName":"Drama"}},
                  {"data":{"roomName":"Singing"}},
                  {"data":{"roomName":"Jump"}},
                  {"data":{"roomName":"Dev"}},
                  {"data":{"roomName":"Test"}},
                  {"data":{"roomName":"Party"}},
                  {"data":{"roomName":"Group"}}]);
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://avatars.dicebear.com/api/human/1854.svg" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar_search">
                <SearchIcon />
                <input type="text" placeholder="Search or start new chat"/>
            </div>

            <div className="sidebar_chats">
                <div className="sidebar_chats_new_chat">
                    <h2>Add new Chat</h2>
                </div>
                {rooms.map(room => (
                    <Link to={`/rooms/${room.data.roomName}`} key={room.id}>
                        <Chat key={room.id} id={room.id} name={room.data.roomName} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;