import { Toaster } from "react-hot-toast";
import GlobalStyle from "./Styles/global";
import Routes from "./Routes/";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
