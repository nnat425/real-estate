# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

for x in 0..5
	Listing.create(address: "1352 Merrick Ave", number_of_bedrooms: 3, minimum_price: 20000, maximum_price: 100000)
end
