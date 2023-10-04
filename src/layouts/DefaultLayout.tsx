import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import bg from "@/assets/gradient-dark.jpg";

interface IDefaultLayout {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayout) => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <Navbar />

      <main className="container py-6 flex-grow max-w-7xl mx-auto relative">
        {children}
      </main>

      <Footer />
    </div>
  );
};
