import About from "./component/About";
import Allscholarships from "./component/Allscholarships";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Navbar1 from "./component/Navbar1";
import Prize from "./component/Prize";
import { Route,Routes } from "react-router-dom";
import './component/About.css'
import Members from './component/Members'
import MainBlog from "./component/MainBlog";
import Jounal from "./component/Jounal";
import Faq from "./component/Faq";
import Engineering from "./component/fields/Engineering";
import Art from "./component/fields/Art";
import Agriculture from "./component/fields/Agriculture";
import Economics from "./component/fields/Economics";
import Legal from "./component/fields/Legal";
import Management from "./component/fields/Management";
import Medicine from "./component/fields/Medicine";
import Science from "./component/fields/Science";
import Literature from "./component/fields/Literature";
import Undergraduate from "./component/fields/Undergraduate";
import Masters from "./component/fields/Masters";
import Doc from "./component/fields/Doc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
        <Navbar1 />
        <Routes>
          <Route path="/" element= {<Home /> } />
          <Route path="about" element={<About />} />
          {/* scholarship tab and engineering */}
          <Route path="scholarship" element={ <Allscholarships />} />
          <Route path="scholarship/engineering" element={<Engineering />} />
          <Route path="scholarship/art" element={<Art />} />
          <Route path="scholarship/agric" element={<Agriculture />} />
          <Route path="scholarship/economics" element={<Economics />} />
          <Route path="scholarship/legal" element={<Legal />} />
          <Route path="scholarship/management" element={<Management />} />
          <Route path="scholarship/medicine" element={<Medicine/>} />
          <Route path="scholarship/science" element={<Science />} />
          <Route path="scholarship/lit" element={<Literature />} />
          <Route path="scholarship/under" element={<Undergraduate/>} />
          <Route path="scholarship/masters" element={<Masters/>} />
          <Route path="scholarship/doc" element={<Doc/>} />
       <Route path="prize" element={  <Prize />} />
       <Route path="team" element={  <Members />} />
       <Route path="journal" element={ <Faq />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
