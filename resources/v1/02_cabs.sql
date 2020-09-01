create table cabs
(
  id int(11) not null
  AUTO_INCREMENT PRIMARY KEY, 
  regs_number varchar
  (32) not null, 
  created_at datetime default CURRENT_TIMESTAMP not null
);