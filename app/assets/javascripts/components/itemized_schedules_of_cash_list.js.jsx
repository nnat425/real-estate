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
			console.log("Item got deleted!")
		})
	}

	render(){
    	const listItems = this.props.cashlist.map((object,index) =>
    	   <ItemizedSchedulesOfCashItem deleteItem={this.deleteRow} key={object.id} index={index} object={object} />
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