import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebars from "./components/Sidebars";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <div className="divs flex">
        <Sidebars />
        <div className="body flex flex-col">
          <Menu />
          <Outlet/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills",
        element: <Skills/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/certification",
        element: <Certification/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
