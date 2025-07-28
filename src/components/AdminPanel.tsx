import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Shield, Database, Users, TrendingUp } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel = ({ isOpen, onClose }: AdminPanelProps) => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (email === 'muhammadidrishashim@gmail.com') {
      setIsAuthenticated(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-playfair font-bold">ZEITNOIR Admin</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        {!isAuthenticated ? (
          // Login Form
          <div className="p-8 text-center max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-6">Administrative Access</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Enter authorized email address to access ZEITNOIR management console
            </p>
            
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background"
              />
              <Button 
                onClick={handleLogin}
                className="btn-luxury w-full"
                disabled={!email}
              >
                Access Console
              </Button>
            </div>
          </div>
        ) : (
          // Admin Dashboard
          <div className="p-6 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="card-luxury">
                <CardContent className="p-4 text-center">
                  <Database className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">47</p>
                  <p className="text-sm text-muted-foreground">Active Inventory</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-muted-foreground">Vault Members</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">$47.2M</p>
                  <p className="text-sm text-muted-foreground">YTD Revenue</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-4 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-sm text-muted-foreground">Pending Orders</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle>Recent High-Value Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <div>
                      <p className="font-semibold">ZEITNOIR Obsidian</p>
                      <p className="text-sm text-muted-foreground">Order #ZN-2024-001</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">$2,500,000</p>
                      <p className="text-sm text-muted-foreground">Pending Verification</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <div>
                      <p className="font-semibold">ZEITNOIR Stellar</p>
                      <p className="text-sm text-muted-foreground">Order #ZN-2024-002</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">$850,000</p>
                      <p className="text-sm text-muted-foreground">In Production</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Management Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="btn-ghost-luxury w-full">
                    Add New Timepiece
                  </Button>
                  <Button className="btn-ghost-luxury w-full">
                    Update Pricing
                  </Button>
                  <Button className="btn-ghost-luxury w-full">
                    Manage Availability
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle>Customer Relations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="btn-ghost-luxury w-full">
                    Vault Memberships
                  </Button>
                  <Button className="btn-ghost-luxury w-full">
                    Consultation Requests
                  </Button>
                  <Button className="btn-ghost-luxury w-full">
                    VIP Communications
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Firebase Integration Status */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Firebase Connected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Firestore Synced</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Payment Gateway Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};