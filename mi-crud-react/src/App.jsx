import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import Footer from "./pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="m-0 flex w-full h-auto ">
        
          <h1 className="flex-wrap text-emerald-100 p-6 bg-center bg-emerald-900 ">
            Bienvenidos
          </h1>
          <h5 className=" text-4xl  text-white-500 bg-emerald-800 center p-3 ">
            React with JS
          </h5>

          <section className="flex-nowrap p-8 bg-center">
            <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-emerald-400/10">
              <Link className="rounded-md px-3 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-800/5 hover:text-white"to="/">Home</Link>
              <Link className="rounded-md px-3 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-800/5 hover:text-white" to="/users">Usuarios</Link>
              <Link className="rounded-md px-3 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-800/5 hover:text-white"to="/create">Crear </Link>
            </nav>
          </section>

          <div className="contain">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="/update/:id" element={<UpdateUser />} />
            </Routes>
  
          </div>
            <Footer/>
      </div>

    
    </>
  );
}

export default App;
