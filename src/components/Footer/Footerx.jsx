import React from 'react'
import '../Footer/Footerx.css'



const Footerx = () => {
  return (
    <>
      <footer className="footer">
            <div className="footer-section">
                <h4>Contacto</h4>
                <p>Dirección: Calle 2 norte, Santiago, Chile</p>
                <p>Teléfono: +123 456 789</p>
                <p>Email: Essenza@gmail.com</p>
                <p>Horario de Atención: Lun - Sab, 9:00 - 18:00</p>
            </div>
            <div className="footer-section">
                <h4>Síguenos</h4>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-tiktok"></i></a>
            </div>
            <div className="footer-section">
                <h4>Métodos de Pago</h4>
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-regular fa-money-bill-1"></i>
            </div>
            <div className="footer-section">
                <h4>Certificaciones</h4>
                <i class="fa-solid fa-check"></i>Orgánico
                <i class="fa-solid fa-check"></i>Libre de crueldad animal
            </div>
        </footer>
        
</>
  )
}

export default Footerx