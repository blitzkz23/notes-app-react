import React from "react";
import AddPage from "../pages/AddPage";
import HomePage from "../pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NoteHeader from "./NoteHeader";
import NotFound from "../pages/NotFound";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AuthHeader from "./AuthHeader";
import { putAccessToken, getUserLogged } from "../utils/api";

export default function NoteApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const pathDefault = "/";
  const pathAdd = "/add";
  const pathDetail = "/note/:id";
  const pathArchive = "/archive";
  const pathAny = "/*";
  const pathRegister = "/register";

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  async function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  React.useEffect(() => {
    // This effect is used to persist user data when refreshed
    async function fetchUserData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      console.log(data);
      setInitializing(false);
    }

    fetchUserData();

    // Set loading effect
    return () => {
      setInitializing(null);
    };
  }, [authedUser]);

  return (
    <div className="note-app">
      {initializing ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <header>
            {authedUser === null ? (
              <AuthHeader />
            ) : (
              <NoteHeader logout={onLogout} />
            )}
          </header>
          <main>
            {authedUser === null ? (
              <Routes>
                <Route path={pathRegister} element={<RegisterPage />} />
                <Route
                  path={pathAny}
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
              </Routes>
            ) : (
              <Routes>
                <Route
                  path={pathDefault}
                  element={<HomePage name={authedUser.name} />}
                />
                <Route path={pathAdd} element={<AddPage />} />
                <Route path={pathArchive} element={<ArchivePage />} />
                <Route path={pathDetail} element={<DetailPage />} />
                <Route path={pathAny} element={<NotFound />} />
              </Routes>
            )}
          </main>
        </>
      )}
    </div>
  );
}
