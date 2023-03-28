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

export { InstituteFormData };
