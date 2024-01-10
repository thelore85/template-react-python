import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    pro : {
      name:'',
      email:'',
      lastName:'',
      password: '',
    },
    specialization: [],
    service: [],
    studio: {
      url:'',
      phone: '',
      adress: '',
      country: '',
      city: ''
    }
  })

  // Actions 
  const [actions, setActions] = useState({

    pushProData: (data)=>{
      setStore(prevStore => ({ ...prevStore, pro: data }));
      
    },

  
  });

  useEffect(() => {
  },[] )

  return(
    <Context.Provider value={{ store, setStore, actions }}>
      {props.children}
    </Context.Provider>
  )

}