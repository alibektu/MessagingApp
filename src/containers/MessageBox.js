import React from 'react'
import { Box, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    msgBox: {
        width: '50%',
        margin: 4,
        padding: 8,
        borderRadius: 16
    }
})

export default function MessageBox({ user, message }) {
    const classes = useStyles()
    const isUserMsg = user.id === message.userId

    return (
        <Box
            display='flex'
            justifyContent={isUserMsg? 'flex-end':'flex-start'}
        >
            <Card
                className={classes.msgBox}
                style={{
                    borderBottomLeftRadius: isUserMsg? 16 : 0,
                    borderBottomRightRadius: isUserMsg? 0 : 16,
                }}
            >
                {message.msg}
            </Card>
        </Box>
    )
}
