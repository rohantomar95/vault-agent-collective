import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';
import BuySellDialog from './BuySellDialog';
import { useToast } from '@/components/ui/use-toast';
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
      case 'Low': return 'text-success bg-success/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'High': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const getPerformanceColor = (perf: number) => {
    return perf >= 0 ? 'text-success' : 'text-destructive';
  };

  const { toast } = useToast();
  const navigate = useNavigate();
  const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '')) || 0;
  const sharePriceNum = parsePrice(sharePrice);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [mode, setMode] = React.useState<'buy' | 'sell'>('buy');
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <Card className={`bg-card shadow-card border-border transition-smooth card-glow hover:border-primary/50 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <Badge variant="outline" className="text-xs mt-1 border-border-light">
                {category}
              </Badge>
            </div>
          </div>
          <Badge className={`${getRiskColor(risk)} border-0`}>
            {risk} Risk
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-background-secondary p-3 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">APY</div>
            <div className="text-lg font-bold text-accent">{apy}</div>
          </div>
          <div className="bg-background-secondary p-3 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">TVL</div>
            <div className="text-lg font-bold">{tvl}</div>
          </div>
          <div className="bg-background-secondary p-3 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Capital</div>
            <div className="text-sm font-bold">{capitalDeployed}</div>
          </div>
          <div className="bg-background-secondary p-3 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Share Price</div>
            <div className="text-sm font-bold text-primary">{sharePrice}</div>
          </div>
        </div>
        
        <div className="bg-background-secondary p-3 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">24h ROI</span>
            <span className={`text-sm font-bold ${roi24h >= 0 ? 'text-success' : 'text-destructive'}`}>
              {roi24h > 0 ? '+' : ''}{roi24h}%
            </span>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Total Shares: {totalShares}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">30d Performance:</span>
            <span className={`text-sm font-semibold ${getPerformanceColor(performance)}`}>
              {performance > 0 ? '+' : ''}{performance}%
            </span>
          </div>
        </div>
        
        <div className="pt-2 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button
              className="bg-success hover:bg-success/90 transition-smooth text-background font-semibold"
              onClick={() => { setMode('buy'); setDialogOpen(true); }}
            >
              Buy Shares
            </Button>
            <Button
              variant="outline"
              className="border-destructive text-destructive hover:bg-destructive hover:text-background transition-smooth"
              onClick={() => { setMode('sell'); setDialogOpen(true); }}
            >
              Sell Shares
            </Button>
          </div>
          <Button
            variant="outline"
            className="w-full border-border-light hover:border-primary transition-smooth"
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
      </CardContent>
    </Card>
  );
};

export default AgentCard;