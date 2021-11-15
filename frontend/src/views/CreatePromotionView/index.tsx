import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { InformationMessage } from '../../components/InformationMessage';
import { Section } from '../../components/Section';
import { PromotionService } from '../../services/promotion';
import { Wrapper } from './styled';

export const CreatePromotionView: React.FC = () => {
  const [promotion, setPromotion] = useState<Record<string, any>>({});
  const [errorMessage, setErrorMessage] = useState('');
  const createPromotionMutation = useMutation(
    PromotionService.registerPromotion,
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
    const name = String((event.currentTarget.elements as any).name.value);
    createPromotionMutation.mutate({ email, name });
  };

  return (
    <Wrapper>
      <div>
        <Section>
          <div>
            <h2>Registra nueva promocion</h2>
            <p>Ingrega tus datos</p>
          </div>
          <Form onSubmit={submitHandler}>
            <fieldset>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={createPromotionMutation.isLoading}
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                name="name"
                id="name"
                disabled={createPromotionMutation.isLoading}
              />
            </fieldset>
            <div>
              <Button type="submit">Generar Codigo</Button>
            </div>
          </Form>
        </Section>
        {!createPromotionMutation.isIdle && !createPromotionMutation.isLoading && (
          <Section>
            {createPromotionMutation.isSuccess ? (
              <InformationMessage>
                <h3>El codigo fue generado!</h3>
                <p>Email: {promotion.email}</p>
                <p>Nombre: {promotion.name}</p>
                <p>
                  Codigo: <b data-type="success">{promotion.code}</b>
                </p>
                <p>
                  Fecha de Registro: <b>{promotion.createdAt}</b>
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
