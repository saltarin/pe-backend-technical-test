import React from 'react';
import { PageLink, Wrapper } from './styled';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo-pagoefectivo.png';
import { useRouter } from 'next/dist/client/router';

export const Navigation = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <div>
        <picture>
          <Image src={logo} alt="PE" />
        </picture>
        <h2>backend-technical-test</h2>
        <section>
          <ul>
            <li>
              <Link href="/create-promotion" passHref>
                <PageLink pathname={router.pathname}>
                  Registrar promocion
                </PageLink>
              </Link>
            </li>
            <li>
              <Link href="/exchange-promotion" passHref>
                <PageLink pathname={router.pathname}>
                  Canjear promocion
                </PageLink>
              </Link>
            </li>
            <li>
              <Link href="/list-promotions" passHref>
                <PageLink pathname={router.pathname}>
                  Listar promociones
                </PageLink>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </Wrapper>
  );
};
