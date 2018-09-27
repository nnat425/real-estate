class ItemiziedSchedules extends React.Component {

constructor(props){
    super(props);
    this.state = {
      type_of_app: 'applicant',
      type_of_card: 'Amex',
      type_of_acct: 'checkings',
      acct_balance: '0',
    };

 

    this.handleChange = this.handleChange.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleAcctChange = this.handleAcctChange.bind(this);
    this.handleBalChange = this.handleBalChange.bind(this);
    this.createItemizedCash = this.createItemizedCash.bind(this);

  }


   addCash(event){
    	console.log("Testing")
    }

handleChange(event){
    this.setState({
    	type_of_app: event.target.value,
    });
  }

handleCardChange(event){
 	this.setState({
 		type_of_card: event.target.value
 	})
 }

handleAcctChange(event){
 	this.setState({
 		type_of_acct: event.target.value
 	})
 }

handleBalChange(event){
 	this.setState({
 		acct_balance: event.target.value
 	})
 }


createItemizedCash(event){
    event.preventDefault();

    var type_of_app = this.state.type_of_app
    var type_of_card = this.state.type_of_card
    var type_of_acct = this.state.type_of_acct
    var acct_balance = this.state.acct_balance

    this.props.addCash({
    	type_of_app: this.state.type_of_app,
    	type_of_card: this.state.type_of_card,
    	type_of_acct: this.state.type_of_acct,
    	acct_balance: this.state.acct_balance
    });

    console.log("down here?")

    // this.state.itemized_cash.push({this.state})
  } 

render(){
 
return(

   <div>
     <form onSubmit={this.createItemizedCash}>
     	<h3> Itemized Schedule of Cash </h3>
      	<select value={this.state.type_of_app} onChange={this.handleChange}> 
      	    <option value='applicant'>Applicant</option>
      	    <option value='co-applicant'>Co-Applicant</option>
      	    <option value='joint'>Joint</option>
      	</select>
      	<select value={this.state.type_of_card} onChange={this.handleCardChange}>
      		<option value='amex'>Amex</option>
      		<option value='visa'>Visa</option>
      		<option value='chase'>Chase</option>
      		<option value='discover'>Discover</option>
      		<option value='bank_of_america'>Bank Of America</option>
      	</select>
      	<select value={this.state.type_of_acct} onChange={this.handleAcctChange}>
      		<option value='checkings'>Checkings</option>
      		<option value='savings'>Savings</option> 
      	</select>
      	<label>
    		Account Balance:
    		<input  type="text" value={this.state.acct_balance} onChange={this.handleBalChange} />
  		</label>
        <input type="submit" value="Submit" />
  	</form>
   </div>
    )
  }

}
