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
              {/* Advanced Filters */}
              <div className="mb-12">
                <div className="glass-card rounded-2xl p-6 border border-border-light/30 max-w-7xl mx-auto">
                  <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                    {/* Search and Quick Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                      <div className="relative flex-1 max-w-md">
                        <input
                          type="text"
                          placeholder="Search agents..."
                          className="w-full px-4 py-3 pl-12 rounded-xl bg-background-secondary/60 border border-border-light/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 flex-wrap">
                        {['All', 'High Returns', 'Low Risk', 'New', 'Popular'].map((filter) => (
                          <button
                            key={filter}
                            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                              filter === 'All'
                                ? 'bg-primary text-primary-foreground shadow-glow'
                                : 'bg-background-secondary/60 text-foreground-secondary hover:text-foreground hover:bg-background-secondary border border-border-light/30 hover:border-primary/30'
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Filter Dropdowns */}
                    <div className="flex gap-4 items-center">
                      <select className="px-4 py-3 rounded-xl bg-background-secondary/60 border border-border-light/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                        <option value="">Sort by Performance</option>
                        <option value="performance">Highest Returns</option>
                        <option value="risk">Lowest Risk</option>
                        <option value="volume">Highest Volume</option>
                        <option value="newest">Newest</option>
                      </select>
                      
                      <select className="px-4 py-3 rounded-xl bg-background-secondary/60 border border-border-light/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                        <option value="">Risk Level</option>
                        <option value="low">Low Risk</option>
                        <option value="medium">Medium Risk</option>
                        <option value="high">High Risk</option>
                      </select>

                      <select className="px-4 py-3 rounded-xl bg-background-secondary/60 border border-border-light/30 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all">
                        <option value="">Strategy Type</option>
                        <option value="arbitrage">Arbitrage</option>
                        <option value="momentum">Momentum</option>
                        <option value="scalping">Scalping</option>
                        <option value="swing">Swing Trading</option>
                      </select>
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