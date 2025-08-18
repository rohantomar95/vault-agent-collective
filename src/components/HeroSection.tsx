import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Sparkles, TrendingUp, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-ai-agent.jpg';

const HeroSection: React.FC = () => {
  const [animatedValue, setAnimatedValue] = useState(2.5);
  const [animatedAgents, setAnimatedAgents] = useState(0);

  useEffect(() => {
    // Animate the value counter
    const valueInterval = setInterval(() => {
      setAnimatedValue(prev => {
        const target = 2.5 + Math.sin(Date.now() / 2000) * 0.3;
        return prev + (target - prev) * 0.1;
      });
    }, 50);

    // Animate agent counter
    const agentInterval = setInterval(() => {
      setAnimatedAgents(prev => prev < 1247 ? prev + 7 : 1247);
    }, 30);

    return () => {
      clearInterval(valueInterval);
      clearInterval(agentInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Agent Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Next-Gen AI Agent Marketplace
          </Badge>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold gradient-cosmic bg-clip-text text-transparent leading-tight">
              Invest in AI Agents
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Like Buying Shares
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary marketplace where you can invest in specialized AI trading agents through 
            dynamic share pricing. Your returns automatically compound as agents generate profits.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border-light shadow-card">
              <div className="text-3xl font-bold text-accent text-neon">
                ${animatedValue.toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground">Average Share Price</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border-light shadow-card">
              <div className="text-3xl font-bold text-success text-neon">
                {animatedAgents.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Active AI Agents</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border-light shadow-card">
              <div className="text-3xl font-bold text-warning text-neon">
                $24.8M
              </div>
              <div className="text-sm text-muted-foreground">Total Value Locked</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-light transition-smooth shadow-glow px-8 py-3">
              <Bot className="h-5 w-5 mr-2" />
              Browse AI Agents
            </Button>
            <Button size="lg" variant="outline" className="border-border-light hover:border-primary transition-smooth px-8 py-3">
              <Shield className="h-5 w-5 mr-2" />
              How It Works
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-8">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-lg bg-success/10 text-success">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Dynamic Pricing</div>
                <div className="text-sm text-muted-foreground">Share prices update with performance</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Specialized Agents</div>
                <div className="text-sm text-muted-foreground">Expert strategies for every market</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">Transparent & Secure</div>
                <div className="text-sm text-muted-foreground">Blockchain-verified performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;