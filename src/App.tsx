import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import { DefaultLayout } from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import TodosPage from "./pages/Todos";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DefaultLayout>
  );
};

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
