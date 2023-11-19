import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ReactPDF from '@react-pdf/renderer';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import CardItem from './CardItem';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

  return (
    <div>
      <h2>Watch Checklist</h2>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </Stack>
  
      <Item>
              <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />
       </Item>
    </div>
  )
}

export default App
