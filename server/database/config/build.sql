BEGIN;
drop table if exists users,
posts,
comments cascade;
CREATE table users(
    id serial primary key,
    username varchar(255) not null,
    email varchar(255) not null UNIQUE,
    password varchar(255) not null
);
CREATE table posts(
    id serial primary key,
    content text not null,
    userId int not null,
    FOREIGN KEY (userId) REFERENCES users (id)
);
CREATE table comments(
    id serial primary key,
    content text not null,
    postId int not null,
    userId int not null,
    FOREIGN KEY (postId) REFERENCES posts (id),
    FOREIGN KEY (userId) REFERENCES users (id)
);
-- INSERT INTO users
-- VALUES(
--         1,
--         'Mohammed',
--         'mohammedreda814@gmail.com',
--         '123'
--     );
-- INSERT INTO users
-- VALUES(
--         2,
--         'Mohammed1',
--         'mohammedreda8141@gmail.com',
--         '1231'
--     );
-- INSERT INTO posts
-- VALUES(1, 'testing for post 1 for user 1', 1);
-- INSERT INTO posts
-- VALUES(2, 'testing for post 2 for user 1', 1);
-- INSERT INTO posts
-- VALUES(3, 'testing for post 3 for user 2', 2);
-- INSERT INTO comments
-- VALUES(1, 'first comment for user 1 in post 1', 1, 1);
-- INSERT INTO comments
-- VALUES(2, 'first comment for user 2 in post 1', 1, 2);
-- INSERT INTO comments
-- VALUES(3, 'first comment for user 2 in post 1', 2, 2);
-- INSERT INTO comments
-- VALUES(4, 'first comment for user 2 in post 1', 2, 2);
COMMIT;