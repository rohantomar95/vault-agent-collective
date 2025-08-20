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
              {/* Professional Filter Section */}
              <div className="mb-16">
                <div className="max-w-7xl mx-auto">
                  {/* Filter Header */}
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Discover Trading Agents</h2>
                    <p className="text-foreground-secondary">Filter and find the perfect AI trading strategy for your portfolio</p>
                  </div>

                  {/* Main Filter Panel */}
                  <div className="glass-card rounded-3xl p-8 border border-border-light/30 shadow-glow">
                    {/* Search Section */}
                    <div className="mb-8">
                      <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-0 gradient-primary opacity-5 rounded-2xl blur-xl"></div>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search by agent name, strategy, or performance..."
                            className="w-full px-6 py-4 pl-14 pr-20 rounded-2xl bg-background/80 border border-border-light/40 text-foreground placeholder-muted-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition-all shadow-inner"
                          />
                          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all duration-300 font-medium">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quick Filters */}
                    <div className="mb-8">
                      <div className="flex flex-wrap justify-center gap-3">
                        {[
                          { label: 'All Agents', count: '24', active: true },
                          { label: 'High Returns', count: '8', icon: '📈' },
                          { label: 'Low Risk', count: '12', icon: '🛡️' },
                          { label: 'New Today', count: '3', icon: '✨' },
                          { label: 'Most Popular', count: '6', icon: '🔥' },
                          { label: 'AI Recommended', count: '4', icon: '🤖' }
                        ].map((filter) => (
                          <button
                            key={filter.label}
                            className={`group relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                              filter.active
                                ? 'bg-primary text-primary-foreground shadow-glow transform scale-105'
                                : 'bg-background-secondary/40 text-foreground-secondary hover:text-foreground hover:bg-background-secondary/80 border border-border-light/30 hover:border-primary/40 hover:shadow-md hover:scale-105'
                            }`}
                          >
                            {filter.icon && <span className="text-base">{filter.icon}</span>}
                            <span>{filter.label}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold transition-colors ${
                              filter.active
                                ? 'bg-primary-foreground/20 text-primary-foreground'
                                : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                            }`}>
                              {filter.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Performance Filter */}
                      <div className="filter-card">
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          <span className="flex items-center gap-2">
                            📊 Performance
                          </span>
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border-light/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:border-primary/30">
                          <option value="">All Performance</option>
                          <option value="performance">🚀 Highest Returns (30%+)</option>
                          <option value="consistent">📈 Consistent Growth (15-30%)</option>
                          <option value="stable">🎯 Stable Returns (5-15%)</option>
                          <option value="volume">💰 Highest Volume</option>
                          <option value="newest">✨ Recently Added</option>
                        </select>
                      </div>

                      {/* Risk Level Filter */}
                      <div className="filter-card">
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          <span className="flex items-center gap-2">
                            🛡️ Risk Level
                          </span>
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border-light/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:border-primary/30">
                          <option value="">All Risk Levels</option>
                          <option value="low">🟢 Conservative (Low Risk)</option>
                          <option value="medium">🟡 Balanced (Medium Risk)</option>
                          <option value="high">🔴 Aggressive (High Risk)</option>
                          <option value="ultra">⚡ Ultra High Risk</option>
                        </select>
                      </div>

                      {/* Strategy Type Filter */}
                      <div className="filter-card">
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          <span className="flex items-center gap-2">
                            ⚙️ Strategy Type
                          </span>
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border-light/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:border-primary/30">
                          <option value="">All Strategies</option>
                          <option value="arbitrage">⚡ Arbitrage Trading</option>
                          <option value="momentum">📈 Momentum Trading</option>
                          <option value="scalping">🎯 Scalping</option>
                          <option value="swing">🔄 Swing Trading</option>
                          <option value="grid">📊 Grid Trading</option>
                          <option value="dca">💰 DCA Strategy</option>
                        </select>
                      </div>

                      {/* Market Filter */}
                      <div className="filter-card">
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          <span className="flex items-center gap-2">
                            🌍 Market Focus
                          </span>
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border-light/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all cursor-pointer hover:border-primary/30">
                          <option value="">All Markets</option>
                          <option value="crypto">₿ Cryptocurrency</option>
                          <option value="forex">💱 Forex</option>
                          <option value="stocks">📈 Stock Market</option>
                          <option value="commodities">🥇 Commodities</option>
                          <option value="defi">🔥 DeFi Protocols</option>
                        </select>
                      </div>
                    </div>

                    {/* Filter Summary & Clear */}
                    <div className="mt-8 pt-6 border-t border-border-light/20">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Showing 24 trading agents
                          </span>
                          <span>•</span>
                          <span>Updated 2 minutes ago</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="px-4 py-2 text-sm text-foreground-secondary hover:text-foreground transition-colors">
                            Clear Filters
                          </button>
                          <button className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all duration-300 font-medium text-sm">
                            Save Filter Preset
                          </button>
                        </div>
                      </div>
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