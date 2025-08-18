import { useParams, useNavigate } from 'react-router-dom';
import { agents, findAgentBySlug, slugify } from '@/data/agents';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';
import BuySellDialog from '@/components/BuySellDialog';
import { useToast } from '@/components/ui/use-toast';

const parsePrice = (p: string) => parseFloat(p.replace(/[^0-9.]/g, '')) || 0;

const AgentDetails: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const agent = slug ? findAgentBySlug(slug) : undefined;

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [mode, setMode] = React.useState<'buy' | 'sell'>('buy');

  if (!agent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Agent not found</h1>
          <p className="text-muted-foreground mb-6">The agent you're looking for doesn't exist.</p>
          <Button variant="outline" onClick={() => navigate('/')}>Back to Marketplace</Button>
        </div>
      </div>
    );
  }

  const sharePriceNum = parsePrice(agent.sharePrice);

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-primary bg-clip-text text-transparent">{agent.name}</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-3xl">{agent.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[{ label: 'APY', value: agent.apy }, { label: 'TVL', value: agent.tvl }, { label: 'Share Price', value: agent.sharePrice }, { label: '24h ROI', value: `${agent.roi24h > 0 ? '+' : ''}${agent.roi24h}%` }, { label: 'Capital Deployed', value: agent.capitalDeployed }, { label: 'Total Shares', value: agent.totalShares }].map((m) => (
              <Card key={m.label} className="bg-card/70 backdrop-blur border-border">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-xs text-muted-foreground tracking-wide uppercase">{m.label}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-lg font-semibold">{m.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card shadow-card">
            <CardContent className="p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Interactive</div>
                <div className="text-2xl font-bold">Buy/Sell {agent.category} Shares</div>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => { setMode('buy'); setDialogOpen(true); }}>Buy Shares</Button>
                <Button variant="outline" onClick={() => { setMode('sell'); setDialogOpen(true); }}>Sell Shares</Button>
              </div>
            </CardContent>
          </Card>
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
