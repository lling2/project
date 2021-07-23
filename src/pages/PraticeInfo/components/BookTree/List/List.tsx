
import React, { ReactNode } from "react";
import classNames from "classnames";

import "./List.css";
type ListNode = {
  name: string;
  value: string;
  key: string;
};

interface ListProps {
  list: ListNode[];
  selected: string;
  onItemClick: (key: string, id: number) => void;
  className?: string;
}

type Props = ListProps;

export default function List(props: Props): JSX.Element {
  const { list, selected, className, onItemClick } = props;

  return (
    <div className={classNames("list", className)}>
      {list.map((item: ListNode) => {
        return (
          <div
            className={classNames("list-item", {
              focus: selected === item.key,
            })}
            key={item.key}
            onClick={() => onItemClick(item.value, 0)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
