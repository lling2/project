import React, {
  FC,
  useState,
  useEffect,
  Suspense,
  useRef,
  useCallback,
} from "react";

import "./praticeInfo.css";
import MarkRender from "@components/MarkRender/markRender";

import { pratice } from "@api/index";
import Loading from "@components/Loading/loading";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { setFont, storage } from "@utils/index";

import { useLoginCheck } from "@hooks/index";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginSel } from "@recoil/selectors/loginSelectors";
import BookTree from "./components/BookTree/BookTree";
import { praticeMdListSel } from "@recoil/selectors/praticeMdSelectors";

import { praticeMdType } from "@models/praticeMd";
import { praticeMdState } from "@recoil/atoms/praticeMdAtoms";
import PdfRender from "@components/PdfRender/pdfRender";
import Totast from "@components/Totast/totast";

const BestPraticeInfo: FC<{}> = () => {
  // console.log("藏经阁详情");
  const history = useHistory();
  const [md, setMd] = useState("");
  const { uid,sign } = useRecoilValue(loginSel);
  const [loading, setLoading] = useState(true);
  const { setLoginStatus } = useLoginCheck();
  const [isPdf, setIsPdf] = useState(false);
  const [isError,setIsError] = useState(false);
  // let { path } = useParams<{ path: string }>();
  let location = useLocation<{ path: string; id: number }>();
  let pState: { path: string; id: number } = {
    path: "",
    id: 0,
  };
  if (!location.state) {
    pState = storage.get("pState");
    if (!pState) {
      history.replace("/ques");
      return <></>;
    }
  } else {
    pState = location.state;
    storage.set("pState", pState);
  }

  const [praticeMdList, setPraticeMdList] = useRecoilState<praticeMdType[]>(
    praticeMdState
  );
  const [currentPath, setCurrentPath] = useState(pState.path);
  const [pathId, setPathId] = useState(pState.id);
  const pathIdRef = useRef(pathId);
  pathIdRef.current = pathId;

  let _componentStatus = useRef(true);
  useEffect(() => {
    return () => {
      _componentStatus.current = false;
    };
  }, []);
  useEffect(() => {
    const scrollEl = document.querySelector(".markdown-box .content");
    scrollEl && scrollEl.scrollTo(0, 0);
  }, [currentPath]);

  useEffect(() => {
    if (!currentPath && isPdf) {
      return;
    }
    if (pState.path.indexOf(".pdf") !== -1) {
      setIsPdf(true);
      return;
    }
    pratice
      .getBestPraticeInfo({
        path: `${currentPath}.md`,
        id: pathId,
        uid,
      })
      .then((res) => {
        if (!_componentStatus.current) {
          _componentStatus = null;
          return;
        }
        setLoginStatus(res.status);
        setMd(res.data.data || "");
        setFont(res.data.key, "praticeInfo", setLoading);
        setPraticeMdList(res.data.mdList);
      }).catch(err=>{
        setIsError(true);
      });
  }, [currentPath]);
  const onItemClick = (path: string) => {
    setLoading(true);
    setCurrentPath(path);
    history.push({
      pathname: `/pratice/info`,
      state: { path, id: pathIdRef.current },
    });
  };
  const goBack = useCallback(() => {
    history.replace("/pratice");
  }, []);
  return (
    <>
      <Suspense fallback={Loading}>
        <div
          className="page-pratice-info layout-container"
          style={{ marginTop: "10px" }}
        >
          <div className="md-back-btn" onClick={goBack}>
            <i className="iconfont">&#xe653;</i>
          </div>
          {isPdf ? (
            <PdfRender
              sign={sign}
              url={`https://vip-api.yidengfe.com/api/getBook?path=${pState.path}&sid=${uid}`}
            />
          ) : (
            <>
              {praticeMdList.length > 0 ? (
                <BookTree
                  selectedKey={currentPath}
                  bookList={praticeMdList}
                  onItemClick={onItemClick}
                />
              ) : null}
              <MarkRender mardownStr={md}></MarkRender>
              {loading ? <Loading /> : null}
            </>
          )}
        </div>
      </Suspense>
      <Totast visible={isError}></Totast>
    </>
  );
};
export default BestPraticeInfo;
