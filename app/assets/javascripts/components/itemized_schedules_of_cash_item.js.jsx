
class ItemizedSchedulesOfCashItem extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				editable: false,
				item: props.object
			}
			this.deleteItem = this.deleteItem.bind(this);
		}

		deleteItem(object_id,index){
			this.props.deleteItem(object_id,index)
		}

		render(){
		return(
			<tr key={this.props.object.id}>
				<td value={this.state.item.type_of_app} > {this.props.object.type_of_app}</td> 
  	   	    	<td value={this.state.item.type_of_card}> {this.props.object.type_of_card}</td> 
            	<td value={this.state.item.type_of_acct}> {this.props.object.type_of_acct}</td> 
           		<td value={this.state.item.account_balance}> {this.props.object.account_balance}</td> 
            	<td><button onClick={this.deleteItem.bind(null,this.props.object.id, this.props.index)}> X </button></td>
				</tr>
			)
	}

}

 

