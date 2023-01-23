import { server } from 'lib/apolloServer'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const serverStart = server.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await serverStart
  await server.createHandler({ path: '/api/graphql' })(req, res)
  return
}
