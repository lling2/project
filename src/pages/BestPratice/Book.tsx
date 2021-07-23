import React, { FC } from "react";
export type IBook = {
  id: number;
  path: string;
  title: string;
  poster: string;
};
const Book: FC<{
  con: IBook;
  goInfo: (path: string, id: number) => void;
}> = (props) => {
  // console.log("藏经阁");
  const { goInfo, con } = props;
  const goPraticeInfo = (path: string, id: number) => {
    goInfo(path, id);
  };
  return (
    <>
      <div className="pratice-book">
        <ul className="hardcover_front">
          <li>
            <div
              className="coverDesign grey"
              style={{ backgroundImage: `url(${con.poster})` }}
            >
              {/* <h1>{con.title}</h1> */}
              {/* <p>{con.info}</p> */}
            </div>
          </li>
          <li></li>
        </ul>
        <ul className="page" onClick={() => goPraticeInfo(con.path, con.id)}>
          <li></li>
          <li className="book-con">
            <h1>{con.title}</h1>
            <span className="btn">查看详情</span>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="hardcover_back">
          <li></li>
          <li></li>
        </ul>
        <ul className="book_spine">
          <li></li>
          <li></li>
        </ul>
      </div>
      {/* <div onClick={goPraticeInfo} className="pratice-item">
              JavaScript最佳实践
            </div>
            <div onClick={goPraticeInfo} className="pratice-item">
              大话NodeJs
            </div>
            <div onClick={goPraticeInfo} className="pratice-item">
              你不知道的JavaScript
            </div> */}
    </>
  );
};
export default React.memo(Book);
