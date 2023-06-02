DROP TABLE IF EXISTS todos CASCADE;
CREATE TABLE todos (
   id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  completed boolean
);
