import Homepage from "./Screens/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeWrapper from "./Components/ThemeWrapper/ThemeWrapper";
import { useRef, useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease",
      once: false,
      mirror: true,
    });
  });
  const homepageRef = useRef();
  const whatDoWeDoRef = useRef();
  const whoAreWeRef = useRef();
  const joinUsRef = useRef();
  const aboutUsRef = useRef();
  const supportUsRef = useRef();
  const elementsRef = {
    aboutUsRef,
    homepageRef,
    whatDoWeDoRef,
    whoAreWeRef,
    joinUsRef,
    supportUsRef,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeWrapper elementsRef={elementsRef}>
              {" "}
              <Homepage elementsRef={elementsRef} />{" "}
            </ThemeWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
