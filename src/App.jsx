import gsap from "gsap";
import { Draggable } from "gsap/all";

import {Navbar, Welcome, Dock} from "#components"
import { Terminal , Safari, Resume, Finder} from "#windows";


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
    </main>
  )

};

export default App;