import React from "react";
import './index.css'
import { Route } from 'react-router-dom';

// Page & Component imports
import Welcome from './pages/Welcome'
import Users from './pages/Users'

import Navbar from './components/Navbar'

export default class Main extends React.Component {
    // First lifecycle
    // Initial Values
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <>
                <Navbar />
                <Route path="/welcome" render={() => (
                    <div>
                        <Welcome title="Welcome to Dashboard" />
                    </div>
                )
                } />

                <Route path="/Users" render={() => (
                    <div>
                        <Users title="Welcome to Dashboard" />
                    </div>
                )
                } />
            </>
        )
    }
}