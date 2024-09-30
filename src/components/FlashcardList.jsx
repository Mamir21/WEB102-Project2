import React, { useState } from 'react';
import { Flashcard } from './Flashcard';
import { Button, Container, Typography, Box, GlobalStyles } from '@mui/material';

export const FlashcardList = () => {
  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building UIs.' },
    { question: 'What is TypeScript?', answer: 'A typed superset of JavaScript.' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript used in React.' },
    { question: 'What is a component in React?', answer: 'A reusable piece of UI.' },
    { question: 'What is the Virtual DOM?', answer: 'A lightweight representation of the real DOM.' },
    { question: 'What is a Hook in React?', answer: 'A special function that lets you use state and lifecycle features.' },
    { question: 'What is the useState Hook?', answer: 'A Hook to add state to functional components.' },
    { question: 'What is the useEffect Hook?', answer: 'A Hook to handle side effects in functional components.' },
    { question: 'What is Node.js?', answer: 'A JavaScript runtime built on Chrome\'s V8 engine.' },
    { question: 'What is Express.js?', answer: 'A web application framework for Node.js.' },
    { question: 'What is MongoDB?', answer: 'A NoSQL database for scalable applications.' },
    { question: 'What is REST?', answer: 'An architectural style for designing networked applications.' },
    { question: 'What is GraphQL?', answer: 'A query language for APIs developed by Facebook.' },
    { question: 'What is a Promise in JavaScript?', answer: 'An object representing the eventual completion or failure of an asynchronous operation.' },
    { question: 'What is async/await in JavaScript?', answer: 'A syntax to handle Promises in a more readable way.' }
  ]

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setIsFlipped(false);
  }

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? flashcards.length - 1 : prevCard - 1
    )
    setIsFlipped(false);
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <GlobalStyles
        styles={{
          html: { height: '100%' },
          body: { height: '100%', margin: 0, padding: 0, overflow: 'hidden' }
        }}
      />
      <Container
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
          WEBThink
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          How much knowledge do you have of Computer Science?
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '25px', fontStyle: 'italic' }}>
          You have {flashcards.length} cards to review.
        </Typography>

        <Box
          sx={{
            width: { xs: '70%', sm: '70%', md: '60%', lg: '50%' },
            perspective: '1000px',
            paddingBottom: '40px',
          }}
        >
          <Flashcard
            question={flashcards[currentCard].question}
            answer={flashcards[currentCard].answer}
            isFlipped={isFlipped}
            handleFlip={handleFlip}
          />
        </Box>

        <Box sx={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
          <Button
            onClick={handlePreviousCard}
            variant="contained"
            sx={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Previous
          </Button>
          <Button
            onClick={handleNextCard}
            variant="contained"
            sx={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </>
  )
}