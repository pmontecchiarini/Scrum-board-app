import React from 'react';
import classes from './HomeScreen.module.css';

import Button from '@material-ui/core/Button';

const HomeScreen = (props) => {

    const logInHandler = () => {
        this.props.history.push('/main');
    }
    return (
        <div className={classes.Container}>
            
            <h1><span>Scrum Board</span> </h1>
            <p>Keep your projects up to speed.</p>    
            <Button variant="contained" color="primary" onClick={logInHandler}>Log in</Button>
           
        </div>

    )
}

export default HomeScreen;