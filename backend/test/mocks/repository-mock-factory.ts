import { Repository } from "typeorm";

export type MockType<T> = {
  [P in keyof T]?: jest.Mock;
};

export const repositoryMockFactory = <T>(mock: MockType<Repository<T>> = {}) => jest.fn(() => {
  const jestMock = {};
  Object.keys(mock).forEach(key => {
    jestMock[key] = mock[key];
  })
  return jestMock;
});

