import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ButtonSizes } from '../components/Buttons';
import Typography from '@mui/material/Typography';




export const OutlinedCard = ({button, title, onClick}) => {
  return (
    <Card sx={{ minWidth: 275, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
        {title}
        </Typography>
        
      </CardContent>
      <CardActions>
        <ButtonSizes 
            onClick={onClick}
        >
            {button}
        </ButtonSizes>
      </CardActions>
    </Card>
  );
}
