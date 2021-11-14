import { ValidationError } from 'class-validator';
import { ValidationException } from './validation-exception';

function getFirstErrorMessage({ constraints, children }) {
  if (!children || children.length === 0) {
    return Object.values(constraints)[0];
  }
  const map = children.map(child => getFirstErrorMessage(child));
  return map.find(map => typeof map === 'string');
}

export const exceptionFactory = (errors: ValidationError[]) => {
  const validationDetail = errors.map(({ constraints, children }) =>
    getFirstErrorMessage({ constraints, children }),
  );
  return new ValidationException('Bad Request', {
    detail: validationDetail,
  });
};
