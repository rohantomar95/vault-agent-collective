import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Zap, Shield } from 'lucide-react';

interface AgentCardProps {
  name: string;
  description: string;
  apy: string;
  tvl: string;
  risk: 'Low' | 'Medium' | 'High';
  category: string;
  performance: number;
  icon: React.ReactNode;
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
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background-secondary p-3 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">APY</div>
            <div className="text-lg font-bold text-accent">{apy}</div>
          </div>
          <div className="bg-background-secondary p-3 rounded-lg">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">TVL</div>
            <div className="text-lg font-bold">{tvl}</div>
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
        
        <div className="pt-2">
          <Button className="w-full bg-primary hover:bg-primary-light transition-smooth shadow-glow">
            Invest Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;