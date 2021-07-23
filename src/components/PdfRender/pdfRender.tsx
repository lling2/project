import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  KeyboardEvent,
} from "react";
import { Document, Page, Outline } from "react-pdf/dist/esm/entry.webpack";
import Loading from "@components/Loading/loading";
import "./pdfRender.css";
import { useViewport } from "@hooks/index";
import { PDFTreeNode } from "pdfjs-dist";

const PdfRender: FC<{ url: string; sign: string }> = ({ url, sign }) => {
  const { wh, ww } = useViewport();
  const [numPages, setNumPages] = useState(null);
  const numPagesRef = useRef(numPages);
  numPagesRef.current = numPages;
  let [pageNum, setPageNum] = useState(1);

  const pageNumRef = useRef(pageNum);
  pageNumRef.current = pageNum;
  const [hasOutline, setHasOutline] = useState(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }
  const handlItemClick = ({ pageNumber }: { pageNumber: string }) => {
    setPageNum(Number(pageNumber));
  };
  const handlPrevClick = useCallback(() => {
    if (pageNumRef.current <= 1) return;
    setPageNum((pageNum) => --pageNum);
  }, []);
  const handlNextClick = () => {
    if (pageNumRef.current >= numPagesRef.current) return;
    setPageNum((pageNum) => ++pageNum);
  };
  const outlineLoadSuccess = (outline: PDFTreeNode[]) => {
    if (!outline) {
      setHasOutline(false);
    }
  };
  const pdfParams = useMemo(() => {
    return {
      url,
      httpHeaders: { xs: sign },
    };
  }, []);
  useEffect(() => {
    function keydown(e: globalThis.KeyboardEvent) {
      console.log(e);
      const { key } = e;
      if (key === "ArrowLeft") {
        handlPrevClick();
      } else if (key === "ArrowRight") {
        handlNextClick();
      }
    }
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);
  return (
    <div
      className="pdf-render-con"
      style={{
        height: wh - 166 + "px",
      }}
    >
      <div className="pdf-page-btn">
        <div
          className={`prev ${pageNum <= 1 ? "disable" : ""}`}
          onClick={handlPrevClick}
        >
          上一页
        </div>
        <div className="current-page-num">
          {pageNum}/{numPages}
        </div>
        <div
          className={`next ${pageNum >= numPages ? "disable" : ""}`}
          onClick={handlNextClick}
        >
          下一页
        </div>
      </div>
      <Document
        file={pdfParams}
        loading={<Loading />}
        onLoadSuccess={onDocumentLoadSuccess}
        className="react-pdf-document-custom"
      >
        {hasOutline ? (
          <Outline
            onLoadSuccess={outlineLoadSuccess}
            onItemClick={handlItemClick}
            className="pdf-outline"
          ></Outline>
        ) : null}

        <Page
          renderAnnotationLayer={false}
          renderTextLayer={false}
          pageNumber={pageNum}
          width={ww * 0.6}
          className={`${hasOutline ? "" : "react-pdf-page-custom"}`}
        />
      </Document>
    </div>
  );
};
export default React.memo(PdfRender);
