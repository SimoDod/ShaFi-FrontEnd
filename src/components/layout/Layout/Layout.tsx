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
    <div className="min-h-screen flex flex-col mb-8">
      <NavigationBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      {/*       <footer className="footer footer-center bg-base-300 text-base-content p-3 mt-auto">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Simeon Dodov
          </p>
        </aside>
      </footer> */}
    </div>
  );
};

export default Layout;
