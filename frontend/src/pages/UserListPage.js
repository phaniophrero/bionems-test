import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import { listUsers, deleteUser } from "../actions/userActions";

const UserListPage = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler = (id) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")
    ) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="container">
      <div className="header--row">
        <div className="header--row__title-wrapper">
          <h1 className="header--row__title">Users</h1>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <table className="dashboard--table">
          <thead className="dashboard--table__head">
            <tr className="dashboard--table-users__row">
              <th className="dashboard--table__column-title">ID</th>
              <th className="dashboard--table__column-title">Name</th>
              <th className="dashboard--table__column-title">Email</th>
              <th className="dashboard--table__column-title">Admin</th>
              <th className="dashboard--table__column-title"></th>
            </tr>
          </thead>
          <tbody className="dashboard--table__body">
            {users.map((user) => (
              <tr className="dashboard--table-users__row" key={user._id}>
                <td className="dashboard--table__data">{user._id}</td>
                <td className="dashboard--table__data">{user.name}</td>
                <td className="dashboard--table__data">{user.email}</td>
                <td className="dashboard--table__data">
                  {user.isAdmin ? <span>yes</span> : <span>no</span>}
                </td>
                <td className="dashboard--table__data">
                  <Link
                    className="dashboard--table__btn dashboard--table__btn-edit"
                    to={`/bionems-admin/user/${user._id}/edit`}
                  >
                    Edit
                  </Link>
                  <button
                    className="dashboard--table__btn dashboard--table__btn-delete"
                    onClick={() => deleteHandler(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserListPage;
