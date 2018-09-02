class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :address
      t.integer :number_of_bedrooms
      t.integer :minimum_price 
      t.integer :maximum_price 
      
      t.timestamps
    end
  end
end
