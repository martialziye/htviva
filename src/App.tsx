
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";

// Main Pages
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ExpertisePage from "./pages/ExpertisePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";

// Product Detail Page (Generic)
import ProductDetailPage from "./pages/ProductDetailPage";

// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductsAdmin from "./pages/admin/ProductsAdmin";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import SettingsAdmin from "./pages/admin/SettingsAdmin";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout><Index /></Layout>} />
              <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
              <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
              <Route path="/expertise" element={<Layout><ExpertisePage /></Layout>} />
              <Route path="/about" element={<Layout><AboutPage /></Layout>} />
              <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
              <Route path="/news" element={<Layout><NewsPage /></Layout>} />
              <Route path="/mentions-legales" element={<Layout><MentionsLegalesPage /></Layout>} />
              <Route path="/auth" element={<AuthPage />} />
              
              {/* Product Detail Routes - Dynamic route for all products */}
              <Route path="/products/:productId" element={<Layout><ProductDetailPage /></Layout>} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ProductsAdmin />} />
                <Route path="services" element={<ServicesAdmin />} />
                <Route path="settings" element={<SettingsAdmin />} />
              </Route>
              
              {/* Catch All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
