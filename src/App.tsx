import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/button";

type ShowType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {
    const [show, setShow] = useState<ShowType[]>([])


    const ShowUp = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setShow(json));
    }
    return (
        <div className="App">
            <Button name={'show me'}
                    collBack={ShowUp}
            />
            <ul>
                {
                    show.map((el: ShowType) => {
                        return (
                            <li key={el.id}>
                                <span>{el.id}</span>
                                <span>{el.title}</span>
                                <span>{el.completed}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default App;
