import Newsletter from './components/homeComponents/Newsletter';
import DiscoveryCall from './components/homeComponents/DiscoveryCall';
import Packages from './components/homeComponents/Packages';
import Hero from './components/homeComponents/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      <Packages />
      <DiscoveryCall />
      <Newsletter />
    </div>
  );
}
