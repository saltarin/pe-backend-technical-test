import { Layout } from '../src/components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ListPromotionsView } from '../src/views/ListPromotionsView';

const queryClient = new QueryClient();

export default function ListPromotions() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ListPromotionsView />
      </Layout>
    </QueryClientProvider>
  );
}
