// import { useState, useEffect } from "react";
// // hooks是通过链表存储的

// const useViewport = () => {
//   // 定义state 获取宽度、高度
//   const [wh, setWH] = useState<number>(window.innerHeight);
//   const [ww, setWW] = useState<number>(window.innerWidth);

//   // 相当于didMount
//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWH(window.innerHeight);
//       setWW(window.innerWidth);
//     };
//     // 操作dom
//     window.addEventListener("resize", handleWindowResize);
//     // return destroy 不使用的时候可以移除
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return {ww, wh};
// };
// export default useViewport;


import React, {useState, useEffect} from 'react';

const useViewport = () => {
  const [wh, setWH] = useState<number>(window.innerHeight);
  const [ww, setWW] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWH(window.innerWidth);
      setWH(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);
  return {ww, wh}
};

export default useViewport;