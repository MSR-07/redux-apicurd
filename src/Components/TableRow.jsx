import React, { /*useState*/  } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { MdPlaylistAdd } from "react-icons/md";
import UserController from "../Controllers/UserController";

const TableRow = ({
  isEdit,
  setIsEdit,
  index,
  user,
  handleInputChange,
  deleteUser,
  handleEdit,
}) => {
  // const [isEdit, setIsEdit] =useState(null)
  // console.log(user?.attributes, "gu")
  const fetchedData = user?.attributes;
  const addEdit = () => {
    // console.log(user, "okay");
    console.log("@btn data", {
      fetchedData,
      user,
    });

    if (!user?.id) {
      console.log("@btn create");

      console.log("postLeads");
      UserController.postLeads({
        firstName: fetchedData?.firstName,
        email: fetchedData?.email,
        phoneNumber: fetchedData?.phoneNumber,
      });
    } else {
      console.log("@btn update");
      console.log("putLead");
      UserController.putLeads(
        {
          firstName: fetchedData?.firstName,
          email: fetchedData?.email,
          phoneNumber: fetchedData?.phoneNumber,
        },
        user?.id
      );
    }
  };
  // const [isToggle,setIsToggle] =useState()
  // console.log(fetchedData);
  // return false
  return (
    <tr className="border border-slate-400  text-center ">
      <td className="border border-slate-400 py-2">
        {isEdit === index ? (
          <input
            type="text"
            className="h-8 leading-8 rounded shadow-none border border-slate-400 px-1"
            defaultValue={fetchedData?.firstName}
            onChange={(e) => handleInputChange(e, index, "firstName")}
          />
        ) : (
          <>{fetchedData?.firstName}</>
        )}
      </td>
      <td className="border border-slate-400 py-2">
        {isEdit === index ? (
          <input
            type="text"
            className="h-8 leading-8 rounded shadow-none border border-slate-400 px-1"
            defaultValue={fetchedData?.email}
            onChange={(e) => handleInputChange(e, index, "email")}
          />
        ) : (
          <>{fetchedData?.email}</>
        )}
      </td>
      <td className="border border-slate-400 py-2">
        {isEdit === index ? (
          <input
            type="tel"
            className="h-8 leading-8 rounded shadow-none border border-slate-400 px-1"
            defaultValue={fetchedData?.phoneNumber}
            onChange={(e) => handleInputChange(e, index, "phoneNumber")}
          />
        ) : (
          <>{fetchedData?.phoneNumber}</>
        )}
      </td>
      <td>
        <div className="flex justify-center items-center gap-2">
          {isEdit === index ? (
            <div
              className="max-h-max my-auto"
              title="Add"
              data-toggle="tooltip"
              onClick={() => {
                setIsEdit(null);
                //           UserController.postLeads({
                //   firstName: user.firstName,
                //   email: user.email,
                //   phoneNumber: user.phoneNumber,
                // })
                addEdit();
              }}
            >
              <MdPlaylistAdd color="#22c55e" size="24" />
            </div>
          ) : (
            <div
              onClick={() => {
                setIsEdit(index);
                // isToggle(user)
              }}
              className="mt-1"
              title="Edit"
              data-toggle="tooltip"
            >
              <FaPen color="#ffc107" size="16" />
            </div>
          )}

          <div
            className="mt-1"
            title="Delete"
            data-toggle="tooltip"
            onClick={() => {
              deleteUser(index);
              UserController.deleteLeads(user?.id);
            }}
          >
            <FaTrash color="#ef4444" size="16 " />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
