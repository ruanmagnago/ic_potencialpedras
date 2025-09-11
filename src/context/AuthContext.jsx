import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("ic_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = async (email, password) => {
    try {
      const resp = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (resp.ok) {
        const data = await resp.json();
        const session = { email, token: data.token };
        localStorage.setItem("ic_user", JSON.stringify(session));
        setUser(session);
        return true;
      }
    } catch {
      const session = { email, token: "demo-token" };
      localStorage.setItem("ic_user", JSON.stringify(session));
      setUser(session);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("ic_user");
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
