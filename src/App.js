import './App.css';
import { useState } from 'react';
import { colors, letters } from './data/data';
import shuffleArray from './utils/shuffleArray';
import { motion } from 'framer-motion';

let shuffledColors = shuffleArray(colors);
let shuffledLetters = shuffleArray(letters);

function App() {
    const [color, setColor] = useState(shuffleArray(colors)[0]);
    const [letter, setLetter] = useState(shuffleArray(letters)[0]);
    const handleClickColor = (e) => {
        setColor(e.target.getAttribute('value'));
    };
    const handleClickLetter = (e) => {
        setLetter(e.target.getAttribute('value'));
    };
    const tailwindClass =
        'w-24 h-24  rounded-full flex items-center border justify-center shadow-xl text-2xl font-sans font-bold';

    return (
        <div className="App">
            <header className="App-header"></header>
            <div className="wrapper container mx-auto">
                <h1 className="heading text-xl">
                    Click on either a color or a letter
                </h1>
                <div className="avatars">
                    <motion.div
                        className={tailwindClass}
                        style={{
                            backgroundColor: color,
                            width: '5em',
                            height: '5em',

                            color:
                                color === 'white' || color === 'yellow'
                                    ? 'black'
                                    : 'white',
                        }}
                    >
                        {color}
                    </motion.div>

                    <div
                        className={tailwindClass}
                        style={{
                            backgroundColor: 'white',
                            width: '5em',
                            height: '5em',
                        }}
                    >
                        {letter}
                    </div>
                </div>

                <div className="colorsLetters ">
                    {shuffledColors.slice(1, 6).map((element, idx) => (
                        <div key={idx + 1}>
                            {' '}
                            <motion.div
                                whileHover={{ scale: 1.05, y: -10 }}
                                whileTap={{ scale: 0.9 }}
                                className={tailwindClass}
                                value={element}
                                aria-label="add"
                                style={{
                                    backgroundColor: element,

                                    color:
                                        element === 'white' ||
                                        element === 'yellow'
                                            ? 'black'
                                            : 'white',
                                    '&:hover': {
                                        color: 'black',
                                    },
                                }}
                                onClick={handleClickColor}
                            >
                                {element}
                            </motion.div>
                        </div>
                    ))}

                    {shuffledLetters.slice(1, 6).map((element, idx) => (
                        <div key={idx + 1}>
                            {' '}
                            <motion.div
                                whileHover={{ scale: 1.05, y: -10 }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                className={
                                    tailwindClass + ' shadow-lg font-bold'
                                }
                                value={element}
                                aria-label="add"
                                onClick={handleClickLetter}
                            >
                                {element}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
