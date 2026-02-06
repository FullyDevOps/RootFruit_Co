import { useMemo } from 'react';
import {
  createBrowserRouter,
  createStaticRouter,
  Navigate,
  Outlet,
  RouterProvider,
  StaticRouterProvider,
  type StaticHandlerContext,
} from 'react-router';

// Import route components and loaders
import { Cart } from './routes/cart';
import {
  ProductDetailsRoute,
  productRouteLoader,
} from './routes/product-details';
import { MiniCart, rootRouteLoader, WixServicesProvider } from './routes/root';
import {
  StoreCollectionRoute,
  storeCollectionRouteLoader,
} from './routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from './routes/store-redirect';

// ✅ Import your site header/footer (same theme)
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const ProductPageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductDetailsRoute />
      </main>
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
        <MiniCart
          // cartIcon={... optionally use your own mini cart icon...}
          cartIconClassName="fixed top-2 right-2 z-50"
        />
        <Outlet />
      </WixServicesProvider>
    ),
    loader: rootRouteLoader,
    children: [
      {
        path: '/products/:slug',
        // ✅ Product page ONLY gets Header/Footer
        element: <ProductPageLayout />,
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
        path: '/store',
        element: <></>,
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
        path: '/cart',
        element: <Cart />,
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
  // Check if we're running on server at runtime, not build time
  const isSSR = typeof window === 'undefined';

  // Memoize router creation to prevent recreating on every render
  // This prevents hydration mismatches between SSR and CSR
  const router = useMemo(() => {
    if (isSSR) {
      return createStaticRouter(routes, context);
    }
    return createBrowserRouter(routes, { basename });
  }, [isSSR, context, basename]);

  if (isSSR) {
    return <StaticRouterProvider router={router} context={context} />;
  }

  return <RouterProvider router={router} />;
}
