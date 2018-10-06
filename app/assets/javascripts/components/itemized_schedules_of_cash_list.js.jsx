class ItemizedSchedulesOfCashList extends React.Component {

	constructor(props){
		super(props);
		this.deleteRow = this.deleteRow.bind(this);
	}

	deleteRow(object_id,index){
		this.props.deleteItem(index)
		fetch('/schedule_of_cashes/' + object_id,
		{
			method: 'DELETE',
		}).then((response) => {
			console.log("this is the response")
			console.log(response)
		})
	}

	render(){
    	const listItems = this.props.cashlist.map((object,index) =>
    	  <tr key={object.id}>
            <td>{object.type_of_app}</td> 
  	   	    <td>{object.type_of_card}</td> 
            <td>{object.type_of_acct}</td> 
            <td>{object.account_balance}</td> 
            <td><button onClick={this.deleteRow.bind(null,object.id,index)}> X </button></td>
            <td><button onClick={this.editRow}> Edit </button></td>
          </tr>
        );

		return(
			<div>
			<h3> Itemized Schedules Of Cash List </h3>
			 <table border="1">
			 <tbody>
    	  <tr>
    	    <th> Applicant or Co-Applicant </th>
    	    <th> Financial Instituion </th>
    	    <th> Type of Account </th>
    	    <th> Account Balance </th>
    	  </tr>
			 {listItems}
			 </tbody>
			 </table>
			</div>

			)}

	}