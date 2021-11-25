import React, { useState } from "react";
import "./SignUpForm.scss";
import {Row, Col,Form,Button, Spinner, ToastBody} from "react-bootstrap";
import { value, size, values} from "lodash";  // paquete que proporiciona herramientras para recorrer objetos, arrarys, bucles, etc.
import { toast } from "react-toastify";  // paquete para notificaciones 
import { isEmailValid } from "../../utils/validations";


export default function SignUpForm(props){    
    //estados
    const {setShowModal} =  props; // recibe el estao del modal del padre
    const [formData,setFormData] = useState(InitialFormValue()); // valores del formulario.
    const [signUpLoading,setSignUpLoading] = useState(false);    // Estado de carga de la app o modal
    
    const onSubmit = (e) => {
         e.preventDefault(); // recibe el evento y evita que la pagina se recarge al salir del form.
        
        let validcount =0; 

        values(formData).some(value => { value && validcount++  // values: recorre un objeto, some: asigna el valor del objeto a value, por cada objeto aumenta variable validcount
                                            return null}); /// cuando termina retorna null

        if (validcount !== size(formData) ){   /// validacion de campos llenos, size es del paquete lodash, valida el tamano de campos o llaves que tiene el objecto formdata
            toast.warning("Completa todos los campos del formulario");
        }
        else{            
                //validaciones de formulario
            if(!isEmailValid(formData.email)){  //validacion formato mail usando funcion de utils/validmail
                toast.warning("Email Invalido");
            } 
            else if (formData.password !== formData.repeatPassword) { // validando password y confirmacion sean iguales
                toast.warning("Password no coinciden");
            } 
            else if ( size(formData.password) <  7 ) {  // validando tamaño del passs introducido.
                toast.warning("Password demaciado corto, colocar mas de 6 caracteres");
            }else {
                setSignUpLoading(true);
                toast.success("Formulario ok");
            }
        };
    };



        const onChange = e => {            
            setFormData({ ...formData,[e.target.name] : e.target.value});
        }

        return (
            <div className="sign-up-form ">
                <h2>Crea tu cuenta</h2> 
                <Form onSubmit={onSubmit} onChange ={onChange}>
                    <Form.Group>
                        <Row>
                            <Col>
                            <Form.Control 
                            type ="text" 
                            placeholder="Nombre"
                            defaultValue={ formData.nombre }
                            name="nombre"
                            // onChange={e => setFormData({ ...formData, nombre : e.target.value})}  removido para crear funcion unica para formularios que solo contengan inputs
                            />                            
                            </Col>
                            <Col>
                            <Form.Control 
                            type ="text" 
                            placeholder="Apellido"
                            name="apellido"
                            defaultValue={ formData.apellido }
                            // onChange={e => setFormData({ ...formData, apellido : e.target.value})}   removido para crear funcion unica para formularios que solo contengan inputs                          
                            />
                            </Col>
                        </Row>
                    </Form.Group>                          
                     <Form.Group>
                         <Form.Control 
                         type ="email" 
                         placeholder="Correo Corporativo"
                         name="email"
                         defaultValue={ formData.email }
                         />
                    </Form.Group>                    
                    <Form.Group>
                        <Row>
                            <Col>
                            <Form.Control 
                            type ="password" 
                            name="password"
                            placeholder="Contraseña"
                            defaultValue={ formData.password }
                            />
                            </Col>
                            <Col>
                            <Form.Control 
                            type ="password" 
                            placeholder="Confirmar Contraseña"
                            name="repeatPassword"
                            defaultValue={ formData.repeatPassword }
                            />
                            </Col>
                        </Row>
                    </Form.Group>                           
                    <Button variant="primary" type="submit">
                        {!signUpLoading ? "Registrarse" : <Spinner animation="border"/> }
                    </Button>
                </Form>                
            </div>
        );
     
}


function InitialFormValue() {
    return {
    nombre:"",
    apellido:"",
    email:"",
    password:"",
    repeatPassword:""
    };
}   
