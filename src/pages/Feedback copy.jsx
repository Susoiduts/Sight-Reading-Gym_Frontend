import { Container, Grid, Card, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';

function Feedback() {
  const [activeCards, setActiveCards] = useState([1]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const position = parseInt(card.getAttribute('data-position'));
      if (activeCards.includes(position)) {
        card.style.opacity = '1';
      } else {
        card.style.opacity = '0.5';
      }
    });
  }, [activeCards]);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (position) => {

  };

  return (
    <Container>
      <Grid container spacing={3}>
        {cards.map((num) => (
          <Grid key={num} item>
            <Card
              className="card"
              data-position={num}
              onClick={() => handleClick(num)}
            >
              <CardContent>{num}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Feedback;
