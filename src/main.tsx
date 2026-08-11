import { StrictMode } from 'react'; import { createRoot } from 'react-dom/client'; import './index.css'; import { SiteLayout } from '@/components/SiteLayout'; import { HomePage } from '@/pages/HomePage'; import { ProductsPage } from '@/pages/ProductsPage'; import { Services } from '@/sections/Services'; import { AboutPage } from '@/pages/AboutPage'; import { ContactPage } from '@/pages/ContactPage';
const page = document.body.dataset.page || 'home';
const pages = { home: <HomePage />, products: <ProductsPage />, services: <Services />, about: <AboutPage />, contact: <ContactPage /> };
createRoot(document.getElementById('root')!).render(<StrictMode><SiteLayout>{pages[page as keyof typeof pages] ?? pages.home}</SiteLayout></StrictMode>);
