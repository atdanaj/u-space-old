import "./App.css";
import connection from "./connection";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ResponsiveAppBar from "./components/AppBar";
import Manifest from "./pages/Manifest";
import Visualize from "./pages/Visualize";
import Login from "./pages/Login";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#78909c",
      contrastText: "#dde1e4",
    },
    secondary: {
      main: "#6be405",
    },
  },
});

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <ApolloProvider client={connection}>
      <ThemeProvider theme={theme}>
        <div className="App">
          {isAuthenticated && <ResponsiveAppBar />}
          <BrowserRouter>
            <Routes>
              <Route path="/visualize" element={<Visualize />} />
              <Route path="/manifest" element={<Manifest />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
