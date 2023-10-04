import { styled } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
