import React, {useState} from 'react';
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import {Container, Row, Col,Button} from "react-bootstrap";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faUsers,faComment } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/png/logo.png";
import LogoWhite from "../../assets/png/logo-white.png";
import "./SignInUp.scss";




export default function SignInUp() {

    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

    return (
        <>
        <Container className="singin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent openModal={openModal} setShowModal={setShowModal} />                
            </Row>
        </Container>    
                <BasicModal show={showModal} setShow={setShowModal}> 
                    {contentModal}
                </BasicModal>
        </>
    );
}

function LeftComponent() {
    return (
        <Col className="singin-signup__left" xs={6} >            
            {/* <img src={Logo} alt="Logo" /> */}
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch} />
                    Sigue lo que te interesa
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUsers} />
                     Enterate de que esta aqui :)
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComment} />
                     Unete a la convesacion ahora
                </h2>
            </div>
        </Col>
    );
}

function RightComponent(props) {
    const {openModal, setShowModal} = props;
    return (
        <Col className="singin-signup__right" xs={6}>
            <div>
                <img src={LogoWhite} alt="LogoWhite" />
                <h2>Mira lo que esta pasando el mundo en este momento</h2>
                <h3>unete  a mi en este momento</h3>
                <Button
                 variant = "primary"
                 onClick={ () => openModal(<SignUpForm setShowModal={setShowModal}  />)}
                >
                    Registrate                    
                </Button>
                <Button 
                variant = "outline-primary"
                 onClick={() => openModal(<h2>Formulario Para Session</h2>)}
                >
                    Iniciar Session
                </Button>
             </div>
        </Col>
    );
}

