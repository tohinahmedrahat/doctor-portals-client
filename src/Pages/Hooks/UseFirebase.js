import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile 
} from "firebase/auth";
import initializeFirebase from "../Login/Firebase/FirebaseInit";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState('')
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      });
  };

  const RegisterUser = (email, password,name,history) => {
    setIsLoading(true)
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          
        }).catch((error) => {
          
        });
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.replace('/')
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
      ;
  };
  const loginUser = (email, password,location,history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const User = userCredential.user;
        setUser(User);
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unSubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    RegisterUser,
    loginUser,
    logOut,
    singInWithGoogle,
    isLoading,
    error
  };
};

export default useFirebase;
