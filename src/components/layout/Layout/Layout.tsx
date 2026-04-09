import { useEffect } from "react";
import { useAppDispatch } from "../../../store/store";
import { fetchUserThunk } from "../../../store/thunks/auth/fetchUserThunk";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow animate-fade-in">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
