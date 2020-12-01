import React, { useState } from 'react'
import _ from 'lodash'
import { Box} from '@material-ui/core'

import ChatList from './containers/ChatList'
import ChatWindow from './containers/ChatWindow'
import { users, userChatsHistory } from './db'

export default function App() {
    const [chatId, setChatId] = useState('1')
    const [userChats, setUserChats] = useState(userChatsHistory[chatId])

    const handleSelectChat = (id) => {
        setChatId(id)
        setUserChats(userChatsHistory[id])
        userChatsHistory[chatId] = userChats
    }

    const handleSendMessage = () => {
        userChatsHistory[chatId].chatHistory.push({
            userId: userChatsHistory[chatId].userId,
            msg: userChatsHistory[chatId].draft
        })
        userChatsHistory[chatId].draft=''
        setUserChats({...userChats, draft: ''})
    }

    const handleChangeText = (text) => {
        setUserChats({...userChats, draft: text})
    }

    const getTitle = () => {
        return _.chain(userChatsHistory[chatId].userIds)
            .map(userId => users[userId].name)
            .join(', ')
            .value()
    }

    return (
        <Box display='flex'>
            <ChatList onSelectChat={handleSelectChat}/>
            <ChatWindow
                onChangeText={handleChangeText}
                onSendMessage={handleSendMessage}
                title={getTitle()}
                userChatHistory={userChats}
            />
        </Box>
    )
}
