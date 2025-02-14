import type { Metadata } from "next";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Love Dues",
  description: "Get Insaaf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-11/12 md:max-w-7xl  mx-auto antialiased bg-gradient-to-l from-customLightPink to-customPink mt-12 md:mt-24`}
      >
        <Suspense> {children}</Suspense>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
