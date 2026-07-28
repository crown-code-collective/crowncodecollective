import { RouterProvider, useRoute } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelixSpine from "./components/HelixSpine";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import WorkAreaPage from "./pages/WorkArea";

function Page() {
  const { path } = useRoute();
  if (path === "/about") return <About />;
  if (path === "/join") return <Join />;
  if (path.startsWith("/work/")) {
    return <WorkAreaPage slug={path.slice("/work/".length).replace(/\/$/, "")} />;
  }
  return <Home />;
}

function App() {
  return (
    <RouterProvider>
      <div className="grain-fixed" aria-hidden />
      <HelixSpine />
      <Header />
      <Page />
      <Footer />
    </RouterProvider>
  );
}

export default App;
