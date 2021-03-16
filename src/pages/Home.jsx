import React, {useState} from 'react'
import { Navbar } from '../components/NavBar/NavBar';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
}

