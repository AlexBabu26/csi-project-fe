import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PublicHome } from './pages/PublicHome';
import { AdminDashboard } from './pages/AdminDashboard';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { UserRole } from './types';
import { Menu } from 'lucide-react';

// Admin Layout Wrapper
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pageTitle = location.pathname.split('/').pop()?.toUpperCase() || 'DASHBOARD';

  return (
    <div className="min-h-screen bg-bgLight flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0 md:pl-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4 justify-between sticky top-0 z-20">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden mr-4 text-textDark hover:text-primary"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-textDark capitalize">{pageTitle}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-textDark">Admin User</p>
              <p className="text-xs text-textMuted">Headquarters</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              A
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
        
        {/* Simple footer for admin */}
        <div className="py-4 text-center text-xs text-textMuted border-t border-gray-200">
           CSI Kalamela App v1.0
        </div>
      </div>
    </div>
  );
};

// Public Layout Wrapper
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <Footer />
    </div>
  );
};

// Kalamela Placeholder
const KalamelaPage = () => (
  <PublicLayout>
    <div className="flex-grow flex items-center justify-center bg-gray-100 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Kalamela 2024</h1>
        <p className="text-lg text-textMuted mb-8">Registration and Results Portal</p>
        <a href="#/" className="text-primary underline">Back to Home</a>
      </div>
    </div>
  </PublicLayout>
);

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <PublicLayout>
            <PublicHome onLogin={setUserRole} />
          </PublicLayout>
        } />
        
        <Route path="/kalamela" element={<KalamelaPage />} />

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={
          userRole === UserRole.ADMIN ? (
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="units" element={<div className="text-center p-10 text-gray-500">All Units Table Placeholder</div>} />
                <Route path="export" element={<div className="text-center p-10 text-gray-500">Data Export Placeholder</div>} />
                <Route path="*" element={<Navigate to="dashboard" />} />
              </Routes>
            </AdminLayout>
          ) : (
            <Navigate to="/" replace />
          )
        } />

        <Route path="/logout" element={<LogoutHandler onLogout={() => setUserRole(null)} />} />
      </Routes>
    </Router>
  );
};

const LogoutHandler = ({ onLogout }: { onLogout: () => void }) => {
    React.useEffect(() => {
        onLogout();
    }, [onLogout]);
    return <Navigate to="/" replace />;
}

export default App;