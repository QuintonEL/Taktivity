-- Users table seeds here (Example)
INSERT INTO users (email, password)
VALUES ('alicehope@gmail.com', 'password'),
('kiraanderson@gmail.com', 'password'),
('johnlong@gmail.com', 'password'),
('sallyjohnson@gmail.com', 'password'),
('mikeleblanc@gmail.com', 'password'),
('judithscots@gmail.com', 'password');


INSERT INTO resources (creator_id, title, url, description, image_url, topic)
VALUES (1, 'Partial Fractions', 'http://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx', 'Partial fraction decomposition tutorial on Paul&#39s Notes', 'https://www.itweb.co.za/static/pictures/2018/05/resized/-fs-Math-2018.xl.jpg', 'math'),
(2, 'Quantum Mechanics and the Schrodinger Equation', 'https://www.youtube.com/watch?v=O6g-7rUgrdg', 'Okay, it&#39s time to dig into quantum mechanics!', 'https://www.irishtimes.com/polopoly_fs/1.3930778.1560950858!/image/image.jpg_gen/derivatives/box_620_330/image.jpg', 'physics'),
(3, 'IBM Essentials of Software Development', 'https://www.ibm.com/topics/software-development', 'IBM Introduction to software development', 'https://www.plm.automation.siemens.com/media/global/en/is-871030872-640x360_tcm27-49145.jpg', 'software'),
(4, 'Intro to Chemistry', 'https://www.khanacademy.org/science/chemistry', 'Intro to Atoms, Compounds and Icons', 'https://www.yu.edu/sites/default/files/ThinkstockPhotos-658148844.jpg', 'chemistry'),
(5, 'String Theory: A Beginner&#39s Guide','https://www.newscientist.com/article/dn16950-string-theory-a-beginners-guide/', 'String theory is one of the most famous ideas in modern physics, but it is also one of the most confusing. Give this guide a read!', 'https://www.yu.edu/sites/default/files/ThinkstockPhotos-658148844.jpg', 'physics'),
(6, 'What Is Astrophysics', 'https://www.space.com/26218-astrophysics.html', 'Astrophysics is essential to explaining the universe.', 'https://www.yu.edu/sites/default/files/ThinkstockPhotos-658148844.jpg', 'physics');

INSERT INTO categories (title)
VALUES ('Math'), ('Physics'), ('Software'), ('Chemistry');

INSERT INTO resource_categories (resource_id, category_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 2), (6, 2);

INSERT INTO favourites (user_id, resource_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4);

INSERT INTO comments (resource_id, user_id, text, created_at)
VALUES (1, 1, 'Wow that is so cool', '2020-01-01 00:00:01'),
(2, 2, 'That is very good to know', '2020-01-02 00:00:01'),
(3, 3, 'Nice post, I am going to give this a try', '2020-01-03 00:00:01'),
(4, 4, 'Amazing!', '2020-01-05 00:00:01'),
(5, 5, 'Thanks for sharing.', '2020-01-04 00:00:01'),
(6, 6, 'Gonna send this to my son!', '2020-01-06 00:00:01');

INSERT INTO ratings (user_id, resource_id, rating)
VALUES (1, 1, 3), (2, 2, 4), (3, 3, 5), (4, 4, 1), (5, 5, 5), (6, 6, 4);
