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
import aceite from '../../assets/aceitec2.jpg'
import aceite2 from '../../assets/aceitec.jpg'
import mantec from '../../assets/manteca.jpg'
import Jabonesliquidos from '../../assets/liquido.jpg'
import Chanpu from '../../assets/shampu.jpg'
import ACON from '../../assets/acon.jpg'
import mara from '../../assets/jabonmara.jpg'
import NIÑO from '../../assets/jabonniño.jpg'
import arroz from '../../assets/arroz.jpg'
import Pastadental from '../../assets/pasta.jpg'
import unguen from '../../assets/unguen.jpg'
import porta from '../../assets/porta.jpg'
import ROSA from '../../assets/rosas.jpg'
import CABRA from '../../assets/lechecabra.jpg'
import mopa from '../../assets/mopa.jpg'
import UVAX from '../../assets/uva.jpg'


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
                            <h1>$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={dos} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón 100% de miel orgánica hecho a mano.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={tres} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón de Ruda, emulsiona e hidrata tu piel.</p>
                            <h1>$</h1>
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
                            <h1>$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={cinco} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón de Leche y Miel orgánica hecho a mano.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={seis} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón Capuccino Italiano, hecho a mano.</p>
                            <h1>$</h1>
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
                            <h1>$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={ocho} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón Manzanilla 100% natural, hecho a mano.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={nueve} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón Lavanda 100% natural, hecho a mano.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}
                </div>

                <div className='Containercards'>
                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={mara} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Jabón Maracuya 100% Natural, Hecho a mano.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={NIÑO} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Divertidos Jabones para tu bebe, 100% Naturales.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={UVAX} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón de Uva 100% natural, hecho a mano.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}
                </div>

                <div className='Containercards'>
                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img className='Rositas' src={ROSA} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Jabón de Rosas 100% Natural, Hecho a mano.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img className='CABRAX' src={CABRA} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Jabón de Leche de cabra, miel y manteca karite 100% Natural, Hecho a mano.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={mopa} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Jabón, lufa exfoliante 100% natural, hecho a mano.</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}
                </div>





                <h2 data-aos="zoom-out" data-aos-duration="2000">Otros</h2>

                <div data-aos="zoom-in" data-aos-duration="1000" className='Containercards'>
                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={sal} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Sal de baño 100% natural de melissa, lavanda, frambuesa o ruda.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={sal2} alt="" />
                        </div>

                        <div className='Cardinfo'>
                            <p>Paño exfoliantes de cañamo para limpiar el cuerpo.</p>
                            <h1>$</h1>
                        </div>




                    </div>

                    <div className='Cardproduct'>

                        <div className='Cardimg'>
                            <img src={sal3} alt="" />
                        </div>


                        <div className='Cardinfo'>
                            <p>Desodorante con ingredientes 100% natural (30grs).</p>
                            <h1>$</h1>
                        </div>

                    </div>


                </div>

                <div className='Containercards'>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img className='aceiteserum' src={aceite} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Aceite de romero, fortalecedor para el cabello.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={aceite2} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Serum de Argan para puntas de cabello.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={mantec} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Balsamo labial de cacao 100% Natural.</p>
                            <h1>$</h1>
                        </div>

                    </div>


                </div>

                <div className='Containercards'>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img className='aceiteserum' src={arroz} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Manteca de Arroz para manos (30grs), 100% Natural.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={unguen} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Ungüento de Calendula (50grs), 100% Natural.</p>
                            <h1>$</h1>
                        </div>

                    </div>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={porta} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Balsamo labial con color y sabor (Rosa, Rojo y Dorado), 100% Natural.</p>
                            <h1>$</h1>
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
                            <p>Crema dental 100% Natural (50grs).</p>
                            <h1>$</h1>
                        </div>

                    </div>


                </div>

                <h2 data-aos="zoom-out" data-aos-duration="2000">Liquidos</h2>

                <div className='Containerhorizontal'>

                <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={Chanpu} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Shampoo 250ml 100% Natural (Miel, Romero, Manzanilla).</p>
                            <h1>$</h1>
                        </div>

                    </div>


                    <div className='Cardhorizontal'>
                        <div className='Horizontalimg'><img className='liquidosimgjabon' src={Jabonesliquidos} alt="" /></div>
                        <div className='Cardinfohorizontal'>
                            <p>Jabón liquido 250ml 100% Natural. <br/>(Limón, Naranja, coco, frutilla, capuccino, ruda y mas..).</p>
                            <h1>$</h1>
                        </div>
                    </div>

                    <div className='Cardproduct'>
                        <div className='Cardimg'>
                            <img src={ACON} alt="" />
                        </div>
                        <div className='Cardinfo'>
                            <p>Acondicionador 250ml, 100% Natural. (Frutilla, Melissa, Romero y mas...)</p>
                            <h1>$</h1>
                        </div>

                    </div>
                </div>

                





            </div>
        </>
    )
}

export default Productsline