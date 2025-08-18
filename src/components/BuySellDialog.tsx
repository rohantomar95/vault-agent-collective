import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BuySellDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'buy' | 'sell';
  sharePrice: number; // numeric
  onConfirm: (payload: { amount: number; shares: number }) => void;
}

const formatNumber = (n: number) =>
  isNaN(n) ? '0' : n.toLocaleString(undefined, { maximumFractionDigits: 4 });

const BuySellDialog: React.FC<BuySellDialogProps> = ({ open, onOpenChange, mode, sharePrice, onConfirm }) => {
  const [amount, setAmount] = React.useState<number>(0); // USD
  const [shares, setShares] = React.useState<number>(0);

  React.useEffect(() => {
    setAmount(0);
    setShares(0);
  }, [mode, open]);

  const handleAmountChange = (v: string) => {
    const num = parseFloat(v);
    const safe = isNaN(num) ? 0 : num;
    setAmount(safe);
    setShares(sharePrice > 0 ? safe / sharePrice : 0);
  };

  const handleSharesChange = (v: string) => {
    const num = parseFloat(v);
    const safe = isNaN(num) ? 0 : num;
    setShares(safe);
    setAmount(safe * sharePrice);
  };

  const isBuy = mode === 'buy';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isBuy ? 'Buy Agent Shares' : 'Sell Agent Shares'}</DialogTitle>
          <DialogDescription>
            Current share price: ${formatNumber(sharePrice)}. {isBuy ? 'Enter amount to invest.' : 'Enter number of shares to sell.'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          {isBuy ? (
            <div className="grid gap-2">
              <Label htmlFor="amount">Deposit Amount (USD)</Label>
              <Input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                placeholder="1000"
                value={amount || ''}
                onChange={(e) => handleAmountChange(e.target.value)}
              />
              <div className="text-sm text-muted-foreground">Estimated Shares: {formatNumber(shares)}</div>
            </div>
          ) : (
            <div className="grid gap-2">
              <Label htmlFor="shares">Shares to Sell</Label>
              <Input
                id="shares"
                type="number"
                min="0"
                step="0.0001"
                placeholder="100"
                value={shares || ''}
                onChange={(e) => handleSharesChange(e.target.value)}
              />
              <div className="text-sm text-muted-foreground">Estimated Payout (USD): ${formatNumber(amount)}</div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button
            onClick={() => onConfirm({ amount, shares })}
            disabled={isBuy ? amount <= 0 : shares <= 0}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuySellDialog;
