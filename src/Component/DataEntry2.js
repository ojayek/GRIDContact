import React from "react";
import { Form, Button} from "react-bootstrap";


const DataEntry2 = () => {
  return (
      <Form>
    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block justify-content-md-center" controlId="BasicCode">
      <Form.Label>کد</Form.Label>
      <Form.Control type="text" placeholder="Enter code" />
     </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="Position">
      <Form.Label>Enter Position</Form.Label>
      <Form.Control type="text" placeholder="Enter Position" />
     </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="Department">
      <Form.Label>Enter Department</Form.Label>
      <Form.Control type="text" placeholder="Enter Department" />
    </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="LetterNo">
      <Form.Label>Enter LetterNo</Form.Label>
      <Form.Control type="text" placeholder="LetterNo" />
    </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="Subject">
      <Form.Label>Enter Subject</Form.Label>
      <Form.Control type="text" placeholder="Enter Subject" />
    </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="Organization">
      <Form.Label>Enter Organization</Form.Label>
      <Form.Control type="text" placeholder="Enter Organization" />
    </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="To">
      <Form.Label>Enter To</Form.Label>
      <Form.Control type="text" placeholder="Enter To" />
    </Form.Group>

    <Form.Group className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block" controlId="formBasicBody">
      <Form.Label>Enter Body</Form.Label>
      <Form.Control as="textarea" rows={3}  type="text" placeholder="Body" />
    </Form.Group>

    <Button className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block justify-content-md-center" variant="success" type="submit">
      ارسال نامه
    </Button>

  </Form>

  );

};

export default DataEntry2;
