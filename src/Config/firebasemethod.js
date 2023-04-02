import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, onValue, set, ref, push } from "@firebase/database";
import app from "./firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);

const createUser = (obj, nodename) => {
  
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then((userCredential) => {
      const user = userCredential.user
      const reference = ref(database, `${nodename}/${user.uid}`)
      set(reference, obj)
        .then(() => {
          resolve("User created successfully and data send database");
        })
        .catch((err) => {
          reject("User created successfully but data not send database");
          console.log("database error", err);
        });
    });
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

export { createUser, getData, postData };
