import React, { FC, useEffect, useState, useRef, Suspense } from "react";
import "./interviewExper.css"

import SwiperCore, { Pagination, Autoplay, Lazy, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Pagination, Autoplay, Lazy, Mousewheel]);


import { useHistory } from "react-router-dom";
import { interviewExper } from "@api/index";

import Loading from "@components/Loading/loading";

import { useLoginCheck } from "@hooks/index";
import { loginSel } from "@recoil/selectors/loginSelectors";
import { useRecoilValue } from "recoil";

import Totast from "@components/Totast/totast";

const InterviewExper: FC<{}> = () => {
  // console.log("面试经验列表");
  const history = useHistory();
  const [bannerList, setBannerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setLoginStatus } = useLoginCheck();
  const { uid } = useRecoilValue(loginSel);
  const [isError,setIsError] = useState(false);
  let _componentStatus = useRef(true);
  useEffect(() => {
    return () => {
      _componentStatus.current = false;
    };
  }, []);
  // 拿到轮播列表
  useEffect(() => {
    interviewExper
      .getInterviewExperList(uid)
      .then((res) => {
        if (!_componentStatus.current) {
          _componentStatus = null;
          return;
        }
        // 登录验证 
        setLoginStatus(res.status);

        setBannerList(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [])

  const goPraticeInfo = (path: string) => {
    history.push({ pathname: `/interview/info`, state: { path } });
  };


  const onProgress = (swiper: SwiperCore) => {
    const { slides } = swiper;
    for (let i = 0; i < slides.length; i++) {
      const slide = slides.eq(i);
      const slideProgress = (slides[i] as any).progress;
      let modify = 1;
      if (Math.abs(slideProgress) > 1) {
        modify = (Math.abs(slideProgress) - 1) * 0.2 + 1;
      }

      let translate = slideProgress * modify * 110 + "px";
      let scale = 1 - Math.abs(slideProgress) / 10;
      let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));

      slide.transform("translateX(" + translate + ") scale(" + scale + ")");
      slide.css("zIndex", zIndex);
      slide.css("opacity", 1);

      // 移除改变透明度
      if (Math.abs(slideProgress) > 5) {
        slide.css("opacity", 0);
      }
    }
  };
  const setTransition = (swiper: SwiperCore, transition: number) => {
    const { slides } = swiper;
    for (var i = 0; i < slides.length; i++) {
      var slide = slides.eq(i);
      slide.transition(transition);
    }
  };
  const onInit = (swiper: SwiperCore) => {
    swiper.slideTo(4);
  };
  return (
    <>
      <Suspense fallback={Loading}>
        {loading ? <Loading /> : null}
        <div className="page-interview layout-container">
          <div className="exper-swiper">
            <Swiper
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              watchSlidesProgress={true}
              centeredSlides={true}
              slidesPerView="auto"
              speed={300}
              loop={true}
              lazy={true}
              loopedSlides={5}
              pagination={{ clickable: true }}
              onProgress={onProgress}
              onSetTransition={setTransition}
              onInit={onInit}
              mousewheel={true}
            >
              {bannerList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="swiper-item-box"
                    onClick={() => goPraticeInfo(item.path)}
                  >
                    <div className="item-top">
                      <img src={item.poster} alt="" />
                    </div>

                    <img className="user-avatar" src={item.avatar} alt="" />
                    <div className="item-content">
                      <h2 className="con-til">{item.title}</h2>
                      <p className="user-info">{item.tag.join("·")}</p>
                      <p className="con-subject">{item.subject}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Suspense>
      <Totast visible={isError} />
    </>
  );
};
export default InterviewExper;
