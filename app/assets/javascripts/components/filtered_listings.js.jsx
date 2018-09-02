class AllFilteredListings extends React.Component {

constructor(props){
    super(props);
    this.state = {
      listings: []
    };
  }

  componentDidMount(){
    fetch('/listings.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ listings: data }) });
  }


render(){
    var listings = this.state.listings.map((listing) => {
      return(
        <div key={listing.id}>
          <h1>{listing.address}</h1>
          <p>{listing.number_of_bedrooms}</p>
          <p>{listing.minimum_price}</p>
          <p>{listing.maxiumum_price}</p>
        </div>
      )
    })

return(
      <div>
        {listings}
      </div>
    )
  }

}