BEGIN;
DROP TABLE IF EXISTS users,posts CASCADE;

CREATE TABLE "users"(
    id SERIAL PRIMARY KEY,
    username VARCHAR(400) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE "posts"(
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) 
);

COMMIT;