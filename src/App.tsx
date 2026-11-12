import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Hero, Projects } from "./components/sections";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
