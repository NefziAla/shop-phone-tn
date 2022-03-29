import React, { useEffect, useState } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberofButtons] = useState(
    Math.ceil(total / showPerPage)
  );
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
        setCounter(1);
      } else setCounter(counter + 1);
    }
  };
  console.log(numberOfButtons);
  return (
    <div className="d-flex justify-content-center ">
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" onClick={()=>onClickButton('prev')}>&laquo; Prev</a></li>
   { new Array(Math.ceil(total / showPerPage)).fill("").map((el,index)=>(
    <li class={`page-item ${(index+1)===counter ? "active" :null}`}><a class="page-link" href="#" onClick={()=>setCounter(index+1)}>{index+1}</a></li>

       
   ))}
    <li class="page-item"><a class="page-link" href="#"  onClick={()=>onClickButton('next')}>Next &raquo;</a></li>
  </ul>
</nav>
    </div>
  );
};

export default Pagination;
