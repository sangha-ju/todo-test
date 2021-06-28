import React, { useState } from "react";

function todoReducer() {}

export function TodoProVider() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fatch("http://3.36.55.80:3000/api/todolist/sangha");
    const jsonData = await resp.json();
    setData(jsonData);
  };
}

export default TodoProVider;
