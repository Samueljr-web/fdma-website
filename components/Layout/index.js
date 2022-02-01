import { Navbar, Footer } from "../index";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="">{children}</main>

      <Footer overlayBg="#29279B" />
    </>
  );
}
