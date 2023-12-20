import { Box, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { MdOutlineSell } from "react-icons/md";
function Filters() {
    return (
        <Box w='100%' p={4} >
            <Heading size={'md'}>Filtros</Heading>
            <Stack>
                <Box p={5}>
                    <List size="xl" variant="orange" spacing={5}>
                        <ListItem>
                            <ListIcon as={MdOutlineSell} />
                            Java Script
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdOutlineSell} />
                            .NET
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdOutlineSell} />
                            Login
                        </ListItem>
                    </List>
                </Box>
            </Stack>
        </Box>
    );
}

export default Filters;