import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import {
  Hero,
  About,
  Projects,
  Experience,
  Skills,
  Testimonials,
  Contact,
} from "./components/sections";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
