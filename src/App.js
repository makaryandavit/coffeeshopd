import { Footer, Header, Section1, Section2, Section3, Section4, Section5, Section6, Section7 } from "./Components";
import { boxesInfo, boxesInfo2, boxesInfo3 } from "./coffessInfo";
import  AOS  from "aos";
import 'aos/dist/aos.css';
import "./global.css"
import { useEffect } from "react";
function App() {

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <>
      <Header />
      <Section1 boxesInfo={boxesInfo} />
      <Section2 />
      <Section3 />
      <Section1 boxesInfo={boxesInfo2} />
      <Section4 />
      <Section1 boxesInfo={boxesInfo3} />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  );
}

export default App;
