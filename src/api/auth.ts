import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { SignUpData, LoginData } from "../types/auth";

export const signUpUser = async ({
  name,
  email,
  password,
  birthDate,
}: SignUpData) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    name,
    birthDate,
    createdAt: new Date(),
  });

  return user;
};

export const loginUser = ({ email, password }: LoginData) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  return auth.signOut();
};
