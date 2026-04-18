import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import faviconUrl from "../assets/favicon.svg?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  useEffect(() => {
    // Set document title
    document.title = "Radhe Parlour & General Store — Fresh Dairy & Daily Essentials in Palanpur";

    // Set favicon
    let faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!faviconLink) {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      faviconLink.type = "image/svg+xml";
      document.head.appendChild(faviconLink);
    }
    faviconLink.href = faviconUrl;

    // Set meta description
    let metaDesc = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Your nearby store in Palanpur for fresh Amul milk, ice cream, chocolates, stationery and daily groceries. Open till 8:30 PM.";

    // Load Google Fonts if not already loaded
    if (!document.querySelector("link[href*='fonts.googleapis.com/css2?family=Poppins']")) {
      const preconnect1 = document.createElement("link");
      preconnect1.rel = "preconnect";
      preconnect1.href = "https://fonts.googleapis.com";
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement("link");
      preconnect2.rel = "preconnect";
      preconnect2.href = "https://fonts.gstatic.com";
      preconnect2.crossOrigin = "anonymous";
      document.head.appendChild(preconnect2);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(fontLink);
    }
  }, []);

  return <Outlet />;
}
