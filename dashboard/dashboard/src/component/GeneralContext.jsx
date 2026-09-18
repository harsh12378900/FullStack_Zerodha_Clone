import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    console.log("========== CONTEXT FUNCTION ==========");
    console.log("UID:", uid);

    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          onCancel={handleCloseBuyWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;