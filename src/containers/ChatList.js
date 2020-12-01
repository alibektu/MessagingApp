
import React from 'react'
import _ from 'lodash'
import { Box, Typography, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Chat from './Chat'
import { users, userChatsHistory } from '../db'

const useStyles = makeStyles({
    root: {
        width: 260,
        marginTop: 24,
        height: 'fit-content',
        backgroundColor: '#EBECF0',
    },
})

export default function ChatList({ onSelectChat }) {
    const classes = useStyles()

    const getTitle = (chat) => {
        return _.chain(chat.userIds).map(userId => users[userId].name).join(', ').value()
    }

    return (
        <Box className={classes.root} >
            <Box px={2}>
                <Typography color='primary' variant='h6'>Chats</Typography>
            </Box>
            <List>
                {_.chain(userChatsHistory)
                    .keys()
                    .map(chatId => (
                        <Chat
                            key={chatId}
                            chatId={chatId}
                            onClick={onSelectChat}
                            title={getTitle(userChatsHistory[chatId])}
                        />
                    ))
                    .value()}
            </List>
        </Box>
    )
}

