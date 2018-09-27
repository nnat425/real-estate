class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :address
      t.integer :number_of_bedrooms
      t.integer :minimum_price 
      t.integer :maximum_price 
      t.string :neighborhood
      t.integer :number_of_bedrooms 
      t.string :type_of_home 

      t.timestamps
    end
  end
end
