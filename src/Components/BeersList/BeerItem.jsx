import './BeerItem.css'


const BeerItem = ({image_url, name, tagline, contributed_by}) => { 
    return (
      <div className="card">
        <div className="">
          <div className="row">
            <div className="col-sm-5">
              <img className="card-img" src={image_url} alt=""/>
            </div>
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{tagline}</p>
                  <p className="card-text">{contributed_by}</p>
                </div>                 
             </div>
          </div>
        </div>
      </div>
      
        
    )
}
export default BeerItem;



