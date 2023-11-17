import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  selectItem: (item: string) => void;
}

function GroupList({ items, heading, selectItem }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>
      {!items?.length && <p>No items</p>}
      <ul>
        {items.map((i, idx) => (
          <li
            key={idx}
            className={activeIndex === idx ? "bg-blue-500" : ""}
            onClick={() => {
              setActiveIndex(idx);
              selectItem(i);
            }}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GroupList;
