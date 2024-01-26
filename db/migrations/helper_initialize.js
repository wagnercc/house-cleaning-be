import db from "../index.js";
import createCustomersTable from "./1_create_customers_table.js";

const runDbMigrations = async () => {
    console.log('BEGIN DB MIGRATION');

    const client = await db.connect();

    try {
        await client.query('BEGIN');
        await client.query(createCustomersTable);
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}

export default runDbMigrations;