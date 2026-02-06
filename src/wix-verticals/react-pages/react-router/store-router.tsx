import {
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  type StaticHandlerContext,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router';
import { useMemo } from 'react';

// Import route components and loaders
import { MiniCart, rootRouteLoader, WixServicesProvider } from './routes/root';
import { ProductDetailsRoute, productRouteLoader } from './routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from './routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from './routes/store-redirect';
import { Cart } from './routes/cart';

// ✅ Import your site header/footer (same theme)
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * ✅ Store layout wrapper for the Wix Stores pages ONLY.
 * This fixes missing Header/Footer on:
 *  - /store
 *  - /store/:categorySlug
 *  - /products/:slug  (optional but consistent)
 *  - /cart            (optional but consistent)
 */
const StoreShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export const routes = [
  {
    path: '/',
    element: <Navigate to="/store" />,
  },
  {
    element: (
      <WixServicesProvider>
        <MiniCart cartIconClassName="fixed top-2 right-2 z-50" />
        <Outlet />
      </WixServicesProvider>
    ),
    loader: rootRouteLoader,
    children: [
      // ✅ “Shop by Category / Products listing” landing
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

      // ✅ Category listing page
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
          identifiers: {
            categorySlug: 'STORES.CATEGORY.SLUG',
          },
        },
      },

      // ✅ Single product details page (kept consistent)
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
          identifiers: {
            slug: 'STORES.PRODUCT.SLUG',
          },
        },
      },

      // ✅ Cart page (optional but consistent)
      {
        path: '/cart',
        element: (
          <StoreShell>
            <Cart />
          </StoreShell>
        ),
      },
    ],
  },
];

export default function ReactRouterApp({
  context,
  basename,
}: {
  context: StaticHandlerContext;
  basename: string;
}) {
  const isSSR = typeof window === 'undefined';

  const router = useMemo(() => {
    if (isSSR) return createStaticRouter(routes, context);
    return createBrowserRouter(routes, { basename });
  }, [isSSR, context, basename]);

  if (isSSR) return <StaticRouterProvider router={router} context={context} />;
  return <RouterProvider router={router} />;
}
