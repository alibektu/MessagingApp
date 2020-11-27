import React, { useState } from 'react'
import { Box} from '@material-ui/core'

import UserList from './containers/UserList'
import ChatWindow from './containers/ChatWindow'

const users = {
    '1': {name: 'Bob', id: '1'},
    '2': {name: 'Tony', id: '2'},
    '3': {name: 'Christy', id: '3'}
}

const userMessageHistory = {
    '1': [{userId: '1', msg: 'Hello'}, {userId: '2', msg: 'Hi'}],
    '2': [{userId: '1', msg: 'Hello'}, {userId: '2', msg: 'Hi'}],
    '3': []
}

export default function App() {
    const [user, setUserId] = useState(users['1']);
    const [chatHistory, setChatHistory] = useState(userMessageHistory['1']);

    const handleSelectUser = (userId) => {
        setUserId(users[userId]);
        setChatHistory(userMessageHistory[userId])
    }

    const handleSendMessage = (msg) => {
        userMessageHistory[user.id].push({userId: user.id, msg})
    }

    return (
        <Box display='flex'>
            <UserList users={users} onSelectUser={handleSelectUser}/>
            <ChatWindow user={user} chatHistory={chatHistory} onSendMessage={handleSendMessage}/>
        </Box>
    )
}
