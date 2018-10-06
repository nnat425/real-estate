// const Financials = (props) => {
class Financials extends React.Component {

	constructor(props){
    super(props);
	this.state = {
		list: []
	}
	this.addCash = this.addCash.bind(this);
	this.deleteItem = this.deleteItem.bind(this);
    };

     componentDidMount(){
    fetch('/schedule_of_cashes')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ list: data }) });
  	}

	addCash(event){
	var newArray = this.state.list.slice();    
    newArray.push(event);   
    this.setState({list:newArray})
	}

	deleteItem(index){
	this.state.list.splice(index,1);
	this.setState({list:this.state.list})
	}

	render(){
    return(
      <div>
        <ItemizedSchedulesOfCashList deleteItem={this.deleteItem} cashlist={this.state.list} />
        <ItemiziedSchedules addCash={this.addCash} />
      </div>
    )
}
}