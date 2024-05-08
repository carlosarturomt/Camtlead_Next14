import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIHLORPusI66TM5AK5X_yLsJA2JlLmLfU",
  authDomain: "camtlead-nextjs.firebaseapp.com",
  projectId: "camtlead-nextjs",
  storageBucket: "camtlead-nextjs.appspot.com",
  messagingSenderId: "738666534927",
  appId: "1:738666534927:web:b2478ea370fa1a7b4beb7a",
  measurementId: "G-E43EDPQ6FS"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { app, analytics }