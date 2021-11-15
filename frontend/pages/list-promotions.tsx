import { Layout } from '../src/components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function ListPromotions() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>ListPromotions</Layout>
    </QueryClientProvider>
  );
}
