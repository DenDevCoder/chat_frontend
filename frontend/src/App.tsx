import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabase-config";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { SocketProvider } from "./context/SocketProvider";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (session) {
        setUserId(session.user.id);
      } else {
        setUserId(null);
      }

      setLoading(false);
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUserId(session.user.id);
      } else {
        setUserId(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signIn"
          element={!userId ? <SignIn /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={!userId ? <Register /> : <Navigate to="/" replace />}
        />

        <Route
          path="/*"
          element={
            userId ? (
              <SocketProvider userId={userId}>
                <Home />
              </SocketProvider>
            ) : (
              <Navigate to="/signIn" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
