import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Spinner,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/auth';
import { useNavigate } from 'react-router-dom';
function ModalLogin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    
    
    
    // Estados y funciones globales zustand
    const fetchLoggin = useAuthStore(state => state.loggin)
    const errorMessage = useAuthStore(state => state.errorLoggeoVisible)
    const resetState = useAuthStore(state => state.resetState)
    const islogged = useAuthStore(state => state.logged)
    
    useEffect(()=>{
        console.log("hola");
        navigate("/")    
    },[islogged])
    // react-router-dom
    
    function HanglerSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log("hola");
        fetchLoggin({ userName: userName, password: password })
        
    }



    return (
        <>
            <Button onClick={onOpen}>Login</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log In</ModalHeader>
                    <ModalCloseButton onClick={resetState} />
                    <ModalBody>
                        <form onSubmit={HanglerSubmit}>
                            <FormControl>
                                <FormLabel>Usuario</FormLabel>
                                <Input
                                    placeholder='First
                              name'
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)} />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Contraseña</FormLabel>
                                <Input
                                    type='password'
                                    value={password}
                                    placeholder='Ingrese su contraseña'
                                    onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Input marginTop={4} type='submit' />

                        </form>
                    </ModalBody>
                    <ModalFooter>
                        {errorMessage &&
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>Usuario o contraseña incorrecta</AlertDescription>
                            </Alert>
                        }
                        {islogged &&
                            <Alert status='success'>
                                <AlertIcon />
                                <AlertTitle>Inicio Sesion Exitoso</AlertTitle>
                                <Spinner color='green.500' />
                            </Alert>
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )


}

export default ModalLogin;