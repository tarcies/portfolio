import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./components/Home";
import { Projects } from "./components/sections/Projects";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
