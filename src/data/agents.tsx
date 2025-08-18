import React from 'react';
import { Zap, TrendingUp, Shield, BarChart3, Target, AlertTriangle } from 'lucide-react';

export type Agent = {
  name: string;
  description: string;
  apy: string;
  tvl: string;
  risk: 'Low' | 'Medium' | 'High';
  category: string;
  performance: number;
  capitalDeployed: string;
  sharePrice: string;
  roi24h: number;
  totalShares: string;
  icon: React.ReactNode;
};

export const agents: Agent[] = [
  {
    name: 'DeFi Yield Optimizer',
    description:
      'Automatically finds and compounds the highest-yielding opportunities across multiple DeFi protocols. Rebalances positions based on market conditions.',
    apy: '24.5%',
    tvl: '$12.8M',
    risk: 'Medium',
    category: 'Yield Farming',
    performance: 18.7,
    capitalDeployed: '$8.2M',
    sharePrice: '$1.24',
    roi24h: 2.3,
    totalShares: '10.3M',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: 'Arbitrage Hunter',
    description:
      'Exploits price differences across exchanges and DEXs. Executes lightning-fast trades to capture risk-free profits from market inefficiencies.',
    apy: '31.2%',
    tvl: '$8.4M',
    risk: 'Low',
    category: 'Arbitrage',
    performance: 12.3,
    capitalDeployed: '$6.8M',
    sharePrice: '$1.68',
    roi24h: 1.8,
    totalShares: '5.0M',
    icon: <Zap className="h-6 w-6" />,
  },
  {
    name: 'Portfolio Rebalancer',
    description:
      'Maintains optimal asset allocation using advanced algorithms. Dynamically adjusts weights based on market volatility and momentum indicators.',
    apy: '15.8%',
    tvl: '$15.2M',
    risk: 'Low',
    category: 'Portfolio Management',
    performance: 9.4,
    capitalDeployed: '$12.1M',
    sharePrice: '$1.08',
    roi24h: 0.9,
    totalShares: '14.1M',
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    name: 'MEV Extraction Bot',
    description:
      'Identifies and captures Maximum Extractable Value opportunities. Specializes in sandwich attacks, liquidations, and front-running protection.',
    apy: '42.1%',
    tvl: '$6.1M',
    risk: 'High',
    category: 'MEV',
    performance: 28.9,
    capitalDeployed: '$4.2M',
    sharePrice: '$2.45',
    roi24h: 4.2,
    totalShares: '2.5M',
    icon: <Target className="h-6 w-6" />,
  },
  {
    name: 'Options Strategy Engine',
    description:
      'Executes complex options strategies including covered calls, protective puts, and volatility plays. Adapts to changing market conditions.',
    apy: '19.6%',
    tvl: '$9.7M',
    risk: 'Medium',
    category: 'Options Trading',
    performance: 15.2,
    capitalDeployed: '$7.8M',
    sharePrice: '$1.32',
    roi24h: 1.5,
    totalShares: '7.3M',
    icon: <Shield className="h-6 w-6" />,
  },
  {
    name: 'Liquidation Guardian',
    description:
      'Prevents liquidations by monitoring collateral ratios and automatically managing positions. Provides insurance against market crashes.',
    apy: '8.3%',
    tvl: '$22.1M',
    risk: 'Low',
    category: 'Risk Management',
    performance: 6.1,
    capitalDeployed: '$18.9M',
    sharePrice: '$1.05',
    roi24h: 0.3,
    totalShares: '21.0M',
    icon: <AlertTriangle className="h-6 w-6" />,
  },
];

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const findAgentBySlug = (slug: string) =>
  agents.find((a) => slugify(a.name) === slug);
