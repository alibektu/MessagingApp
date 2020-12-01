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

export default function MessageBox({ userId, message }) {
    const classes = useStyles()
    const isUserMsg = userId === message.userId

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
                {message.userId + " ~ " + message.msg}
            </Card>
        </Box>
    )
}
