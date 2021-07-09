import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Button, Modal } from 'react-bootstrap'
import { proyectActive } from '../components/actions/proyectsAction'
import styled from 'styled-components'

// Styles 

const StyledMainDescriptionContainer = styled.div`
  margin: 24px; 
  position: relative; 
  top: 40px; 
  @media (min-width: 768px){
      top: 100px; 
  }
  @media (min-width: 1200px){
      display: flex; 
      margin: 0px 72px;
      top: 30px;
      padding: 80px 0px;
  }
  @media (min-width: 1300px){
      margin: 0px 125px;
  }
`

const StyledImgProjects = styled.img`
  margin: 0 24px 0px 48px;
  @media (min-width: 768px){
      width: 90%; 
      height: 20%;
  }
  @media (min-width: 1200px){
      width: 1222px;
      height: 540px; 
      margin: 0px 72px 0px 96px;
  }
  @media (min-width: 1281px){
      width: 1222px; 
      height: 540px;
  }
`

const StyledContainerDivProject = styled.div`
  margin: 120px 0px; 
  display: flex; 
  justify-content: center; 
  @media (min-width: 768px){
      margin: 240px 0px; 
  }
  @media (min-width: 1200px){
      margin: 50px 0px;
  }
`
const StyledCardProjects = styled(Card)`
  width: 320px;
  height: 320px;
  position: absolute;
  margin-top: 340px;
  left: 24px; 
  @media (min-width: 320px){
      width: 250px;
  }
  @media (min-width: 360px){
      width: 294px;
  }
  @media (min-width: 411px){
      left: 26px;
  }
  @media (min-width: 768px){
      margin-top: 200px;
      width: 700px;
  }
  @media (min-width: 1200px){
      left: 72px;
      margin-top: 180px;
  }
`
const StyledMainDescriptionH1 = styled.h1`
  font-size: 32px; 
  font-weight: 600px;
  line-height: 40px;
  @media (min-width: 768px){
      font-size: 48px;
      line-height: 56px;
  }
  @media (min-width: 1200px){
      margin-right: 104px;
  }
`
const StyledMainDescriptionP = styled.p`
  font-size: 18px; 
  line-height: 32px; 
  @media (min-width: 768px){
      padding-top: 20px;
      font-size: 24px; 
  }
`


const ProyectsPerfomance = ({ title, description }) => {

    const dispatch = useDispatch();
    const { proyects } = useSelector(state => state.proyects)
    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClickProyect = (proyect) => {
        handleShow();
        dispatch(proyectActive(proyect.id, { ...proyect }))
    }
    const { active } = useSelector(state => state.proyectActive)
    const proyectsDesktop = [];
    if (proyects !== undefined) {
        proyectsDesktop.push(proyects[0], proyects[2])
    }
    return (
        <div>
            <StyledMainDescriptionContainer>
                <StyledMainDescriptionH1>{title}</StyledMainDescriptionH1>
                <StyledMainDescriptionP>{description}</StyledMainDescriptionP>
            </StyledMainDescriptionContainer>
            {
                active !== undefined &&
                <Modal show={show} onHide={handleClose} style={{ top: '300px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{active.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
            {
                proyects !== undefined && proyects.map(p => {
                    return (
                        <div>
                            {/* Mobile/Tablet */}
                            <StyledContainerDivProject key={p.id} className='d-xl-none'>
                                <StyledCardProjects>
                                    <Card.Body>
                                        <Card.Title>{p.title}</Card.Title>
                                        <Card.Text>
                                            {p.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { handleClickProyect(p) }}>Go somewhere</Button>
                                    </Card.Body>
                                </StyledCardProjects>
                                <StyledImgProjects src={p.imgMobile} width='330px' height='568px' alt='project_image' className='d-md-none' />
                                <StyledImgProjects src={p.imgDesktop} alt='project_image' className='d-none d-md-flex' />
                            </StyledContainerDivProject>
                        </div>
                    )
                })
            }
            {/* Desktop */}
            <StyledContainerDivProject className='d-none d-xl-block'>
                {
                    proyects !== undefined && <StyledContainerProjectOneDesktop>
                        {/* <p>{proyects[1].title}</p> */}
                        <StyledCardDesktopMainProject>
                            <Card.Body>
                                <Card.Title>{proyects[1].title}</Card.Title>
                                <Card.Text>
                                    {proyects[1].description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleClickProyect(proyects[1]) }}>Go somewhere</Button>
                            </Card.Body>
                        </StyledCardDesktopMainProject>
                        <img src={proyects[1].imgDesktop} alt='project_image' className='d-none d-md-flex' width='1222px' height='540px' />
                    </StyledContainerProjectOneDesktop>
                }
                {
                    proyects !== undefined &&
                    <StyledContainersProjectsSecondaryDesktop>
                        {
                            proyectsDesktop.map(p => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <StyledCardsProjectsDesktop>
                                            <Card.Body>
                                                <Card.Title>{p.title}</Card.Title>
                                                <Card.Text>
                                                    {p.description}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => { handleClickProyect(p) }}>Go somewhere</Button>
                                            </Card.Body>
                                        </StyledCardsProjectsDesktop>
                                        <StyledImgProjectsDesktop src={p.imgDesktop} alt='project_image' className='d-none d-md-flex' />
                                    </div>
                                )
                            })
                        }
                    </StyledContainersProjectsSecondaryDesktop>
                }
            </StyledContainerDivProject>
        </div>
    )
}

export default ProyectsPerfomance

const StyledImgProjectsDesktop = styled.img`
    width: 599px; 
    height: 464px;
    margin: 0px 12px;
`
const StyledCardsProjectsDesktop = styled(Card)`
    position: absolute;
    width: 510px;
    height: 300px;
    margin-top: 150px;
`

const StyledContainerProjectOneDesktop = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 0 72px;
`

const StyledContainersProjectsSecondaryDesktop = styled.div`
    display: flex; 
    justify-content: center; 
    margin: 56px 72px;
`

const StyledCardDesktopMainProject = styled(Card)`
    @media (min-width: 1200px){
        width: 624px;
        height: 300px; 
        position: absolute;
        margin-right: 600px;
        margin-top: 200px;
    }
    @media (min-width: 1300px){
        margin-right: 625px;
    }
`