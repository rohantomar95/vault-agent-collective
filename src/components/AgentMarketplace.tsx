import React, { useState } from 'react';
import AgentCard from './AgentCard';
import PortfolioOverview from './PortfolioOverview';
import TransactionHistory from './TransactionHistory';
import { agents } from '@/data/agents';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const AgentMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'portfolio' | 'history'>('marketplace');
  const [sortBy, setSortBy] = useState('Sort by Performance');
  const [riskLevel, setRiskLevel] = useState('Risk Level');
  const [strategyType, setStrategyType] = useState('Strategy Type');
  const [market, setMarket] = useState('Market');
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
              {/* Compact Filter Section */}
              <div className="mb-12">
                <div className="max-w-7xl mx-auto">
                  <div className="glass-card rounded-2xl p-6 border border-border-light/30">
                    {/* Search and Quick Filters Row */}
                    <div className="flex flex-col lg:flex-row gap-4 items-center mb-6">
                      {/* Search */}
                      <div className="relative flex-1 max-w-md">
                        <input
                          type="text"
                          placeholder="Search agents..."
                          className="w-full px-4 py-3 pl-11 rounded-xl bg-background/60 border border-border-light/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Quick Filters */}
                      <div className="flex gap-2 flex-wrap">
                        {['All', 'High Returns', 'Low Risk', 'Popular'].map((filter) => (
                          <button
                            key={filter}
                            className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                              filter === 'All'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-background-secondary/60 text-foreground-secondary hover:text-foreground hover:bg-background-secondary border border-border-light/30'
                            }`}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Advanced Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {/* Sort By Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-background/80 border border-border-light/30 text-foreground hover:border-primary/50 transition-all text-sm font-medium">
                          <span className={sortBy === 'Sort by Performance' ? 'text-muted-foreground' : 'text-foreground'}>
                            {sortBy}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background border-border-light/30 shadow-glow z-50">
                          <DropdownMenuItem onClick={() => setSortBy('Highest Returns')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            Highest Returns
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSortBy('Lowest Risk')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            Lowest Risk
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSortBy('Highest Volume')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            Highest Volume
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSortBy('Newest')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            Newest
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      
                      {/* Risk Level Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-background/80 border border-border-light/30 text-foreground hover:border-primary/50 transition-all text-sm font-medium">
                          <span className={riskLevel === 'Risk Level' ? 'text-muted-foreground' : 'text-foreground'}>
                            {riskLevel}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background border-border-light/30 shadow-glow z-50">
                          <DropdownMenuItem onClick={() => setRiskLevel('Low Risk')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            🟢 Low Risk
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setRiskLevel('Medium Risk')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            🟡 Medium Risk
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setRiskLevel('High Risk')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            🔴 High Risk
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* Strategy Type Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-background/80 border border-border-light/30 text-foreground hover:border-primary/50 transition-all text-sm font-medium">
                          <span className={strategyType === 'Strategy Type' ? 'text-muted-foreground' : 'text-foreground'}>
                            {strategyType}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background border-border-light/30 shadow-glow z-50">
                          <DropdownMenuItem onClick={() => setStrategyType('Arbitrage')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            ⚡ Arbitrage
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setStrategyType('Momentum')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            📈 Momentum
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setStrategyType('Scalping')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            🎯 Scalping
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setStrategyType('Swing Trading')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            🔄 Swing Trading
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* Market Dropdown */}
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-background/80 border border-border-light/30 text-foreground hover:border-primary/50 transition-all text-sm font-medium">
                          <span className={market === 'Market' ? 'text-muted-foreground' : 'text-foreground'}>
                            {market}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background border-border-light/30 shadow-glow z-50">
                          <DropdownMenuItem onClick={() => setMarket('Crypto')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            ₿ Crypto
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setMarket('Forex')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            💱 Forex
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setMarket('Stocks')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            📈 Stocks
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setMarket('Commodities')} className="hover:bg-primary/10 hover:text-primary cursor-pointer">
                            🥇 Commodities
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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

        </div>
      </section>
    </main>
  );
};

export default AgentMarketplace;