import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopPicks from "./components/TopPicks";
import Trending from "./components/Trending";
import StylistCTA from "./components/StylistCTA";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";

function useGoogleFonts() {
    useEffect(() => {
        if (document.getElementById("gunji-fonts")) return;
        const link = document.createElement("link");
        link.id = "gunji-fonts";
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";
        document.head.appendChild(link);
    }, []);
}

export default function App() {
    useGoogleFonts();

    const [selected, setSelected] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loaderVisible, setLoaderVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                const next = p + Math.random() * 18;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoaderVisible(false), 250);
                    return 100;
                }
                return next;
            });
        }, 180);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app-container">
            <Loader visible={loaderVisible} progress={progress} />

            {!loaderVisible && (
                <>
                    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Hero />
                    <TopPicks onSelect={setSelected} />
                    <Trending />
                    <StylistCTA />
                    <About />
                    <Footer />
                    {selected && <ProductDetail p={selected} onClose={() => setSelected(null)} />}
                </>
            )}
        </div>
    );
}
