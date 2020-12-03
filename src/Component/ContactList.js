import React,{useMemo,useState,useContext,useEffect} from "react";
import CustomTable from "./Common/CustomTable";
import {MainColumns,TitleColumns} from './Common/Columns';
import MailContext from "../Context/mailContext";


const ContactList = () => {

  const mailContext = useContext(MailContext);
  const [selectedRow, setSelectedRow] = useState("");
  const [DirectPhoneNo, setDirectPhoneNo] = useState("");
  const [Tel, setTel] = useState("");

  const {
    GetContactList,
    contactlist,
    error
  } = mailContext;
  useEffect(() => {
   GetContactList();
  }, [])


  const setSelectedRowData = (row) => {
    setSelectedRow(row.original); 
    if(row.DirectPhoneNo){setDirectPhoneNo(row.DirectPhoneNo)}
    if(row.Tel){setTel(row.Tel)}
  };
  const kartableActions = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations">
            
            <button
              type="button"
              className="editBtn"
              data-toggle="modal" data-target=".bd-example-modal-lg"
              onClick={(e) => {
                setSelectedRowData(row);
              }}
            >
              ویرایش 
            </button>
          </div>
        ),
      },
    ],
  };
  const KartableColumns = useMemo(
    () => [kartableActions, TitleColumns, MainColumns],
    []
  );
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "Tel":
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setTel(e.target.value);
        break;
      case "DirectPhoneNo":
        // setShowError(false);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setDirectPhoneNo(e.target.value);
        break;
    }}
   
  return (
    <div className="text-center">
      <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
  <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ویرایش</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">

      <form>
          <div className="form-group">
            <label className="col-form-label ">شماره پرسنلی:<span className="h5 font-weight-bold ">{selectedRow.Prsnum}</span></label>
            <label  className="d-block">نام:<span  className="h5 font-weight-bold ">{selectedRow.Nam}</span> &nbsp; &nbsp;نام خانوادگی: <span  className="h5 font-weight-bold">{selectedRow.NamKhanevadegi}</span></label>
           
          
            <label  className="d-block">معاونت:<span  className="h5 font-weight-bold">{selectedRow.Moavenat}</span></label>
            <label  className="col-form-label">عنوان:<span  className="h5 font-weight-bold">{selectedRow.Sharh_Onvan}</span></label>
           
            <label  className="d-block ">شماره ساختمان:<span  className="h5 font-weight-bold ">{selectedRow.NumBuild}</span></label>
           
          </div>
          <div className="form-group">
            <label  className="col-form-label">شماره تلفن مستقیم</label>
            <input type="text" value={DirectPhoneNo?DirectPhoneNo:""}  
             onChange={(e) => { onChanged(e, "DirectPhoneNo", 300); }} 
                    className="text-center form-control" id="recipient-name" />
          </div>
          <div className="form-group">
            <label for="message-text" className="col-form-label">تلفن داخلی</label>
            <input type="text" value={Tel?Tel:""}  onChange={(e) => { onChanged(e, "Tel", 300); }} className="text-center form-control"/>
          </div>
        </form>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">بستن</button>
        <button type="button" className="btn btn-primary">ذخیره تغییرات</button>
      </div>
    </div>
  </div>
</div>

{/* <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">ویرایش</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
    
      <span className="d-inline-block mt-5">
      <CustomTable
              columns={KartableColumns}
              data={contactlist?contactlist:[]}
            />
      </span>
    </div>
  );
};

export default ContactList;
