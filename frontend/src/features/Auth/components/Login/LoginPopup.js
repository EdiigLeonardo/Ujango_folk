import React, { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import SocialLogin from "./SocialLogin";
import { useDispatch, useSelector } from "react-redux";
//import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../reducers/authSlice";
import { clearMessage } from "../../reducers/messageSlice";
import styles from "./LoginPopup.module.scss";
import { FormInput } from "../../../../components/ui/Form";

function LoginPopup() {
  const initialValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleLogin = () => {
    const [username, password] = [form.username, form.password];
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/");
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  //const [form, setForm] = useState(initialValues);
  //const [user, loading, error] = useAuthState(auth);
  //const [user, loading] = useAuthState(auth);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };

  return (
    <div className={styles.popup}>
      <h1>Ujango</h1>

      <form className={styles.form}>
        <FormInput
          label="Username"
          name="username"
          handleFormChange={(e) => handleFormChange(e)}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          handleFormChange={(e) => handleFormChange(e)}
        />
        <Button
          title="Login"
          handleClick={handleLogin}
          styles={{ backgroundColor: "var(--baseMainColor)" }}
        />
      </form>

      <div className={styles.login_separator}>OR</div>

      <SocialLogin />

      <p>
        <Link to="/resetpassword">Forgot Password</Link>
      </p>

      <p>
        Do not have an account? <Link to="/signup">Register</Link> now.
      </p>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPopup;
