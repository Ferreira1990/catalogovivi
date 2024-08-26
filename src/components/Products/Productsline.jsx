import React from 'react'
import '../Products/Productsline.css'

import uno from '../../assets/jabonuno.jpg'
import dos from '../../assets/jabondos.jpg'
import tres from '../../assets/jabontres.jpg'
import cuatro from '../../assets/jabon4.jpg'
import cinco from '../../assets/jabon5.jpg'
import seis from '../../assets/jabon6.jpg'
import siete from '../../assets/jabon7.jpg'
import ocho from '../../assets/jabon8.jpg'
import nueve from '../../assets/jabon9.jpg'

import sal from '../../assets/sal1.jpg'
import sal2 from '../../assets/sal2.jpg'
import sal3 from '../../assets/sal3.jpg'

import Pastadental from '../../assets/pasta.jpg'



const Productsline = () => {
    return (
        <>
            <div id='Productos' className='ContainerProducts'>
                <h1 data-aos="fade-up" data-aos-duration="3000">Catalogo 2024</h1>
                <h2 data-aos="fade-down" data-aos-duration="3000">Jabones 100% naturales</h2>

                <div data-aos="zoom-in" data-aos-duration="1000" className='Containercards'>
                    
                    {/* --------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={uno} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón canela 100% natural, hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={dos} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón 100% de miel orgánica hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div>  

                    </div>
                    
                    {/* --------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={tres} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón de Ruda, emulsiona e hidrata tu piel.</p>
                            <h1>4.990$</h1>
                             </div>                    

                    </div>
                </div>

                {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                <div className='Containercards'>
                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img className='Naranjasoap' src={cuatro} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Jabón de Canela Naranja 100% natural, hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div>
                      
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={cinco} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón de Leche y Miel orgánica hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div> 
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={seis} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón Capuccino Italiano, hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}
                </div>

                

                <div className='Containercards'>
                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={siete} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Jabón de Avena y Miel orgánica, hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div>
                      
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={ocho} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón Manzanilla 100% natural, hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div> 
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={nueve} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón Lavanda 100% natural, hecho a mano.</p>
                            <h1>4.990$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}
                </div>





                <h2 data-aos="zoom-out" data-aos-duration="2000">Sales de baño</h2>

                <div data-aos="zoom-in" data-aos-duration="1000" className='Containercards'>
                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={sal} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Sal de baño con rosas organicas para relajar tu piel y el.</p>
                            <h1>3.990$</h1>
                        </div>
                  
                    </div>

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={sal2} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Sal de baño con mix de flores de campos organ tu piel.</p>
                            <h1>3.990$</h1>
                        </div>

                     


                    </div>

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={sal3} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Sal de baño con flores de lavanda y hibisctu piel</p>
                            <h1>3.990$</h1>
                        </div>                      

                    </div>
                </div>

                {/* ----------------------------------------------------------------------------------------------------------------- */}

                <h2 data-aos="zoom-out" data-aos-duration="2000">Pasta dental</h2>

                <div data-aos="zoom-in" data-aos-duration="1000" className='Containercards'>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={Pastadental} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Pasta dental de bicarbonato, Aceite de coco, Sal del</p>
                            <h1>3.990$</h1>
                        </div>
                      
                    </div>


                </div>





            </div>
        </>
    )
}

export default Productsline