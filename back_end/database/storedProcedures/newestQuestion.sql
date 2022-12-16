create or alter procedure getNewesQuestion
	as
	begin
		select * from dbo.getQuestionTables() order by date_asked desc 
	end
	go