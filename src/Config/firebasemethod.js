import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, onValue, set, ref, push, update, remove } from "@firebase/database";
import app from "./firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);

const createUser = (obj, nodename) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(
      (userCredential) => {
        const user = userCredential.user;
        const reference = ref(database, `${nodename}/${user.uid}`);
        obj.id = user.uid
        set(reference, obj)
          .then(() => {
            resolve("User created successfully and data send to database");
          })
          .catch((err) => {
            reject("User created successfully but data not send to database");
            console.log("database error", err);
          });
      }
    );
  }).catch((err) => {
    console.log(err);
  });
};

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

const deleteData = (nodeName, id) => {
  return new Promise((resolve, reject) => {
    const databaseRef = ref(database, `${nodeName}/${id}`);
    // const dataRef = child(databaseRef, id);
    remove(databaseRef)
      .then(() => {
        resolve(`Data with ID '${id}' deleted successfully from '${nodeName}'`);
      })
      .catch((error) => {
        reject(`Error deleting data: ${error}`);
      });
  });
};

const postData = (obj, nodename, id) => {
  let postrefList;
  return new Promise((resolve, reject) => {
    if(id){
      postrefList = ref(database, `${nodename}/${id}`);
    }else{
      let addRef = ref(database, nodename)
      obj.id = push(addRef).key;
      postrefList = ref(database, `${nodename}/${obj.id}`)
    }
    set(postrefList, obj)
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

const controlData = (obj, nodename, subnode) => {
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

const editData = (obj, nodeName, id)=>{
  return new Promise((resolve,reject)=>{
      let reference = ref(database, `${nodeName}/${id}`);
      update(reference, obj).then((res)=>{
          resolve(res);
      }).catch(()=> {
          reject("Data not Updated");
      })
  });
};

export { createUser, getData, postData, controlData, editData, deleteData};