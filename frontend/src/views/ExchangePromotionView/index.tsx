/* eslint-disable indent */
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { InformationMessage } from '../../components/InformationMessage';
import { Section } from '../../components/Section';
import { PromotionService } from '../../services/promotion';
import { Wrapper } from './styled';

export const ExchangePromotionView = () => {
  const [promotion, setPromotion] = useState<Record<string, any>>({});
  const [errorMessage, setErrorMessage] = useState('');
  const exchangePromotionMutation = useMutation(
    PromotionService.exchangePromotion,
    {
      onSuccess: value => {
        setPromotion({ ...value.data, message: value.message });
      },
      onError: (error: Error) => {
        setErrorMessage(error.message);
      }
    }
  );
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = String((event.currentTarget.elements as any).email.value);
    const code = String((event.currentTarget.elements as any).code.value);
    exchangePromotionMutation.mutate({ email, code });
  };
  return (
    <Wrapper>
      <div>
        <Section>
          <div>
            <h2>Canjea tu promocion</h2>
            <p>Ingrega tus datos</p>
          </div>
          <Form onSubmit={submitHandler}>
            <fieldset>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={exchangePromotionMutation.isLoading}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="code">Codigo:</label>
              <input
                type="text"
                name="code"
                id="code"
                minLength={10}
                maxLength={10}
                disabled={exchangePromotionMutation.isLoading}
                required
              />
            </fieldset>
            <div>
              <Button type="submit">Canjear Codigo</Button>
            </div>
          </Form>
        </Section>
        {!exchangePromotionMutation.isIdle &&
          !exchangePromotionMutation.isLoading && (
            <Section>
              {exchangePromotionMutation.isSuccess ? (
                <InformationMessage>
                  <h3>
                    El codigo <span data-type="success">{promotion.code}</span>{' '}
                    fue canjeado!
                  </h3>
                  <p>Email: {promotion.email}</p>
                  <p>Nombre: {promotion.name}</p>
                  <p>
                    Codigo: <b data-type="success">{promotion.code}</b>
                  </p>
                  <p>
                    Fecha de Actualizacion: <b>{promotion.updatedAt}</b>
                  </p>
                </InformationMessage>
              ) : (
                <InformationMessage>
                  <h3 data-type="error">{errorMessage}</h3>
                </InformationMessage>
              )}
            </Section>
          )}
      </div>
    </Wrapper>
  );
};
