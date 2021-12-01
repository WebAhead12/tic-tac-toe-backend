BEGIN;

DROP TABLE IF EXISTS users, guests, scores CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  name VARCHAR(25) NOT NULL,
  password VARCHAR(70) NOT NULL
);

CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  guest VARCHAR(25) NOT NULL
);

CREATE TABLE scores (
 id SERIAL PRIMARY KEY,
 wins INTEGER,
 total INTEGER,
 user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (username, name, password)  VALUES
  ('xo', 'Myname', '$2a$10$2Y25cn20sSwFZPWHx1nD.OZjM5o140DUumOzYm8h85fGd15WtAJoi');

INSERT INTO scores (wins, total, user_id)  VALUES
  (4, 5, 1);

COMMIT;