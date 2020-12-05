import React, { useReducer } from 'react';
import MailContext from './mailContext';
import MailReducer from './mailReducer';
import { encode, decode } from 'js-base64';

import axios from 'axios';
import { SERVER_URL } from '../Constant/constant';
import {
  CREATE_XML_AND_SEND_MAIL_SUCCESS,
  CREATE_XML_AND_SEND_MAIL_FAIL,
  GET_CONTACT_LIST_FAIL,
  GET_CONTACT_LIST_SUCCESS,
  CREATE_OR_UPDATE_CONTACT_SUCCESS,
  CREATE_OR_UPDATE_CONTACT_FAIL,
  SET_CREATE_XML_TO_NULL,
} from './types';

const MailState = (props) => {
  const initialState = {
    createdXmlAndSendMail: null,
    error: null,
    createdorupdatedContact: null,
    showResult: false,
    contactlist: [],
  };

  const [state, dispatch] = useReducer(MailReducer, initialState);

  const setCreateXmlToNull = () => {
    dispatch({
      type: SET_CREATE_XML_TO_NULL,
      payload: null,
    });
  };
  // Register User
  const createXmlAndSendMail = async (formData, inputData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        code: encode(inputData.code),
        organization: encode(inputData.organization),
        position: encode(inputData.position),
        letterno: encode(inputData.letterNo),
        subject: encode(inputData.subject),
        to: inputData.reciever,
        department: encode(inputData.department),
        body: encode(inputData.subject),
      },
    };
    console.log(inputData);

    try {
      const res = await axios.post(
        SERVER_URL + '/Email/CreateXml',
        formData,
        config
      );
      //console.log('register data:', res.data);
      dispatch({
        type: CREATE_XML_AND_SEND_MAIL_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log('error', err);
      dispatch({
        type: CREATE_XML_AND_SEND_MAIL_FAIL,
        payload: err,
      });
    }
  };

  // Register User
  const createOrUpdateContact = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        SERVER_URL + '/Contact/CreateContact',
        formData,
        config
      );
      //console.log('register data:', res.data);
      dispatch({
        type: CREATE_OR_UPDATE_CONTACT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CREATE_OR_UPDATE_CONTACT_FAIL,
        payload: err.response.data.msgText,
      });
    }
  };
  const GetContactList = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + '/Contact/GetContactList',
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
        createdXmlAndSendMail: state.createdXmlAndSendMail,
        error: state.error,
        contactlist: state.contactlist,
        createdorupdatedContact: state.createdorupdatedContact,
        showModal: state.showModal,
        createOrUpdateContact,
        createXmlAndSendMail,
        GetContactList,
        setCreateXmlToNull,
      }}
    >
      {props.children}
    </MailContext.Provider>
  );
};

export default MailState;
