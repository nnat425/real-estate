class ScheduleOfCashes < ActiveRecord::Migration[5.2]
  def change
  	create_table :schedule_of_cashes do |t|
  	  t.string :type_of_app 
  	  t.string :type_of_card 
  	  t.string :type_of_acct
  	  t.integer :account_balance 
  	  t.references :user
  	  t.timestamps  
  	end 
  end
end


 