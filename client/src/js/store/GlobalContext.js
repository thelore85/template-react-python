import React, {createContext, useEffect, useState} from "react";


export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    isLogin: false,
  })

  // Actions
  const [actions, setActions] = useState({

    copyStoreInLocalStore: () => {
      localStorage.setItem("store", JSON.stringify(store));
      console.log('local store updated: ', store)
    },

    pushProData: (data)=>{
      setStore(prevStore => {
        const newStore = { ...prevStore, pro: data };
        localStorage.setItem("store", JSON.stringify(newStore));
        return newStore; // Restituisci il nuovo valore aggiornato di store
      });
    },
    
    setLogin: (data) => {
      setStore(prevStore => ({ ...prevStore, isLogin: true }))
      localStorage.setItem("token", data.access_token)
      actions.copyStoreInLocalStore()
    },
    
    isLogin: () => {
      if(localStorage.getItem("token")){
        setStore(prevStore => ({ ...prevStore, isLogin: true}));
        actions.copyStoreInLocalStore()
      }
    },
    
    logout: () => {
      localStorage.removeItem("token")
      setStore(prevStore => ({ ...prevStore, isLogin: false}));
      actions.copyStoreInLocalStore()
    }
    
  });
  
  useEffect(() => {
    actions.isLogin()
  },[] )
  
  return(
    <Context.Provider value={{ store, setStore, actions }}>
      {props.children}
    </Context.Provider>
  )
  
}
