import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import BuySellDialog from './BuySellDialog';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface AgentCardProps {
  name: string;
  description: string;
  apy: string;
  tvl: string;
  risk: 'Low' | 'Medium' | 'High';
  category: string;
  performance: number;
  icon: React.ReactNode;
  capitalDeployed: string;
  sharePrice: string;
  roi24h: number;
  totalShares: string;
  className?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({
  name,
  description,
  apy,
  tvl,
  risk,
  category,
  performance,
  icon,
  capitalDeployed,
  sharePrice,
  roi24h,
  totalShares,
  className
}) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-success bg-success/10 border-success/20';
      case 'Medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'High': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-muted-foreground bg-muted/10 border-muted/20';
    }
  };

  const { toast } = useToast();
  const navigate = useNavigate();
  const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '')) || 0;
  const sharePriceNum = parsePrice(sharePrice);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [mode, setMode] = React.useState<'buy' | 'sell'>('buy');
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <div className="agent-card group">
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full gradient-primary rounded-2xl"></div>
      </div>
      
      {/* Header with Agent Info */}
      <div className="relative flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative p-4 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 gradient-primary opacity-20"></div>
            <div className="relative text-primary">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              {category}
            </div>
          </div>
        </div>
        <div className={`px-3 py-1.5 rounded-full text-xs font-bold border ${getRiskColor(risk)}`}>
          {risk}
        </div>
      </div>
      
      {/* Description */}
      <div className="relative mb-6">
        <p className="text-sm text-foreground-secondary leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* APY Display */}
      <div className="relative mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">APY</div>
        <div className="text-2xl font-bold text-gradient-primary font-mono">{apy}</div>
      </div>
      
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="relative p-4 rounded-xl bg-background-secondary/60 border border-border-light/50 backdrop-blur-sm">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">TVL</div>
          <div className="text-lg font-bold font-mono text-foreground">{tvl}</div>
        </div>
        <div className="relative p-4 rounded-xl bg-background-secondary/60 border border-border-light/50 backdrop-blur-sm">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Capital</div>
          <div className="text-lg font-bold font-mono text-foreground">{capitalDeployed}</div>
        </div>
        <div className="relative p-4 rounded-xl bg-background-secondary/60 border border-border-light/50 backdrop-blur-sm">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Share Price</div>
          <div className="text-lg font-bold text-accent font-mono">{sharePrice}</div>
        </div>
        <div className="relative p-4 rounded-xl bg-background-secondary/60 border border-border-light/50 backdrop-blur-sm">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">24h ROI</div>
          <div className={`text-lg font-bold font-mono ${roi24h >= 0 ? 'text-success' : 'text-destructive'}`}>
            {roi24h > 0 ? '+' : ''}{roi24h}%
          </div>
        </div>
      </div>
      
      {/* Total Shares */}
      <div className="relative p-4 rounded-xl bg-background-secondary/40 border border-border-light/30 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Total Shares</span>
          <span className="font-mono text-sm font-bold text-foreground">{totalShares}</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="relative space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            className="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 group bg-success/90 hover:bg-success text-white shadow-glow"
            onClick={() => { setMode('buy'); setDialogOpen(true); }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-success to-success/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative">Buy</span>
          </button>
          <button
            className="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 group bg-destructive/20 hover:bg-destructive/30 text-destructive border border-destructive/30"
            onClick={() => { setMode('sell'); setDialogOpen(true); }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative">Sell</span>
          </button>
        </div>
        <button
          className="relative w-full overflow-hidden px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 group bg-background-secondary/40 hover:bg-background-secondary/60 text-foreground border border-border-light/50 hover:border-primary/50"
          onClick={() => navigate(`/agents/${slug}`)}
        >
          <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <span className="relative">View Details</span>
        </button>
        
        <BuySellDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          mode={mode}
          sharePrice={sharePriceNum}
          onConfirm={({ amount, shares }) => {
            toast({
              title: mode === 'buy' ? 'Buy order submitted' : 'Sell order submitted',
              description:
                mode === 'buy'
                  ? `Investing $${amount.toLocaleString()} for ~${shares.toLocaleString()} shares`
                  : `Redeeming ~${shares.toLocaleString()} shares for $${amount.toLocaleString()}`,
            });
            setDialogOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default AgentCard;