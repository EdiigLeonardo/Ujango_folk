import React from "react";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store/store";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router>
            <AppRoutes />
          </Router>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
