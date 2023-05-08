import React from "react";
import { HeadText, Text, Input, Btn } from "../styleComponents";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Header = (props) => {
  const handleAdd = () => {
    let inputValue = document.getElementById("input").value;
    if (inputValue === "") {
      alert("Please, Enter A Todo.");
    } else {
      let obj = { title: inputValue, is_active: false, id: random(11, 99) };
      let list = props.list;
      list.push(obj);
      props.onChangelist(list);
      document.getElementById("input").value = "";
    }
  };

  return (
    <>
      <HeadText>Todos</HeadText>
      <Text>
        Create <span style={{ fontWeight: 400 }}>Task</span>
      </Text>
      <Input></Input>
      <Btn onClick={handleAdd}>Add</Btn>
    </>
  );
};

export default Header;
