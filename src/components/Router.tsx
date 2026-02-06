import { MemberProvider } from '@/integrations';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { ScrollToTop } from '@/lib/scroll-to-top';
import type { ReactNode } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';

// Import Wix Stores routes and loaders
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';

// Import pages
import AboutPage from '@/components/pages/AboutPage';
import CertificationsPage from '@/components/pages/CertificationsPage';
import ContactPage from '@/components/pages/ContactPage';
import FAQsPage from '@/components/pages/FAQsPage';
import HomePage from '@/components/pages/HomePage';
import PoliciesPage from '@/components/pages/PoliciesPage';
import QualityPage from '@/components/pages/QualityPage';
import RecipeDetailPage from '@/components/pages/RecipeDetailPage';
import RecipesPage from '@/components/pages/RecipesPage';

// Import layout components
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Root layout: keeps WixServicesProvider + ScrollToTop for all routes
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <Outlet />
    </WixServicesProvider>
  );
}

// Product-only layout: wraps ONLY the product details route with Header/Footer
function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: '/store',
        element: <StoreCollectionRoute productPageRoute="/products" />,
        loader: defaultStoreCollectionRouteRedirectLoader,
        index: true,
      },
      {
        path: '/store/:categorySlug',
        element: <StoreCollectionRoute productPageRoute="/products" />,
        loader: storeCollectionRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.category",
          identifiers: {
            categorySlug: "STORES.CATEGORY.SLUG"
          }
        }
      },
      {
        path: '/products/:slug',
        element: (
          <ProductLayout>
            <ProductDetailsRoute />
          </ProductLayout>
        ),
        loader: productRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.product",
          identifiers: {
            slug: "STORES.PRODUCT.SLUG"
          }
        },
      },
      {
        path: '/cart',
        element: <Cart />,
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
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
