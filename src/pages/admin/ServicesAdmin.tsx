
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Wrench, 
  Plus, 
  Search, 
  Edit, 
  Trash2,
  ChevronLeft,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Tables } from '@/integrations/supabase/types';
import ServiceForm from './ServiceForm';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';

const ServicesAdmin = () => {
  const [services, setServices] = useState<Tables<'services'>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingService, setEditingService] = useState<string | null>(null);
  const [isAddingService, setIsAddingService] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('name_en', { ascending: true });

      if (error) throw error;
      
      setServices(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to fetch services",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDeleteService = async (id: string) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
      
      fetchServices();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to delete service",
      });
    } finally {
      setDeleteConfirm(null);
    }
  };

  const filteredServices = services.filter(service =>
    service.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.name_fr.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Services Management</h1>
          <p className="text-gray-500">
            Add, edit or remove services from the catalog.
          </p>
        </div>
        <Button 
          className="bg-brand-red hover:bg-brand-red/90"
          onClick={() => setIsAddingService(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Service
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Services Catalog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search services..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-red"></div>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Icon</TableHead>
                    <TableHead>Name (EN)</TableHead>
                    <TableHead>Name (FR)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell>
                          {service.icon ? (
                            <div className="p-2 bg-gray-100 inline-block rounded-full">
                              <span className="text-brand-red">{service.icon}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell className="font-medium">{service.name_en}</TableCell>
                        <TableCell>{service.name_fr}</TableCell>
                        <TableCell>
                          <span 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              service.status === 'active' ? 'bg-green-100 text-green-700' : 
                              service.status === 'draft' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {service.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => setEditingService(service.id)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-red-500"
                              onClick={() => setDeleteConfirm(service.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                        {searchQuery 
                          ? "No services found matching your search." 
                          : "No services have been added yet."}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add Service Dialog */}
      {isAddingService && (
        <Dialog open={isAddingService} onOpenChange={setIsAddingService}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Create a new service with multilingual content
              </DialogDescription>
            </DialogHeader>
            <ServiceForm 
              onSuccess={() => {
                setIsAddingService(false);
                fetchServices();
              }} 
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Service Dialog */}
      {editingService && (
        <Dialog open={!!editingService} onOpenChange={() => setEditingService(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>
                Update service information
              </DialogDescription>
            </DialogHeader>
            <ServiceForm 
              serviceId={editingService}
              onSuccess={() => {
                setEditingService(null);
                fetchServices();
              }} 
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this service? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => deleteConfirm && handleDeleteService(deleteConfirm)}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesAdmin;
