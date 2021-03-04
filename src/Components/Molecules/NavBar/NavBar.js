import React from 'react'
import { Typography, AppBar } from '@material-ui/core'

const NavBar = () => {
    return (
        <div style={{ border: "1px solid black", padding: "10px" }}>
            <AppBar color="primary">
                <Typography >
                    ini navbar
                </Typography>
            </AppBar>
        </div>
    )
}

export default NavBar
