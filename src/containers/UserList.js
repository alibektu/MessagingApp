
import React from 'react'
import _ from 'lodash'
import { Box, Typography, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import User from './User'

const useStyles = makeStyles({
    root: {
        width: 180,
        marginTop: 24,
        height: 'fit-content',
        backgroundColor: '#EBECF0',
    },
})

export default function UserList({ users, onSelectUser }) {
    const classes = useStyles()

    return (
        <Box className={classes.root} >
            <Box px={2}>
                <Typography color='primary' variant='h6'>User List</Typography>
            </Box>
            <List>
                {_.chain(users)
                    .keys()
                    .map(userId => (
                        <User key={userId} onClick={onSelectUser} user={users[userId]}/>
                    ))
                    .value()}
            </List>
        </Box>
    )
}

