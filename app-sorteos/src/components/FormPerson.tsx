import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";


function FormPerson() {
  return (
    <form className="form-ure">
      <FormControl>
        <FormLabel>Participantes</FormLabel>
        <Input bg="white" type='text' />
        <FormHelperText>Ingrese los personas que participaras</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>E-mail</FormLabel>
        <Input bg="white" type='email' />
        <FormHelperText>La persona ganadora del sorteo sera notidicada por mail</FormHelperText>
      </FormControl>
      <Button colorScheme='teal' marginTop={5} size='md'>
        Agregar
      </Button>
    </form>
  );
}

export default FormPerson;