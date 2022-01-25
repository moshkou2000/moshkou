import { IConstantNumber } from '../interfaces/iconstant_number';

export const CONSTANT_NUMBER: IConstantNumber = {
  defaultPageSize: 25,
  paginationSizes: [5, 10, 15, 25, 100],
  viewStatesExpiration: 120000, // milliseconds
};
