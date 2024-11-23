import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocsPage from "./pages/DocsPage";
import TemplatePage from "./pages/TemplatePage";
import ComponentsPage from "./pages/ComponentsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

function App() {
  useEffect(() => {
    const originalTitle = "React App"; // Set your original tab title here

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "I am a lonely tab :( - Animated components for all of the users";
      } else {
        document.title = originalTitle;
      }
    };

    // Add event listener for visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div className="bg-black w-full h-screen">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>  
    <Route path="/docs" element={<DocsPage/>}/>  
    <Route path="/components" element={<ComponentsPage/>}/>  
    <Route path="/templates" element={<TemplatePage/>}/>  
      
    </Routes>  
    <Footer/>

    </BrowserRouter>
    </div>
  );
}

export default App;
