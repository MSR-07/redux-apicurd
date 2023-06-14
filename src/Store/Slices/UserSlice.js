import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // users:[
  // { name: 'John Doe', department: 'Administration', phone: '(171) 555-2222' },
  // { name: 'Peter Parker', department: 'Customer Service', phone: '(313) 555-5735' },
  // { name: 'Fran Wilson', department: 'Human Resources', phone: '(503) 555-9931' }
  // ]
  users: [],
  // leads:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // setLeads:(state,{payload})=>{
    //   state.leads =payload
    // },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },

    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    addData: (state, { payload }) => {
      const updataData = [...state.users.slice(0, -1), payload.data.data];
      state.users = updataData;
      // console.log(updataData,"addData");
      // state.users.data.push(payload?.data.data)
    },
    // updateUser: (state, {payload}) => {
    //   const { index, field, value } = payload;
    //   state.users.data[index][field] = value;
    //   console.log(state.users[index][field],"dfg");
    // },
    // updateUser: (state, { payload }) => {
    //   const { index, field, value } = payload;
    //   console.log(field,"field",value);
    //   if (state.users[index]) {
    //     state.users[index][field] = value;
    //   }
    // },

    // updateUser: (state, { payload }) => {
    //   const { index, field, value } = payload;
    //   console.log(field, "field", value);
    //   if (state.users[index]) {
    //     const updatedUser = { ...state.users[index] };
    //     updatedUser[field] = value;
    //     state.users[index] = updatedUser;

    //   }
    // },
    updateUser: (state, { payload }) => {
      const { index, field, value } = payload;
      const updateUsers = [...state.users];
      updateUsers[index] = {
        ...updateUsers[index],
        attributes: {
          ...updateUsers[index]?.attributes,
          [field]: value,
        },
      };
      state.users = updateUsers;
    },

    // updateUser:(state,{payload})=>{
    //   const{data_ , id}=payload
    //   // const { index, field, value } = payload;
    //   var updateUsers= []

    //   for (let index = 0; index < state.users.length; index++) {
    //     const element = state.users[index];
    //     if (element.id === id){
    //       element.attributes=data_
    //     }
    //     updateUsers.push(element)

    //   }

    //   state.users=updateUsers

    // },

    // updateUser: (state, { payload }) => {
    //   const { index, field, value } = payload;
    //   const user = state.users.data[index];

    //   if (user) {
    //     // Create a copy of the user object to avoid mutating the state directly
    //     const updatedUser = { ...user };
    //     updatedUser[field] = value;

    //     // Update the users array with the updated user object
    //     state.users.data[index] = updatedUser;
    //   }
    // },

    deleteUser: (state, { payload }) => {
      const index = payload;
      state.users.splice(index, 1);
    },
    // setIsEdit: (state, action) => {
    //   state.users.isEdit = action.payload;
    // }
  },
});

export const { addUser, updateUser, deleteUser, setUsers, addData } =
  userSlice.actions;
export default userSlice.reducer;
