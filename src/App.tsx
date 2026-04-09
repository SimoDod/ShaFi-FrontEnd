import useTheme from "./hooks/useTheme";
import Router from "./Router";

const App = () => {
  useTheme();

  return (
    <div className="min-h-screen relative bg-base-200">
      {/* Subtle gradient mesh background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-secondary/[0.03] blur-3xl" />
      </div>
      {/* Content layer */}
      <div className="relative z-10">
        <Router />
      </div>
    </div>
  );
};

export default App;
