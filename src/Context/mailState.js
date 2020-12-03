import React, { useReducer } from "react";
import MailContext from "./mailContext";
import MailReducer from "./mailReducer";

import axios from "axios";
import { SERVER_URL } from "../Constant/constant";
import {
 CREATE_XML_AND_SEND_MAIL_SUCCESS,
 CREATE_XML_AND_SEND_MAIL_FAIL,
 GET_CONTACT_LIST_FAIL,
 GET_CONTACT_LIST_SUCCESS
} from "./types";

const MailState = (props) => {
  const initialState = {    
    createdXmlAndSendMail: null,
    error: null,
    contactlist:[],
  };

  const [state, dispatch] = useReducer(MailReducer, initialState);

  

  // Register User
  const createXmlAndSendMail = async (formData,inputData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        code:inputData.code,
        organization:inputData.organization,
        position:inputData.position,
        letterno:inputData.letterNo,
        subject:inputData.subject,
        to:inputData.reciever,
        department:inputData.department,
        body:inputData.subject      
      },
    };
   

    try {
      const res = await axios.post(
        SERVER_URL + "/Email/CreateXml",  
        formData,
         config
      );
      //console.log('register data:', res.data);
      dispatch({
        type: CREATE_XML_AND_SEND_MAIL_SUCCESS,
        payload: res.data,
      });
      
    } catch (err) {
      dispatch({
        type: CREATE_XML_AND_SEND_MAIL_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  const GetContactList = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",       
      },
    };
   

    try {
      const res = await axios.get(
        SERVER_URL + "/Contact/GetContactList",         
         config
      );
      //console.log('register data:', res.data);
      dispatch({
        type: GET_CONTACT_LIST_SUCCESS,
        payload: res.data,
      });
      
    } catch (err) {
      dispatch({
        type: GET_CONTACT_LIST_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  
  return (
    <MailContext.Provider
      value={{
        createdXmlAndSendMail:state.createdXmlAndSendMail,
        error: state.error,    
        contactlist:state.contactlist,   
        createXmlAndSendMail,
        GetContactList
     
      }}
    >
      {props.children}
    </MailContext.Provider>
  );
};

export default MailState;
