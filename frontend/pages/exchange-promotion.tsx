import { Layout } from '../src/components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ExchangePromotionView } from '../src/views/ExchangePromotionView';

const queryClient = new QueryClient();

export default function ExchangePromotion() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ExchangePromotionView />
      </Layout>
    </QueryClientProvider>
  );
}
