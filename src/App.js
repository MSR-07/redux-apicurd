import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableBody from "./Components/TableBody";
import { MdAdd } from "react-icons/md";
import {
  addUser,
  updateUser,
  deleteUser,
  // setIsEdit,
} from "./Store/Slices/UserSlice";
import UserController from "./Controllers/UserController";
import axios from "axios";

axios.defaults.headers.common.Authorization =
  "bearer 8b942c2ee104bdddaa725c3db138f24063437034e2d0a4fd6fc9abacca6f4e32fc82778ae6ab7f2050e65ec6d3304cc96bd6113afeae5a53061d063550b282448d96c44dfb5c6a1d2810404d23676ea3ad841386fb42d20be0a293224333d89f4aef4e270dc3a23aeeb41053293625e61d315763fb62e33778ad82adb515f982";
// axios.defaults.baseURL = "https://ahtrader-backend-production.up.railway.app";

const UserTable = () => {
  const [isEdit, setIsEdit] = useState(null);
  const user = useSelector((state) => state.user.users);
  // console.log(user, "mine");
  // const isEdit = useSelector((state) => state.user.isEdit);
  const dispatch = useDispatch();

  const addNewUser = () => {
    setIsEdit(user.length);
    dispatch(addUser({attributes:{ firstName: null, email: null, phoneNumber: null }}));
  };

  const handleInputChange = (e, index, field) => {
    // console.log(e.target.value,"ooo");
    dispatch(updateUser({ index, field, value: e.target.value }));
  };

  const handleDeleteUser = (index) => {
    dispatch(deleteUser(index));
  };

  // const fetchData = ()=>{
  //   axios.get('https://fakestoreapi.com/users?limit=5')
  //           .then(({data})=>{
  //             console.log(data,"Responce");
  //             // res.json()
  //           })
  //           .then(json=>console.log(json))
  // }
  useEffect(() => {
    // UserController.fetchUser()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    UserController.fetchLeads()
      .then((res) => {
        console.log(res, "leadx");
      })
      .catch((error) => {
        console.log(error, "leadx");
      });
  }, []);

  return (
    <div className="container">
    
      <div className="w-[870px] my-8 mx-auto bg-white p-5 shadow flex flex-col gap-4">
        <div className="flex justify-between items-center text-lg">
          <div className="capitalize flex justify-between items-center gap-1">
            <h1>candidate</h1>
            <h1 className="font-bold">details</h1>
          </div>
          <button
            onClick={addNewUser}
            className="capitalize text-base flex items-center gap-1 bg-teal-600 py-1 px-2 border border-teal-600 text-teal-300 rounded-full hover:bg-teal-300 hover:text-teal-600"
          >
            <MdAdd />
            add new
          </button>
        </div>
        <TableBody
          user={user}
          handleInputChange={handleInputChange}
          deleteUser={handleDeleteUser}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
    </div>
  );
};

export default UserTable;
