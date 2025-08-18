import React, { useState } from 'react';
import AgentCard from './AgentCard';
import PortfolioOverview from './PortfolioOverview';
import TransactionHistory from './TransactionHistory';
import { agents } from '@/data/agents';

const AgentMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'portfolio' | 'history'>('marketplace');
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-2 rounded-2xl bg-background-secondary/60 border border-border-light/30">
              {[
                { key: 'marketplace', label: 'Marketplace', count: agents.length },
                { key: 'portfolio', label: 'Portfolio', count: 4 },
                { key: 'history', label: 'History', count: 6 }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`relative px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-primary text-primary-foreground shadow-glow'
                      : 'text-foreground-secondary hover:text-foreground hover:bg-background-secondary/80'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === tab.key
                      ? 'bg-background-secondary/30 text-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'marketplace' && (
            <>
              {/* Hero Header */}
              <div className="text-center mb-20 space-y-12">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none">
                    <span className="text-gradient-cosmic block mb-4">AI TRADING</span>
                    <span className="text-foreground/90">AGENTS</span>
                  </h1>
                  <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed font-medium">
                    Next-generation AI agents executing ultra-sophisticated trading strategies.<br/>
                    <span className="text-gradient-primary font-bold">Stake on elite performers and maximize your returns.</span>
                  </p>
                </div>
                
                {/* Ultra Modern Stats Bar */}
                <div className="relative">
                  <div className="absolute inset-0 gradient-primary opacity-10 rounded-3xl blur-xl"></div>
                  <div className="relative flex flex-wrap justify-center items-center gap-12 py-8 px-10 glass-card max-w-5xl mx-auto rounded-3xl border border-border-light/30">
                    <div className="text-center group">
                      <div className="text-3xl md:text-4xl font-black text-gradient-primary font-mono mb-1">$127.3M</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">TOTAL TVL</div>
                    </div>
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-border-light to-transparent hidden md:block" />
                    <div className="text-center group">
                      <div className="text-3xl md:text-4xl font-black text-success font-mono mb-1">+24.7%</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">24H PERFORMANCE</div>
                    </div>
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-border-light to-transparent hidden md:block" />
                    <div className="text-center group">
                      <div className="text-3xl md:text-4xl font-black text-foreground font-mono mb-1">847</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">ACTIVE TRADERS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ultra Modern Agent Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                {agents.map((agent, index) => (
                  <div 
                    key={agent.name} 
                    className="animate-fade-in" 
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <AgentCard {...agent} />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'portfolio' && <PortfolioOverview />}
          {activeTab === 'history' && <TransactionHistory />}

          {/* Ultra Modern Bottom CTA Section */}
          <div className="text-center">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 gradient-primary opacity-5 rounded-3xl blur-2xl"></div>
              <div className="relative glass-card rounded-3xl p-12 border border-border-light/30">
                <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient-cosmic">Need a Custom Strategy?</h3>
                <p className="text-lg text-foreground-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                  Our elite AI can architect personalized trading agents precisely tailored to your risk profile and investment objectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="relative overflow-hidden px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 group shadow-glow-strong">
                    <div className="absolute inset-0 gradient-primary"></div>
                    <div className="absolute inset-0 gradient-cosmic opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative text-white">Request Custom Agent</span>
                  </button>
                  <button className="relative overflow-hidden px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 group bg-background-secondary/40 hover:bg-background-secondary/60 text-foreground border border-border-light/50 hover:border-primary/50">
                    <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <span className="relative">Explore All Strategies</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgentMarketplace;