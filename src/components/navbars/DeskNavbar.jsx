import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import { FaUser } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { VscReferences } from 'react-icons/vsc'
import { ImPhone } from 'react-icons/im'

// Styles Navbar Desktop 

const StyledLinkAnd = styled.a`
    text-decoration: none; 
    font-size: 20px; 
    margin: 0px 24px;
    color: #ffffff;
    @media (min-width: 768px){
        text-align: center;
    }
    @media (min-width: 992px){
        display: flex;
        align-items: center;
    }
`
const StyledButtonDownload = styled(Button)`
    background-color: #00b4d8;
    border: none;
    font-weight: 700;
    @media (min-width: 1450px) {
        margin-right: 10px;
    }
`

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));


const StyledContainerResponsive = styled(Container)`
    @media (min-width: 768px){
        padding: 20px 34px !important;
    }
    @media (min-width: 1250px){
        padding: 20px 72px !important;
    }
`

const DeskNavbar = () => {
    const classes = useStyles();
    return (
        <Container fluid style={{ padding: '24px 62px' }}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    style={{ background: '#393E46' }}
                >
                    <StyledContainerResponsive fluid style={{ padding: '20px 72px' }}>
                        <Row>
                            <Col xs={9} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <StyledLinkAnd href="#">
                                    <FaUser className='me-lg-3' />
                                    Hola
                                </StyledLinkAnd>
                                <StyledLinkAnd href="#">
                                    <MdWork className='me-lg-3' />
                                    Proyectos</StyledLinkAnd>
                                <StyledLinkAnd href="#">
                                    <VscReferences className='me-lg-3' />
                                    Referencias </StyledLinkAnd>
                                <StyledLinkAnd href="#">
                                    <ImPhone className='me-lg-3' />
                                    Contacto</StyledLinkAnd>
                            </Col>
                            <Col xs={3} style={{ padding: '0px', display: 'flex', justifyContent: 'flex-end' }}>
                                <StyledButtonDownload>Descargar Curriculum</StyledButtonDownload>
                            </Col>
                        </Row>
                    </StyledContainerResponsive>
                </AppBar>
            </div>
        </Container>
    )
}

export default DeskNavbar
