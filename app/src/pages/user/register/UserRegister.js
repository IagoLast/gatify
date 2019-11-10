import React, { useState } from 'react';
import useRegister from './UseRegister';

export default function UserRegister(props) {
    const [state, setState] = useState({ email: '', password: '' });
    const [createUser] = useRegister();

    return (
        <main>
            <form onSubmit={e => e.preventDefault() || createUser(state.email, state.password)}>
                <input value={state.email} onChange={e => setState({ ...state, email: e.target.value })} type="email"></input>
                <input value={state.password} onChange={e => setState({ ...state, password: e.target.value })} type="password"></input>
                <input type="submit" value="Crear usuario"></input>
            </form>
        </main>
    );
}