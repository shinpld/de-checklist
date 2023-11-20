import { useState } from 'react'

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
import Img1 from './assets/noagun.png'
import ChecklistForm from './checklistForm';

import listData from './listdata.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div >
      {listData.cyber_Security.subItems[0].normalStatus}
      <ChecklistForm/>
    </div>
  )
}

export default App
