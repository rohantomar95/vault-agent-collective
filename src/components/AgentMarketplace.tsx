import React from 'react';
import AgentCard from './AgentCard';
import { Zap, TrendingUp, Shield, BarChart3, Target, AlertTriangle } from 'lucide-react';

const AgentMarketplace: React.FC = () => {
  const agents = [
    {
      name: "DeFi Yield Optimizer",
      description: "Automatically finds and compounds the highest-yielding opportunities across multiple DeFi protocols. Rebalances positions based on market conditions.",
      apy: "24.5%",
      tvl: "$12.8M",
      risk: "Medium" as const,
      category: "Yield Farming",
      performance: 18.7,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Arbitrage Hunter",
      description: "Exploits price differences across exchanges and DEXs. Executes lightning-fast trades to capture risk-free profits from market inefficiencies.",
      apy: "31.2%",
      tvl: "$8.4M",
      risk: "Low" as const,
      category: "Arbitrage",
      performance: 12.3,
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "Portfolio Rebalancer",
      description: "Maintains optimal asset allocation using advanced algorithms. Dynamically adjusts weights based on market volatility and momentum indicators.",
      apy: "15.8%",
      tvl: "$15.2M",
      risk: "Low" as const,
      category: "Portfolio Management",
      performance: 9.4,
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      name: "MEV Extraction Bot",
      description: "Identifies and captures Maximum Extractable Value opportunities. Specializes in sandwich attacks, liquidations, and front-running protection.",
      apy: "42.1%",
      tvl: "$6.1M",
      risk: "High" as const,
      category: "MEV",
      performance: 28.9,
      icon: <Target className="h-6 w-6" />
    },
    {
      name: "Options Strategy Engine",
      description: "Executes complex options strategies including covered calls, protective puts, and volatility plays. Adapts to changing market conditions.",
      apy: "19.6%",
      tvl: "$9.7M",
      risk: "Medium" as const,
      category: "Options Trading",
      performance: 15.2,
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Liquidation Guardian",
      description: "Prevents liquidations by monitoring collateral ratios and automatically managing positions. Provides insurance against market crashes.",
      apy: "8.3%",
      tvl: "$22.1M",
      risk: "Low" as const,
      category: "Risk Management",
      performance: 6.1,
      icon: <AlertTriangle className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-primary bg-clip-text text-transparent">AI Agent</span>{" "}
            <span className="text-foreground">Marketplace</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our curated selection of specialized AI trading agents. 
            Each agent focuses on specific strategies to maximize returns while managing risk.
          </p>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div key={agent.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <AgentCard
                name={agent.name}
                description={agent.description}
                apy={agent.apy}
                tvl={agent.tvl}
                risk={agent.risk}
                category={agent.category}
                performance={agent.performance}
                icon={agent.icon}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find the perfect agent? Request a custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-secondary hover:bg-secondary-light transition-smooth rounded-lg font-semibold">
              Request Custom Agent
            </button>
            <button className="px-6 py-3 border border-border-light hover:border-primary transition-smooth rounded-lg font-semibold">
              View All Agents
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentMarketplace;