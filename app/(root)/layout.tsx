import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full min-h-screen max-w-7xl lg:mx-auto">
      <Header />
        <div className="flex-1 flex items-center justify-center">{children}</div>
      <Footer />
    </main>
  );
}
