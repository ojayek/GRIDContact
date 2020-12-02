import React, { useState,useContext,useRef } from "react";
import JCalendar from "reactjs-persian-calendar";
import { useHistory } from "react-router-dom";
import MailContext from "../Context/mailContext";
import  Header from './Header';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";





const DataEntry = () => {

  
const [file, setFile] = useState("");


const el1 = useRef(); // accesing input element
const handleChange = (e) => {
  const file = e.target.files[0]; // accesing file
  setFile(file); // storing file
};

  const [code, setCode] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");
  const [letterNo, setLetterNo] = useState("");
  const [subject, setSubject] = useState("");
  const [reciever, setReceiver] = useState("");
  const [department, setDepartment] = useState("");

  const[isShowOrganizationError,setisShowOrganizationError]=useState(false);
  const[isShowPositionError,setisShowPositionError]=useState(false);
  const[isShowCodeError,setisShowCodeError]=useState(false);
  const[isShowLetterNoError,setisShowLetterNoError]=useState(false);
  const[isShowSubjectError,setisShowSubjectError]=useState(false);
  const[isShowRecieverError,setisShowRecieverError]=useState(false);
  const[isShowDepartmentError,setisShowDepartmentError]=useState(false);
  const history = useHistory();

  
  const mailContext = useContext(MailContext);

  const {
    createXmlAndSendMail,
    createdXmlAndSendMail,
    error
  } = mailContext;


  const createXmlItemAndSend = async (frmData,inputData) => {
    await createXmlAndSendMail(frmData,inputData);
  };
  const validateAndSend = async (e) => {
    e.preventDefault();
    
    let inputData = {
     organization,
     position,
     code,
     letterNo,
     subject,
     reciever,
     department,
    };

    const formData = new FormData();
    formData.append('file',file);
    // formData.append('organization',organization);
    // formData.append('position',position);
    // formData.append('code',code);
    // formData.append('letterno',letterNo);
    // formData.append('subject',subject);
    // formData.append('to',reciever);
    // formData.append('body',subject);
    // formData.append('department',department);


    if (
      organization &&
      position &&
      code &&
      letterNo &&
      subject &&
      reciever &&
      department 
    ) {
      if (
        organization.length > 1 &&
        position.length > 1 &&
        code.length > 1 &&
        letterNo.length > 1 &&
        subject.length > 1 &&
        reciever.length > 1 &&
        department.length > 1
      
      ) {
        createXmlItemAndSend(formData,inputData);
      }
    } else {
      if (organization === null || organization === "") {
        setisShowOrganizationError(true);
      }
      if (position === null || position === "") {
        setisShowPositionError(true);
      }
      if (code === null || code === "") {
        setisShowCodeError(true);
      }
      if (letterNo === null || letterNo === "") {
        setisShowLetterNoError(true);
      }
      if (subject === null || subject === "") {
        setisShowSubjectError(true);
      }
      if (reciever === null || reciever === "") {
        setisShowRecieverError(true);
      }
      if (department === null || department === "") {
        setisShowDepartmentError(true);
      }
    }
  };
 
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case 'Organization':
        setisShowOrganizationError(false);
        setOrganization(e.target.value);
        break;

      case 'Position':
        setisShowPositionError(false);
        setPosition(e.target.value);
        break;
      case 'Code':
        setisShowCodeError(false);
        setCode(e.target.value);
        break;
      case 'LetterNo':
        setisShowLetterNoError(false);
        setLetterNo(e.target.value);
        break;
      case 'Subject':
        setisShowSubjectError(false);
        setSubject(e.target.value);
        break;
      case 'Reciever':
        setisShowRecieverError(false);
        setReceiver(e.target.value);
        break;
      case 'Department':
        setisShowDepartmentError(false);
        setDepartment(e.target.value);
        break;

      default:
        break;
    }
  };

    return (
        <div className="ltr">
  <Header />
      <header id="home-section " className="mt-2 registerBack">
        <div className="light-overlay">
          <div className="home-inner">
            <div className="container">

              <div className="row">
                <div className="col-lg-8">
                  <div className="card bg-info text-center card-form">
                    <div className="card-body">                   
                      <form>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center " style={{width:'20%'}}>نام سازمان</label>
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="سازمان"
                            value={organization}
                            onChange={(e) => {
                              onChanged(e, "Organization", 1000);
                                             }}
                          />
                          {isShowOrganizationError && (
                            <label key="9">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center" style={{width:'20%'}}>پست سازمانی</label>
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="پست سازمانی"
                           value={position}
                            onChange={(e) => {
                             onChanged(e, "Position", 2000);
                            }}
                          />
                          {isShowPositionError && (
                            <label key="2">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center" style={{width:'20%'}}>کد</label>
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="کد"
                           value={code}
                            onChange={(e) => {
                            onChanged(e, "Code", 2000);
                            }}
                          />
                          {isShowCodeError && (
                            <label key="3">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center" style={{width:'20%'}}>شماره نامه</label>
                        <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="شماره نامه"
                           value={letterNo}
                            onChange={(e) => {
                            onChanged(e, "LetterNo", 2000);
                            }}
                          />
                          {isShowLetterNoError && (
                            <label key="3">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center" style={{width:'20%'}}>موضوع </label>
                          <textarea
                           rows="1"
                            type=""
                            className="form-control form-control-lg text-center"
                            placeholder="موضوع"
                           value={subject}
                            onChange={(e) => {
                             onChanged(e, "Subject", 20000);
                            }}
                          />
                          {isShowLetterNoError && (
                            <label key="3">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center" style={{width:'20%'}}>گیرنده </label>
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="گیرنده"
                           value={reciever}
                            onChange={(e) => {
                             onChanged(e, "Reciever", 2000);
                            }}
                          />
                          {isShowRecieverError && (
                            <label key="3">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center " style={{width:'20%'}}>دپارتمان </label>
                          <input
                            type="text"
                            className="form-control form-control-lg text-center"
                            placeholder="دپارتمان"
                           value={department}
                            onChange={(e) => {
                              onChanged(e, "Department", 2000);
                            }}
                          />
                          {isShowDepartmentError && (
                            <label key="3">*</label>
                          )}
                        </div>
                        <div className="form-group d-flex align-items-center" dir="rtl">
                        <label  className="d-inline text-center " style={{width:'20%'}}>بارگزاری تصویر نامه </label>
                        <input type="file" ref={el1} onChange={handleChange} />{" "}
                          {isShowDepartmentError && (
                            <label key="3">*</label>
                          )}
                        </div>
                    
             
                        

                        <input
                          type="button"
                         // className="btn btn-outline-light btn-block"
                         className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block justify-content-md-center bg-success"
                          value="ارسال"
                          onClick={(e) => {
                            validateAndSend(e);
                          }}
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block registerContent">
                  <h1 className="display-8   text-center">شرکت مشانیر</h1>
                  <JCalendar 
                  locale={'fa'} 
                  color={'#000066'}
                  size={50}
                  onClick={console.log}
                   itemRender={(key, item, children) => children}
                  />
                  <div className="d-flex flex-row ">
                    <div className="p-4  align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-6 text-right mx-auto ">
                     برای ارتباط بین سازمانی این فرم را لطفاً پر نمایید 
                    </div>
                  </div>

                  <div className="d-flex flex-row ">
                    <div className="p-4 white align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 white align-self-end mx-auto ">
                   
                    </div>
                  </div>

                  <div className="d-flex flex-row ">
                    <div className="p-4 white align-self-middle">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4  whitetext-center mx-auto ">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-info">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.moshanir.co"> moshanir.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
    )
}

export default DataEntry
