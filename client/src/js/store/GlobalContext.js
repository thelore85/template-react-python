import React, {createContext, useEffect, useState} from "react";

export const  Context = createContext(null)
export const GlobalContext = (props) => {

  // Store
  const [ store, setStore ] = useState({
    theme : true,
    users : [],
  })

  // Actions 
  const [actions, setActions] = useState({


    getUsers: async () => {
      const url = "https://playground.4geeks.com/apis/fake/contact/agenda/thelore85";
      const options = { method: "GET" };

      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setStore(prevStore => ({ ...prevStore, users: data }));
      } else {
        console.log('ERROR flux action: getUsers: ', response.status, response.statusText);
      }
    },



    deleteUser : async (id) => {
      const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
      const options = { 
        method: "DELETE"
      };

      const response = await fetch(url, options);
      if (response.ok) {
        console.log("user delated: ", store)
        actions.getUsers()
      } else {
        console.log('ERROR flux action: getPhotos: ', response.status, response.statusText);
      }
    },

    addUser : async (request) => {
      const { name, email, agenda, address, phone } = request;

      console.log('api debug', request )
      const contactInfo = {
          full_name: name,
          email: email,
          agenda_slug: agenda,
          address: address,
          phone: phone
        }

      const url = "https://playground.4geeks.com/apis/fake/contact/";
      const options = { 
        method: "POST",
        body: JSON.stringify(contactInfo),
        headers: { "Content-Type": "application/json" }
      };

      const response = await fetch(url, options);
      if (response.ok) {
        console.log("user added: ", store)
        actions.getUsers()
      } else {
        console.log('ERROR flux action: getPhotos: ', response.status, response.statusText);
      }
    },

  });

  // UseEffect
  useEffect(() => {


  },[] )


  
  return(
    <Context.Provider value={{ store, setStore, actions }}>
      {props.children}
    </Context.Provider>
  )

}