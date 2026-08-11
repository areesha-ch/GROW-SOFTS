import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/products';

interface LegalPagesProps {
  currentPage: string | null;
  onClose: () => void;
}

export function LegalPages({ currentPage, onClose }: LegalPagesProps) {
  if (!currentPage) return null;
  const c = companyInfo;
  const pages: Record<string, { title: string; content: React.ReactNode }> = {
    terms: {
      title: 'Terms of Service',
      content: (
        <div className="space-y-6 text-gray-500">
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3><p>By accessing and using the services provided by {c.name} ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">2. Description of Services</h3><p>{c.name} provides digital products including but not limited to ebooks, templates, guides, and educational materials. All products are delivered digitally via email or download links.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">3. Purchase and Payment</h3><p>All prices are listed in US dollars. Payment must be made in full before product delivery. We accept major credit cards and PayPal. By making a purchase, you represent that you have the legal right to use the payment method provided.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h3><p>All content, products, and materials available on our website are the property of {c.name} and are protected by copyright, trademark, and other intellectual property laws. Purchase of a product grants you a personal, non-exclusive, non-transferable license to use the product.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h3><p>{c.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">6. Contact Information</h3><p>For any questions regarding these Terms of Service, please contact us at:<br />Email: {c.email}<br />Phone: {c.phone}<br />Address: {c.address}, {c.city}, {c.state} {c.zip}</p></section>
        </div>
      ),
    },
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6 text-gray-500">
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h3><p>We collect personal information (name, email, phone, billing info), payment information (processed securely), and usage data about how you interact with our website.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h3><p>We use your information to process orders, send delivery emails, provide customer support, and improve our products and services.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">3. Information Sharing</h3><p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">4. Contact Us</h3><p>If you have any questions about this Privacy Policy, please contact us at:<br />Email: {c.email}<br />Phone: {c.phone}</p></section>
        </div>
      ),
    },
    cookies: {
      title: 'Cookie Policy',
      content: (
        <div className="space-y-6 text-gray-500">
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies</h3><p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">2. Types of Cookies We Use</h3><p>We use Essential Cookies (required for the website to function), Analytics Cookies (to understand how visitors interact with our website), and Preference Cookies (to remember your settings).</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">3. Contact Us</h3><p>If you have any questions about our Cookie Policy, please contact us at:<br />Email: {c.email}</p></section>
        </div>
      ),
    },
    refund: {
      title: 'Refund Policy',
      content: (
        <div className="space-y-6 text-gray-500">
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">1. Overview</h3><p>At {c.name}, we strive to ensure your satisfaction with every purchase. Due to the digital nature of our products, we have specific guidelines for refunds.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">2. Refund Eligibility</h3><p>We offer refunds under the following conditions: the product was not delivered due to technical issues, the product description was significantly inaccurate, the product files are corrupted or inaccessible, or refund request is made within 30 days of purchase.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">3. Non-Refundable Items</h3><p>Refunds will not be provided for products that have been downloaded and accessed, change of mind after purchase, or products purchased more than 30 days ago.</p></section>
          <section><h3 className="text-xl font-bold text-gray-900 mb-3">4. Contact Information</h3><p>For refund inquiries, please contact us at:<br />Email: {c.email}<br />Phone: {c.phone}</p></section>
        </div>
      ),
    },
  };
  const page = pages[currentPage];
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="section-padding py-8">
        <div className="container-max max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="icon" onClick={onClose} className="rounded-full border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100"><ArrowLeft className="w-5 h-5" /></Button>
            <h1 className="text-3xl font-bold text-gray-900">{page.title}</h1>
          </div>
          <div className="max-w-none">{page.content}</div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button variant="outline" onClick={onClose} className="flex items-center gap-2 border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100"><ArrowLeft className="w-4 h-4" /> Back to Website</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
