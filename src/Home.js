import React, { useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
    root: {
        display:'flex', justifyContent:'center' 
      
  
    },
   
  });
  

const Home = ({iam}) => {
    const classes = useStyles();

    const Sosmed = () => {
        return iam.sosmed.map((value) =>
        <a href={value[1]}> 
        <Button size="small" color="primary"  startIcon={value[0]}>
        </Button>
      
        </a>
      );
    }


        return (
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://i.ibb.co/5K6ZwJ0/iamfoto.png"
                title="Iam"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {iam.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {iam.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.root} >
             
              <Sosmed />
              
            </CardActions>
          </Card>
        );

    
}



export default Home;
