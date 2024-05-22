import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';
import cookie from 'cookie';

const requireAuth = (handler: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    let token = cookies['sb-access-token'];

    if (!token) {
      token = req.headers['authorization']?.split(' ')[1] || '';
    }

    if (!token) {
      return res.status(401).json({ error: 'No estás autenticado' });
    }

    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    (req as any).user = user;

    return handler(req, res);
  } catch (error) {
    console.error('Error en el middleware de autenticación:', error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

export default requireAuth;
