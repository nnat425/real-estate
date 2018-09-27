class ItemizedSchedulesOfCashList extends React.Component {

	constructor(props){
		super(props);
		let count = 0
	}


	render(){

    	const listItems = this.props.cashlist.map((object) =>
    	<div>
        <li>{object.type_of_app}</li> 
  	   	<li>{object.type_of_card}</li> 
  	    <li>{object.type_of_card}</li> 
        <li>{object.type_of_acct}</li> 
        <li>{object.acct_balance}</li> 
  	   	</div>
        );

		return(
			<div>
			<h1> Itemized Schedules Of Cash List </h1>
			 
			<ul>
			 {listItems}
			 </ul>
			</div>
			)}

	}