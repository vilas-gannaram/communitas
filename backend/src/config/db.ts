import { DataSource} from 'typeorm'
import ENV from './env'

const dataSource = new DataSource({
  type:'postgres',
  url: ENV.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: ['src/entities/*.ts']
})

export default dataSource;