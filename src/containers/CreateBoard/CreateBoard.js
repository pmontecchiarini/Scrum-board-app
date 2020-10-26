import React from 'react';
import { Link } from "react-router-dom";

const CreateBoard = () => {
    return(
        <React.Fragment>
            <form>
                <label for="boardName">Board Name:</label>
                <input id="boardName" type="text"/>
                <button>Create</button>
            </form>
            <Link to="/main">Go back</Link>
        </React.Fragment>
    )
};

export default CreateBoard;