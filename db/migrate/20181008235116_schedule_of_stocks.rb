class ScheduleOfStocks < ActiveRecord::Migration[5.2]
  def change
  	create_table :schedule_of_stocks do |t|
  	  t.integer :amt_of_shares 
  	  t.string :description_of_share 
  	  t.integer :marketable_value
  	  t.references :user
  	  t.timestamps  
  	end 
  end
end
