/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_XML_AND_SEND_MAIL_SUCCESS,
    CREATE_XML_AND_SEND_MAIL_FAIL,
    GET_CONTACT_LIST_FAIL,
    GET_CONTACT_LIST_SUCCESS,
    CREATE_OR_UPDATE_CONTACT_FAIL,
    CREATE_OR_UPDATE_CONTACT_SUCCESS,
    SET_CREATE_XML_TO_NULL
  } from "./types";

  export default (state, action) => {
    switch (action.type) {
      case SET_CREATE_XML_TO_NULL :
        return {
          ...state,
          showModal: false,
        };
      case CREATE_XML_AND_SEND_MAIL_SUCCESS :
        return {
          ...state,
          createdXmlAndSendMail: action.payload,
          showModal:true
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
      case CREATE_OR_UPDATE_CONTACT_SUCCESS :
        return {
          ...state,
          createdorupdatedContact: action.payload,
        };
      case CREATE_OR_UPDATE_CONTACT_FAIL :
        return {
          ...state,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  