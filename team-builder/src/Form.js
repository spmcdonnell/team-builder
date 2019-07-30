import React, { useState } from 'react';

function Form({ editing, editMember, addMember }) {
    const [member, setMember] = useState({ name: '', email: '', role: '' });

    function handleChange(e) {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (editing) {
            editMember(member);
        } else {
            addMember(member);
        }
        setMember({ name: '', email: '', role: '' });
    }

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={member.name} onChange={e => handleChange(e)} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={member.email} onChange={e => handleChange(e)} />
                </label>
                <label>
                    Role:
                    <input type="text" name="role" value={member.role} onChange={e => handleChange(e)} />
                </label>
                <button onClick={e => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
