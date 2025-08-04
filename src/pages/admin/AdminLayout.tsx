
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Package, 
  Settings, 
  Users, 
  LogOut, 
  Home, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

const AdminLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white shadow-md"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b">
            <div className="text-2xl font-bold">
              <span className="text-brand-red">CENTRAL</span>P
            </div>
            <div className="text-sm text-gray-500 mt-1">Admin Dashboard</div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <Link 
              to="/admin" 
              className={`flex items-center p-3 rounded-md transition-colors ${
                isActive('/admin') 
                  ? 'bg-brand-red text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <Home size={20} className="mr-3" />
              <span>Dashboard</span>
            </Link>
            
            <Link 
              to="/admin/products" 
              className={`flex items-center p-3 rounded-md transition-colors ${
                isActive('/admin/products') 
                  ? 'bg-brand-red text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <Package size={20} className="mr-3" />
              <span>Products</span>
            </Link>
            
            <Link 
              to="/admin/settings" 
              className={`flex items-center p-3 rounded-md transition-colors ${
                isActive('/admin/settings') 
                  ? 'bg-brand-red text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <Settings size={20} className="mr-3" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center"
              asChild
            >
              <Link to="/">
                <LogOut size={18} className="mr-2" />
                <span>Exit to Website</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Link to="/admin" className="hover:text-brand-red">
                  Admin
                </Link>
                <ChevronRight size={14} className="mx-1" />
                <span className="font-medium text-gray-700">
                  {location.pathname === '/admin' && 'Dashboard'}
                  {location.pathname === '/admin/products' && 'Products'}
                  {location.pathname === '/admin/settings' && 'Settings'}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Welcome, Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white p-4 border-t">
          <div className="container mx-auto">
            <div className="text-center text-sm text-gray-500">
              © 2025 Htviva Admin Dashboard. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
