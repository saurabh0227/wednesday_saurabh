create table users
(
  id int(11) not null
  AUTO_INCREMENT PRIMARY KEY, 
  cab_id int
  (11) not null, 
  user_id int
  (11) not null, 
  source varchar
  (100) not null, 
  destination varchar
  (100) not null, 
  created_at datetime default CURRENT_TIMESTAMP not null
);