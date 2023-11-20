import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Img1 from './assets/vsp.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function CardItem({system, device, normalStatus}) {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Card sx={{ maxWidth: "80vw" , minWidth: "50vw" }}>
      <CardMedia
        component="img"
        alt="new"
        height="100px"
       image= {Img1}
      /> 
      <CardContent >
        <div style={{margin: "2px"}}>
          <Typography gutterBottom variant="h5" component="div" >
        {system}
        </Typography>
        </div>
        <div style={{margin: "5px"}}>
          <Grid container spacing={2}>
            <Grid xs={4} md={4} >
              <div align="left">{device}</div>
            </Grid>
            <Grid xs={4} md={4} >
              <div align="left">{normalStatus}</div>
            </Grid>
            {/* radio box */}
            <Grid xs={2} md={2}>
              <div> 
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </div>
            </Grid>
            <Grid xs={2} md={2}>
              <div>
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{margin: "0px"}}>
          <Grid container spacing={2}>
            <Grid xs={6} md={8} >
              <div align="left"> Firewall Bandwidth</div>
            </Grid>
            <Grid xs={3} md={2}>
              <div> 
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </div>
            </Grid>
            <Grid xs={3} md={2}>
                <div>
                  <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                </div>
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}