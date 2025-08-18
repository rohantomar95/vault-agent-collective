import { useParams, useNavigate } from 'react-router-dom';
import { agents, findAgentBySlug, slugify } from '@/data/agents';
import { Button } from '@/components/ui/button';
import React from 'react';
import BuySellDialog from '@/components/BuySellDialog';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, TrendingUp, TrendingDown, Activity, DollarSign, Target, Users, Calendar, Shield } from 'lucide-react';
import { demoPositions } from '@/data/portfolio';

const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '')) || 0;

const AgentDetails: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const agent = slug ? findAgentBySlug(slug) : undefined;

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [mode, setMode] = React.useState<'buy' | 'sell'>('buy');

  // Find user's position in this agent (demo data)
  const userPosition = demoPositions.find(pos => pos.agentSlug === slug);

  if (!agent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center">
        <div className="agent-card max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-foreground">Agent Not Found</h1>
          <p className="text-foreground-secondary mb-8">The agent you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground shadow-glow"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const sharePriceNum = parsePrice(agent.sharePrice);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 bg-background-secondary/60 hover:bg-background-secondary/80 text-foreground border border-border-light/50 hover:border-primary/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Marketplace
          </button>

          {/* Agent Header */}
          <div className="agent-card mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <div className="relative p-6 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 gradient-primary opacity-20"></div>
                  <div className="relative text-primary text-3xl">
                    {agent.icon}
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-gradient-cosmic mb-3">{agent.name}</h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-primary/10 text-primary border border-primary/20">
                      {agent.category}
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${
                      agent.risk === 'Low' ? 'bg-success/10 text-success border-success/20' :
                      agent.risk === 'Medium' ? 'bg-warning/10 text-warning border-warning/20' :
                      'bg-destructive/10 text-destructive border-destructive/20'
                    }`}>
                      <Shield className="h-4 w-4 mr-2" />
                      {agent.risk} Risk
                    </div>
                  </div>
                  <p className="text-lg text-foreground-secondary max-w-3xl leading-relaxed">{agent.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Position (if exists) */}
          {userPosition && (
            <div className="agent-card mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Your Position</h3>
                  <p className="text-sm text-muted-foreground">Current holdings in this agent</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-background-secondary/60 border border-border-light/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Shares Owned</div>
                  <div className="text-lg font-bold font-mono">{userPosition.shares.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-xl bg-background-secondary/60 border border-border-light/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Avg Buy Price</div>
                  <div className="text-lg font-bold font-mono">${userPosition.avgBuyPrice.toFixed(2)}</div>
                </div>
                <div className="p-4 rounded-xl bg-background-secondary/60 border border-border-light/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Current Value</div>
                  <div className="text-lg font-bold font-mono">${userPosition.currentValue.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-xl bg-background-secondary/60 border border-border-light/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">P&L</div>
                  <div className={`text-lg font-bold font-mono ${userPosition.pnl >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {userPosition.pnl >= 0 ? '+' : ''}${Math.abs(userPosition.pnl).toLocaleString()} ({userPosition.pnlPercentage >= 0 ? '+' : ''}{userPosition.pnlPercentage.toFixed(2)}%)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Performance Card */}
            <div className="agent-card">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl ${agent.roi24h >= 0 ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                  {agent.roi24h >= 0 ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="font-bold">24h Performance</h3>
                  <p className="text-xs text-muted-foreground">Real-time ROI</p>
                </div>
              </div>
              <div className={`text-3xl font-black font-mono mb-2 ${agent.roi24h >= 0 ? 'text-success' : 'text-destructive'}`}>
                {agent.roi24h > 0 ? '+' : ''}{agent.roi24h}%
              </div>
              <div className="text-sm text-muted-foreground">
                APY: <span className="text-primary font-bold">{agent.apy}</span>
              </div>
            </div>

            {/* TVL Card */}
            <div className="agent-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Total Value Locked</h3>
                  <p className="text-xs text-muted-foreground">Assets under management</p>
                </div>
              </div>
              <div className="text-3xl font-black font-mono mb-2 text-foreground">
                {agent.tvl}
              </div>
              <div className="text-sm text-muted-foreground">
                Capital Deployed: <span className="font-bold">{agent.capitalDeployed}</span>
              </div>
            </div>

            {/* Share Info Card */}
            <div className="agent-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-warning/10 text-warning">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Share Information</h3>
                  <p className="text-xs text-muted-foreground">Current pricing</p>
                </div>
              </div>
              <div className="text-3xl font-black font-mono mb-2 text-primary">
                {agent.sharePrice}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Shares: <span className="font-bold">{agent.totalShares}</span>
              </div>
            </div>
          </div>

          {/* Trading Section */}
          <div className="agent-card">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <Activity className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Trade {agent.name} Shares</h3>
                  <p className="text-foreground-secondary">Buy or sell shares in this AI trading agent</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => { setMode('buy'); setDialogOpen(true); }}
                className="relative overflow-hidden p-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 group bg-success/90 hover:bg-success text-white shadow-glow-strong"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-success to-success/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <TrendingUp className="h-6 w-6" />
                  <span>Buy Shares</span>
                </div>
                <div className="relative text-sm opacity-80 mt-2">
                  Current Price: {agent.sharePrice}
                </div>
              </button>

              <button
                onClick={() => { setMode('sell'); setDialogOpen(true); }}
                className="relative overflow-hidden p-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 group bg-destructive/20 hover:bg-destructive/30 text-destructive border-2 border-destructive/30 hover:border-destructive/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <TrendingDown className="h-6 w-6" />
                  <span>Sell Shares</span>
                </div>
                <div className="relative text-sm opacity-80 mt-2">
                  {userPosition ? `You own ${userPosition.shares.toLocaleString()} shares` : 'No current position'}
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BuySellDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={mode}
        sharePrice={sharePriceNum}
        onConfirm={({ amount, shares }) => {
          toast({
            title: mode === 'buy' ? 'Buy order submitted' : 'Sell order submitted',
            description: mode === 'buy'
              ? `Investing $${amount.toLocaleString()} for ~${shares.toLocaleString()} shares`
              : `Redeeming ~${shares.toLocaleString()} shares for $${amount.toLocaleString()}`,
          });
          setDialogOpen(false);
        }}
      />
    </main>
  );
};

export default AgentDetails;
