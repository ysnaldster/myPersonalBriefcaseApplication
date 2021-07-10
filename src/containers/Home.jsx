import React from 'react'
import Navbar from '../components/navbars/Navbar.jsx'
import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'
import DeskNavbar from '../components/navbars/DeskNavbar.jsx'
import { Container, Col, Row } from 'react-bootstrap'

//  Styles  Home Description / Img
const StyledGeneralDiv = styled.div`
    /* height: 100vh;  */
    background-color: #393E46;
    justify-content: center;
    align-items: center; 
    padding-bottom: 10%;
    @media (min-width: 1200px){
        padding-bottom: 15%;
    }
    
`
const StyledSecondContainerDiv = styled.div`
    padding: 0px 24px 24px 24px; 
    background-color: #393E46;
`

const StyledDivImgContainer = styled.div`
    display: flex; 
    justify-content: center; 
    margin-top: 88px; 
`
const StyledTitleGeneralH1 = styled.h1`
    font-size: 32px; 
    font-weight: 400; 
    line-height: 40px;
    color: #ffffff; 
    /* margin: 15px 0px; */
`

const StyledDescriptionContainerP = styled.p`
    font-weight: 400px; 
    font-size: 18px; 
    line-height: 32px;
    color: #A7A9BE; 
`

const StyledMediaResponsive = styled.img`

@media (min-width: 320px) {
    width: 280px;
    height: 280px; 
}
@media (min-width: 360px){
    width: 320px;
    height: 320px;
}
    @media (min-width: 411px) {
    width: 360px;
    height: 360px;
        
}
`
const StyledBigResponsive = styled(Container)`
    @media (min-width: 1270px){
        margin-top: 150px;
    }
    @media (min-width: 1400px){
        margin-top: 110px;
    }
    @media (min-width: 1500px){
        margin-top: 220px; 
    }

`
const StyledArrowResponsiveBig  = styled.div`
    @media (min-width: 1900px){
        margin-top: 200px;
    }

`
// Styles Version Desktop

const Home = ({hello, name, description, direction}) => {
    return (
        // O height: 734px 
        <StyledGeneralDiv>
            {/* Home Mobile */}
            <div className='d-md-none'>
                <Navbar />
                <StyledDivImgContainer >
                    <StyledMediaResponsive src={direction} alt = 'my_photo' width='320px' height='320px' style={{ margin: '24px 0px' }} />
                </StyledDivImgContainer>
                <StyledSecondContainerDiv>
                    <StyledTitleGeneralH1> {hello}
                        <br />
                        {name}
                    </StyledTitleGeneralH1>
                    <StyledDescriptionContainerP >{description}</StyledDescriptionContainerP>
                    <div>
                        <FaArrowDown style={{ fontSize: '56px', marginTop: '10px', color: '#00b4d8' }} />
                    </div>
                </StyledSecondContainerDiv>
            </div>
            {/* Home Desktop */}
            <div className='d-none d-md-block'>
                <DeskNavbar />
                <Container fluid style={{ marginTop: '200px', boxSizing: 'border-box' }} className='d-xxl-none'>
                    <Row className='d-lg-none' >
                        <Col xs={5} style={{ marginLeft: '50px' }} className='d-lg-none'>
                            <h1 style={{ fontSize: '45px', color: '#ffffff' }}>{hello}
                                <br />
                                {name}
                            </h1>
                            <p style={{ fontSize: '24px', color: '#A7A9BE' }}>{description}</p>
                        </Col>
                        <Col xs={5} className='d-lg-none'>
                            <img src={direction} width='360px' height='360px' alt = 'my_photo' />
                        </Col>
                        <div>
                            <FaArrowDown style={{ fontSize: '66px', marginTop: '35%', color: '#00b4d8', marginLeft: '50px' }} />
                        </div>
                    </Row>
                    {/* Desktop > 992px */}
                    <Row className='d-none d-lg-flex d-xxl-none' style={{ margin: '0 10px', padding: '0 34px' }}>
                        <Col xs={8} className='d-none d-lg-block '>
                            <h1 style={{ fontSize: '54px', color: '#ffffff' }}>{hello}
                                <br />
                               {name}
                            </h1>
                            <p style={{ fontSize: '24px', marginRight: '200px', color: '#A7A9BE' }}>{description}</p>
                        </Col>
                        <Col xs={4} style={{ justifyContent: 'flex-end' }} className='d-none d-lg-flex'>
                            <img src={direction} width='460px' height='460px' alt = 'my_photo' />
                        </Col>
                        <div>
                            <FaArrowDown style={{ fontSize: '56px', color: '#00b4d8' }} />
                        </div>
                    </Row>
                </Container>
                {/* Desktop > 1400px */}
                <StyledBigResponsive fluid className='d-none d-xxl-block' style={{ padding: '0px' }}>
                    <Row className='d-none d-xxl-flex' style={{ margin: '0 72px' }}>
                        <Col xs={8} className='d-none d-lg-block '>
                            <h1 style={{ fontSize: '74px', color: '#ffffff' }}>{hello}
                                <br />
                               {name}
                            </h1>
                            <p style={{ fontSize: '28px', paddingRight: '40px', margin: '80px 0px', color: '#A7A9BE' }}>{description}</p>
                        </Col>
                        <Col xs={4} className='d-none d-lg-flex' style={{ padding: '0px', justifyContent: 'flex-end' }}>
                            <img src={direction} width='460px' height='460px' alt = 'my_photo' />
                        </Col>
                        <StyledArrowResponsiveBig>
                            <FaArrowDown style={{ fontSize: '76px', color: '#00b4d8', paddingBottom: '10px' }} />
                        </StyledArrowResponsiveBig>
                    </Row>
                </StyledBigResponsive>
            </div>
        </StyledGeneralDiv>
    )
}

export default Home
