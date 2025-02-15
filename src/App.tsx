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
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10" />
      <div className="relative z-10">
        <Router />
      </div>
    </div>
  );
};

export default App;