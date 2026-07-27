import { RouterProvider, useRoute } from "./lib/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelixSpine from "./components/HelixSpine";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";

function Page() {
  const { path } = useRoute();
  if (path === "/about") return <About />;
  if (path === "/join") return <Join />;
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
