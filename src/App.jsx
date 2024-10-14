import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, List, Calendar, Settings } from "lucide-react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <MainApp /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

// New MainApp component for post-login view
function MainApp() {
  return (
    <div className="flex min-h-screen bg-background text-foreground dark">
      {/* Sidebar */}
      <aside className="w-64 bg-card text-card-foreground border-r border-white">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">DodoList</h1>
          </div>
        </div>
        <nav className="mt-8">
          <NavItem icon={<Home size={20} />} label="Dashboard" />
          <NavItem icon={<List size={20} />} label="Tasks" />
          <NavItem icon={<Calendar size={20} />} label="Calendar" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-grow p-8">
        <div className="bg-card rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to DodoList</h2>
          <p className="mb-4">This is where your todo list will appear.</p>
          <Button>Get Started</Button>
        </div>
      </main>
    </div>
  );
}

// New Login component for login view
function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard")
  };
  return <h1 onClick={handleLogin}>Login</h1>;
}

// NavItem component for sidebar navigation items
function NavItem({ icon, label }) {
  return (
    <a
      href="#"
      className="flex items-center px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
}

export default App;
