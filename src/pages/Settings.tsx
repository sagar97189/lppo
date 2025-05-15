import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const Settings = () => {
  const [generalForm, setGeneralForm] = useState({
    siteName: "Admin Dashboard",
    description: "Comprehensive admin panel for managing content and users",
    contactEmail: "admin@example.com"
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newUser: true,
    newContent: true,
    contentReports: true,
    systemUpdates: false
  });

  const handleGeneralFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGeneralForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean, name: string) => {
    setNotificationSettings(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground mt-2">
            Manage your application settings and preferences.
          </p>
        </div>
        
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your basic site settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input 
                    id="siteName" 
                    name="siteName"
                    value={generalForm.siteName} 
                    onChange={handleGeneralFormChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    value={generalForm.description} 
                    onChange={handleGeneralFormChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input 
                    id="contactEmail" 
                    name="contactEmail"
                    type="email" 
                    value={generalForm.contactEmail} 
                    onChange={handleGeneralFormChange}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="maintenance" />
                  <Label htmlFor="maintenance">Enable Maintenance Mode</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage when and how you get notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive email notifications</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) => handleSwitchChange(checked, 'emailNotifications')}
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-medium">Notification Types</p>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newUser" 
                        checked={notificationSettings.newUser}
                        onCheckedChange={(checked) => handleSwitchChange(!!checked, 'newUser')}
                      />
                      <Label htmlFor="newUser">New user registrations</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newContent" 
                        checked={notificationSettings.newContent}
                        onCheckedChange={(checked) => handleSwitchChange(!!checked, 'newContent')}
                      />
                      <Label htmlFor="newContent">New content uploads</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="contentReports" 
                        checked={notificationSettings.contentReports}
                        onCheckedChange={(checked) => handleSwitchChange(!!checked, 'contentReports')}
                      />
                      <Label htmlFor="contentReports">Content reports</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="systemUpdates" 
                        checked={notificationSettings.systemUpdates}
                        onCheckedChange={(checked) => handleSwitchChange(!!checked, 'systemUpdates')}
                      />
                      <Label htmlFor="systemUpdates">System updates</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the look and feel of your admin panel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="font-medium">Theme</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border border-primary rounded-md p-4 cursor-pointer hover:bg-muted/20 text-center">
                      <div className="bg-primary h-12 rounded-sm mb-2"></div>
                      <p className="text-sm">Default</p>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer hover:bg-muted/20 text-center">
                      <div className="bg-admin-secondary h-12 rounded-sm mb-2"></div>
                      <p className="text-sm">Purple</p>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer hover:bg-muted/20 text-center">
                      <div className="bg-gray-800 h-12 rounded-sm mb-2"></div>
                      <p className="text-sm">Dark</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="font-medium">Layout</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-md p-4 cursor-pointer hover:bg-muted/20 text-center">
                      <div className="flex h-12 gap-2 mb-2">
                        <div className="bg-muted w-2/12 h-12 rounded-sm"></div>
                        <div className="bg-muted w-10/12 h-12 rounded-sm"></div>
                      </div>
                      <p className="text-sm">Default</p>
                    </div>
                    <div className="border rounded-md p-4 cursor-pointer hover:bg-muted/20 text-center">
                      <div className="flex h-12 gap-2 mb-2">
                        <div className="bg-muted w-10/12 h-12 rounded-sm"></div>
                        <div className="bg-muted w-2/12 h-12 rounded-sm"></div>
                      </div>
                      <p className="text-sm">Reversed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Reset to Default</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage your API keys for external integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex">
                    <Input 
                      id="apiKey" 
                      value={process.env.REACT_APP_STRIPE_API_KEY || ''} 
                      readOnly
                      className="rounded-r-none"
                    />
                    <Button className="rounded-l-none">
                      Copy
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Keep this key confidential. It provides full access to your account.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input 
                    id="webhookUrl" 
                    placeholder="https://your-site.com/api/webhook"
                  />
                </div>
                <div className="pt-4">
                  <Button variant="outline">Generate New Key</Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
