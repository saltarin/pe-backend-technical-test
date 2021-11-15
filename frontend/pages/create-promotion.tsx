import { Layout } from '../src/components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CreatePromotionView } from '../src/views/CreatePromotionView';

const queryClient = new QueryClient();

export default function CreatePromotion() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <CreatePromotionView />
      </Layout>
    </QueryClientProvider>
  );
}
