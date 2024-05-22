import { NextApiRequest, NextApiResponse } from 'next';
import requireAuth from '@/middlewares/authMiddleware';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log((req as any).user)
  res.status(200).json({ message: 'Ruta protegida', user: (req as any).user });
};

export default requireAuth(handler);
