Rails.application.routes.draw do

	root to: 'public#index'

	get 'statement' => 'public#financial_statement'
	get 'financial_statement' => 'forms#financial_statement'

  	# sign up page with form:
  	get 'users/new' => 'users#new', as: :new_user
	post 'users' => 'users#create'


	get '/login'     => 'sessions#new'
	post '/login'    => 'sessions#create'
	delete '/logout' => 'sessions#destroy'  

	resources :listings, only: [:index, :create, :destroy, :update]
	resources :schedule_of_cashes, only: [:index, :create, :destroy, :update]
	resources :schedule_of_stocks, only: [:index, :create, :destroy, :update]


  end
