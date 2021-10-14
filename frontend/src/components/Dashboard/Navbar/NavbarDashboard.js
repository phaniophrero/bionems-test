import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
import { logout } from "../../../actions/userActions";
import navbarDashboardData from "../../../data/navbarDashboardData";
import logoutIcon from "../../../images/power.svg";

// const menuItems = navbarDashboardData;

const NavbarDashboard = () => {
  const dispatch = useDispatch();

  let history = useHistory();

  // let pathname = history.location.pathname;

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  // const [navbarDashboardItems, setNavbarDashboardItems] = useState([]);

  // useEffect(() => {
  //   async function fetchNavbarDashboardItems() {
  //     const { data } = await axios.get("/api/dashboard/");
  //     setNavbarDashboardItems(data);
  //   }
  //   fetchNavbarDashboardItems();
  // }, []);

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const logoutHandler = () => {
    // console.log("Logout");
    dispatch(logout());
  };

  return (
    // !pathname === "/login" ||
    // (!pathname === "/register" && (
    <nav className="dashboard--navbar">
      <ul className="dashboard--navbar__items">
        {navbarDashboardData.map((item) => (
          <li key={item.id} className="dashboard--navbar__item">
            <Link to={item.path} className="dashboard--navbar__link">
              <span className="dashboard--navbar__icon active">
                <img src={item.icon} alt={item.name} />
              </span>
              {item.name}
            </Link>
          </li>
        ))}
        <Link className="navbar--dropdown__item" to="/bionems-admin/profile">
          Profile
        </Link>

        {/* {userInfo && (
          <div className="navbar--dropdown__wrapper">
            <button
              // onClick={() => setDropdown(!dropdown)}
              className="navbar--dropdown"
            >
              {userInfo.name}
            </button>
            <ul className="navbar--dropdown__list">
              <li>
                <Link className="navbar--dropdown__item" to="/profile">
                  Profile
                </Link>
              </li>
              {/* <li>
                <button
                  className="navbar--dropdown__item"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </li> */}
        {/* </ul>
          </div> */}
        {/* // )} */}
      </ul>
      <div className="dashboard--logout__button-wrapper">
        <button className="dashboard--logout__button" onClick={logoutHandler}>
          <img src={logoutIcon} alt={logoutIcon} />
        </button>
      </div>
    </nav>
    // ))
  );
};

export default NavbarDashboard;
