import React, { useState } from 'react';
import '../styles/App.css';
import ReactMarkdown from 'react-markdown';

const App = () => {
    const [text, setText] = useState('');

    return (
        <div className="app" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='textarea' style={{ width: '50%', height: '100%' }}>
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    style={{ width: '98%', height: '100%', padding: '10px' }} 
                />
            </div>
            <div className='preview' style={{ width: '50%', height: '100%', backgroundColor: 'lightgray', padding: '10px' }}>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
}

export default App;
