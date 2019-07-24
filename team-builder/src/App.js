import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

function App() {
    const [members, setMembers] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <Form members={members} setMembers={setMembers} />
            </header>
        </div>
    );
}

export default App;
