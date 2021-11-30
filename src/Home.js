import { useState } from 'react';
import { MediaCard } from './MediaCard';
import { Moodal } from "./Moodal";
import { MainModal } from './MainModal';


export function Home() {


  const [text, setText] = useState('');

  const handleChange = (newValue) => {
    setText(newValue);
    console.log(setText(newValue));

  };

  return (
    <div className="home_content">
      <div className="text">
        <p>Hi {(text === "") ? "User" : text}, Welcome to Social Media Mangement</p>
        <MediaCard />
        <Moodal value={text} onChange={handleChange} />
        <MainModal />



      </div>
    </div>
  );
}
