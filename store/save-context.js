import React, { useContext, useState } from "react";

const SaveContext = React.createContext();
const SaveUpdateContext = React.createContext();
// const CartUpdateContext = React.createContext();

export function useSave() {
  return useContext(SaveContext);
}

export function useSaveUpdate(){
  return useContext(SaveUpdateContext)
}

export function SaveProvider({children}) {  
  const [email, setEmail] = useState('');
  const [saveActive, setSaveActive] = useState(false);

  function updateEmail(email) {
    setEmail(email);
  }


  return (
    <SaveContext.Provider value={saveActive}>
      {children}
    </SaveContext.Provider>
  )
}