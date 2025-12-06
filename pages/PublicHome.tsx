import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME, APP_SUBTITLE, MOCK_NOTICES } from '../constants';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { User, Lock, Eye, EyeOff, Award, Users } from 'lucide-react';
import { UserRole } from '../types';

interface PublicHomeProps {
  onLogin: (role: UserRole) => void;
}

export const PublicHome: React.FC<PublicHomeProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Mock login logic
      if (username === 'admin') {
        onLogin(UserRole.ADMIN);
        navigate('/admin/dashboard');
      } else {
        alert('Invalid credentials. Try "admin" / "password"');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-bgLight flex flex-col">
      {/* Marquee Notice Bar */}
      <div className="bg-primary text-white py-2 overflow-hidden shadow-md relative z-10">
        <div className="animate-marquee whitespace-nowrap inline-block">
          {MOCK_NOTICES.map((notice, idx) => (
            <span key={notice.id} className="mx-8 font-medium">
              {notice.priority === 'high' && <span className="bg-warning text-black text-xs px-2 py-0.5 rounded mr-2 font-bold">URGENT</span>}
              {notice.text} {idx < MOCK_NOTICES.length - 1 && " • "}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Branding & About */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
             <div className="flex justify-center md:justify-start space-x-4 mb-4">
                {/* Placeholders for Logos */}
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center p-2">
                    <img src="https://picsum.photos/100/100?random=1" alt="Church Logo" className="rounded-full" />
                </div>
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-2 z-10 -mt-2">
                     <img src="https://picsum.photos/120/120?random=2" alt="Youth Logo" className="rounded-full" />
                </div>
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center p-2">
                     <img src="https://picsum.photos/100/100?random=3" alt="CS Logo" className="rounded-full" />
                </div>
             </div>
             
             <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{APP_NAME}</h1>
                <h2 className="text-lg md:text-xl text-textMuted font-medium mt-1">{APP_SUBTITLE}</h2>
             </div>
             
             <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary text-sm text-textDark leading-relaxed">
               <h3 className="font-bold text-base mb-2">About Us</h3>
               <p>
                 Founded in 1916, the CSI Madhya Kerala Diocese Youth Movement has been a beacon of faith and fellowship for over a century. 
                 We aim to empower youth through spiritual growth, social service, and cultural engagement.
               </p>
             </div>
          </div>

          {/* Right Side: Action Cards */}
          <div className="flex flex-col justify-center space-y-4">
             {/* Main Login Card */}
             <Card className="transform transition-all hover:scale-105 duration-300">
               <div className="text-center mb-6">
                 <h3 className="text-2xl font-bold text-textDark">Unit Portal</h3>
                 <p className="text-textMuted text-sm">Access your unit dashboard</p>
               </div>
               
               <div className="space-y-4">
                 <Button 
                   variant="outline" 
                   size="block" 
                   disabled
                   className="opacity-50 cursor-not-allowed"
                 >
                   Unit Registration (Closed)
                 </Button>
                 
                 <Button 
                   variant="primary" 
                   size="block"
                   onClick={() => setShowLoginModal(true)}
                 >
                   Unit Login
                 </Button>
               </div>
             </Card>

             {/* Quick Links */}
             <div className="grid grid-cols-2 gap-4">
               <div 
                 onClick={() => navigate('/kalamela')}
                 className="bg-white p-4 rounded-lg shadow-sm border border-borderColor hover:border-primary hover:shadow-md cursor-pointer transition-all text-center group"
               >
                 <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                   <Award size={20} />
                 </div>
                 <span className="font-semibold text-sm">Kalamela</span>
               </div>
               <div 
                 onClick={() => alert('Conference Module coming soon!')}
                 className="bg-white p-4 rounded-lg shadow-sm border border-borderColor hover:border-primary hover:shadow-md cursor-pointer transition-all text-center group"
               >
                 <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                   <Users size={20} />
                 </div>
                 <span className="font-semibold text-sm">Conference</span>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
            <div className="bg-primary px-6 py-4 flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">Unit Login</h3>
              <button onClick={() => setShowLoginModal(false)} className="text-white hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-textDark mb-1">Username / Unit ID</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter Unit ID"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-textDark mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div 
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                   <a href="#" className="text-primary hover:text-primary-hover font-medium">Forgot Password?</a>
                </div>
                <Button type="submit" variant="primary" size="block" isLoading={loading}>
                  Login to Dashboard
                </Button>
                <div className="text-center text-xs text-textMuted mt-4 bg-yellow-50 p-2 rounded border border-yellow-200">
                  <span className="font-bold">Demo:</span> Use <strong>admin</strong> / <strong>password</strong>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};