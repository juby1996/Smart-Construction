import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';

// for services section
import ServiceImg1 from '../../assets/images/construction1.jpg';
import ServiceImg2 from '../../assets/images/construction-work-2698790_1280.jpg';
import ServiceImg3 from '../../assets/images/construction6 (2).jpg';
import ServiceImg4 from '../../assets/images/construction2.jpg'; 

//  for projects section
import ConstructionImg1 from '../../assets/images/construction10.jpg'; 
import ConstructionImg3 from '../../assets/images/construction9.jpg';
import ConstructionImg4 from '../../assets/images/construction4.jpg';
import ConstructionImg2 from '../../assets/images/construction3.jpg'; //

// for why choose us section
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

// for testimonials section
import 'swiper/css';
import 'swiper/css/pagination';
import AvatarImg from '../../assets/images/author-2.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules for pagination
import { Pagination } from 'swiper/modules';

// for blog section
import BlogImg1 from '../../assets/images/construction3.jpg';



const Home = () => {
  return (
  <>  
    <Header/>
    <main>     

      <section className='section-1'>
        <div className='hero d-flex align-items-center'>

         {/* container-fluid:to display image 100% of the screen */}
          <div className='container-fluid'>
            <div className='text-center'>
              {/* for the pre heading */}
              <span>Welcome Amazing Constructions</span>
              <h1>Crafting dreams with <br />precision and excellence</h1>
              <p>We excel at transforming visions into reality throgh outstanding craftsmanship and precise <br /> attention to detail. With years of experience and a dedication to quality.</p>
              <div className='mt-4'>
                 <a className='btn btn-primary large'>Contact Now</a>
                 <a className='btn btn-secondary ms-2 large'>View Projects</a>
              </div>             
            </div>
          </div>
        </div>
      </section>
      {/* --------end hero section -------- */}

      {/* About us section created on 03/06/26 by Juby */}
      

      <section className='section-2 py-5'>
        <div className='container py-5' >
          <div className='row'>
            <div className='col-md-6'>
              <img src={AboutImg} className='w-100' alt="" />
            </div>
             <div className='col-md-6'>     
              <span >about us</span>
              <h2>Crafting structures that last a lifetime</h2>
              <p>Building enduring structures requires a comprehensive approach that combines
                 advanced materials, resilient design, routine maintenance, and sustainable 
                 practices. By drawing on historical insights and utilizing modern technology.</p>
                <p> Designing structures that stand the test of time involves a seamless
                 blend of cutting-edge materials, durable design, ongoing upkeep, and 
                 eco-friendly practices. By combining lessons from the past with the power 
                 of modern technology.</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------end about us section -------- */}

      {/* services section created on 04/06/26 by Juby */}
      <section className='section-3 bg-light py-5'>
           <div className='container-fluid' py-5 >
             <div className='section-header text-center '>                       
                 <span >our services</span>
                 <h2>Our construction services.</h2>
                 <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>          
             </div>
             {/* for creating cards */}
             <div className='row  pt-4'>
               {/* card one */}
               <div className='col-md-3 col-lg-3'>
                 <div  className='item'>
                     <div className='service-image'>
                       <img src={ServiceImg1} className='w-100' alt="" />
                     </div>
                     <div className='service-body'>
                         <div className='service-title'>
                           <h3>Speciality Construction</h3>
                         </div>                
                         <div className='service-content'>
                           <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                         </div>
                         <a href="" className='btn btn-primary small'>Read More</a>
                     </div>
                 </div>
               </div>
               {/* end of card one */}
               {/* card two */}
                <div className='col-md-3 col-lg-3'>
                 <div  className='item'>
                     <div className='service-image'>
                       <img src={ServiceImg2} className='w-100' alt="" />
                     </div>
                     <div className='service-body'>
                         <div className='service-title'>
                           <h3>Speciality Construction</h3>
                         </div>                
                         <div className='service-content'>
                           <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                         </div>
                         <a href="" className='btn btn-primary small'>Read More</a>
                     </div>
                 </div>
               </div>
               {/* end of card two */}
                {/* card three */}
                <div className='col-md-3 col-lg-3'>
                 <div  className='item'>
                     <div className='service-image'>
                       <img src={ServiceImg3} className='w-100' alt="" />
                     </div>
                     <div className='service-body'>
                         <div className='service-title'>
                           <h3>Speciality Construction</h3>
                         </div>                
                         <div className='service-content'>
                           <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                         </div>
                         <a href="" className='btn btn-primary small'>Read More</a>
                     </div>
                 </div>
               </div>
               {/* end of card three */}
                 {/* card four */}
                <div className='col-md-3 col-lg-3'>
                 <div  className='item'>
                     <div className='service-image'>
                       <img src={ServiceImg4} className='w-100' alt="" />
                     </div>
                     <div className='service-body'>
                         <div className='service-title'>
                           <h3>Speciality Construction</h3>
                         </div>                
                         <div className='service-content'>
                           <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                         </div>
                         <a href="" className='btn btn-primary small'>Read More</a>
                     </div>
                 </div>
               </div>
               {/* end of card four */}
                   {/* -----end of cards----- */}
             </div>      
             
           </div>
      </section>
      {/* --------end of services section -------- */}

       {/* why choose us section created on 04/06/26 by Juby */}

      <section  className='section-4 py-5'>
        <div className='container py-5' >

          <div className='section-header text-center '>                       
              <span >Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise, <br /> decades of experience, innovation, and flexibility to consistently deliver excellence.
                </p>          
          </div>

       
          <div className='row  pt-4'>
          
            {/* card 1 */}     
            <div className='col-md-4 '>
              <div className='card shadow  border-0 p-4' >             
                <div className='card-icon'>
                  <img src={Icon1}  alt="" />
                </div>               
                <div className='card-title mt-3 '>
                  <h3>Cutting-Edge Solutions</h3>
                </div>                                     
                  <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>              
                      
              </div>
            </div>
            {/* end of card 1 */}

            {/* card 2 */}        
            <div className='col-md-4 '>
              <div className='card shadow  border-0 p-4' >             
                <div className='card-icon'>
                  <img src={Icon2}  alt="" />
                </div>               
                <div className='card-title mt-3 '>
                  <h3>Cutting-Edge Solutions</h3>
                </div>                                     
                  <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>              
              </div>
            </div>
            {/* end of card 2 */}
            {/* card 3 */}        
            <div className='col-md-4 '>
              <div className='card shadow  border-0 p-4' >             
                <div className='card-icon'>
                  <img src={Icon3}  alt="" />
                </div>               
                <div className='card-title mt-3 '>
                  <h3>Cutting-Edge Solutions</h3>
                </div>                                     
                  <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>              
              </div>
            </div>
            {/* end of card 3 */}

          </div>   
        </div>
      </section>
      {/* --------end of why choose us section -------- */}
      
      {/* our projects section created on 04/06/26 by Juby */}

      <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5' >
          <div className='section-header text-center '>                       
              <span >our projects</span>
              <h2>Discover our diverse range of projects.</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>          
          </div>
          {/* for creating cards */}
          <div className='row  pt-4'>
            {/* card one */}
            <div className='col-md-3 col-lg-3'>
              <div  className='item'>
                  <div className='service-image'>
                    <img src={ConstructionImg1} className='w-100' alt="" />
                  </div>
                  <div className='service-body'>
                      <div className='service-title'>
                        <h3>Kuwait Project</h3>
                      </div>                
                      <div className='service-content'>
                        <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                      </div>
                      <a href="" className='btn btn-primary small'>Read More</a>
                  </div>
              </div>
            </div>
            {/* end of card one */}
            {/* card two */}
             <div className='col-md-3 col-lg-3'>
              <div  className='item'>
                  <div className='service-image'>
                    <img src={ConstructionImg2} className='w-100' alt="" />
                  </div>
                  <div className='service-body'>
                      <div className='service-title'>
                        <h3>Speciality Construction</h3>
                      </div>                
                      <div className='service-content'>
                        <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                      </div>
                      <a href="" className='btn btn-primary small'>Read More</a>
                  </div>
              </div>
            </div>
            {/* end of card two */}
             {/* card three */}
             <div className='col-md-3 col-lg-3'>
              <div  className='item'>
                  <div className='service-image'>
                    <img src={ConstructionImg3} className='w-100' alt="" />
                  </div>
                  <div className='service-body'>
                      <div className='service-title'>
                        <h3>Speciality Construction</h3>
                      </div>                
                      <div className='service-content'>
                        <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                      </div>
                      <a href="" className='btn btn-primary small'>Read More</a>
                  </div>
              </div>
            </div>
            {/* end of card three */}
              {/* card four */}
             <div className='col-md-3 col-lg-3'>
              <div  className='item'>
                  <div className='service-image'>
                    <img src={ConstructionImg4} className='w-100' alt="" />
                  </div>
                  <div className='service-body'>
                      <div className='service-title'>
                        <h3>Speciality Construction</h3>
                      </div>                
                      <div className='service-content'>
                        <p>Speciality construction services are tailored to meet the unique needs of clients,focus on projects requiring specialized skills,materials,and techniques</p>
                      </div>
                      <a href="" className='btn btn-primary small'>Read More</a>
                  </div>
              </div>
            </div>
            {/* end of card four */}
                {/* -----end of cards----- */}
          </div>
      
          
        </div>
      </section>
      {/* --------end of project section -------- */}

      {/* --------Testimonials  section created on 8/06/26 by Juby -------- */}
      <section className='section-5 py-5'>
        <div className='container'>

          <div className='section-header text-center '>                       
                <span >Testimonials</span>
                <h2>What people are saying about us.</h2>
                <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
                </p>          
          </div>

          <Swiper
              // install Swiper modules for pagination
              modules={[ Pagination]}
              spaceBetween={50}
              slidesPerView={3}             
              pagination={{ clickable: true }}
                       
          >
            {/* swipper card 1 */}
            <SwiperSlide> 
              <div className='card shadow border-0'>
                <div className='card-body p-5'>

                  {/* for rating stars */}
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  {/* end of rating stars */}

                  {/* for testimoniyal */}
                  <div className='content pt-4 pb-2'>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa unde itaque nulla, soluta ut dolorum! Ratione quisquam aperiam dolorem quasi, modi perferendis maiores nobis neque odio consequuntur nam aut qui?</p>
                  </div>

                  <hr />

                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width = "50px" />
                    </div>
                    <div className=' ps-3'>
                      <div className='name'>KJ Varghese</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            {/* end of swipper card 1 */}
            {/* swipper card 2 */}
            <SwiperSlide> 
              <div className='card shadow border-0'>
                <div className='card-body p-5'>

                  {/* for rating stars */}
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  {/* end of rating stars */}

                  {/* for testimoniyal */}
                  <div className='content pt-4 pb-2'>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa unde itaque nulla, soluta ut dolorum! Ratione quisquam aperiam dolorem quasi, modi perferendis maiores nobis neque odio consequuntur nam aut qui?</p>
                  </div>

                  <hr />

                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width = "50px" />
                    </div>
                    <div className=' ps-3'>
                      <div className='name'>Alen Benny</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            {/* end of swipper card 2 */}
            {/* swipper card 3 */}
            <SwiperSlide> 
              <div className='card shadow border-0'>
                <div className='card-body p-5'>

                  {/* for rating stars */}
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  {/* end of rating stars */}

                  {/* for testimoniyal */}
                  <div className='content pt-4 pb-2'>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa unde itaque nulla, soluta ut dolorum! Ratione quisquam aperiam dolorem quasi, modi perferendis maiores nobis neque odio consequuntur nam aut qui?</p>
                  </div>

                  <hr />

                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width = "50px" />
                    </div>
                    <div className=' ps-3'>
                      <div className='name'>  Benny Joseph </div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            {/* end of swipper card 3 */}
            {/* swipper card 3 */}
            <SwiperSlide> 
              <div className='card shadow border-0'>
                <div className='card-body p-5'>

                  {/* for rating stars */}
                  <div className='rating'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  {/* end of rating stars */}

                  {/* for testimoniyal */}
                  <div className='content pt-4 pb-2'>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa unde itaque nulla, soluta ut dolorum! Ratione quisquam aperiam dolorem quasi, modi perferendis maiores nobis neque odio consequuntur nam aut qui?</p>
                  </div>

                  <hr />

                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg} alt="" width = "50px" />
                    </div>
                    <div className=' ps-3'>
                      <div className='name'>John Doe</div>
                      <div>CEO</div>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
            {/* end of swipper card 3 */}        

               
    
        </Swiper>     

        </div>
      </section>
      {/* --------end of Testimonials section -------- */}
        
      {/* --------Blogs  section created on 8/06/26 by Juby -------- */}
      <section className='section-6 bg-light py-5'>
        <div className='container'>

          {/* section header */}
          <div className='section-header text-center '>                       
                <span >Blog & News</span>
                <h2>Articles & blog posts.</h2>
                <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>          
          </div>
          {/* end of section header */}

          <div className='row pt-3 '>
            {/* blog card 1*/}
            <div className='col-md-4'>
              <div className='card shadow border-0'>
                <div className='card-img-top'> 
                  <img src={BlogImg1} className='w-100' alt="" />
                </div>
               
                <div className='card-body p-4'>
                  <div className='mb-3'>
                    <a href='#' className='title'>How to Choose the Right Foundation for Your Build</a>
                  </div>                  
                  <a href="" className='btn btn-primary small'>Read More</a>  
                </div>            
              </div>
            </div>
            {/* end of blog card 1*/}

            {/* blog card 2*/}
            <div className='col-md-4'>
              <div className='card shadow border-0'>
                <div className='card-img-top'> 
                  <img src={BlogImg1} className='w-100' alt="" />
                </div>
               
                <div className='card-body p-4'>
                  <div className='mb-3'>
                    <a href='#' className='title'>Building the Future: Trends to Watch</a>
                  </div>                  
                  < a href="" className='btn btn-primary small'>Read More</a>  
                </div>            
              </div>
            </div>
            {/* end of blog card 2*/}

            {/* blog card 3*/}
            <div className='col-md-4'>
              <div className='card shadow border-0'>
                <div className='card-img-top'> 
                  <img src={BlogImg1} className='w-100' alt="" />
                </div>
               
                <div className='card-body p-4'>
                  <div className='mb-3'>
                    <a href='#' className='title'>Residential vs. Commercial Construction: The Key Differences</a>
                  </div>                  
                  <a href="" className='btn btn-primary small'>Read More</a>  
                </div>            
              </div>
            </div>
            {/* end of blog card 3*/}

          </div>
        </div>
      </section>
      {/* --------end of blogs section -------- */}

    </main>
    <Footer/>


  </>
    
  )
}

export default Home