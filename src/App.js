import React, { useState, useEffect } from 'react';
import './App.css';

const DRUM_SOUNDS = [
  { key: 'Q', id: 'Heater-1', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', url: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3 '}
];

const DrumPad = ({sound, playSound}) => (
  <div
    className="drum-pad"
    id={sound.id}
    onClick={() => playSound(sound.key, sound.id)}
  >
    {sound.key}
    <audio className="clip" id={sound.key} src={sound.url}></audio>
  </div>
)

const DrumMachine = () => {

  const [displayText, setDisplayText] = useState('');

  const playSound = (key, id) => {
    const audioElement = document.getElementById(key);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setDisplayText(id);
    }
  }

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const sound = DRUM_SOUNDS.find((s) => s.key === key);
    if (sound) {
      playSound(sound.key, sound.id);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        {DRUM_SOUNDS.map((sound) => (
          <DrumPad key={sound.key} sound={sound} playSound={playSound} />
        ))}
      </div>
    </div>
  )
  
}

function App() {
  return <DrumMachine />;
}

export default App;