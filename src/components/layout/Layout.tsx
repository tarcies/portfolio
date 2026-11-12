import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* the current route's page renders here */}
      </main>
      <Footer />
    </>
  );
}
