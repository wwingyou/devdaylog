import { useState, useEffect } from 'react';
import { Box, Card, CardBody, CardHeader, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/posts');
      const json = await response.json();
      console.log(json);
      setPosts(json);
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        <Heading as='h1' size='2xl'>🌇 devday.log</Heading>
        <Divider/>
      </header>
      <main>
        <VStack spacing={4} align='stretch'>
        {posts.map((post) => 
          <Card colorScheme='blue' boxShadow='md'>
            <CardHeader>
              <Heading as='h2' size='lg'>{post.title}</Heading>
              <Text fontSize='sm' color='gray.600'>{post.created_date}</Text>
            </CardHeader>
            <CardBody>
              <Text fontSize='md'>{post.content}</Text>
            </CardBody>
          </Card>
        )}
        </VStack>
      </main>
    </>
  )
}

export default App
