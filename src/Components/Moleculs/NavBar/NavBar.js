import React, { useRef, useState } from 'react'
import { HoodaLogo, NavBarIcon } from '../../../Assets'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Drawer, Button, Grow, Paper, Popper, ClickAwayListener, MenuList, MenuItem, makeStyles, AccordionSummary, Typography, AccordionDetails, withStyles } from '@material-ui/core';

//!style sidebar
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const Accordion = withStyles({
    root: {
        backgroundColor: "#F15D2A",
        color: "white",
        listStyle: "none"
    },
    expanded: {},
})(MuiAccordion);

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const [menu, setMenu] = useState({
        menu1: false,
        menu2: false,
        menu3: false
    })

    const handleMenu = (index_menu, value) => {
        setMenu({ ...menu, [index_menu]: value })
    }


    const menu1Ref = useRef(null);
    const menu2Ref = useRef(null);
    const menu3Ref = useRef(null);


    console.log(`dari render`, sideBar)

    const handleSideBar = (value) => {
        console.log(`dari handle open`, sideBar);
        setSideBar(value)

    }

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const sidebar_content = (
        <div className="font-primary bg-primary font-semibold">
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
        </div>
    )



    return (
        <header style={{ border: "1px solid black" }} >
            ini navbar
        </header>
    )
}

export default NavBar
