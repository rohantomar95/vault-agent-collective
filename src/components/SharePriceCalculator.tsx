import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, TrendingDown, Calculator } from 'lucide-react';

interface SharePriceCalculatorProps {
  className?: string;
}

const SharePriceCalculator: React.FC<SharePriceCalculatorProps> = ({ className }) => {
  const [totalVaultValue, setTotalVaultValue] = useState(2500000);
  const [totalShares, setTotalShares] = useState(2000000);
  const [depositAmount, setDepositAmount] = useState(1000);
  const [sharesToRedeem, setSharesToRedeem] = useState(800);
  const [animatedSharePrice, setAnimatedSharePrice] = useState(1.25);

  const currentSharePrice = totalVaultValue / totalShares;
  const sharesMinted = depositAmount / currentSharePrice;
  const redeemPayout = sharesToRedeem * currentSharePrice;

  // Animate share price changes
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedSharePrice(prev => {
        const target = currentSharePrice;
        const diff = target - prev;
        return prev + diff * 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSharePrice]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${className}`}>
      {/* Share Price Display */}
      <Card className="bg-card shadow-card border-border transition-smooth hover:shadow-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Calculator className="h-5 w-5" />
            Current Share Price (NAV)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent animate-counter-up">
              ${animatedSharePrice.toFixed(4)}
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Total Vault: ${totalVaultValue.toLocaleString()} / {totalShares.toLocaleString()} shares
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Vault Value</label>
              <Input
                type="number"
                value={totalVaultValue}
                onChange={(e) => setTotalVaultValue(Number(e.target.value))}
                className="bg-background-secondary border-border-light"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Total Shares</label>
              <Input
                type="number"
                value={totalShares}
                onChange={(e) => setTotalShares(Number(e.target.value))}
                className="bg-background-secondary border-border-light"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buy & Sell Flows */}
      <Card className="bg-card shadow-card border-border transition-smooth hover:shadow-glow">
        <CardHeader>
          <CardTitle className="text-primary">Buy & Sell Flows</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Buy Flow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-success">
              <TrendingUp className="h-4 w-4" />
              <span className="font-semibold">Buy Shares</span>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Deposit Amount ($)</label>
              <Input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                className="bg-background-secondary border-border-light"
              />
            </div>
            <div className="bg-background-secondary p-3 rounded-lg">
              <div className="text-sm text-muted-foreground">Shares Minted</div>
              <div className="text-xl font-bold text-success">
                {sharesMinted.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>

          {/* Sell Flow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-destructive">
              <TrendingDown className="h-4 w-4" />
              <span className="font-semibold">Sell Shares</span>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Shares to Redeem</label>
              <Input
                type="number"
                value={sharesToRedeem}
                onChange={(e) => setSharesToRedeem(Number(e.target.value))}
                className="bg-background-secondary border-border-light"
              />
            </div>
            <div className="bg-background-secondary p-3 rounded-lg">
              <div className="text-sm text-muted-foreground">Payout Amount</div>
              <div className="text-xl font-bold text-destructive">
                ${redeemPayout.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SharePriceCalculator;