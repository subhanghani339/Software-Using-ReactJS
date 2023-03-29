import { getAuth } from "firebase/auth";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "@firebase/database";
import app from "./firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);

const InstituteFormData = (obj, nodename) => {
  let {
    name,
    shortName,
    campuses,
    location,
    address,
    contact,
    ownerContact,
    ownerEmail,
    type,
  } = obj;
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

export { InstituteFormData, getData };
