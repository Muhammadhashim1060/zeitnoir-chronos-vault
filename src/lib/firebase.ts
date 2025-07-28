import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration for ZEITNOIR
const firebaseConfig = {
  apiKey: "AIzaSyBQgLH0U5tyoZ9UGbaxRih4egyJupXGPPs",
  authDomain: "lx-plug.firebaseapp.com",
  projectId: "lx-plug",
  storageBucket: "lx-plug.firebasestorage.app",
  messagingSenderId: "429122176001",
  appId: "1:429122176001:web:d870be87f6ab9c3794ac00",
  measurementId: "G-F69V74CHGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;

// Firestore Collections Structure:
// 
// /timepieces - Watch inventory and details
// /orders - Customer orders and transactions  
// /vault-members - Membership tiers and benefits
// /consultations - Private consultation requests
// /admin-logs - Administrative actions and audit trail