import Header from "./Components/Header";
import { GlobalDiv, GlobalChild, Text, Btn } from "./styleComponents";
import Todo from "./Components/Todo";
import { useEffect, useState } from "react";

function sendToLocalStorage(List) {
  const jsonTodoList = JSON.stringify(List);
  localStorage.setItem("todoListData", jsonTodoList);
}

function getTodosfromLocalStorage() {
  let stringTodoList = localStorage.getItem("todoListData");
  let localTodoList = JSON.parse(stringTodoList);
  return localTodoList;
}

function App() {
  const [List, setList] = useState([]);

  useEffect(() => {
    let localList = getTodosfromLocalStorage();

    const fetching = async () => {
      const response = await fetch(
        "https://6325a6b74cd1a2834c41e69e.mockapi.io/todo-list/todos"
      );
      const Data = await response.json();
      let newData = [...Data];
      setList(newData);
      sendToLocalStorage(Data);
    };

    if (localList === null) {
      fetching();
    } else {
      let newlist = [...localList];
      setList(newlist);
    }
  }, []);

  const handleDeleteAndActivation = (list) => {
    let newlist = [...list];
    setList(newlist);
  };

  const handleAdd = (list) => {
    let newlist = [...list];
    setList(newlist);
  };

  const handleSaveEvent = () => {
    sendToLocalStorage(List);
  };

  return (
    <GlobalDiv>
      <GlobalChild>
        <div>
          <Header list={List} onChangelist={handleAdd} />
          <Text>
            My <span style={{ fontWeight: 400 }}>Tasks</span>
          </Text>

          {List.length !== 0 && (
            <Todo list={List} onChangeList={handleDeleteAndActivation} />
          )}
        </div>

        <Btn onClick={handleSaveEvent}>Save</Btn>
      </GlobalChild>
    </GlobalDiv>
  );
}

export default App;
