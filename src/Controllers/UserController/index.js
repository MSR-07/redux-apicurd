import axios from "axios";
import { store } from "../../Store";
import {
  addData,
  // addUser,
  setUsers,
  updateUser,
} from "../../Store/Slices/UserSlice";

// const  fetchedData = {
//   "data":{
//       "firstName":"firstName",
//       "lastName":"lastName",
//       "grain":"grain",
//       "grainType":"grainType",
//       "email":"email@gmail.com",
//       "phoneNumber":"0129847123",
//       "message":"message"

//   }
// }
class UserController {
  /**
   * @param { SIGN_IN | VERIFY_OTP | SIGN_UP } modal
   */
  // static fetchUser = () => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get("https://fakestoreapi.com/users")
  //       .then(({ data }) => {
  //         console.log(data, "Responce");
  //         store.dispatch(setUsers(data));
  //         resolve(data);
  //         // res.json()
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // };
  static fetchLeads = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://ahtrader-backend-production.up.railway.app/api/leads")
        .then(({ data }) => {
          // console.log(data.data, "dataLeads");
          store.dispatch(setUsers(data?.data));
          resolve(data);
          // res.json()
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  static postLeads = (data) => {
    // console.log(data,"Input");
    return new Promise((resolve, reject) => {
      console.log(data, "from");
      const fetchedData = {
        data: {
          firstName: data.firstName,
          lastName: "lastName",
          grain: "grain",
          grainType: "grainType",
          email: data.email,
          phoneNumber: data.phoneNumber,
          message: "message",
        },
      };
      // console.log(fetchedData, "fetchedDatafetchedDatafetchedData");
      axios
        .post(
          "https://ahtrader-backend-production.up.railway.app/api/leads",
          fetchedData
        )
        .then((postData) => {
          // console.log(postData.data.data, "Leads");
          store.dispatch(addData(postData));
          resolve(postData);
          // res.json()
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  static putLeads = (data_, id) => {
    // console.log(data,"Input");
    return new Promise((resolve, reject) => {
      console.log(data_, "@update data ..!");
      const userData = {
        data: {
          firstName: data_.firstName,
          lastName: "lastName",
          grain: "grain",
          grainType: "grainType",
          email: data_.email,
          phoneNumber: data_.phoneNumber,
          message: "message",
        },
      };
      axios
        .put(
          `https://ahtrader-backend-production.up.railway.app/api/leads/${id}`,
          userData
        )
        .then(({ data }) => {
          // console.log(data, "Leads");
          // store.dispatch(setUsers(data));
          store.dispatch(updateUser(data));
          resolve(data);
          // res.json()
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  static deleteLeads = (id) => {
    // console.log(data,"Input");
    return new Promise((resolve, reject) => {
      axios
        .delete(
          `https://ahtrader-backend-production.up.railway.app/api/leads/${id}`
        )
        .then(({ data }) => {
          // console.log(data, "Leads");
          resolve(data);
          // res.json()
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  // static postUser = (userData) => {
  //   return new Promise((resolve, reject) => {
  //     const data ={
  //       name: userData?.name,
  //       email: userData?.email,
  //       phone: userData?.phone,
  //     };
  //     axios
  //       .post("https://fakestoreapi.com/users", data)
  //       .then(({ data }) => {
  //         console.log(data, "post Responce");

  //           // store.dispatch(setUsers(data));
  //         resolve(data);
  //         // res.json()
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // };
}

export default UserController;
