import React, { useEffect, useState } from 'react'
import { Paper, Box, Typography, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MessageBox from './MessageBox'

const useStyles = makeStyles({
    root: {
        margin: 24,
        height: 480,
        width: 360,
        backgroundColor: '#D3D3D3'
    },
    title: {
        alignContent: 'center',
        backgroundColor: '#989898',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        display: 'flex',
        height: '7%',
        justifyContent: 'center',
    },
    textField: {
        backgroundColor: '#F5F5F5',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: '8%',
        width:'100%',
    }
})

const ENTER_KEY = 13

export default function ChatWindow({ user, chatHistory, onSendMessage }) {
    const classes = useStyles()
    const [text, setText] = useState('')

    useEffect(() => {
        const messageBoxDiv = document.getElementById("MessageBox");
        messageBoxDiv.scrollTop = messageBoxDiv.scrollHeight;
    })

    const handleChangeText = (event) => {
        setText(event.target.value)
    };

    const handleSendMessage = (event) => {
        if (event.which === ENTER_KEY) {
            onSendMessage(text)
            setText('')
        }
    }

    return (
        <Paper elevation={3} className={classes.root} >
            <Box className={classes.title}>
                <Typography color='primary' variant='h6'>{user.name}</Typography>
            </Box>
            <Box overflow='auto' height='85%' id='MessageBox'>
                {!!chatHistory && chatHistory.map((msg, index) => (
                    <MessageBox key={index} user={user} message={msg} />
                ))}
            </Box>
            <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.textField}
                onChange={handleChangeText}
                onKeyDown={handleSendMessage}
                value={text}
            />
        </Paper>
    )
}
