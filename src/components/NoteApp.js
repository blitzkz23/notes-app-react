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
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import ReactLoading from "react-loading";
import {
  putThemeSettings,
  getThemeSettings,
  putLocaleSettings,
  getLocaleSettings,
} from "../utils/config";

export default function NoteApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [locale, setLocale] = React.useState(
    getLocaleSettings == null ? "en" : getLocaleSettings
  );
  const [theme, setTheme] = React.useState(
    getThemeSettings == null ? "dark" : getThemeSettings
  );

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

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      putLocaleSettings(prevLocale === "id" ? "en" : "id");
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      putThemeSettings(prevTheme === "dark" ? "light" : "dark");
      return prevTheme === "dark" ? "light" : "dark";
    });
  };

  const localeContextValue = React.useMemo(() => {
    return { locale, toggleLocale };
  }, [locale]);

  const themeContextValue = React.useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  React.useEffect(() => {
    // This effect is used to persist user data when refreshed
    async function fetchUserData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    fetchUserData();

    // Set loading effect
    return () => {
      setInitializing(null);
    };
  }, [authedUser]);

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className={theme === "dark" ? "note-app" : "note-app__light"}>
            {initializing ? (
              <div className="note-app__body">
                <div className="note-app__loading">
                  <ReactLoading
                    type="spinningBubbles"
                    color="#6D8FC5"
                    height={"20%"}
                    width={"20%"}
                  />
                </div>
              </div>
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
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
