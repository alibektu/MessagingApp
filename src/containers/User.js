import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import { ListItemText, ListItemIcon, ListItem, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        height: 32,
        backgroundColor: '#D3D3D3',
        marginBottom: 2
    },
})

export default function User({ user, onClick }) {
    const classes = useStyles()

    const handleClick = () => {
        onClick(user.id)
    }

    return (
        <ListItem className={classes.root} button onClick={handleClick}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={user.name} />
          <Divider />
        </ListItem>
    )
}
