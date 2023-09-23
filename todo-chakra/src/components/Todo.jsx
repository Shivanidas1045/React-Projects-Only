import React, { useEffect, useState } from 'react';
import {Heading} from "@chakra-ui/react";
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {  VStack ,IconButton, useColorMode} from '@chakra-ui/react';
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs";


const Todo = () => {
   

    const intTodos=[
        {id:1,
            body:"tired",
        },
        {id:2,
        body:"energetic"}

    ]


    const [todos,setTodos]=useState(()=>JSON.parse(localStorage.getItem('todos')) || []);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))

    },[todos])


    function deleteTodo(id){
        const newTodo=todos.filter((elem)=>{
            return(
                elem.id!==id
            )
        })
        setTodos(newTodo)
    }
    // for toggle theme
    const {colorMode,toggleColorMode}=useColorMode()


    function addTodo(elem){
        setTodos([...todos,elem])
    }
  return (
// for creating horizontal boxes
<VStack>
    {/* first section */}
    <IconButton icon={colorMode==='light' ? <BsFillSunFill/> : <BsFillMoonFill/>} size={'lg'} marginRight={15} marginTop={30} alignSelf={"flex-end"} isRound="true" onClick={toggleColorMode} />

    {/* heading of the app */}
    <Heading mb={8} fontWeight={'extrabold'} bgGradient="linear(to-r,teal.500,yellow.500)" bgClip="text" fontFamily="cursive">TODO APPLICATION</Heading>
    <TodoList todos={todos} deleteTodo={deleteTodo}/>
    <AddTodo addTodo={addTodo}/>
    </VStack>
    
  )
}

export default Todo