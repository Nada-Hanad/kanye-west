import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    axios
      .get('https://api.kanye.rest/')
      .then((resp) => {
        setQuote(resp.data.quote);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className='main'>
      <h1
        style={{
          fontFamily: 'Pacifico',
          marginBottom: '20vh'
        }}
      >
        BY KANYE WEST
      </h1>
      <div className='main-content'>
        {loading ? (
          <CircularProgress></CircularProgress>
        ) : error ? (
          <h1>Shit happened</h1>
        ) : (
          <>
            <div className='content'>
              <Button
                variant='contained'
                onClick={onClick}
                sx={{ backgroundColor: 'black', marginBottom: '5vh' }}
              >
                Generate
              </Button>
              <h1>{quote}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
