import React from 'react';

function Member({ memberData, setEditing, setMemberToEdit }) {
    function handleEdit() {
        setEditing(true);
        setMemberToEdit(memberData.name);
    }

    return (
        <div>
            <ul>
                <li>{memberData.name}</li>
                <li>{memberData.email}</li>
                <li>{memberData.role}</li>
                <li>
                    <button onClick={handleEdit}>Edit</button>
                </li>
            </ul>
        </div>
    );
}

export default Member;
