import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 3306,
    database: 'company_db'
})
