import useTheme from "./hooks/useTheme";
import Router from "./Router";
import backgroundImage from "./assets/images/beach-background.jpg";

const App = () => {
  useTheme();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10">
        <Router />
      </div>
    </div>
  );
};

export default App;
