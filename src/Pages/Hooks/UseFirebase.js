import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken 
} from "firebase/auth";
import initializeFirebase from "../Login/Firebase/FirebaseInit";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState('');
  const [admin,setAdmin] = useState(false);
  const [token,setToken] = useState('');
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const singInWithGoogle = (location,navigate) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email,user.displayName,'PUT')
        const destination = location?.state?.from || '/';
        navigate(destination);
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      });
  };

  const RegisterUser = (email, password,name,navigate) => {
    setIsLoading(true)
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        saveUser(email,name,'POST');
        updateProfile(auth.currentUser, {
          displayName: name,
          
        }).then(() => {
          
        }).catch((error) => {
          
        });
        // Signed in
        
        navigate('/')
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
      ;
  };
  const loginUser = (email, password,location,navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const User = userCredential.user;
        setUser(User);
        const destination = location?.state?.from || '/';
        navigate(destination);
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
        getIdToken(user)
        .then(idToken => {
          setToken(idToken)
        })
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false)
    });
    return () => unSubscribe;
  }, [auth]);

  // get admin
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])
  const saveUser = (email,displayName,method) => {
    const user = {email,displayName}
    fetch('http://localhost:5000/user', {
      method:method,
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

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
    admin,
    loginUser,
    logOut,
    singInWithGoogle,
    isLoading,
    error,
    token
  };
};

export default useFirebase;
