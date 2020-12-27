import React, { useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import Home from './Home';


//class component##################################
// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name: 'Jonih',
//       currname: ''
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
  
//   handleChange(event){
//     this.setState({
//       currname: event.target.value
//     })
//   }

//   handleSubmit(){
//     this.setState({
//       name:this.state.currname
//     })
//   }

//   render() {
//     return <>
  

//       <h1>nama saya  {this.state.name}</h1>
//       <input type='text' onChange={this.handleChange} ></input>
//       <button onClick={this.handleSubmit}>Ubah</button>

//     </>
//   }
// }

//functional component###############################
// const App = () => {
//   const [name, setName] = useState('anti');
//   const [currname, setCurrname] = useState('');

//   const handleChange = (event) => {

//     setCurrname(event.target.value);
//   }

//   const handleSubmit = () => {
//     setName(currname);
//   }


//   return <>
//       <h1>nama saya  {name}</h1>
//       <input type='text' onChange={handleChange} ></input>
//       <button onClick={handleSubmit}>Ubah</button>

//     </>
// }

//coba props dan state################################
// const ComponentWithProps = ({color}) => {
//   return <div style={{ backgroundColor:color, color:'white'}} > Warna {color}</div>
// }
// const App = () => {


//   return <>

// <ComponentWithProps color='black' />

//   </>
// }

// TUGAS  class component##################################

const Data = [
  {
    message:'Cari nasi',
    id:1
  },
  {
    message:'Cari uang',
    id:2
  }
]

const useStyles = makeStyles({
  root: {
    width: 600,
    position: 'fixed',
    bottom: 0,
    

  },
  atas:{
    flexGrow: 1,
    paddingBottom:5,
  },
  paper: {
  
    textAlign: 'center',
    width: 350,
   
  }
});


const Header = () => {
  return <>

  <h1>Task Today</h1>

  </>
}

const Infobar = ({task}) => {
  return <>
<p>Ada {task} Task yang harus dikerjakan.</p>

  </>
}

const TaskAddr = ({setTasks,tasknum}) => {
  const [currentValue, setCurrent] = useState('');

  const handleAdd = () => {
    const newvale = 
      {
        message:currentValue,
        id:tasknum.length+1
      }

    setTasks([...tasknum,newvale]);
  }
  return <>
  <div>
  {/* <input type="text" onChange={event => setCurrent(event.target.value)}></input> */}
  {/* <Button disabled={currentValue === ''} color="primary" onClick={() => handleAdd()}>Tambah</Button> */}

  <form  noValidate autoComplete="off">
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Apaya..."
          helperText="isi catatan kamu"
          variant="outlined"
          onChange={event => setCurrent(event.target.value)}
          style={{marginRight:5}}
        />

        <Button disabled={currentValue === ''} size="small" startIcon={<SaveIcon />} variant="contained" color="primary" href="#contained-buttons" onClick={() => handleAdd()}>Tambah</Button>

    </form>
  </div>
  </>
}

const ListTask = ({message,id,setTasks,task}) => {

  const handleDelete = () => {
    const update = task.filter(taskid => taskid.id !== id);
    setTasks(update);

  }
  return <>
  <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={message}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete()}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

  
  </>
}

const TaskList = ({dat,setTasks}) => {
  return dat.map(task => {
return <ListTask message={task.message} id={task.id} setTasks={setTasks} task={dat}/>
  })
}

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);

  return <div className={classes.task}>

  <Header />
  <Infobar task={3} />
  <TaskAddr setTasks={setTasks} tasknum={tasks}/>
  <List>
    
    <TaskList dat={tasks} setTasks={setTasks}/>
  
  </List>



  </div>
}

const App = () => {
  return  <TaskApp />

      
}



const MenuAtas = ({nama}) => {
  const classes = useStyles();
  return (
    <div className={classes.atas}>
 
    <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {nama}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      )
}

const MenuBawah = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return <>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"><BottomNavigationAction label="Recents" icon={<RestoreIcon />} /></Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/aplikasi"><BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /></Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about"><BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /></Link>
          </BottomNavigation>
  </>
}




const Urlr = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  const [currentIam, setIam] = useState({
    name : 'Afrizal Muchrom',
    desc : 'find me in',
    sosmed : [
      [<FacebookIcon />,'http://facebook.com/izalinus.m'],
      [<TwitterIcon />,'http://twitter.com/thejale'],
      [<InstagramIcon />,'http://instagram.com/izalinus'],
      [<GitHubIcon />,'http://github.com/afrizalmuchrom'],
    ]
      
    
  });

  return (
    <Router>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
        
            <MenuAtas nama={currentIam.name}/>
            <Grid container spacing={3} alignItems="center" justify="center">

              <Grid item >
                <Paper className={classes.paper} >
                  <Switch>
                    <Route path="/aplikasi">
                    <TaskApp />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/">
                      <Home iam={currentIam} />
                    </Route>
                  </Switch>
                </Paper>
              </Grid>

            <MenuBawah />
            </Grid>

        </Typography>
      </Container>
      </React.Fragment>
    </Router>
  );
}


const About= () => {

  const Getloc = () => {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      return position.coords.latitude
    });
  }

  
    return (
      <div>
        <h4>Your Current Location </h4>
       
      </div>
    );
  

}

export default Urlr;
