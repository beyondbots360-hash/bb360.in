import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bb360.in"),
  title: {
    default: "Beyond Bots | AI Automation, Web Development & Digital Growth Solutions",
    template: "%s | Beyond Bots",
  },
  description:
    "Beyond Bots helps businesses scale with custom web development, AI-powered automation, agentic solutions, and digital marketing services. Build smarter, grow faster.",
  keywords: [
    "AI Automation Services India",
    "Agentic AI Solutions",
    "Web Development Company India",
    "Digital Marketing Agency India",
    "AI Powered Business Solutions",
    "Website Development Services",
    "Business Process Automation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beyond Bots | AI Automation, Web Development & Digital Growth Solutions",
    description:
      "Beyond Bots helps businesses scale with custom web development, AI-powered automation, agentic solutions, and digital marketing services. Build smarter, grow faster.",
    url: "https://www.bb360.in",
    siteName: "Beyond Bots",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Bots | AI Automation, Web Development & Digital Growth Solutions",
    description:
      "Beyond Bots helps businesses scale with custom web development, AI-powered automation, agentic solutions, and digital marketing services. Build smarter, grow faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Organization Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.bb360.in/#organization",
    "name": "Beyond Bots",
    "url": "https://www.bb360.in",
    "logo": "https://www.bb360.in/assets/images/logo.jpg",
    "image": "https://www.bb360.in/assets/images/logo.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629",
    },
    "description":
      "Beyond Bots builds intelligent digital systems combining custom web development, agentic AI solutions, and digital marketing to scale businesses in India & globally.",
  };

  // JSON-LD WebSite Structured Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.bb360.in/#website",
    "name": "Beyond Bots",
    "url": "https://www.bb360.in",
  };

  // JSON-LD Service Structured Data
  const servicesSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Beyond Bots",
        "url": "https://www.bb360.in",
        "logo": "https://www.bb360.in/assets/images/logo.jpg"
      },
      "description": "We create high-performance websites and web applications designed to attract customers and support business growth."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Agentic Solutions",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Beyond Bots",
        "url": "https://www.bb360.in",
        "logo": "https://www.bb360.in/assets/images/logo.jpg"
      },
      "description": "Transform operations with intelligent AI systems that automate workflows and improve productivity."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Beyond Bots",
        "url": "https://www.bb360.in",
        "logo": "https://www.bb360.in/assets/images/logo.jpg"
      },
      "description": "Increase visibility, attract qualified leads, and accelerate growth through strategic digital marketing campaigns."
    }
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-brand-white text-brand-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
