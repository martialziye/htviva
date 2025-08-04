
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Globe, 
  Bell, 
  Shield, 
  Save
} from 'lucide-react';

const SettingsAdmin = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Settings</h1>
        <p className="text-gray-500">
          Manage your account and website preferences.
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="website" className="flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            Website
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-name">Full Name</Label>
                  <Input id="admin-name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email Address</Label>
                  <Input id="admin-email" type="email" defaultValue="admin@Htviva.fr" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-role">Role</Label>
                  <Input id="admin-role" defaultValue="Administrator" disabled />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium">Preferences</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-gray-500">Enable dark mode for the admin interface</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="compact-view">Compact View</Label>
                    <p className="text-sm text-gray-500">Use compact view for tables and lists</p>
                  </div>
                  <Switch id="compact-view" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-brand-red hover:bg-brand-red/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Website Tab */}
        <TabsContent value="website">
          <Card>
            <CardHeader>
              <CardTitle>Website Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Website Title</Label>
                  <Input id="site-title" defaultValue="Htviva - Embedded Systems for Railway" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Meta Description</Label>
                  <Input id="site-description" defaultValue="Htviva designs and manufactures electronic systems for railway applications." />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium">Language Settings</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable-french">Enable French Version</Label>
                    <p className="text-sm text-gray-500">Show the French language option on the website</p>
                  </div>
                  <Switch id="enable-french" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="default-lang">Default Language</Label>
                    <p className="text-sm text-gray-500">Set the default language for new visitors</p>
                  </div>
                  <select className="p-2 border rounded-md">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium">Social Media</h3>
                <div className="space-y-2">
                  <Label htmlFor="twitter-url">Twitter URL</Label>
                  <Input id="twitter-url" defaultValue="https://twitter.com/Htviva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin-url">LinkedIn URL</Label>
                  <Input id="linkedin-url" defaultValue="https://linkedin.com/company/Htviva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube-url">YouTube URL</Label>
                  <Input id="youtube-url" defaultValue="https://youtube.com/Htviva" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-brand-red hover:bg-brand-red/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="contact-form">Contact Form Submissions</Label>
                    <p className="text-sm text-gray-500">Receive an email when someone submits the contact form</p>
                  </div>
                  <Switch id="contact-form" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="product-updates">Product Updates</Label>
                    <p className="text-sm text-gray-500">Receive an email when a product is updated</p>
                  </div>
                  <Switch id="product-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="security-alerts">Security Alerts</Label>
                    <p className="text-sm text-gray-500">Receive an email about security events</p>
                  </div>
                  <Switch id="security-alerts" defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium">System Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="browser-notifications">Browser Notifications</Label>
                    <p className="text-sm text-gray-500">Enable in-browser notifications</p>
                  </div>
                  <Switch id="browser-notifications" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-brand-red hover:bg-brand-red/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium">Session Management</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-logout">Auto Logout</Label>
                    <p className="text-sm text-gray-500">Automatically log out after period of inactivity</p>
                  </div>
                  <select className="p-2 border rounded-md">
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-brand-red hover:bg-brand-red/90">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsAdmin;
