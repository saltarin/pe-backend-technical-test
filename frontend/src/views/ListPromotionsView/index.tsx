import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { Section } from '../../components/Section';
import { Table } from '../../components/Table';
import { PromotionService } from '../../services/promotion';
import { Wrapper } from './styled';

export const ListPromotionsView = () => {
  const [request, setRequest] = useState({});
  const { isLoading, isSuccess, data } = useQuery(['promotions', request], () =>
    PromotionService.listPromotions(request)
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email =
      String((event.currentTarget.elements as any).email.value) || undefined;
    const status =
      String((event.currentTarget.elements as any).status.value) || undefined;
    setRequest(JSON.parse(JSON.stringify({ email, status })));
  };

  return (
    <Wrapper>
      <div>
        <Section>
          <div>
            <h2>Listado de promociones</h2>
          </div>
          <Form onSubmit={submitHandler}>
            <fieldset>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={isLoading}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="status">Estado:</label>
              <select name="status" id="status" disabled={isLoading}>
                <option value="">TODOS</option>
                <option value={1}>GENERADO</option>
                <option value={2}>CANJEADO</option>
              </select>
            </fieldset>
            <div>
              <Button type="submit" disabled={isLoading}>
                Buscar
              </Button>
            </div>
          </Form>
        </Section>
        <Section>
          <Table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Nombre</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {isSuccess &&
                data.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.status === 1 ? 'GENERADO' : 'CANJEADO'}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Section>
      </div>
    </Wrapper>
  );
};
