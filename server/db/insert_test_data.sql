INSERT INTO post(title, created_date, updated_date, content)
VALUES ( 'My First Blog' ,'2024-01-09', '2024-01-09', 'this is my first blog.');
INSERT INTO post(title, created_date, updated_date, content)
VALUES ( 'My Second Blog' ,'2024-01-09', '2024-01-09', 'this is my second blog.');

INSERT INTO tag(post_id, name) 
VALUES ( 1, 'my-first-tag' );
INSERT INTO tag(post_id, name) 
VALUES ( 2, 'my-second-tag' );
INSERT INTO tag(post_id, name) 
VALUES ( 2, 'my-thrid-tag' );
