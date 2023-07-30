import React from 'react'
import facebook from '../../assets/facebook-3-2.svg'
import github from '../../assets/github-icon-1.svg'
import linkendin from '../../assets/linkedin-icon.svg'
import gmail from '../../assets/official-gmail-icon-2020-.svg'
import insta from '../../assets/instagram-2016-5.svg'
import whats from '../../assets/whatsapp-3.svg'
import './Footer.css'
import Swal from 'sweetalert2'

const Footer = () => {

   

      const handleAlert=()=>{
        Swal.fire({
            title: '¿Deseas contactarme de manera mas inmediata?',
            text: 'Este es mi correo electronico: osvaldonuevo@gmail.com',
            icon: 'question',
            confirmButtonText: 'Listo te contactare!'
          })
      }

      const handleAlertNum=()=>{
        Swal.fire({
            title: '¿Una manera aun mas rapida?',
            text: 'Este es mi numero telefonico mandame un whats!:+52 7752593380',
            icon: 'question',
            confirmButtonText: 'Listo te contactare!'
          })
      }

    return (
        <div className='w-100 '>
        <div className="bg-dark text-center text-white">

        <div className="container p-4 pb-0">

        <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/osvaldohb/" role="button"><img src={facebook} alt="" className='rounded-circle Footer__icon--size'/></a>
    

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Osvaldohb" role="button"><img src={github} alt="" className='rounded-circle Footer__icon--size'/></a>
    

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/osvaldo-santillan-jimenez-a96b9b137" role="button"><img src={linkendin} alt="" className='rounded-circle Footer__icon--size'/></a>
    
    
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" onClick={e=>handleAlert()}><img src={gmail} alt="" className=' Footer__icon--size'/></a>
    

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/osvaldosantillan_14/" role="button"><img src={insta} alt="" className=' Footer__icon--size'/></a>
    
    
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" onClick={e=>handleAlertNum()}><div className='d-flex align-items-center h-100 w-100'><img src={whats} alt="" className=' Footer__icon--size'/></div></a>
        </section>

        </div>

    

        <div className="text-center p-3" >
       
        <a className="text-white" href="#">www.osvaldosantillan.com</a>
        </div>

    </div>
        </div>
    )
}

export default Footer