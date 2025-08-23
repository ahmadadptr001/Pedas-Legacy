import { useEffect, useState } from "react";
import { auth } from "../services/db";
import { useNavigate } from "react-router-dom";

export default function Profil() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate("/masuk");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <div className="p-4">Memuat data profil...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 rounded shadow mt-8">
      <div className="flex flex-col items-center">
        <img
          src={user.photoURL || "https://i.pravatar.cc/80?u=default"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-bold mb-1">
          {user.displayName || "Admin"}
        </h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-gray-500 text-sm">
          UID: <span className="break-all">{user.uid}</span>
        </p>
      </div>
    </div>
  );
}
