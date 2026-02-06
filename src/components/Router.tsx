import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import type { ReactNode } from 'react';

// Wix Stores routes and loaders
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Pages
import HomePage from '@/components/pages/HomePage';
import RecipesPage from '@/components/pages/RecipesPage';
import RecipeDetailPage from '@/components/pages/RecipeDetailPage';
import QualityPage from '@/components/pages/QualityPage';
import CertificationsPage from '@/components/pages/CertificationsPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import FAQsPage from '@/components/pages/FAQsPage';
import PoliciesPage from '@/components/pages/PoliciesPage';

// Site layout components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Root layout: provides Wix services + scroll behavior for all routes
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <Outlet />
    </WixServicesProvider>
  );
}

// ✅ Shell used ONLY for store pages that currently miss header/footer
function StoreShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      loader: rootRouteLoader,
      children: [
        // Home and content pages (these pages already render Header/Footer internally)
        {
          index: true,
          element: <HomePage />,
          routeMetadata: { pageIdentifier: 'home' },
        },
        {
          path: '/recipes',
          element: <RecipesPage />,
        },
        {
          path: '/recipes/:id',
          element: <RecipeDetailPage />,
        },
        {
          path: '/quality',
          element: <QualityPage />,
        },
        {
          path: '/certifications',
          element: <CertificationsPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
        {
          path: '/faqs',
          element: <FAQsPage />,
        },
        {
          path: '/policies',
          element: <PoliciesPage />,
        },

        // ✅ Store pages (add Header/Footer here)
        {
          path: '/store',
          element: (
            <StoreShell>
              <StoreCollectionRoute productPageRoute="/products" />
            </StoreShell>
          ),
          loader: defaultStoreCollectionRouteRedirectLoader,
          index: true,
        },
        {
          path: '/store/:categorySlug',
          element: (
            <StoreShell>
              <StoreCollectionRoute productPageRoute="/products" />
            </StoreShell>
          ),
          loader: storeCollectionRouteLoader,
          routeMetadata: {
            appDefId: '1380b703-ce81-ff05-f115-39571d94dfcd',
            pageIdentifier: 'wix.stores.sub_pages.category',
            identifiers: { categorySlug: 'STORES.CATEGORY.SLUG' },
          },
        },
        {
          path: '/products/:slug',
          element: (
            <StoreShell>
              <ProductDetailsRoute />
            </StoreShell>
          ),
          loader: productRouteLoader,
          routeMetadata: {
            appDefId: '1380b703-ce81-ff05-f115-39571d94dfcd',
            pageIdentifier: 'wix.stores.sub_pages.product',
            identifiers: { slug: 'STORES.PRODUCT.SLUG' },
          },
        },
        {
          path: '/cart',
          element: (
            <StoreShell>
              <Cart />
            </StoreShell>
          ),
        },

        // fallback
        {
          path: '*',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_NAME }
);

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
