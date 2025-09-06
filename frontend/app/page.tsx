import VendorRegistration from "@/components/VendorRegistration";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />

      <main className="container mx-auto">
        {/* <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4"
            style={{
              backgroundImage: "var(--gradient-primary)",
            }}
          >
            Aminia Vendor Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Kenya's trusted blockchain-powered social commerce platform. 
            Connect your business and start selling securely.
          </p>
        </div> */}

        <VendorRegistration />
      </main>
    </div>
  );
};

export default Index;