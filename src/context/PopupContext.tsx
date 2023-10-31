import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

export type PopupContextType = {
  setShowInitiatePopup: Dispatch<SetStateAction<boolean>>;
  showInitiatePopup: boolean;
};

const PopupContext = createContext<PopupContextType>({} as PopupContextType);

export const usePopupContext = () => React.useContext(PopupContext);

export const PopupContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showInitiatePopup, setShowInitiatePopup] = useState(false);

  return (
    <PopupContext.Provider value={{ showInitiatePopup, setShowInitiatePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext;
