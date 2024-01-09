DROP TABLE IF EXISTS post, tag;

CREATE TABLE post (
  id integer PRIMARY KEY,
  title varchar(50) NOT NULL,
  created_date date NOT NULL,
  updated_date date NOT NULL,
  content text NOT NULL
);

CREATE TABLE tag (
  post_id integer REFERENCES post,
  name varchar(20),
  PRIMARY KEY (post_id, name)
);
