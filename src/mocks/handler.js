import { rest } from 'msw';
import data from './db.json';

export const handlers = [
  rest.get('/data', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('/data/:id', (req, res, ctx) => {
    const { id } = req.params;
    const item = data.find((item) => item.id === id);

    if (!item) {
      return res(ctx.status(404), ctx.json({ message: 'Item not found' }));
    }

    return res(ctx.status(200), ctx.json(item));
  }),
];
