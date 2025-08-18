import React from 'react';
import AgentCard from './AgentCard';
import { agents } from '@/data/agents';

const AgentMarketplace: React.FC = () => {

return (
    <section className="py-16 px-6 bg-background min-h-screen">
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
                capitalDeployed={agent.capitalDeployed}
                sharePrice={agent.sharePrice}
                roi24h={agent.roi24h}
                totalShares={agent.totalShares}
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