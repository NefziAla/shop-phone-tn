import React, { useEffect, useState } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  const onClickButton = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else setCounter(counter - 1);
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else setCounter(counter + 1);
    }
  };
  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={() => onClickButton("prev")}>
        Prev
      </button>
      {counter}
      <button className="btn btn-primary" onClick={() => onClickButton("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
