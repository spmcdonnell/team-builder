import React, { useState } from 'react';
import './App.css';

import Form from './Form';
import Member from './Member';

function App() {
    const [members, setMembers] = useState([]);
    const [editing, setEditing] = useState(false);
    const [memberToEdit, setMemberToEdit] = useState('');

    function addMember(member) {
        setMembers([...members, member]);
    }

    function editMember(member) {
        setMembers(members.map(singleMember => (singleMember.name === memberToEdit ? member : singleMember)));
        setEditing(false);
        setMemberToEdit('');
    }

    let renderedMembers;

    if (!members.length) {
        renderedMembers = 'No members yet';
    } else {
        renderedMembers = members.map(singleMember => <Member key={singleMember.email} memberData={singleMember} setEditing={setEditing} setMemberToEdit={setMemberToEdit} />);
    }

    return (
        <div className="App">
            <main className="App-header">
                <div>
                    <Form editing={editing} editMember={editMember} addMember={addMember} />
                </div>
                <div>{renderedMembers}</div>
            </main>
        </div>
    );
}

export default App;
