/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_XML_AND_SEND_MAIL_SUCCESS,
    CREATE_XML_AND_SEND_MAIL_FAIL,
    GET_CONTACT_LIST_FAIL,
    GET_CONTACT_LIST_SUCCESS
  } from "./types";

  export default (state, action) => {
    switch (action.type) {
      case CREATE_XML_AND_SEND_MAIL_SUCCESS :
        return {
          ...state,
          createdXmlAndSendMail: action.payload,
        };
      case CREATE_XML_AND_SEND_MAIL_FAIL :
        return {
          ...state,
          error: action.payload,
        };
  
      case GET_CONTACT_LIST_SUCCESS :
        return {
          ...state,
          contactlist: action.payload,
        };
      case GET_CONTACT_LIST_FAIL :
        return {
          ...state,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  