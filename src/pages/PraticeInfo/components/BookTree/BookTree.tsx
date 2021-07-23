
import React, { useState } from "react";
import classNames from "classnames";
import "./BookTree.css";
import { praticeMdType } from "@models/praticeMd";
import List from "./List/List";

interface BookTreeProps {
  bookList: praticeMdType[];
  selectedKey: string;
  onItemClick: (path: string, id: number) => void;
}

type Props = BookTreeProps;

const BookTree = (props: Props) => {
  const [showTree, changeShowTree] = useState(false);
  const { bookList, selectedKey, onItemClick } = props;
  const onItemSubClick = (path: string, id: number) => {
    changeShowTree(!showTree);
    onItemClick(path, id);
  };

  return (
    <div className={classNames("book", { open: showTree })}>
      <div className="book-list">
        <List
          list={
            bookList.map((item) => ({
              name: item.title,
              key: item.path,
              value: item.path,
            })) || []
          }
          selected={selectedKey}
          onItemClick={onItemSubClick}
        />
      </div>
      <div className="toggle-btn" onClick={() => changeShowTree(!showTree)}>
        全书目录
      </div>
    </div>
  );
};

export default React.memo(BookTree);
