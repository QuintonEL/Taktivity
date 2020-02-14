-- Users table seeds here (Example)
INSERT INTO users (email, password)
VALUES ('alicehope@gmail.com', 'password'),
('kiraanderson@gmail.com', 'password'),
('johnlong@gmail.com', 'password'),
('sallyjohnson@gmail.com', 'password'),
('mikeleblanc@gmail.com', 'password'),
('judithscots@gmail.com', 'password'),
('ronaldregan@gmail.com', 'password'),
('samualjackson@gmail.com', 'password'),
('johnydepp@gmail.com', 'password'),
('donaldtrump@gmail.com', 'password'),
('britneyspears@gmail.com', 'password'),
('saralove@gmail.com', 'password');


INSERT INTO resources (creator_id, title, url, description, image_url, topic)
VALUES (1, 'Partial Fractions', 'http://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx', 'Partial fraction decomposition tutorial on Paul''s Notes', 'https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/ds_461390782.jpg?itok=XlD1NdXi', 'Math'),
(2, 'Quantum Mechanics and the Schrodinger Equation', 'https://www.youtube.com/watch?v=O6g-7rUgrdg', 'Okay, it''s time to dig into quantum mechanics!', 'https://www.irishtimes.com/polopoly_fs/1.3930778.1560950858!/image/image.jpg_gen/derivatives/box_620_330/image.jpg', 'Physics'),
(3, 'IBM Essentials of Software Development', 'https://www.ibm.com/topics/software-development', 'IBM Introduction to software development', 'https://www.plm.automation.siemens.com/media/global/en/is-871030872-640x360_tcm27-49145.jpg', 'Software'),
(4, 'Intro to Chemistry', 'https://www.khanacademy.org/science/chemistry', 'Intro to Atoms, Compounds and Icons', 'https://www.yu.edu/sites/default/files/ThinkstockPhotos-658148844.jpg', 'Chemistry'),
(5, 'String Theory: A Beginner''s Guide','https://www.newscientist.com/article/dn16950-string-theory-a-beginners-guide/', 'String theory is one of the most famous ideas in modern physics, but it is also one of the most confusing. Give this guide a read!', 'https://i.ytimg.com/vi/Da-2h2B4faU/maxresdefault.jpg', 'Physics'),
(6, 'What Is Astrophysics', 'https://www.space.com/26218-astrophysics.html', 'Astrophysics is essential to explaining the universe.', 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/4jnhe-Y8DEY15NJ2S-Full-Image_GalleryBackground-en-US-1480602592241._SX1080_.jpg', 'Physics'),
(7, 'Differential Equations', 'https://www.khanacademy.org/math/differential-equations', 'Introduction to Differential Equations', 'https://steemitimages.com/DQmdVg4bRtoxubMCqRRRSStGUsZ2kAMD1AUF9yNRKdQPESD/khan-academy-ipad-app.jpg', 'Math'),
(8, 'Plasma', 'https://www.youtube.com/watch?v=94tReSbyPYc', 'Get to know what plasma is!', 'https://cdn.arstechnica.net/wp-content/uploads/2019/02/plasmaTOP-1-800x543.jpg', 'Physics'),
(9, 'Lighthouse Labs Bootcamp', 'https://www.lighthouselabs.ca/?gclid=CjwKCAiAp5nyBRABEiwApTwjXq7DdHLy3XtlO5xP4gHEotwKbndqxwJI3aoZFSFGt4uz5CzmTMhBEBoCbaMQAvD_BwE', 'Check out these courses in Canada!', 'https://pbs.twimg.com/profile_images/1197911268939550720/33RhGxsO_400x400.jpg', 'Software'),
(10, 'Organic Chemistry', 'https://en.wikipedia.org/wiki/Organic_chemistry', 'Everything you need to know about Organic Chemistry', 'https://www.thegreatcourses.com/media/catalog/product/cache/1/plus_image/800x451/0f396e8a55728e79b48334e699243c07/1/1/1185.1549052583.jpg', 'Chemistry'),
(11, 'What is Dark Matter and Dark Energy','https://www.youtube.com/watch?v=QAa2O_8wBUQ', 'If we knew exactly what they are, we would have a nobel prize', 'https://www.extremetech.com/wp-content/uploads/2019/06/anewcandidat-640x378.jpg', 'Physics'),
(12, 'Intro to Machine Learning', 'https://www.coursera.org/learn/machine-learning', 'Machine learning is the science of getting computers to act without being explicitly programmed.', 'https://www.smartdatacollective.com/wp-content/uploads/2018/11/Machine-learning-1024x682.jpg', 'Software');

INSERT INTO categories (title)
VALUES ('Math'), ('Physics'), ('Software'), ('Chemistry');

INSERT INTO resource_categories (resource_id, category_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 2), (6, 2), (7, 1), (8, 2), (9, 3), (10, 4), (11, 2), (12, 3);

INSERT INTO favourites (user_id, resource_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4);

INSERT INTO comments (resource_id, user_id, text, created_at)
VALUES (1, 1, 'Wow that is so cool', '2020-01-01 00:00:01'),
(2, 2, 'That is very good to know', '2020-01-02 00:00:01'),
(3, 3, 'Nice post, I am going to give this a try', '2020-01-03 00:00:01'),
(4, 4, 'Amazing!', '2020-01-05 00:00:01'),
(5, 5, 'Thanks for sharing.', '2020-01-04 00:00:01'),
(6, 6, 'Gonna send this to my son!', '2020-01-06 00:00:01'),
(7, 7, 'Wow that is so cool', '2020-01-01 00:00:01'),
(8, 8, 'That is very good to know', '2020-01-02 00:00:01'),
(9, 9, 'Nice post, I am going to give this a try', '2020-01-03 00:00:01'),
(10, 10, 'Amazing!', '2020-01-05 00:00:01'),
(11, 11, 'Thanks for sharing.', '2020-01-04 00:00:01'),
(12, 12, 'Gonna send this to my son!', '2020-01-06 00:00:01');

INSERT INTO ratings (user_id, resource_id, rating)
VALUES (1, 1, 3), (2, 2, 4), (3, 3, 5), (4, 4, 1), (5, 5, 5), (6, 6, 4);
