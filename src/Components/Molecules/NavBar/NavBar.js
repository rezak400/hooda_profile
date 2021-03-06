import React, { useState, useRef } from 'react'
import useStyles from "./Styles";
import { Typography, AppBar, Container, Box, Hidden, Link, Toolbar, IconButton, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Drawer, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { HoodaLogo, NavBarIcon, LanguageIcon } from '../../../Assets/Icons'
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, NavLink } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const NavBar = () => {
    const history = useHistory();
    const classes = useStyles()

    //! Untuk Sidebar
    const [sideBar, setSideBar] = useState(false)
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    //! Untuk Menu Navbar
    const [menu, setMenu] = useState({
        menu1: false,
        menu2: false,
        menu3: false,
        menuBahasaMobile: false,
    })

    const handleMenu = (index_menu, value) => {
        setMenu({ ...menu, [index_menu]: value })
    }

    const handleSideBar = (value) => {
        setSideBar(value)
    }

    const menu1Ref = useRef(null);
    const menu2Ref = useRef(null);
    const menu3Ref = useRef(null);
    const menuBahasaMobileRef = useRef(null);



    console.log(`liat useHistory`, history)
    return (
        <AppBar color="primary" position="fixed">
            <Container className={classes.container} >
                <Box p={1} display="flex" justifyContent="space-between" alignItems="center">

                    {/* //! Mobile NavBar  */}
                    <Hidden mdUp>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleSideBar(true)}>
                            <MenuIcon />
                        </IconButton>

                        {/* //! Mulai SideBar  */}
                        <Drawer anchor="top" open={sideBar} onClose={() => handleSideBar(false)}>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} TransitionProps={{ unmountOnExit: true }}>
                                <p className="py-4 px-3 text-sm">Tentang Kami</p>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <p className="text-sm">
                                        Layanan Kami
                                    </p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="text-sm">
                                        <p>Layanan 1</p>
                                        <p className="mt-2">Layanan 2</p>
                                        <p className="mt-2">Layanan 3</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <p className="text-sm">
                                        Gabung Mitra Kami
                                    </p>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="text-sm">
                                        <p>Mitra 1</p>
                                        <p className="mt-2">Mitra 2</p>
                                        <p className="mt-2">Mitra 3</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <p className="py-4 px-3 text-sm">
                                    Pusat Bantuan
                                </p>
                            </Accordion>
                        </Drawer>

                        <Box display="flex" alignItems="center" justifyContent="center" flexGrow={1} onClick={() => history.push("/")}>
                            <Link component="button" color="inherit" onClick={() => history.push("/")}>
                                <HoodaLogo width="50" />
                            </Link>
                        </Box>
                        <Box>
                            <Link component="button" color="inherit" ref={menuBahasaMobileRef} onClick={() => handleMenu("menuBahasaMobile", true)}>
                                <Box display="flex">
                                    <LanguageIcon width="18" style={{ marginRight: "6px" }} />
                                    <NavBarIcon width="10" />
                                </Box>
                            </Link>
                            <Popper open={menu.menuBahasaMobile} anchorEl={menuBahasaMobileRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper style={{ marginTop: "10px" }}>
                                            <ClickAwayListener onClickAway={() => handleMenu("menuBahasaMobile", false)}>
                                                <MenuList id="menu-list-grow" >
                                                    {["Bahasa1", "Bahasa2", "Bahasa3"].map(item => {
                                                        return (
                                                            <MenuItem>
                                                                <Typography variant="caption" style={{ fontWeight: 300 }}>
                                                                    {item}
                                                                </Typography>
                                                            </MenuItem>
                                                        )
                                                    })}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Box>
                    </Hidden>

                    {/* //! Dekstop NavBar */}
                    <Hidden smDown>
                        <Box display="flex" alignItems="center" >
                            <Link component="button" color="inherit" onClick={() => history.push("/")}>
                                <HoodaLogo width="50" />
                            </Link>
                        </Box>
                        {/* //! Nav  */}
                        <Box display="flex" alignItems="center" justifyContent="space-around" flexGrow={1} pl={4} pr={8}>
                            {/* //! Menu 1 , Tentang Kami  */}
                            <Box >
                                <Link component={NavLink} color="inherit" to="/about" activeStyle={{
                                    textDecoration: "underline",
                                }}>
                                    <Typography variant="caption" style={{ fontWeight: 600 }}>
                                        Tentang Kami
                                    </Typography>
                                </Link>
                            </Box>
                            {/* //! Menu 2 , Layanan  */}
                            <Box>
                                <Link component="button" color="inherit" ref={menu1Ref} onClick={() => handleMenu("menu1", true)}>
                                    <Typography variant="caption" style={{ fontWeight: 600 }}>
                                        Layanan
                                    </Typography>
                                    <NavBarIcon width="10" style={{ marginLeft: 8 }} />
                                </Link>
                                <Popper open={menu.menu1} anchorEl={menu1Ref.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper style={{ marginTop: "5px" }}>
                                                <ClickAwayListener onClickAway={() => handleMenu("menu1", false)}>
                                                    <MenuList id="menu-list-grow" >
                                                        {["Layanan1", "Layanan2", "Layanan3"].map(item => {
                                                            return (
                                                                <MenuItem>
                                                                    <Typography variant="caption" style={{ fontWeight: 300 }}>
                                                                        {item}
                                                                    </Typography>
                                                                </MenuItem>
                                                            )
                                                        })}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Box>
                            {/* //! Menu 3 , Gabung Mitra Kami  */}
                            <Box>
                                <Link component="button" color="inherit" ref={menu2Ref} onClick={() => handleMenu("menu2", true)}>
                                    <Typography variant="caption" style={{ fontWeight: 600 }}>
                                        Gabung Mitra Kami
                                    </Typography>
                                    <NavBarIcon width="10" style={{ marginLeft: 8 }} />
                                </Link>
                                <Popper open={menu.menu2} anchorEl={menu2Ref.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper style={{ marginTop: "5px" }}>
                                                <ClickAwayListener onClickAway={() => handleMenu("menu2", false)}>
                                                    <MenuList id="menu-list-grow" >
                                                        {["Mitra1", "Mitra2", "Mitra3"].map(item => {
                                                            return (
                                                                <MenuItem>
                                                                    <Typography variant="caption" style={{ fontWeight: 300 }}>
                                                                        {item}
                                                                    </Typography>
                                                                </MenuItem>
                                                            )
                                                        })}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Box>
                            {/* //! Menu 4 , Pusat Bantuan  */}
                            <Box>
                                <Link component="button" color="inherit">
                                    <Typography variant="caption" style={{ fontWeight: 600 }}>
                                        Gabung Mitra Kami
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                        <Box display="flex">
                            {/* //! Menu 5 , Bahasa */}
                            <Link component="button" color="inherit" ref={menu3Ref} onClick={() => handleMenu("menu3", true)} >
                                <Box display="flex" alignItems="center">
                                    <LanguageIcon width="18" style={{ marginRight: 4 }} />
                                    <Typography variant="caption" style={{ fontWeight: 600 }}>
                                        Bahasa Indonesia
                                    </Typography>
                                    <NavBarIcon width="10" style={{ marginLeft: 8 }} />
                                </Box>
                            </Link>
                            <Popper open={menu.menu3} anchorEl={menu3Ref.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={() => handleMenu("menu3", false)}>
                                                <MenuList id="menu-list-grow" >
                                                    {["Bahasa1", "Bahasa2", "Bahasa3"].map(item => {
                                                        return (
                                                            <MenuItem>
                                                                <Typography variant="caption" style={{ fontWeight: 300 }}>
                                                                    {item}
                                                                </Typography>
                                                            </MenuItem>
                                                        )
                                                    })}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Box>
                    </Hidden>
                </Box>
            </Container>
        </AppBar >
    )
}

export default NavBar
