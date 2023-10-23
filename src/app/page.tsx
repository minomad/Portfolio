"use client";

import Skip from "@/components/Skip";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Site from "@/components/Site";
import Port from "@/components/Port";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

function Home() {
  useEffect(() => {
    lenis();
    link();
  }, []);
  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
