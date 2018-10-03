Rails.application.routes.draw do

	root to: 'public#index'
	get 'statement' => 'public#financial_statement'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  	# sign up page with form:
  	get 'users/new' => 'users#new', as: :new_user
	post 'users' => 'users#create'


	get '/login'     => 'sessions#new'
	post '/login'    => 'sessions#create'
	delete '/logout' => 'sessions#destroy'  

	resources :listings, only: [:index, :create, :destroy, :update]
	resources :schedule_of_cashes, only: [:index, :create, :destroy, :update]

  end
