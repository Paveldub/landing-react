import React, { useState } from "react";
import { Navbar } from "../components/NavBar/NavBar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { InfoSection } from "../components/InfoSection/infoSection";
import { ServicesSection } from "../components/ServicesSection/ServicesSection";
import { Footer } from "../components/Footer/Footer";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <ServicesSection />
      <Footer />
    </>
  );
};
