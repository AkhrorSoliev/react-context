import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
