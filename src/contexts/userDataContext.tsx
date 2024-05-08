"use client"
import { createContext, useEffect, useState, ReactNode } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { app } from "@/services/firebase/config"
import { UserData, UserDataContextType } from "@/interfaces"

const db = getFirestore(app)
const auth = getAuth(app)

export const UserDataContext = createContext<UserDataContextType>({
  user: null,
  userData: {},
  imag_user_undefined: 'https://cdn-icons-png.flaticon.com/256/149/149071.png'
})

interface UserDataProviderProps {
  children: ReactNode;
}

export function UserDataProvider({ children }: UserDataProviderProps) {
  const [user, setUser] = useState<UserData | null>(null)
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userFirebase) => {
      if (userFirebase) {
        setUser({ uid: userFirebase.uid, email: userFirebase.email });

        const userID = userFirebase.uid;
        const docRef = doc(db, `users/${userID}`);

        try {
          const dataDetail = await getDoc(docRef);
          if (dataDetail.exists()) {
            setUserData(dataDetail.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [])

  return (
    <UserDataContext.Provider
      value={{
        user,
        userData,
        imag_user_undefined: 'https://cdn-icons-png.flaticon.com/256/149/149071.png'
      }}
    >
      {children}
    </UserDataContext.Provider>
  )
}