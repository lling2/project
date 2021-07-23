import React, { FC, useEffect, useState, Suspense, useCallback } from "react";
import "./jobInfo.css";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { job } from "@api/index";
import { loginSel } from "@recoil/selectors/loginSelectors";
import { useRecoilValue } from "recoil";
import MarkRender from "@components/MarkRender/markRender";
import { useLoginCheck } from "@hooks/index";
import Loading from "@components/Loading/loading";
import Totast from "@components/Totast/totast";
const JobInfo: FC<{}> = () => {
  // console.log("工作推荐详情");
  const { uid } = useRecoilValue(loginSel);
  // const { jid } = useParams<{ jid: string }>();
  const location = useLocation<{ jid: string }>();
  const [jobInfo, setJobInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const { setLoginStatus } = useLoginCheck();
  const [isError,setIsError] = useState(false);
  let history = useHistory();
  useEffect(() => {
    job
      .getJobInfo({ uid, jid: Number(location.state.jid) })
      .then((res) => {
        // console.log(res);
        setLoginStatus(res.status);
        setJobInfo(res.data.requirements);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  }, []);
  const goBack = useCallback(() => {
    history.goBack();
  }, []);
  return (
    <>
      <Suspense fallback={Loading}>
        <div className="job-info layout-container">
          <div className="md-back-btn" onClick={goBack}>
            <i className="iconfont">&#xe653;</i>
          </div>
          <MarkRender mardownStr={jobInfo} showTopic={false}></MarkRender>
          {loading ? <Loading /> : null}
        </div>
      </Suspense>
      <Totast visible={isError} ></Totast>
    </>
  );
};

export default JobInfo;
