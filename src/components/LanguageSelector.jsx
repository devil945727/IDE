import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
  } from '@chakra-ui/react'
  import { LANGUAGE_VERSIONS } from "../constants"

const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({language, onSelect}) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">Language:</Text>
            <Menu isLazy>
                <MenuButton as={Button} > {language}</MenuButton>
                
                <MenuList bg="#110c1b" zIndex={2}>
                    
                    {   
                        languages.map(([lang, version]) => (
                            <MenuItem key={lang}
                            color={lang===language ? "blue.500":""}
                            bg={lang===language ? "":"transparent"}
                            _hover={{
                                color:"blue.500",
                                bg:"gray.400"
                            }}
                            onClick={()=>onSelect(lang)}
                            >
                                {lang}
                                &nbsp;
                                <Text as="span" color="gray.600" fontSize="sm">
                                    {version}
                                </Text>
                            </MenuItem>
                        ))
                    }
                    </MenuList>
               
                
            </Menu>
        </Box>
    )
}

export default LanguageSelector
