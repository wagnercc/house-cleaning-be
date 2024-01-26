import db from "../db/index.js";

const create = async ({ name, email, phone, positionX, positionY }) => {
    const query = `
        INSERT INTO
            customers (name, email, phone, position_x, position_y)
        VALUES
            ($1, $2, $3, $4, $5)
        RETURNING *
    ;`

    const result = await db.query(query, [name, email, phone, positionX, positionY]);

    return result.rows[0];
}

const list = async () => {
    const query = `
        SELECT * FROM customers
    ;`

    const result = await db.query(query);
    return result.rows;
}

export default {
    create,
    list
}