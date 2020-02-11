-- Users table seeds here (Example)
INSERT INTO users (email, password)
VALUES ('alicehope@gmail.com', 'password'),
('kiraanderson@gmail.com', 'password'),
('johnlong@gmail.com', 'password');


INSERT INTO resources (creator_id, title, url, description, image_url)
VALUES (1, 'Partial Fractions', 'http://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx', 'Partial fraction decomposition tutorial', 'https://www.itweb.co.za/static/pictures/2018/05/resized/-fs-Math-2018.xl.jpg'),
(2, 'Quantum Mechanics', 'https://en.wikipedia.org/wiki/Quantum_mechanics', 'Everything about quantum mechanics', 'https://cdn3.iconfinder.com/data/icons/science-42/200/799_science-512.png'),
(3, 'Software Development', 'https://www.ibm.com/topics/software-development', 'IBM Introduction to software development', 'https://cdn1.iconfinder.com/data/icons/seo-and-web-development-color/64/seo-and-web-development-01-512.png');
(3, 'Intro to Chemestry', 'https://www.khanacademy.org/science/chemistry', 'Intro to Atoms, Compounds, Icons', 'https://www.pinclipart.com/picdir/middle/31-314343_chemistry-clipart-icon-png-transparent-png.png')

INSERT INTO categories (title)
VALUES ('Math'), ('Physics'), ('Software');

INSERT INTO resource_categories (resource_id, category_id)
VALUES (1, 1), (2, 2), (3, 3);

INSERT INTO favourites (user_id, resource_id)
VALUES (1, 1), (2, 2), (3, 3);

INSERT INTO comments (resource_id, user_id, text, created_at)
VALUES (1, 1, 'Wow that is so cool', '2020-01-01 00:00:01'),
(2, 2, 'That is very good to know', '2020-01-02 00:00:01'),
(3, 3, 'Nice post, I am going to give this a try', '2020-01-03 00:00:01');

INSERT INTO ratings (user_id, resource_id, rating)
VALUES (1, 1, 3), (2, 2, 4), (3, 3, 5);
