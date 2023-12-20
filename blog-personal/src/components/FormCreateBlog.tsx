import { useState } from 'react';
import { type Blog } from '../Types/types.d'
import { FormControl, FormLabel, Input,Textarea } from '@chakra-ui/react';


// Si la funcion la tiparamos no tendriamos problemas si el dia de mañana cambiamos el tipo de dato.
interface Props {
  addBlog: (blog: Blog) => void
}

function FormCreateBlog({ addBlog }: Props) {

  const [titulo, setTitulo] = useState("");
  const [Autor, setAutor] = useState("");
  const [contenido, setContenido] = useState("");



  function HanglerSubmitForm(e: React.FormEvent<HTMLFormElement>): void {
    
    e.preventDefault()
    addBlog({
      id: crypto.randomUUID(),
      titulo: titulo,
      autor: Autor,
      fechaPublicacion: Date.now().toString(),
      contenido: contenido
    })
  }

  return (
    <form onSubmit={HanglerSubmitForm} style={{ border: "solid 1px black", padding: "10px", borderRadius: "7px" }}>
      <FormControl>
        <FormLabel>Titulo</FormLabel>
        <Input
          onChange={(evt) => { setTitulo(evt.target.value) }}
          type='text'
          placeholder='Ingrese el titulo de la Blog'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Autor</FormLabel>
        <Input
          onChange={(evt) => { setAutor(evt.target.value) }}
          type='text'
          placeholder='Ingrese nombre del autor'
        />
      </FormControl>
      <FormControl>
        <FormLabel >Contenido</FormLabel>
        <Textarea
         onChange={(evt) => { setContenido(evt.target.value) }} 
        ></Textarea>
      </FormControl>
      <Input marginTop={4} type='submit' />
    </form>
  )
}

export default FormCreateBlog
