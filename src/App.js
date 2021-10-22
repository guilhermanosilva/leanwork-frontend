import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/userContext";

import Routes from "./Routes";

import GlobalStyles from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
