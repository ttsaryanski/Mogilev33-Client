import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export default function ProtocolPdf() {
    const protocolUrl = useParams();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            if (entries[0]) {
                setWidth(entries[0].contentRect.width);
            }
        });
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <section className="site-header-2 flex-center mb-50 bgcolor-2 border-rounded">
            <Document
                className="pdf-document"
                file={protocolUrl.fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) =>
                    console.error("Error loading PDF:", error)
                }
            >
                <Page pageNumber={pageNumber} width={width} />
            </Document>
            <p>
                Страница {pageNumber} от {numPages}
            </p>
            <button
                className="button-pdf"
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber <= 1}
            >
                Предишна
            </button>
            <button
                className="button-pdf"
                style={{ marginLeft: "5px" }}
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}
            >
                Следваща
            </button>
        </section>
    );
}
