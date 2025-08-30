import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/core/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import ProtocolPdf from "./components/pdf/protocolPdf";
import Footer from "./components/core/footer/Footer";
import Page404 from "./components/page 404/Page404";
import Protocols from "./components/protocols/Protocols";
import Offers from "./components/offers/Offers";

const Gallery = lazy(() => import("./components/gallery/Gallery"));
const GalleryItem = lazy(() => import("./components/gallery/GalleryItem"));

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/protocols" element={<Protocols />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pdf/:fileUrl" element={<ProtocolPdf />} />
                    <Route path="*" element={<Page404 />} />

                    <Route
                        path="/gallery/*"
                        element={
                            <Suspense fallback={<p>Зареждане...</p>}>
                                <Routes>
                                    <Route path="" element={<Gallery />} />
                                    <Route
                                        path=":id"
                                        element={<GalleryItem />}
                                    />
                                </Routes>
                            </Suspense>
                        }
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
