import * as types from 'modules/graphql/types'
import { makeSchema } from 'nexus'
import { join } from 'path'

const schema = makeSchema({
  types,
  contextType: {
    module: join(process.cwd(), 'types/Context.ts'),
    export: 'Context',
  },
  outputs: {
    schema: join(process.cwd(), './generated/schema.graphql*'),
    typegen: join(process.cwd(), './generated/nexus-typegen.d.ts*'),
  },
})
export { schema }
