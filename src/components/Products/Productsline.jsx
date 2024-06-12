import React from 'react'
import '../Products/Productsline.css'

import uno from '../../assets/jabonuno.jpg'
import dos from '../../assets/jabondos.jpg'
import tres from '../../assets/jabontres.jpg'
import cuatro from '../../assets/jabon4.jpg'
import cinco from '../../assets/jabon5.jpg'
import seis from '../../assets/jabon6.jpg'

import sal from '../../assets/sal1.jpg'
import sal2 from '../../assets/sal2.jpg'
import sal3 from '../../assets/sal3.jpg'



const Productsline = () => {
  return (
    <>
    <div className='ContainerProducts'>
        <h1 data-aos="fade-left" data-aos-duration="3000">Catalogo 2024</h1>
        <h2 data-aos="fade-right" data-aos-duration="3000">Jabones 100% naturales</h2>

        <div data-aos="zoom-in" data-aos-duration="1000" className='Containercards'>
            <div className='Cardproduct'>
                <div className='Cardimg'>
                    <img src={uno} alt="" />
                    </div> 
                    <div className='Cardinfo'>
                        <p>5 Jabones surtidos 100% naturales, hechos a mano con ingredientes organicos.</p>
                </div> 

                <div className='Cardprice'>
                    <h1>11.990$</h1>
                    </div>              
            </div>

            <div className='Cardproduct'>
                
            <div className='Cardimg'>
                    <img src={dos} alt="" />
                    </div>  

                    <div className='Cardinfo'>
                        <p>Jabón de miel organica con avena para dar suavidad ,vitaminas y minerales a tu piel.</p>
                </div> 

                <div className='Cardprice'>
                    <h1>4.990$</h1>
                    </div>   


                </div>

                <div className='Cardproduct'>

                <div className='Cardimg'>
                    <img src={tres} alt="" />
                    </div> 

                    
                    <div className='Cardinfo'>
                        <p>Jabón de Pistacho organico y menta para nutrir tu piel y dejarla muy suave y relajada</p>
                </div> 

                <div className='Cardprice'>
                    <h1>4.990$</h1>
                    </div>   

                </div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------------- */}

        <div data-aos="zoom-out" data-aos-duration="1000" className='Containercards'>
            <div className='Cardproduct'>
                <div className='Cardimg'>
                    <img src={cuatro} alt="" />
                    </div> 
                    <div className='Cardinfo'>
                        <p>5 Jabones surtidos 100% naturales, hechos a mano con ingredientes organicos.</p>
                </div> 

                <div className='Cardprice'>
                    <h1>11.990$</h1>
                    </div>              
            </div>

            <div className='Cardproduct'>
                
            <div className='Cardimg'>
                    <img src={cinco} alt="" />
                    </div>  

                    <div className='Cardinfo'>
                        <p>Jabón de miel organica con avena para dar suavidad ,vitaminas y minerales a tu piel.</p>
                </div> 

                <div className='Cardprice'>
                    <h1>4.990$</h1>
                    </div>   


                </div>

                <div className='Cardproduct'>

                <div className='Cardimg'>
                    <img src={seis} alt="" />
                    </div> 

                    
                    <div className='Cardinfo'>
                        <p>Jabón de Pistacho organico y menta para nutrir tu piel y dejarla muy suave y relajada</p>
                </div> 

                <div className='Cardprice'>
                    <h1>4.990$</h1>
                    </div>   

                </div>
        </div>

        <h2 data-aos="fade-left" data-aos-duration="2000">Sales de baño</h2>

        <div data-aos="zoom-in" data-aos-duration="1000" className='Containercards'>
            <div className='Cardproduct'>
                <div className='Cardimg'>
                    <img src={sal} alt="" />
                    </div> 
                    <div className='Cardinfo'>
                        <p>Sal de baño con rosas organicas para relajar tu piel y sacar todo lo malo de tu piel.</p>
                </div> 

                <div className='Cardprice'>
                    <h1>3.990$</h1>
                    </div>              
            </div>

            <div className='Cardproduct'>
                
            <div className='Cardimg'>
                    <img src={sal2} alt="" />
                    </div>  

                    <div className='Cardinfo'>
                        <p>Sal de baño con mix de flores de campos organicos para relajar tu piel y sacar todo lo malo de tu piel.</p>
                </div> 

                <div className='Cardprice'>
                    <h1>3.990$</h1>
                    </div>   


                </div>

                <div className='Cardproduct'>

                <div className='Cardimg'>
                    <img src={sal3} alt="" />
                    </div> 

                    
                    <div className='Cardinfo'>
                        <p>Sal de baño con flores de lavanda y hibiscos organicos para relajar tu piel y sacar todo lo malo de tu piel</p>
                </div> 

                <div className='Cardprice'>
                    <h1>3.990$</h1>
                    </div>   

                </div>
        </div>


    </div>
    </>   
  )
}

export default Productsline