
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import loginImg from "../../assets/images/login.svg"

function About() {
  return(
    <div style={{display:'flex',justifyContent:'end',marginTop:'40px'}}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="col-12" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

        </Form>
      </div>
  )
}