
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Package, 
  Users, 
  Clock, 
  Eye,
  TrendingUp,
  TrendingDown,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to the Htviva admin dashboard. Manage your products and settings here.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Products</p>
                <h3 className="text-3xl font-bold mt-1">24</h3>
              </div>
              <div className="p-3 bg-brand-red/10 rounded-full">
                <Package className="h-6 w-6 text-brand-red" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+4</span>
              <span className="ml-1 text-gray-500">since last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Recent Visitors</p>
                <h3 className="text-3xl font-bold mt-1">156</h3>
              </div>
              <div className="p-3 bg-brand-teal/10 rounded-full">
                <Users className="h-6 w-6 text-brand-teal" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+12%</span>
              <span className="ml-1 text-gray-500">since last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Page Views</p>
                <h3 className="text-3xl font-bold mt-1">2,457</h3>
              </div>
              <div className="p-3 bg-navy/10 rounded-full">
                <Eye className="h-6 w-6 text-navy" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">+8%</span>
              <span className="ml-1 text-gray-500">since yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Avg. Time on Site</p>
                <h3 className="text-3xl font-bold mt-1">3:42</h3>
              </div>
              <div className="p-3 bg-brand-red/10 rounded-full">
                <Clock className="h-6 w-6 text-brand-red" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">-1:12</span>
              <span className="ml-1 text-gray-500">since last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="p-2 bg-brand-red/10 rounded-full mr-4">
                <Package className="h-5 w-5 text-brand-red" />
              </div>
              <div>
                <p className="font-medium">New product added</p>
                <p className="text-sm text-gray-500">TrainVision™ Monitor 8000 was added to the catalog</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-brand-teal/10 rounded-full mr-4">
                <Users className="h-5 w-5 text-brand-teal" />
              </div>
              <div>
                <p className="font-medium">Contact form submission</p>
                <p className="text-sm text-gray-500">John Doe from SNCF requested more information</p>
                <p className="text-xs text-gray-400 mt-1">Yesterday at 4:30 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-navy/10 rounded-full mr-4">
                <BarChart3 className="h-5 w-5 text-navy" />
              </div>
              <div>
                <p className="font-medium">Product updated</p>
                <p className="text-sm text-gray-500">RailConnect™ Control Unit specifications were updated</p>
                <p className="text-xs text-gray-400 mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
