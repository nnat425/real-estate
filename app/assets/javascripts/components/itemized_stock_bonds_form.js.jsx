class ItemiziedStockBondsForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      amt_of_shares: '',
      description_of_share: '',
      marketable_value: ''
    };
   
  // this.handleAmtOfSharesChange = this.handleAmtOfSharesChange.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);

  }

  
  // handleAmtOfSharesChange(event){
  //   this.setState({
  //    amt_of_shares: event.target.value
  //  })
  // }

  // handleDescriptionChange(event){
  //   this.setState({
  //    description_of_share: event.target.value
  //  })
  // }

  // handleMarketableValueChange(event){
  //   this.setState({
  //    marketable_value: event.target.value
  //  })
  // }

   handleInputChange(event) {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    console.log(event.target.name)
    console.log("I'm here")
    this.setState({
      [event.target.name]: event.target.value
    });
  }



  createItemizedStock(event){
    event.preventDefault();

    var json = {
    	amt_of_shares: this.state.amt_of_shares,
    	description_of_share: this.state.description_of_share,
    	marketable_value: this.state.marketable_value,
    }

    fetch('/schedule_of_cashes',
    {
    	method: 'POST',
    	headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(json)
   }).then((response) => {
    return response.json() ;
  }).then((data) => {
    json['id'] = data.id
    this.props.addCash(json)
  })
} 


render(){

  return(

   <div>
   <form onSubmit={this.createItemizedStock}>
    <label>
   Amount of Shares:
   <input type="text" value={this.state.amt_of_shares} onChange={this.handleInputChange} />
   </label>
   <label>
   Description:
   <input type="text" value={this.state.description_of_share} onChange={this.handleInputChange} />
   </label>
 <label>
   Marketable Value:
   <input type="text" value={this.state.marketable_value} onChange={this.handleInputChange} />
   </label>
   <input type="submit" value="Submit" />
   </form>
   </div>
   )
}

}
