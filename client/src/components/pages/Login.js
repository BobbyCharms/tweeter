import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import loginImg from '../../assets/images/login.svg';
import Auth from '../../utils/auth';

function Login() {
  return (
    <div className="d-flex justify-content-around">
      <div className="d-flex justify-content-start">
        <img src={loginImg} alt="login image" />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'end', marginTop: '40px' }}
      >
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

          <Button
            variant="warning  btn-lg"
            type="submit"
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
          <a
            className="btn btn-warning btn-lg"
            href="/Singup"
            role="button"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Sign Up
          </a>
        </Form>
      </div>
    </div>
  );
}

export default Login;
