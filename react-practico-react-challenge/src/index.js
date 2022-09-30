import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

const Button = () => {
    const [name, setName] = useState("hola mundo")
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
