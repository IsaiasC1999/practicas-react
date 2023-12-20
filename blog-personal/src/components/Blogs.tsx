import { Divider, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Blog } from "../Types/types.d";

interface Props {
    blog: Blog
}

function Blog({ blog }: Props) {

    return (
        <Stack marginBottom={20}  paddingLeft={20}  paddingX={'150px'} width={"100%"} marginTop={10}>
            <Link>
            <Heading as='h1' size='2xl'textAlign={"left"} >
                {blog.titulo}
            </Heading>
            </Link>
            <div style={{textAlign:"left"}}>
                <Text as='em'>Publicado por : {blog.autor}, </Text>
                <span>{blog.fechaPublicacion}</span>
            </div>
            <Text fontSize='2xl' textAlign={'left'}>
                {blog.contenido}
            </Text>
            <Divider/>
        </Stack>
    );
}

export default Blog;