import './App.css'
import { useEffect, useState } from 'react'
import { blogMocks } from './mocks/postMocks'
import ListBlogs from './components/ListOfBlogs'
// import FormCreateBlog from './components/FormCreateBlog'
import { type Blog } from './Types/types.d'
import ModalLogin from './components/ModalLogin'
import { Avatar, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Filters from './components/Filters'
// import { loginReponse } from './mocks/login'
import { useAuthStore } from './store/auth'

export default function App() {
  const [blogs, setBlogs] = useState(blogMocks)
  // const [loggin, setLoggin] = useState(loginReponse);
  const isLogged = useAuthStore(state => state.logged)



  function addBlog(blog: Blog) {
    const newBlogs = [...blogs, blog]
    setBlogs(newBlogs)
  }

  return (
    <>

      <Grid
        templateAreas={`"header header"
                        "main nav"
                        "footer nav"`}
        gridTemplateRows={'70px 1fr 50px'}
        gridTemplateColumns={'1fr 450px'}
        h='100%'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'

      >
        <GridItem
          padding={'20px'}
          display={'flex'}
          backgroundColor={'darkcyan'}
          alignItems={'center'}
          justifyContent={'space-around'}
          area={'header'}>
          <h5>
            Blog Personal
          </h5>

          {isLogged ?
            <Menu>
              <MenuButton>
                <Avatar name='Isaias Romano' src='https://bit.ly/broken-link' />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>

            : <ModalLogin />}



        </GridItem>
        <GridItem pl='2' area={'nav'}>
          <Filters />
        </GridItem>
        <GridItem pl='2' area={'main'}>
          {/* <FormCreateBlog addBlog={addBlog} /> */}
          <ListBlogs blogs={blogs} />
        </GridItem>
        <GridItem pl='2' area={'footer'}>
          Por el momento nada
        </GridItem>
      </Grid>

    </>
  )
}

