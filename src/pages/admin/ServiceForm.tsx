
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Tables } from '@/integrations/supabase/types';

type ServiceFormData = {
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  icon: string;
  status: string;
};

interface ServiceFormProps {
  serviceId?: string;
  onSuccess: () => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ serviceId, onSuccess }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ServiceFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const fetchService = async () => {
      if (!serviceId) return;
      
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('id', serviceId)
          .single();
          
        if (error) throw error;
        
        if (data) {
          setValue('name_en', data.name_en);
          setValue('name_fr', data.name_fr);
          setValue('description_en', data.description_en);
          setValue('description_fr', data.description_fr);
          setValue('icon', data.icon || '');
          setValue('status', data.status);
        }
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to fetch service data",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchService();
  }, [serviceId, setValue, toast]);

  const onSubmit = async (data: ServiceFormData) => {
    setIsLoading(true);
    try {
      if (serviceId) {
        // Update existing service
        const { error } = await supabase
          .from('services')
          .update({
            name_en: data.name_en,
            name_fr: data.name_fr,
            description_en: data.description_en,
            description_fr: data.description_fr,
            icon: data.icon,
            status: data.status,
            updated_at: new Date().toISOString(),
          })
          .eq('id', serviceId);
          
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Service updated successfully",
        });
      } else {
        // Create new service
        const { error } = await supabase
          .from('services')
          .insert({
            name_en: data.name_en,
            name_fr: data.name_fr,
            description_en: data.description_en,
            description_fr: data.description_fr,
            icon: data.icon,
            status: data.status,
          });
          
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Service created successfully",
        });
        reset();
      }
      onSuccess();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to save service",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && serviceId) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand-red"></div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{serviceId ? 'Edit Service' : 'Add New Service'}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="english">English Content</TabsTrigger>
              <TabsTrigger value="french">French Content</TabsTrigger>
            </TabsList>
            
            <TabsContent value="english" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name_en">Service Name (English)</Label>
                <Input 
                  id="name_en" 
                  {...register('name_en', { required: 'English name is required' })}
                />
                {errors.name_en && <p className="text-sm text-red-500">{errors.name_en.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description_en">Description (English)</Label>
                <Textarea 
                  id="description_en" 
                  rows={5}
                  {...register('description_en', { required: 'English description is required' })}
                />
                {errors.description_en && <p className="text-sm text-red-500">{errors.description_en.message}</p>}
              </div>
            </TabsContent>
            
            <TabsContent value="french" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name_fr">Service Name (French)</Label>
                <Input 
                  id="name_fr" 
                  {...register('name_fr', { required: 'French name is required' })}
                />
                {errors.name_fr && <p className="text-sm text-red-500">{errors.name_fr.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description_fr">Description (French)</Label>
                <Textarea 
                  id="description_fr" 
                  rows={5}
                  {...register('description_fr', { required: 'French description is required' })}
                />
                {errors.description_fr && <p className="text-sm text-red-500">{errors.description_fr.message}</p>}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="space-y-2">
            <Label htmlFor="icon">Icon (Lucide icon name)</Label>
            <Input 
              id="icon" 
              placeholder="e.g. Wrench, Cpu, Cog"
              {...register('icon')}
            />
            <p className="text-xs text-gray-500">Enter the name of a Lucide icon (e.g., "Wrench", "Cpu", "Cog")</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register('status', { required: 'Status is required' })}
              defaultValue="active"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && <p className="text-sm text-red-500">{errors.status.message}</p>}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => {
              reset();
              onSuccess();
            }}
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-brand-red hover:bg-brand-red/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Saving...
              </>
            ) : (
              serviceId ? 'Update Service' : 'Create Service'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ServiceForm;
