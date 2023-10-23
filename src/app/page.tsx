"use client";

import { useEffect } from "react";
import Skip from "@/components/Skip";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Port from "@/components/Port";
import Footer from '@/components/Footer';
import smooth from "@/utils/smooth";
import link from "@/utils/link";

function Home() {
  useEffect(() => {
    smooth();
    link();
  }, []);
  
  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Skill />
        <Port />
      </main>
      <Footer />
    </>
  );
}

export default Home;
