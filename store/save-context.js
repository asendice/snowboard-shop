import React, { useContext, useState, useEffect } from "react";

const SaveContext = React.createContext({
  email: null,
  saveActive: null,
  updateEmail: function() {}
});

export function useSave() {
  return useContext(SaveContext);
}

export function useSaveUpdate(){
  return useContext(SaveUpdateContext)
}

export function SaveProvider({children}) {  
  const [email, setEmail] = useState('');
  const [saveActive, setSaveActive] = useState(false);

  useEffect(() => {
    if(email.length > 0){
      setSaveActive(true);
    }
  },[email])

  function updateEmail(email) {
    setEmail(email);
  }

  const context = {
    email: email,
    saveActive: saveActive,
    updateEmail: updateEmail
  }


  return (
    <SaveContext.Provider value={context}>
      {children}
    </SaveContext.Provider>
  )
}