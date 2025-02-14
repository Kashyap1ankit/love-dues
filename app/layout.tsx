import type { Metadata } from "next";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "ValBreak",
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
        className={` max-w-7xl  mx-auto antialiased bg-gradient-to-l from-customLightPink to-customPink mt-24`}
      >
        {children}
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
