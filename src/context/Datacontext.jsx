import { createContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  
     
  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(localStorage.getItem("token"));
  };
 
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    return;
  };
  let isLoggedIn = !!token;
  return (
    <DataContext.Provider
      value={{
        token,
        setToken,
        storeTokenInLs,
        logoutUser,
        isLoggedIn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
