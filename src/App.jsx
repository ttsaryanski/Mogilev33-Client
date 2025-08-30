import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { ErrorProvider } from "./contexts/ErrorContext";

import ErrorBoundary from "./components/boundary/ErrorBoundary";
import Header from "./components/core/header/Header";
import Home from "./components/home/Home";
import Protocols from "./components/protocols/Protocols";
import Offers from "./components/offers/Offers";
import ParamsPdf from "./components/pdf/paramsPdf";
import About from "./components/about/About";
import Footer from "./components/core/footer/Footer";
import ErrorMsg from "./components/core/errorComponent/ErrorMsg";
import Page404 from "./components/page 404/Page404";

const Gallery = lazy(() => import("./components/gallery/Gallery"));
const GalleryItem = lazy(() => import("./components/gallery/GalleryItem"));

function App() {
    return (
        <ErrorProvider>
            <ErrorBoundary>
                <div className="container-fluid">
                    <Header />
                    <ErrorMsg />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/protocols" element={<Protocols />} />
                            <Route path="/offers" element={<Offers />} />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/pdf/:fileUrl"
                                element={<ParamsPdf />}
                            />
                            <Route path="*" element={<Page404 />} />

                            <Route
                                path="/gallery/*"
                                element={
                                    <Suspense fallback={<p>Зареждане...</p>}>
                                        <Routes>
                                            <Route
                                                path=""
                                                element={<Gallery />}
                                            />
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
            </ErrorBoundary>
        </ErrorProvider>
    );
}

export default App;
