import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Plus, Minus, TrendingUp, Calculator } from 'lucide-react';

const SharePriceFlow: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">How Share Pricing</span>{" "}
            <span className="gradient-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understand how your investment value changes with AI agent performance through 
            our transparent share-based system.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Step 1: Formula */}
          <Card className="bg-card shadow-card border-border transition-smooth hover:shadow-glow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-lg bg-primary/10 text-primary w-fit">
                <Calculator className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Share Price Formula</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-background-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">Share Price =</div>
                <div className="text-lg font-mono">
                  <div className="text-accent">Total Vault Value</div>
                  <div className="border-t border-border-light my-1"></div>
                  <div className="text-foreground">Total Shares</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Updates automatically with agent performance
              </p>
            </CardContent>
          </Card>

          {/* Step 2: Buy */}
          <Card className="bg-card shadow-card border-border transition-smooth hover:shadow-glow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-lg bg-success/10 text-success w-fit">
                <Plus className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Buying Shares</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3">
                <div className="bg-background-secondary p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Deposit</div>
                  <div className="text-xl font-bold text-success">$1,000</div>
                </div>
                <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                <div className="bg-background-secondary p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Shares Minted</div>
                  <div className="text-xl font-bold text-foreground">800</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                At $1.25 per share
              </p>
            </CardContent>
          </Card>

          {/* Step 3: Performance */}
          <Card className="bg-card shadow-card border-border transition-smooth hover:shadow-glow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-lg bg-warning/10 text-warning w-fit">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Agent Performance</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3">
                <div className="bg-background-secondary p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Old Price</div>
                  <div className="text-lg font-bold text-muted-foreground line-through">$1.25</div>
                </div>
                <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                <div className="bg-background-secondary p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">New Price</div>
                  <div className="text-xl font-bold text-warning">$1.50</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                +20% agent returns
              </p>
            </CardContent>
          </Card>

          {/* Step 4: Sell */}
          <Card className="bg-card shadow-card border-border transition-smooth hover:shadow-glow">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-lg bg-destructive/10 text-destructive w-fit">
                <Minus className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Selling Shares</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3">
                <div className="bg-background-secondary p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Redeem</div>
                  <div className="text-xl font-bold text-destructive">800 shares</div>
                </div>
                <ArrowRight className="h-4 w-4 mx-auto text-muted-foreground" />
                <div className="bg-background-secondary p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Receive</div>
                  <div className="text-xl font-bold text-success">$1,200</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                +$200 profit (+20%)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit">
              <Calculator className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Automatic Valuation</h3>
            <p className="text-muted-foreground">
              No need to track individual trades. Your share value automatically reflects 
              all agent performance in real-time.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto p-4 rounded-lg bg-success/10 text-success w-fit">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Compound Growth</h3>
            <p className="text-muted-foreground">
              Profits automatically compound within the vault, increasing your share value 
              without any action required.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto p-4 rounded-lg bg-accent/10 text-accent w-fit">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Instant Liquidity</h3>
            <p className="text-muted-foreground">
              Buy or sell shares anytime at the current market price. No lock-up periods 
              or complex exit procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharePriceFlow;