import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../comp/Typography'
import { TextField } from '@material-ui/core'
import { Icon } from 'rsuite';
import { fontWeight } from '@material-ui/system';
import Bounce from 'react-reveal/Bounce';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="https://material-ui.com/">
                Teezer
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: 'rgba(0, 0, 0, 0.50) 0px 1px 4px',
        overflow: 'hidden',
        marginBottom: 0,
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
        display: 'flex'

    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: 'flex',
    },
    icon: {
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.50) 0px 1px 4px',
        marginRight: theme.spacing(1),
        color: 'white'
    },
    list: {
        margin: 0,
        listStyle: 'none',
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
    language: {
        marginTop: theme.spacing(1),
        width: 150,
    },
}));


export default function AppFooter() {
    const classes = useStyles();

    return (
        <Typography component="footer" className={classes.root}>

            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            className={classes.iconsWrapper}
                            spacing={2}
                        >
                            <Grid item className={classes.icons}>
                                <a href="" className={classes.icon} id="facebook">
                                    <Icon icon="facebook"></Icon></a>
                                <a href="" className={classes.icon} id="instagram">
                                    <Icon icon="instagram"></Icon>
                                </a>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" marked="left" gutterBottom>
                            Legal
                        </Typography>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>
                                <Link href="">Terms</Link>
                            </li>
                            <li className={classes.listItem}>
                                <Link href="">Privacy</Link>
                            </li>
                        </ul>
                    </Grid>

                </Grid>
            </Container>

        </Typography>
    );
}