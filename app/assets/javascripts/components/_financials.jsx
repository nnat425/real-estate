// const Financials = (props) => {
class Financials extends React.Component {

	constructor(props){
    super(props);
    let object = {
	type_of_app: 'Applicant',
	type_of_card: 'Amex',
	type_of_acct: 'Checkings',
	acct_balance: '100'
    }

	this.state = {
			list: [object]
		}

	    this.addCash = this.addCash.bind(this);

    };

	addCash(event){

	  var newArray = this.state.list.slice();    
       newArray.push(event);   
    this.setState({list:newArray})
		
		console.log(event)
	


		console.log(this.state.list)
	}

	render(){
    return(
      <div>
        <h1>This is the financial statement page</h1>
        <ItemizedSchedulesOfCashList cashlist={this.state.list} />
        <ItemiziedSchedules addCash={this.addCash} />
      </div>
    )
}
}