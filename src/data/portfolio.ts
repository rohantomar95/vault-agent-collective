export interface UserPosition {
  agentName: string;
  agentSlug: string;
  shares: number;
  avgBuyPrice: number;
  currentPrice: number;
  totalInvested: number;
  currentValue: number;
  pnl: number;
  pnlPercentage: number;
  lastUpdated: string;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  agentName: string;
  agentSlug: string;
  shares: number;
  pricePerShare: number;
  totalAmount: number;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface PortfolioSummary {
  totalInvested: number;
  currentValue: number;
  totalPnl: number;
  totalPnlPercentage: number;
  totalPositions: number;
  bestPerformer: string;
  worstPerformer: string;
}

// Demo user positions
export const demoPositions: UserPosition[] = [
  {
    agentName: 'DeFi Yield Optimizer',
    agentSlug: 'defi-yield-optimizer',
    shares: 2500,
    avgBuyPrice: 1.18,
    currentPrice: 1.24,
    totalInvested: 2950,
    currentValue: 3100,
    pnl: 150,
    pnlPercentage: 5.08,
    lastUpdated: '2024-01-18T10:30:00Z'
  },
  {
    agentName: 'Arbitrage Hunter',
    agentSlug: 'arbitrage-hunter',
    shares: 1200,
    avgBuyPrice: 1.65,
    currentPrice: 1.68,
    totalInvested: 1980,
    currentValue: 2016,
    pnl: 36,
    pnlPercentage: 1.82,
    lastUpdated: '2024-01-18T10:28:00Z'
  },
  {
    agentName: 'MEV Extraction Bot',
    agentSlug: 'mev-extraction-bot',
    shares: 800,
    avgBuyPrice: 2.40,
    currentPrice: 2.45,
    totalInvested: 1920,
    currentValue: 1960,
    pnl: 40,
    pnlPercentage: 2.08,
    lastUpdated: '2024-01-18T10:25:00Z'
  },
  {
    agentName: 'Portfolio Rebalancer',
    agentSlug: 'portfolio-rebalancer',
    shares: 5000,
    avgBuyPrice: 1.12,
    currentPrice: 1.08,
    totalInvested: 5600,
    currentValue: 5400,
    pnl: -200,
    pnlPercentage: -3.57,
    lastUpdated: '2024-01-18T10:32:00Z'
  }
];

// Demo transaction history
export const demoTransactions: Transaction[] = [
  {
    id: 'tx_001',
    type: 'buy',
    agentName: 'DeFi Yield Optimizer',
    agentSlug: 'defi-yield-optimizer',
    shares: 1500,
    pricePerShare: 1.20,
    totalAmount: 1800,
    timestamp: '2024-01-18T09:15:00Z',
    status: 'completed'
  },
  {
    id: 'tx_002',
    type: 'buy',
    agentName: 'Arbitrage Hunter',
    agentSlug: 'arbitrage-hunter',
    shares: 1200,
    pricePerShare: 1.65,
    totalAmount: 1980,
    timestamp: '2024-01-17T14:22:00Z',
    status: 'completed'
  },
  {
    id: 'tx_003',
    type: 'sell',
    agentName: 'Options Strategy Engine',
    agentSlug: 'options-strategy-engine',
    shares: 800,
    pricePerShare: 1.35,
    totalAmount: 1080,
    timestamp: '2024-01-17T11:45:00Z',
    status: 'completed'
  },
  {
    id: 'tx_004',
    type: 'buy',
    agentName: 'DeFi Yield Optimizer',
    agentSlug: 'defi-yield-optimizer',
    shares: 1000,
    pricePerShare: 1.15,
    totalAmount: 1150,
    timestamp: '2024-01-16T16:30:00Z',
    status: 'completed'
  },
  {
    id: 'tx_005',
    type: 'buy',
    agentName: 'MEV Extraction Bot',
    agentSlug: 'mev-extraction-bot',
    shares: 800,
    pricePerShare: 2.40,
    totalAmount: 1920,
    timestamp: '2024-01-16T13:20:00Z',
    status: 'completed'
  },
  {
    id: 'tx_006',
    type: 'buy',
    agentName: 'Portfolio Rebalancer',
    agentSlug: 'portfolio-rebalancer',
    shares: 5000,
    pricePerShare: 1.12,
    totalAmount: 5600,
    timestamp: '2024-01-15T10:10:00Z',
    status: 'completed'
  }
];

// Calculate portfolio summary
export const calculatePortfolioSummary = (positions: UserPosition[]): PortfolioSummary => {
  const totalInvested = positions.reduce((sum, pos) => sum + pos.totalInvested, 0);
  const currentValue = positions.reduce((sum, pos) => sum + pos.currentValue, 0);
  const totalPnl = currentValue - totalInvested;
  const totalPnlPercentage = totalInvested > 0 ? (totalPnl / totalInvested) * 100 : 0;
  
  const sortedByPnl = [...positions].sort((a, b) => b.pnlPercentage - a.pnlPercentage);
  
  return {
    totalInvested,
    currentValue,
    totalPnl,
    totalPnlPercentage,
    totalPositions: positions.length,
    bestPerformer: sortedByPnl[0]?.agentName || '',
    worstPerformer: sortedByPnl[sortedByPnl.length - 1]?.agentName || ''
  };
};

export const demoPortfolioSummary = calculatePortfolioSummary(demoPositions);