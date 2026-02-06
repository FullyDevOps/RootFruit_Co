import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';

// Import Wix Stores routes and loaders
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Import pages
import HomePage from '@/components/pages/HomePage';
import RecipesPage from '@/components/pages/RecipesPage';
import RecipeDetailPage from '@/components/pages/RecipeDetailPage';
import QualityPage from '@/components/pages/QualityPage';
import CertificationsPage from '@/components/pages/CertificationsPage';
import AboutPage from '@/components/pages/AboutPage';
import ContactPage from '@/components/pages/ContactPage';
import FAQsPage from '@/components/pages/FAQsPage';
import PoliciesPage from '@/components/pages/PoliciesPage';

// Import layout components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Main layout with WixServicesProvider (no header/footer - only for product page)
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <Outlet />
    </WixServicesProvider>
  );
}

// Layout with Header and Footer (only for product page)
function ProductLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
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
