import React from 'react'
import { Grid, Box, Container, List, ListItem, ListItemText, Link, Typography, Hidden } from '@material-ui/core'
import useStyles from "./Styles";
import { FooterImage, PlayStore, AppStore } from '../../../Assets/'
import { HoodaLogo, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../../Assets/Icons'


const Footer = () => {
    const classes = useStyles()
    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    return (
        <Box pt={2} className={classes.root} position="relative" >
            {/* //! Untuk layer gambar background  */}
            <Box position="absolute" top={0} style={{ backgroundImage: `url(${FooterImage})`, width: "100%", height: "100%" }}>
            </Box>

            <Box position="relative" style={{ height: "100%" }}>
                <Container color="primary" className={classes.containerCustom} >
                    <Grid container >
                        <Grid item xs={12} md={3}  >
                            <Box pt={3} mb={3} justifyContent="center" display={{ xs: "flex", md: "block" }} >
                                <HoodaLogo width={150} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}  >
                            <Box justifyContent="center" display={{ xs: "flex", md: "block" }}  >
                                <List style={{ color: "white", textAlign: "center" }}>
                                    <ListItem className={classes.list}>
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Tentang Kami</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.list}>
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Layanan</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.list} >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Kurir</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.list}>
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Gabung Mitra Kami</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}  >
                            <Box justifyContent="center" display={{ xs: "flex", md: "block" }} >
                                <List style={{ color: "white" }}>
                                    <ListItem className={classes.list} >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Kontak Kami</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.list} >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Pusat Bantuan</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.list}>
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Syarat & Ketentuan</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem className={classes.list} >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">Kebijakan Privasi</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}  >
                            <Box justifyContent="center" display={{ xs: "flex", md: "block" }} >
                                <List style={{ color: "white" }}>
                                    <ListItem className={classes.list}>
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 800 }}>
                                                <Link component="button" color="inherit">Ikuti Kami</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">
                                                    <FacebookIcon />
                                                </Link>
                                                <Link component="button" color="inherit" style={{ marginLeft: "15px" }}>
                                                    <InstagramIcon />
                                                </Link>
                                                <Link component="button" color="inherit" style={{ marginLeft: "15px" }}>
                                                    <TwitterIcon />
                                                </Link>
                                                <Link component="button" color="inherit" style={{ marginLeft: "15px" }}>
                                                    <YoutubeIcon />
                                                </Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>

                                </List>
                            </Box>
                        </Grid>
                        {/* //! Kosong  */}
                        <Grid item xs={12} md={3}  >
                        </Grid>

                        <Grid item xs={12} md={3}  >
                            <Box justifyContent="center" display={{ xs: "flex", md: "block" }} >
                                <List style={{ color: "white" }}>
                                    <ListItem className={classes.list} >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 800 }}>
                                                <Link component="button" color="inherit">Unduh</Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">
                                                    <img src={PlayStore} alt="playstore" width="200" />
                                                </Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>

                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}  >
                            <Box justifyContent="center" display={{ xs: "flex", md: "block" }} >
                                <List style={{ color: "white" }}>
                                    <Hidden smDown>
                                        <ListItem style={{ visibility: "hidden" }}>
                                            <ListItemText >
                                                <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                    <Link component="button" color="inherit">Kosong</Link>
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </Hidden>
                                    <ListItem >
                                        <ListItemText >
                                            <Typography variant="caption" style={{ fontWeight: 500 }}>
                                                <Link component="button" color="inherit">
                                                    <img src={AppStore} alt="appstore" width="170" />
                                                </Link>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>

                        {/* //! Kosong  */}
                        <Grid item xs={12} md={3}  >
                        </Grid>
                    </Grid>
                    <Box pt={6} pb={6} display="flex" justifyContent="center">
                        <Typography variant="caption" style={{ color: "white", opacity: 0.5 }}>
                            @copyrightbyHooda
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box >
    )
}

export default Footer
