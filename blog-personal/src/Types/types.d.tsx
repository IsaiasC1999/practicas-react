export interface Blog {
  id: string
  titulo: string
  autor: string
  fechaPublicacion: string
  contenido: string
}

export type ListOfBlogs = Blog[]



export interface UserLogin {
  userName: string
  password: string
}

