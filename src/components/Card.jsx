import React from 'react'

const Card = ({obj}) => {

   

    const DoThis = () =>{
        var x = document.getElementsByClassName('card_number');
        x[obj.id-1].style.fontSize = '3rem'
        x[obj.id-1].style.opacity = '.5'

        
        x = document.getElementsByClassName('card_title');
        // x[obj.id-1].style.height = '300px'



        // setTimeout(() => {
            var y = document.getElementsByClassName('card_body');
            // y[obj.id-1].style.display = 'block'
            y[obj.id-1].style.opacity = '.7'
        // }, 1000);

        
    }

    const DoThat = () =>{
        var x = document.getElementsByClassName('card_number');
        x[obj.id-1].style.fontSize = '7rem'
        x[obj.id-1].style.opacity = '1'

        x = document.getElementsByClassName('card_title');
        x[obj.id-1].style.height = 'none'



        // setTimeout(() => {
            var y = document.getElementsByClassName('card_body');
            y[obj.id-1].style.transition = 'all .5s ease-in-out'
            // y[obj.id-1].style.display = 'none'
            y[obj.id-1].style.opacity = '0'
        // }, 10);
    }

    return (
        <div className='card' onMouseOver={DoThis} onMouseOut={DoThat}>
            <div style={{
                display:'flex',
                width:'90%',
                // justifyContent:'space-between',
                flexDirection:'column'
            }}>
                <span style={{
                    marginTop:'1rem'
                }}>{obj.userId}</span>
                <span className='card_number' >

                    {obj.id}
                        
                </span>

            </div>
            <div style={{
                textAlign:'center',
                fontSize:'13px',
                borderRadius:'10px',
                padding:'.5rem',
                position:'relative',
                color:'black'
            }}
            className='card_title'
            >
            {obj.title}
            
            <p className='card_body'>
                {obj.body}
            </p>
            </div>

        </div>
    )
}

export default Card

