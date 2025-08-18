import React from 'react';
import AgentCard from './AgentCard';
import { agents } from '@/data/agents';

const AgentMarketplace: React.FC = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
      
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-16 space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient-primary">AI Trading</span>
                <br />
                <span className="text-foreground">Agents</span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
                Professional-grade AI agents executing sophisticated trading strategies. 
                Stake on the best performers and earn from their success.
              </p>
            </div>
            
            {/* Live Stats Bar */}
            <div className="flex justify-center items-center gap-8 py-6 px-8 trading-card max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">$127.3M</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Total TVL</div>
              </div>
              <div className="w-px h-12 bg-border-light" />
              <div className="text-center">
                <div className="text-2xl font-bold text-success font-mono">+24.7%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">24H Performance</div>
              </div>
              <div className="w-px h-12 bg-border-light" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground font-mono">847</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Active Traders</div>
              </div>
            </div>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
            {agents.map((agent, index) => (
              <div key={agent.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <AgentCard {...agent} />
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="trading-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Strategy?</h3>
              <p className="text-foreground-secondary mb-6">
                Our AI can create personalized trading agents tailored to your risk profile and investment goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary hover:bg-primary-muted transition-smooth rounded-xl font-semibold text-primary-foreground shadow-glow">
                  Request Custom Agent
                </button>
                <button className="px-8 py-3 border border-border-light hover:border-primary transition-smooth rounded-xl font-semibold bg-background-tertiary/50">
                  View All Strategies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgentMarketplace;