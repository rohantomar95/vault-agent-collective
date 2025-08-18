import React from 'react';
import { TrendingUp, TrendingDown, Wallet, Target, Activity, Crown } from 'lucide-react';
import { demoPortfolioSummary, demoPositions } from '@/data/portfolio';

const PortfolioOverview: React.FC = () => {
  const summary = demoPortfolioSummary;
  
  return (
    <div className="space-y-8">
      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Portfolio Value */}
        <div className="agent-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Wallet className="h-6 w-6" />
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${
              summary.totalPnl >= 0 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
            }`}>
              {summary.totalPnl >= 0 ? '+' : ''}{summary.totalPnlPercentage.toFixed(2)}%
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Portfolio Value</p>
            <p className="text-2xl font-bold font-mono">${summary.currentValue.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Invested: ${summary.totalInvested.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Total P&L */}
        <div className="agent-card">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${
              summary.totalPnl >= 0 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
            }`}>
              {summary.totalPnl >= 0 ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />}
            </div>
            <div className="text-xs text-muted-foreground">All Time</div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total P&L</p>
            <p className={`text-2xl font-bold font-mono ${
              summary.totalPnl >= 0 ? 'text-success' : 'text-destructive'
            }`}>
              {summary.totalPnl >= 0 ? '+' : ''}${Math.abs(summary.totalPnl).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Active Positions */}
        <div className="agent-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <Target className="h-6 w-6" />
            </div>
            <div className="text-xs text-muted-foreground">Agents</div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Active Positions</p>
            <p className="text-2xl font-bold font-mono">{summary.totalPositions}</p>
          </div>
        </div>

        {/* Best Performer */}
        <div className="agent-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-warning/10 text-warning">
              <Crown className="h-6 w-6" />
            </div>
            <div className="text-xs text-success">+5.08%</div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Best Performer</p>
            <p className="text-sm font-bold">{summary.bestPerformer}</p>
          </div>
        </div>
      </div>

      {/* Current Positions */}
      <div className="agent-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Current Positions</h3>
            <p className="text-sm text-muted-foreground">Your active agent holdings</p>
          </div>
        </div>

        <div className="space-y-4">
          {demoPositions.map((position) => (
            <div key={position.agentSlug} className="flex items-center justify-between p-4 rounded-xl bg-background-secondary/60 border border-border-light/50">
              <div className="flex-1">
                <h4 className="font-bold text-foreground mb-1">{position.agentName}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{position.shares.toLocaleString()} shares</span>
                  <span>•</span>
                  <span>Avg: ${position.avgBuyPrice.toFixed(2)}</span>
                  <span>•</span>
                  <span>Current: ${position.currentPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-bold font-mono text-foreground mb-1">
                  ${position.currentValue.toLocaleString()}
                </div>
                <div className={`text-sm font-bold ${
                  position.pnl >= 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {position.pnl >= 0 ? '+' : ''}${Math.abs(position.pnl).toLocaleString()} ({position.pnlPercentage >= 0 ? '+' : ''}{position.pnlPercentage.toFixed(2)}%)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;