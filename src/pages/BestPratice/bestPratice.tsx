import React, { FC, useState, useEffect, useRef, Suspense } from "react";
import { useHistory } from "react-router-dom";
import "./bestPratice.css";

import { pratice } from "@api/index";
import Loading from "@components/Loading/loading";
import { useLoginCheck } from "@hooks/index";
import { useRecoilValue } from "recoil";
import { loginSel } from "@recoil/selectors/loginSelectors";
import Book, { IBook } from "./Book";
import Totast from "@components/Totast/totast";

const QuesBank: FC<{}> = () => {
  const history = useHistory();
  const [bookList, setBookList] = useState([]);
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
  useEffect(() => {
    pratice
      .getBestPraticeList(uid)
      .then((res) => {
        if (!_componentStatus.current) {
          _componentStatus = null;
          return;
        }
        setLoginStatus(res.status);
        let praticeList: {}[][] = [];
        let count = 1;
        let length = res.data.length;
        res.data.forEach((item: {}, index: number) => {
          if (index === 0) {
            praticeList[count - 1] = [];
          } else if (index === 5 * count) {
            praticeList[count] = [];
            count++;
          }
          if (index <= 5 * count) {
            praticeList[count - 1].push(item);
          }
        });
        setBookList(praticeList || []);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);
  const goInfo = (path: string, id: number) => {
    history.push({ pathname: `/pratice/info`, state: { path, id } });
  };
  return (
    <>
      <Suspense fallback={Loading}>
        <div className="page-pratice layout-container">
          <div className="book-box">
            {!loading ? (
              <img
                src={require("@assets/images/bookshelf.png")}
                className="book-shelf"
                alt=""
              />
            ) : null}
            {bookList.map((item, index) => (
              <div className="pratice-line" key={index}>
                <div className="pratice-item-box">
                  {item.map((book: IBook, bdx: number) => (
                    <Book con={book} key={book.id} goInfo={goInfo} />
                  ))}
                </div>
                {/* <div className="desk"></div> */}
              </div>
            ))}
          </div>
        </div>
        {loading ? <Loading /> : null}
      </Suspense>
      <Totast visible={isError} />
    </>
  );
};
export default QuesBank;
