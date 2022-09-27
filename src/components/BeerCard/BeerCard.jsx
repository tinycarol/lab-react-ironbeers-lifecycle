import React from 'react';



function BeerCard({ name, image_url, tagline, contributed_by }) {
  return (
    
        
          <div style={{display:'flex', flexDirection:'row', border:' 1px solid black', borderRadius:'1rem', padding:'1rem', margin:'1rem'}}>
            <img alt='beer'src={image_url} style={{maxHeight:'20rem', width:'8rem', marginTop:'1rem', paddingRight:'2rem', paddingLeft:'1rem'}}/>
        
        <section style={{ display:'flex', flexDirection:'column', width:'12rem', marginTop:'2rem'}}>
            {<h1> {name}</h1>}
            {<p style={{width:'12rem',justifyContent:'center', color:'grey', fontSize:'1.3rem'}}><strong> {tagline}</strong></p>}
            {<s style={{textDecoration:'none', width:'12rem',justifyContent:'center'}}><strong>Created by:</strong>{contributed_by} </s>}
          </section> 
          </div>
        
     
     );
}

export default BeerCard;
