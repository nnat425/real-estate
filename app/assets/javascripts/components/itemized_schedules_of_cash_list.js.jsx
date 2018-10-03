class ItemizedSchedulesOfCashList extends React.Component {

	constructor(props){
		super(props);
	}


	render(){
		let count = 0
    	const listItems = this.props.cashlist.map((object,index) =>
    	  <tr key={index}>
            <td>{object.type_of_app}</td> 
  	   	    <td>{object.type_of_card}</td> 
            <td>{object.type_of_acct}</td> 
            <td>{object.account_balance}</td> 
            <td> X </td>
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