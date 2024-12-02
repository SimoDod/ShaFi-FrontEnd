import useTheme from "./hooks/useTheme";
import Router from "./Router";

const App = () => {
  useTheme();

  return <Router />;
};

export default App;
