import React, { useEffect, useRef, useState } from 'react'

import './index.css'
import image from '../../assets/programming.svg'
import Nav_comp from '../../components/Nav_componet/Nav_comp';
import foto from '../../assets/undraw_maker_launch_re_rq81.svg'
import contact_foto from '../../assets/undraw_personal_text_re_vqj3.svg'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2' 


const Index = () => {

  const [toggle, Settoggle] = useState(true)

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n24eape', 'template_anuninu', form.current, '0zhJ5vUlkIoh_dvLD')
      .then((result) => {
        Swal.fire({
          title: 'Se ha enviado tu correo electronico',
          text: '¿Quieres continuar?',
          icon: 'success',
          confirmButtonText: 'Si!'
        })
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    Settoggle(false)
  }, [])

  window.sr = ScrollReveal();

  sr.reveal('.Index__size', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px',
  })

  sr.reveal('.About__reveal', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px',
  })

  sr.reveal('.Skill__reveal', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px',
  })

  sr.reveal('.Contact__reveal', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px',
  })





  return (
    <div >
      <div className='main-container d-flex  content '>
        <div className="container-fluid ">
          <div className="row  ">
            <div className="col-sm-12 col-md-12 col-lg-12 ">
              <Nav_comp />
            </div>
          </div>
          <div className="row  tamanio">
            <div className="col-12 ">
              <div className="container-fluid h-100 ">
                <div className="row h-100 ">
                  <div className="col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center ">
                    <div>
                      <div className={`text-light text-align-justify ${toggle ? 'item' : 'item--new'} `}>
                        <h1  >Osvaldo Santillan Jimenez</h1>
                      </div>
                      <h1 className='text-light text-center' onClick={e => Settoggle(true)}>Full-Stack Developer</h1>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center ">
                    <img src={image} alt="" className='Index__size h-auto' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id='about' className='main-container d-flex About__content'>
        <div className='container-fluid '>
          <div className="row h-100 About__reveal">
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className='text-light w-75 About__textalign '>
                <h1 className='display-1'>Sobre mí</h1>
                <h4 >Bienvenido a esta seccion donde conoceras un poco mas de mi historia y mi perfil profesional</h4>
                <h1 className='mt-3'>¿Quién soy yo?</h1>
                <h4 className='mt-2 '> Mi nombre es Osvaldo Santillan Jimenez, radico actualmente en Pachuca,Hgo Mexico, soy ingeniero en software,
                  me facina innovar y traer soluciones de diferentes indoles.
                </h4>
                <h1 className='mt-3'>¿Qué hago?</h1>
                <h4 className='mt-2 '>Me dedico a desarrollar soluciones con software, tengo experiencia tanto en back-end como front-end
                  lo que me permite tener un panorama mas amplio a la hora de analizar un problema</h4>
                <h1 className='mt-3'>Formación Académica</h1>
                <ul>
                  <li ><h3 className='mt-2'>Licenciatura:  Ingenieria en Software </h3></li>
                  <li><h3 className='mt-2'>Carrera Tecnica: Tecnico en Programación </h3></li>
                </ul>
              </div>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
              <img src={foto} alt="" className='h-75 w-100 ' />
            </div>
          </div>
        </div>
      </section>

      <section id='Skills' className='main-container d-flex About__content'>
        <div className='container-fluid '>
          <div className='row h-100  Skill__reveal text-light'>
            <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center">

              <table className=" Skills__table--size  Skills__glass mt-3">
                <thead>
                  <tr>

                    <th className='text-center'><h1>Front-End</h1></th>

                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <td className='p-2'><h3>React</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Angular</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>CSS</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>HTML</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Bootstrap</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Tailwind CSS</h3></td>
                  </tr>


                </tbody>
              </table>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center mt-3">
              <table className=" Skills__table--size w-75 Skills__glass">
                <thead>
                  <tr>

                    <th className='text-center'><h1>Back-End</h1></th>

                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <td className='p-2'><h3>Node JS {"(Express JS)"}</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>C#</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>C++</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Java {"(SpringBoot,JPA,Hibernate)"}</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Php {"(CodeIgnaiter,Laravel)"}</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>SQL</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>MySql</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>PostgreSQL</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Oracle DataBase</h3></td>
                  </tr>


                </tbody>
              </table>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 d-flex align-items-center justify-content-center">
              <table className=" Skills__table--size  Skills__glass mt-3">
                <thead>
                  <tr>

                    <th className='text-center'><h1>Soft-Skills & Version</h1></th>

                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <td className='p-2'><h3>Scrum</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Git</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Github & Gitlab</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Mantenimiento WEB</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>Elaboración de Informes técnicos</h3></td>
                  </tr>
                  <tr >
                    <td className='p-2'><h3>UML y Diagramación</h3></td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id='Contact' className='main-container d-flex About__content'>
        <div className='container-fluid '>
          <div className='row h-100  Contact__reveal text-light'> 
          
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
            
              <form ref={form} className='container h-100' onSubmit={sendEmail}>
          
                <div className="row  h-100">
         
                  <div className="col-sm-12 col-md-12 col-lg-12  mt-3">
                  
                    <div className=' d-flex  justify-content-center align-items-center h-100'>
                      <div className='Contact__form--size'>
                        <div className=' '>
                          <label htmlFor="" className='Contact__label--size'>Nombre:</label>
                          <input type="text" className='Contact__input--size rounded' name='user_name'/>
                        </div>
                        <div className='mt-3  '>
                          <label htmlFor="" className='Contact__label--size'>Correo electronico:</label>
                          <input type="email" className='Contact__input--size rounded' name='user_email' />
                        </div>
                        <div className='mt-3'>
                        <textarea name="message" id="Mensaje_usuario" cols="30" rows="5" placeholder='Mensaje....' className='w-100 s rounded' ></textarea>
                        </div>
                        <div className='mt-3'>
                          <button type="submit" className='btn btn-info w-100'>Enviar</button>
                        </div>
                      </div>
                    </div>


                  </div>

                  

                </div>
               



              </form>
              
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6  d-flex justify-content-center align-items-center">
            <img src={contact_foto} alt=""  className='w-100 h-100'/>
          </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Index