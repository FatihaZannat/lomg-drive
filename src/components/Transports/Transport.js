import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  
const Transport = ({transport}) => {
      const history = useHistory()
    const handleBooking = (title) =>{
        const url = `/${title}`;
        history.push(url);
    }
    const {title,photo,id,description} = transport;
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={photo}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>handleBooking(title)} variant="contained" size="small" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card> 
        </div>
    );
};

export default Transport;