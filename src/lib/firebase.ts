import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration for ZEITNOIR
const firebaseConfig = {
  // Note: These would be environment variables in production
  apiKey: "zeitnoir-demo-key",
  authDomain: "zeitnoir-swiss.firebaseapp.com",
  projectId: "zeitnoir-swiss",
  storageBucket: "zeitnoir-swiss.appspot.com",
  messagingSenderId: "123456789",
  appId: "zeitnoir-app-id"
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