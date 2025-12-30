"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("gps_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/acesso");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("gps_auth");
    router.push("/acesso");
  };

  return { isAuthenticated, logout };
}



