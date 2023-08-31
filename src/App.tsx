import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Text from './Text';
import Card from './Card';
import Select from './Select';

function App() {
    const [text, setText] = useState<Boolean>(true);
    const [color, setColor] = useState('white');
    const imageLinks = {
        title: 'Dreams of Tomorrow',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk_YS8nz1ueY4iGXhYfb3Qf1j6XzX8sODgX8vqzOjiQ&s',
        text: 'A glimpse into the future that awaits...',
    }


    return (
        <>
            {text && <Text />}
            <div className="card">
                <button onClick={() => setText((text) => !text)}>
                    hide / show
                </button>
                <Card card={imageLinks} color={color} />
                <Select setColorIsALie={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setColor(e.target.value)
                } />
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
