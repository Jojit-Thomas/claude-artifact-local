import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Link, Outlet, useLocation } from "react-router-dom";
import { Maximize2, Minimize2, Menu, Home, X } from "lucide-react";

// Import all pages from the pages directory
const PAGES = import.meta.glob("./pages/**/*.tsx", { eager: true });

// Interface for the page module
interface PageModule {
  default: React.ComponentType;
  meta?: {
    title?: string;
    fullScreen?: boolean;
  };
}

// Interface for route object
interface RouteConfig {
  path: string;
  title: string;
}

// Layout component that includes navigation
function RootLayout() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const currentModule = Object.entries(PAGES).find(([path]) => {
    const routePath =
      path
        .replace("./pages", "")
        .replace(/\.tsx$/, "")
        .replace(/\[([^\]]+)\]/g, ":$1")
        .replace("/index", "") || "/";
    return routePath === location.pathname;
  })?.[1] as PageModule;

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isFullScreen) setIsFullScreen(false);
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isFullScreen, isMenuOpen]);

  // Reset full screen and menu when route changes
  useEffect(() => {
    setIsFullScreen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Get all routes for navigation
  const routes: RouteConfig[] = Object.entries(PAGES)
    .map(([path, module]) => {
      const pageModule = module as PageModule;

      const routePath =
        path
          .replace("./pages", "")
          .replace(/\.tsx$/, "")
          .replace(/\[([^\]]+)\]/g, ":$1")
          .replace("/index", "") || "/";

      // Skip routes that are marked as fullScreen in navigation
      if (pageModule.meta?.fullScreen) {
        return null;
      }

      const pageTitle =
        pageModule.meta?.title ||
        path
          .split("/")
          .pop()
          ?.replace(".tsx", "")
          ?.replace(/^\w/, (c) => c.toUpperCase()) ||
        "Home";

      return {
        path: routePath === "/index" ? "/" : routePath,
        title: pageTitle,
      };
    })
    .filter((route): route is RouteConfig => route !== null);

  // If the page is marked as fullScreen in meta or the user toggled fullScreen
  if (currentModule?.meta?.fullScreen || isFullScreen) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 px-4">
            {/* Left side - Home and Menu */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Home">
                <Home className="w-5 h-5" />
              </Link>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Open menu">
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Center - Title */}
            <div className="text-xl font-semibold tracking-tight">Claude Artifact Local</div>

            {/* Right side - Full Screen */}
            <button onClick={() => setIsFullScreen(!isFullScreen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title={isFullScreen ? "Exit full screen (Esc)" : "Enter full screen"}>
              {isFullScreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Slide-out Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-64 bg-white shadow-xl rounded-r-lg overflow-hidden z-50 transition-all transform">
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              {routes.map(({ path, title }) => (
                <Link key={path} to={path} className="block px-4 py-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay when menu is open */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)} />}

      {/* Outlet for nested routes */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: Object.entries(PAGES).map(([path, module]) => {
      const pageModule = module as PageModule;

      // Convert file path to route path
      const routePath =
        path
          .replace("./pages", "")
          .replace(/\.tsx$/, "")
          .replace(/\[([^\]]+)\]/g, ":$1")
          .replace("/index", "") || "/";

      return {
        path: routePath === "/index" ? "/" : routePath,
        element: <pageModule.default />,
      };
    }),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
