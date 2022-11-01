import "./form.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUserName,
  setUserEmail,
  setUserPassword,
  cleanData,
} from "../../redux/loginSlice/loginSlice";
export const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const checkData = () => {
    const nameValue = name.trim();
    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (!nameValue.length) {
      return;
    } else {
      dispatch(setUserName(nameValue));
    }
    if (!emailValue.length) {
      return;
    } else if (!checkEmail(emailValue)) {
      return;
    } else {
      dispatch(setUserEmail(emailValue));
    }

    if (!passwordValue.length) {
      return;
    } else {
      dispatch(setUserPassword(passwordValue));
    }
    navigate("/welcome", { replace: true });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    checkData();
  };

  return (
    <div className="app__form">
      <h3 className="app__title">Welcome !</h3>
      <p className="app__subtitle">Register your account</p>
      <form className="form" onSubmit={onSubmitForm}>
        <label className="form__label" htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            className="form__name form__input"
            placeholder="Ex: Bob"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form__label" htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            className="form__email form__input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form__label" htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            className="form__password form__input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="form__btn">Login</button>
      </form>
    </div>
  );
};
