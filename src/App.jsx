import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Navbar, Welcome, Dock, Home } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  TxtFile,
  ImgFile,
  Contact,
} from "#windows";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Dock></Dock>
      <Terminal></Terminal>
      <Safari></Safari>
      <Resume></Resume>
      <Finder></Finder>
      <TxtFile></TxtFile>
      <ImgFile></ImgFile>
      <Contact></Contact>

      <Home></Home>
    </main>
  );
};

export default App;
