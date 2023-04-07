import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, onValue, set, ref, push } from "@firebase/database";
import app from "./firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);

const createUser = (obj, nodename) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(
      (userCredential) => {
        const user = userCredential.user;
        const reference = ref(database, `${nodename}/${user.uid}`);
        set(reference, obj)
          .then(() => {
            resolve("User created successfully and data send database");
          })
          .catch((err) => {
            reject("User created successfully but data not send database");
            console.log("database error", err);
          });
      }
    );
  }).catch((err) => {
    console.log(err);
  });
};

const postData = (obj, nodename) => {
  return new Promise((resolve, reject) => {
    const reference = ref(database, nodename);
    push(reference, obj)
      .then(() => {
        resolve("Institute added successfully and data sent to database");
      })
      .catch((err) => {
        reject("Institute created successfully but data not sent to database");
        console.log("database error", err);
      });
  }).catch((err) => {
    console.log(err);
  });
};

const getData = (nodeName) => {
  let reference = ref(database, nodeName);

  return new Promise((resolve, reject) => {
    onValue(reference, (e) => {
      let status = e.exists();
      if (status) {
        let data = e.val();
        resolve(Object.values(data));
      } else {
        reject("Data Not Found");
      }
    });
  });
};

const controlData = (obj, nodename,subnode) => {
  return new Promise((resolve, reject) => {
    const reference = ref(database, `${nodename}/${subnode}/`);
    set(reference, obj)
      .then(() => {
        resolve("Data sent to database");
      })
      .catch((err) => {
        reject("Data does not sent to database");
        console.log("database error", err);
      });
  }).catch((err) => {
    console.log(err);
  });
};

export { createUser, getData, postData, controlData };

// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import {
//   getDatabase,
//   onValue,
//   push,
//   ref,
//   set,
//   remove
// } from "@firebase/database";
// import app from "./firebaseconfig";

// const auth = getAuth(app);
// const database = getDatabase(app);

// const postData = (obj, nodename) => {
//   return new Promise((resolve, reject) => {
//     const reference = ref(database, nodename);
//     push(reference, obj)
//       .then(() => {
//         resolve("Institute added successfully and data sent to database");
//       })
//       .catch((err) => {
//         reject("Institute created successfully but data not sent to database");
//         console.log("database error", err);
//       });
//   }).catch((err) => {
//     console.log(err);
//   });
// };

// const getData = (nodeName) => {
//   let reference = ref(database, nodeName);
//   return new Promise((resolve, reject) => {
//     onValue(reference, (e) => {
//       let status = e.exists();
//       if (status) {
//         let data = e.val();
//         resolve(Object.values(data));
//       } else {
//         reject("Data Not Found");
//       }
//     });
//   });
// };

// const loginUser = (obj) =>{
//     let{email, password} = obj
//     return new Promise((resolve, reject)=>{
//         signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
//             const user = userCredential.user
//             const reference = ref(database, `users/${user.uid}`);
//             onValue(reference, (e)=>{
//                 let status = e.exists();
//                 console.log(status);
//                 if(status){
//                     resolve(e.val())
//                 }
//                 else{
//                     reject("Data Not Found")
//                 }
//             })
//         }).catch((err) => {
//             reject(err)
//         })
//     })
// };

// const SignupUser = (obj,nodename)=>{
//   let {email, password} = obj
//   return new Promise((resolve, reject)=>{
//       createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential)=>{
//           const user = userCredential.user
//           const reference = ref(database, `${nodename}/${user.uid}`)
//           set(reference, obj).then(()=>{
//               resolve('user created successfully and data send database')
//           }).catch((err)=>{
//               reject('user created successfully but data not send database')
//               console.log('database error', err)
//           })
//       })
//   }).catch((err)=>{
//       console.log(err)
//   })

// }

// const checkUser = () => {
//   return new Promise((resolve, reject) => {
//     onAuthStateChanged(auth, (user) => {

//       if (user) {
//         resolve(user)
//       } else {
//         reject("no user found");
//       }
//     })
//   })
// }

// const signoutUser = ()=>{
//   return new Promise((resolve, reject)=>{
//       signOut(auth).then(()=>{
//           resolve("You are Successfully Logout");
//       }).catch((err)=>{
//           reject("Logout Error", err);
//       })
//   })
// }

// const deleteData = (nodeName, id)=>{
//   return new Promise((resolve, reject) => {
//       let reference = ref(database, `${nodeName}/${id}`);
//       remove(reference)
//         .then(() => {
//           resolve("successfully deleted");
//         })
//         .catch(() => {
//           reject("something is wrong");
//         });
//     });
// }

// export { postData, getData, loginUser, SignupUser, checkUser, signoutUser, deleteData };
