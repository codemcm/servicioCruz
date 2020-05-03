--name database: mycompany
CREATE TABLE PUBLIC.client(
    client_id SERIAL NOT NULL,
    name VARCHAR(50),
    last_name VARCHAR(100),
    cell VARCHAR(10),
    observations VARCHAR(300),
    created_date TIMESTAMP DEFAULT NOW(),
    created_by INTEGER DEFAULT 1,
    update_date TIMESTAMP DEFAULT NOW()
);
