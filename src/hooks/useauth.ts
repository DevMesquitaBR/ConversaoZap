import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDUVFi5I2MChquuC6HPpUWRH5dXl6IoiaE",
  authDomain: "conversaozap.firebaseapp.com",
  projectId: "conversaozap",
  storageBucket: "conversaozap.appspot.com",
  messagingSenderId: "760029509620",
  appId: "1:760029509620:web:11654dd39b1b11bce0aba1"
};

if (typeof window === 'undefined') {
  // Evita problemas de execução no SSR
  throw new Error('useAuth só deve ser usado no client.');
}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
console.log("Renderizando App, estado atual:", currentState);
console.log("Usuário logado:", user);
