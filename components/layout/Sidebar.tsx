import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Download, LogOut, Award, UserCheck } from 'lucide-react';
import { APP_NAME } from '../../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'All Units', path: '/admin/units' },
    { icon: UserCheck, label: 'Officials', path: '/admin/officials' },
    { icon: Users, label: 'Councilors', path: '/admin/councilors' },
    { icon: Users, label: 'Members', path: '/admin/members' },
    { icon: Download, label: 'Export Data', path: '/admin/export' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-borderColor flex items-center justify-center">
             <div className="text-center">
                 <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-xl">
                     Y
                 </div>
                 <h2 className="font-bold text-sm text-textDark">{APP_NAME}</h2>
                 <p className="text-xs text-textMuted">Admin Panel</p>
             </div>
        </div>
        
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-80px)]">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => window.innerWidth < 768 && onClose()}
              className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-primary text-white' 
                    : 'text-textDark hover:bg-gray-100 hover:text-primary'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
          
          <div className="pt-4 mt-4 border-t border-borderColor">
            <NavLink
              to="/logout"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-danger hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
};