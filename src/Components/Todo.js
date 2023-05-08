import React from "react";
import { Tododiv } from "../styleComponents";
import Card from "./Card";

const Todo = (props) => {
  const handleDeleteAndActivation = (list) => {
    props.onChangeList(list);
  };

  const todoList = props.list.map((ele) => (
    <Card
      key={ele.id}
      object={ele}
      onChangeList={handleDeleteAndActivation}
      list={props.list}
    />
  ));

  return (
    <Tododiv>
      <div>{todoList}</div>
    </Tododiv>
  );
};

export default Todo;
