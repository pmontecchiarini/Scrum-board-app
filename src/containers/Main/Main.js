import React from 'react';
import { Link } from "react-router-dom";


const Main = () => {

    return (
        <React.Fragment>
            <div>
                <div>User Name</div>
                <button>Log Out</button>
            </div>

            <div>
                <Link to="/createboard">Add New Board</Link>

                <div>
                    <h3>Your Boards</h3>
                    <div>BOARD 1</div>
                    <div>Board 2</div>
                </div>
            </div>



        </React.Fragment>
    
)};

export default Main;