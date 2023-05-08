import styled from "styled-components";

export const GlobalDiv = styled.div`
  height: 100vh;
  padding: 70px 0;
  font-family: Roboto;
  background-color: #f9fbfe;
`;

export const GlobalChild = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeadText = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Text = styled.div`
  text-align: left;
  font-size: 32px;
  font-weight: 600;
  margin-top: 20px;
`;

export const Input = styled.input.attrs(() => ({
  placeholder: "what needs to be done?",
  id: "input",
}))`
  padding: 0 10px;
  font-size: 16px;
  border-radius: 10px;
  outline: none;
  width: 97%;
  height: 40px;
  border: 1px solid #e4e7eb;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  background-color: #4c63b6;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;

export const Tododiv = styled.div`
  margin-top: 20px;
`;

export const TodoCard = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 20px;
  height: 20px;
`;

export const LabelDelteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-left: 5px solid #096f92;
  background-color: #e6f6ff;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ImgDiv = styled.div`
  cursor: pointer;
`;

export const Label = styled.label`
  text-decoration: ${(props) =>
    props.isActive === true ? "line-through" : "none"};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
