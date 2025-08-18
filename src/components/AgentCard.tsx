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
    <div className="trading-card group hover:scale-[1.02] transition-spring">
      {/* Header with Agent Info */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-smooth">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background-secondary border border-border-light text-foreground-secondary">
              {category}
            </span>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRiskColor(risk)}`}>
          {risk} Risk
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-background-secondary/80 p-4 rounded-xl border border-border">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">APY</div>
          <div className="text-lg font-bold text-primary font-mono">{apy}</div>
        </div>
        <div className="bg-background-secondary/80 p-4 rounded-xl border border-border">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">TVL</div>
          <div className="text-lg font-bold font-mono">{tvl}</div>
        </div>
        <div className="bg-background-secondary/80 p-4 rounded-xl border border-border">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Capital</div>
          <div className="text-sm font-bold font-mono">{capitalDeployed}</div>
        </div>
        <div className="bg-background-secondary/80 p-4 rounded-xl border border-border">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Share Price</div>
          <div className="text-sm font-bold text-primary font-mono">{sharePrice}</div>
        </div>
      </div>
      
      {/* Performance Section */}
      <div className="bg-background-secondary/80 p-4 rounded-xl border border-border mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">24h Performance</span>
          <span className={`text-lg font-bold font-mono ${roi24h >= 0 ? 'text-success' : 'text-destructive'}`}>
            {roi24h > 0 ? '+' : ''}{roi24h}%
          </span>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Total Shares</span>
          <span className="font-mono">{totalShares}</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Button
            className="bg-success hover:bg-success/90 text-success-foreground font-semibold transition-smooth shadow-glow"
            onClick={() => { setMode('buy'); setDialogOpen(true); }}
          >
            Buy Shares
          </Button>
          <Button
            variant="outline"
            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-smooth"
            onClick={() => { setMode('sell'); setDialogOpen(true); }}
          >
            Sell Shares
          </Button>
        </div>
        <Button
          variant="outline"
          className="w-full border-border-light hover:border-primary hover:text-primary transition-smooth"
          onClick={() => navigate(`/agents/${slug}`)}
        >
          View Details
        </Button>
        
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