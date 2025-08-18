import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, XCircle } from 'lucide-react';
import { demoTransactions, Transaction } from '@/data/portfolio';

const TransactionHistory: React.FC = () => {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusIcon = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-warning" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'failed':
        return 'bg-destructive/10 text-destructive border-destructive/20';
    }
  };

  return (
    <div className="agent-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-accent/10 text-accent">
          <Clock className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Transaction History</h3>
          <p className="text-sm text-muted-foreground">Your complete trading activity</p>
        </div>
      </div>

      <div className="space-y-3">
        {demoTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-4 rounded-xl bg-background-secondary/60 border border-border-light/50 hover:bg-background-secondary/80 transition-smooth">
            <div className="flex items-center gap-4">
              {/* Transaction Type Icon */}
              <div className={`p-2 rounded-lg ${
                transaction.type === 'buy' ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
              }`}>
                {transaction.type === 'buy' ? (
                  <ArrowDownLeft className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </div>

              {/* Transaction Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-sm font-bold capitalize ${
                    transaction.type === 'buy' ? 'text-success' : 'text-destructive'
                  }`}>
                    {transaction.type}
                  </span>
                  <span className="text-sm font-bold text-foreground">{transaction.agentName}</span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{transaction.shares.toLocaleString()} shares</span>
                  <span>•</span>
                  <span>${transaction.pricePerShare.toFixed(2)} per share</span>
                  <span>•</span>
                  <span>{formatDate(transaction.timestamp)}</span>
                </div>
              </div>
            </div>

            {/* Amount and Status */}
            <div className="text-right">
              <div className={`text-lg font-bold font-mono mb-1 ${
                transaction.type === 'buy' ? 'text-destructive' : 'text-success'
              }`}>
                {transaction.type === 'buy' ? '-' : '+'}${transaction.totalAmount.toLocaleString()}
              </div>
              
              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(transaction.status)}`}>
                {getStatusIcon(transaction.status)}
                <span className="capitalize">{transaction.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="mt-6 text-center">
        <button className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 bg-background-secondary/40 hover:bg-background-secondary/60 text-foreground border border-border-light/50 hover:border-primary/50">
          <span className="relative">View All Transactions</span>
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;