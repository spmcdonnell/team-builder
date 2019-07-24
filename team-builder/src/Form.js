import React from 'react';

function Form() {
    <form>
        <label>
            Name:
            <input type="text" name="name" onChange={e => handleChange(e)} />
        </label>
        <label>
            Email:
            <input type="text" name="email" onChange={e => handleChange(e)} />
        </label>
        <label>
            Role:
            <input type="text" name="role" onChange={e => handleChange(e)} />
        </label>
        <button>Submit</button>
    </form>;
}

export default Form;
