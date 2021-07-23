import React, { FC, useState, useEffect, Suspense, useCallback } from "react";
import "./interviewExperInfo.css";
import MarkRender from "@components/MarkRender/markRender";
import { interviewExper } from "@api/index";
import Loading from "@components/Loading/loading";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { setFont, storage } from "@utils/index";
import { useLoginCheck } from "@hooks/index";
import { useRecoilValue } from "recoil";
import { loginSel } from "@recoil/selectors/loginSelectors";
import Totast from "@components/Totast/totast";
const InterviewExperInfo: FC<{}> = () => {
  // console.log("面试经验详情");
  const { uid } = useRecoilValue(loginSel);
  const [md, setMd] = useState("");
  const [loading, setLoading] = useState(true);
  const { setLoginStatus } = useLoginCheck();
  const [isError,setIsError] = useState(false);
  let history = useHistory();
  // let { path } = useParams<{ path: string }>();
  const location = useLocation<{ path: string }>();
  let iState: { path: string } = {
    path: ""
  };
  if (!location.state) {
    iState = storage.get("iState");
    if (!iState) {
      history.replace("/ques");
      return <></>;
    }
  } else {
    iState = location.state;
    storage.set("iState", iState);
  }
  useEffect(() => {
    interviewExper
      .getInterviewExperInfo({
        path: `${decodeURIComponent(iState.path)}.md`,
        uid,
      })
      .then((res) => {
        setLoginStatus(res.status);
        setMd(res.data.data || "");
        setFont(res.data.key, "interInfo", setLoading);
      }).catch(err=>{
        setIsError(true);
      });
  }, []);
  const goBack = useCallback(() => {
    history.replace("/interview");
  }, []);
  return (
    <>
      <Suspense fallback={Loading}>
        <div className="layout-container interview-exper-info ">
          <div className="md-back-btn" onClick={goBack}>
            <i className="iconfont">&#xe653;</i>
          </div>
          <MarkRender mardownStr={md}></MarkRender>
          {loading ? <Loading /> : null}
        </div>
      </Suspense>
      <Totast visible={isError} />
    </>
  );
};
export default InterviewExperInfo;
