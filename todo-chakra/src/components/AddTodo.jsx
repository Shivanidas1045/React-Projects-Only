import { Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
const [content,setContent]=useState('')



    function handleSubmit(e){
        e.preventDefault()
        //console.log(content)

        

        const todo={
          id:Date.now()+Math.random(),
          body:content
        }
        console.log(todo);
     addTodo(todo)
     setContent('')

       
    }


  return (
    <form onSubmit={handleSubmit}>
        <HStack mt="8">
<Input variant={"filled"} placeholder='Add Todo..' fontFamily={"cursive"} value={content} onChange={(e)=>setContent(e.target.value)}></Input>
<Button colorScheme={"teal"} px={"8"} borderRadius={"10"} fontFamily={"cursive"} type='submit'>Add</Button>
        </HStack>
    </form>
  )
}

export default AddTodo