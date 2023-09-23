import { Badge, HStack, Spacer, StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import { Text,IconButton } from '@chakra-ui/react'
import {AiFillDelete} from 'react-icons/ai'

const TodoList = ({todos,deleteTodo}) => {

    if(!todos.length){
        return(
            <Badge colorScheme='green' p='4' m='4' borderRadius={"12"}>
            No, todo items are here!!!
            </Badge>
        )
    }

  return (
    <VStack divider={<StackDivider/> } borderColor={'gray.100'} borderWidth="2px" borderRadius={"lg"} w="100%" maxW={{base:"90vw",sm:"80vw",lg:"30vw"}} alignItems={"stretch"}>
{todos.map(elem=>
<HStack key={elem.id}>
    <Text>{elem.body}</Text>
    <Spacer/>
    <IconButton icon={<AiFillDelete />} size={"lg"} isRound="true" color={"red"} onClick={()=>deleteTodo(elem.id)}></IconButton>
</HStack>)}
    </VStack>
  )
}

export default TodoList