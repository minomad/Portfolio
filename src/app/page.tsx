import Skip from "@/components/Skip"
import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Skill from '@/components/Skill';
import Site from '@/components/Site';
import Port from '@/components/Port';
import Contact from '@/components/Contact';

function Home() {
  return (
    <>
    <Skip/>
    <Header />
    <main id="main" role="main">
      <Intro />
      <Skill />
      <Site />
      <Port />
      <Contact />
    </main>
    </>
  )
}

export default Home