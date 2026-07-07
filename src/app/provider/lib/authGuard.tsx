"use client";

import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import "../lib/firebase";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u || null);
      setLoading(false);
    });
    return () => unsub();
  }, [auth]);

  if (loading) {
    return <div className="text-center py-10">در حال بررسی دسترسی...</div>;
  }

  if (!user) {
    return <div className="text-center py-10">دسترسی فقط برای ادمین مجاز است.</div>;
  }

  return <>{children}</>;
}