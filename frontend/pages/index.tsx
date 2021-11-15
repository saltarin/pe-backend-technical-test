import { Layout } from '../src/components/Layout';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/list-promotions');
  }, []);
  return <Layout></Layout>;
}
