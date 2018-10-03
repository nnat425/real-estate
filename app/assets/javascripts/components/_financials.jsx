// const Financials = (props) => {
class Financials extends React.Component {

	constructor(props){
    super(props);
 
	this.state = {
		list: []
	}

	this.addCash = this.addCash.bind(this);

    };

     componentDidMount(){
    fetch('http://localhost:3000/schedule_of_cashes')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ list: data }) });
  	}

	addCash(event){
	var newArray = this.state.list.slice();    
    newArray.push(event);   
    this.setState({list:newArray})
	}

	render(){
    return(
      <div>
        <ItemizedSchedulesOfCashList cashlist={this.state.list} />
        <ItemiziedSchedules addCash={this.addCash} />
      </div>
    )
}
}