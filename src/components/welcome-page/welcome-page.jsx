import "./welcome-page.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanData } from "../../redux/loginSlice/loginSlice";
export const WelcomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.login.user.name);
  return (
    <div className="welcome">
      <p className="welcome__text">Welcome <span className="welcome__text-name">{name}</span></p>
      <button
        className="welcome__btn"
        onClick={() => {
          dispatch(cleanData());
          navigate("/", { replace: true });
        }}
      >
        Log Out!
      </button>
    </div>
  );
};
