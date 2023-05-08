import React, { useState } from "react";
import {
  TodoCard,
  Checkbox,
  LabelDelteContainer,
  ImgDiv,
  Label,
} from "../styleComponents";

const Card = (props) => {
  const [check, setCheck] = useState(props.object.is_active);

  const handleDeleteEvent = () => {
    let index = props.list.findIndex((ele) => ele.id === props.object.id);
    props.list.splice(index, 1);
    props.onChangeList(props.list);
  };

  const handleEvent = () => {
    let index = props.list.findIndex((ele) => ele.id === props.object.id);
    let list = props.list;
    list[index].is_active = !check;
    setCheck(!check);
    props.onChangeList(list);
  };

  return (
    <TodoCard>
      <Checkbox
        checked={check}
        onChange={(e) => {}}
        onClick={handleEvent}
      ></Checkbox>
      <LabelDelteContainer>
        <Label isActive={check}>{props.object.title} </Label>
        <ImgDiv onClick={handleDeleteEvent}>
          <img
            src="https://i.ibb.co/H2sDsqX/icons8-trash-20.png"
            alt="icons8-trash-20"
          ></img>
        </ImgDiv>
      </LabelDelteContainer>
    </TodoCard>
  );
};

export default Card;
