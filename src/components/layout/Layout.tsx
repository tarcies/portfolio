import styles from "./Layout.module.css";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WIP } from "../layout/WIP";

export function Layout() {
  return (
    <>
      <WIP></WIP>
      <div className="container">
        <Header />
        <main className={styles.main}>
          <Outlet /> {/* the current route's page renders here */}
        </main>
        <Footer />
      </div>
    </>
  );
}
