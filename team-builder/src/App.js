import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

const [members, setMembers] = useState([]);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Form members={members} />
            </header>
        </div>
    );
}

export default App;
