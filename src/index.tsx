import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: black;
    color: whitesmoke;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
    text-decoration: none;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <RecoilRoot>
            <GlobalStyles />
            <App />
        </RecoilRoot>
    </>
);
