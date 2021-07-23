import React, {
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import "./jobRecommend.css";
import { useHistory } from "react-router-dom";
import { job } from "@api/index";
import { useLoginCheck } from "@hooks/index";
import Loading from "@components/Loading/loading";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginSel } from "@recoil/selectors/loginSelectors";
import { jobSelect } from "@recoil/selectors/jobSelect";
import { scrollToAnchor } from "@utils/index";
import Totast from "@components/Totast/totast";
type IJobList = {
  items: Array<{
    company_name: string;
    contact_way: string;
    place: string;
    salary: string;
    tags: string[];
    jid: number;
  }>;
  page: number;
  pages: number;
};
import { IJobListParams } from "@api/job";
const JobRecommend: FC<{}> = () => {
  // console.log("工作推荐列表");
  // const [observer, setObserver] = useState<IntersectionObserver>(null);
  // const [isLoading, setLoading] = useState(false);
  const { uid } = useRecoilValue(loginSel);
  const [jobInfo, setJobInfo] = useRecoilState(jobSelect);
  const [dataLoading, setDataLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  // const [hasData, setHasData] = useState(true);
  // const $botEle = useRef<HTMLDivElement>(null);
  const [jobList, setJobList] = useState<IJobList["items"]>([]);
  // const [jobListParams, setJobListParams] = useState<IJobListParams>({
  //   uid: 4,
  //   page: 1,
  //   page_count: 30,
  // });
  // const jobListParamRef = useRef(jobListParams);
  // jobListParamRef.current = jobListParams;
  const { setLoginStatus } = useLoginCheck();
  let _componentStatus = useRef(true);
  useEffect(() => {
    return () => {
      _componentStatus.current = false;
    };
  }, []);
  useEffect(() => {
    // if (!isLoading) {
    //   setDataLoading(true);
    // }
    const { id } = jobInfo;
    job
      .getQuesList({ uid })
      .then((res) => {
        if (!_componentStatus.current) {
          _componentStatus = null;
          return;
        }
        setLoginStatus(res.status);
        // console.log(res);
        const list = res.data.items.items || [];
        setJobList(list);
        setDataLoading(false);
        setTimeout(() => {
          id > 0 && scrollToAnchor(id);
        }, 100);
        // setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);
  // }, [jobListParams]);

  // useEffect(() => {
  //   const initScrollObserver = () => {
  //     const options: IntersectionObserverInit = {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 1.0,
  //     };
  //     const Observer: IntersectionObserver = new IntersectionObserver(
  //       callback,
  //       options
  //     );
  //     if ($botEle.current) {
  //       Observer.observe($botEle.current);
  //     }
  //     setObserver(Observer);
  //   };
  //   const callback: IntersectionObserverCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         if (isLoading) return;
  //         setLoading(true);
  //         let { page } = jobListParamRef.current;
  //         console.log("page", page);
  //         setJobListParams((preState) => ({
  //           ...preState,
  //           page: ++page,
  //         }));
  //       }
  //     });
  //   };
  //   const resetScrollObserver = () => {
  //     if (observer && $botEle.current) {
  //       observer.unobserve($botEle.current);
  //     }
  //   };
  //   initScrollObserver();
  //   return () => {
  //     resetScrollObserver();
  //   };
  // }, [jobList]);

  let history = useHistory();
  const handleGoInfo = (jid: number) => {
    setJobInfo({ id: jid });
    history.push({ pathname: `/job/info`, state: { jid } });
  };

  // const getRef = (isLastIndex: boolean) => {
  //   if (isLastIndex) {
  //     return $botEle;
  //   }
  //   return null;
  // };
  return (
    <>
      <Suspense fallback={Loading}>
        {dataLoading ? <Loading /> : null}
        <div className="page-job layout-container">
          <div className="job-recommend">
            <div className="recommend-item-box">
              {jobList.length > 0 ? (
                jobList.map((item, index) => {
                  // const refVal = getRef(index === jobList.length - 1);
                  // const id = index === jobList.length - 1 ? "bottom" : "";
                  return (
                    <div
                      className="recommend-item"
                      onClick={() => handleGoInfo(item.jid)}
                      key={item.jid}
                      id={"" + item.jid}
                      // ref={refVal}
                      // id={id}
                    >
                      {/* <img
                      className="user-avatar"
                      src={require("@assets/images/banner2.png")}
                      alt=""
                    /> */}
                      <div className="item-content">
                        <h2 className="con-til">{item.company_name}</h2>
                        {item.tags.length > 0 ? (
                          <p className="user-info">{item.tags.join("·")}</p>
                        ) : null}
                        <p className="con-subject">薪资：{item.salary}</p>
                        <p className="con-subject">
                          联系方式：{item.contact_way}
                        </p>
                        <p className="con-subject">地址：{item.place}</p>
                      </div>
                    </div>
                  );
                })
              ) : !dataLoading ? (
                <div className="tip-msg">暂无数据</div>
              ) : null}
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            {/* {isLoading ? <div className="loading-tip">数据加载中...</div> : ""} */}
            {/* {hasData ? "" : <div className="loading-tip">到底了~~</div>} */}
          </div>
        </div>
      </Suspense>
      <Totast visible={isError}></Totast>
    </>
  );
};
export default JobRecommend;
