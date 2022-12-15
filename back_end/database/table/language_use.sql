create table
	language_use(
		use_id int identity not null primary key,
		user_id int not null foreign key references users(user_id),
		language_id int not null foreign key references languages(language_id)
	);

