'use client'; 
import { Button } from '@mantine/core';
import { atom, useAtom } from 'jotai'; 


const buttonClickedAtom = atom(false);

export default function Home() {
  const [buttonClicked, setButtonClicked] = useAtom(buttonClickedAtom);

  const handleClick = () => {
    const toggle = !buttonClicked;
    setButtonClicked(toggle);
  };

  return (
    <div >
      <Button onClick={handleClick}>Click me</Button>
      {buttonClicked && <p>Button was clicked!</p>}
      
      
    </div>
  );
}


