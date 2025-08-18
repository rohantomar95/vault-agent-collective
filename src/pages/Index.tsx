import HeroSection from '@/components/HeroSection';
import AgentMarketplace from '@/components/AgentMarketplace';
import SharePriceFlow from '@/components/SharePriceFlow';
import SharePriceCalculator from '@/components/SharePriceCalculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AgentMarketplace />
      <SharePriceFlow />
      <div className="py-20 px-6 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-cosmic bg-clip-text text-transparent">Live Calculator</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try our interactive share price calculator to see how deposits, withdrawals, 
              and agent performance affect your investment value.
            </p>
          </div>
          <SharePriceCalculator />
        </div>
      </div>
    </div>
  );
};

export default Index;
