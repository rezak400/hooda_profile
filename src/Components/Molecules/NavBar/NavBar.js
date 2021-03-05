import React from 'react'
import useStyles from "./Styles";
import { Typography, AppBar, Container, Box, Hidden, Link, Toolbar, IconButton, Button } from '@material-ui/core'
import { HoodaLogo, NavBarIcon } from '../../../Assets/Icons'
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import { useHistory, Link as RouterLink } from 'react-router-dom';



const NavBar = () => {
    const history = useHistory();
    const classes = useStyles()

    console.log(`liat useHistory`, history)
    return (
        <AppBar color="primary" position="fixed">
            <Container className={classes.container} >
                <Box p={1} display="flex" justifyContent="space-between" alignItems="center">
                    <Hidden mdUp>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Box display="flex" alignItems="center" justifyContent="center" flexGrow={1} onClick={() => history.push("/")}>
                            <HoodaLogo width="50" />
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" >
                                <Box display="flex">
                                    <LanguageIcon fontSize="small" />
                                    <NavBarIcon width="10" />
                                </Box>
                            </Link>
                        </Box>
                    </Hidden>
                    <Hidden smDown>
                        <Box display="flex" alignItems="center" onClick={() => history.push("/")}>
                            <HoodaLogo width="50" />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-around" flexGrow={1} pl={4} pr={8}>
                            <Typography variant="caption" style={{ fontWeight: 600 }}>
                                <Link href="/" color="inherit">
                                    Tentang Kami
                                </Link>
                            </Typography>
                            <Typography variant="caption" style={{ fontWeight: 600 }}>
                                <Link href="/about" color="inherit">
                                    Layanan
                                    <NavBarIcon width="10" style={{ marginLeft: 8 }} />
                                </Link>
                            </Typography>
                            <Typography variant="caption" style={{ fontWeight: 600 }}>
                                <Link href="/" color="inherit">
                                    Gabung Mitra Kami
                                    <NavBarIcon width="10" style={{ marginLeft: 8 }} />
                                </Link>
                            </Typography>
                            <Typography variant="caption" style={{ fontWeight: 600 }}>
                                <Link href="/" color="inherit">
                                    Pusat Bantuan
                                </Link>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="caption" style={{ fontWeight: 600 }}>
                                <Link href="#" color="inherit" >
                                    <Box display="flex">
                                        <LanguageIcon fontSize="small" />
                                	        Bahasa Indonesia
                                	    <NavBarIcon width="10" style={{ marginLeft: 8 }} />
                                    </Box>
                                </Link>
                            </Typography>
                        </Box>
                    </Hidden>
                </Box>
            </Container>
        </AppBar >
    )
}

export default NavBar
