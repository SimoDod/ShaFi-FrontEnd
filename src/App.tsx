import useTheme from "./hooks/useTheme";
import Router from "./Router";
import backgroundImage from "./assets/images/beach-background.jpg";

const App = () => {
  useTheme();

  return (
    <div className="min-h-screen relative">
      {/* Background layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Subtle overlay for better readability */}
      <div className="fixed inset-0 z-0 bg-base-100/30 backdrop-blur-[2px]" />
      {/* Content layer */}
      <div className="relative z-10">
        <Router />
      </div>
    </div>
  );
};

export default App;
