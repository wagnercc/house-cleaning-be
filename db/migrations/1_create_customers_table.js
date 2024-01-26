const createCustomersTable = `
    CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        position_x VARCHAR(20) NOT NULL,
        position_y VARCHAR(20) NOT NULL
    )
`;

export default createCustomersTable;