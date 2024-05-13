import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";



const Home = () => {

   useGSAP(() => {

    gsap.from(".logo", {
            opacity: 0,
            duration: 1,
            y: -20,
            
        });
    gsap.from(".nav_lists .l-1", {
            opacity: 0,
            delay: 1,
            duration: 1,
            x: 20,
            stagger: 0.5,
            
        });
    gsap.from(".right_nav .nav_right", {
            opacity: 0,
            delay: 1,
            duration: 1,
            x: -20,
            stagger: 0.5,
            
        });
    gsap.from(".left_hero .left_anime", {
            opacity: 0,
            delay: 2,
            duration: 1,
            x: -20,
            stagger: 0.5,
            
        });
    gsap.from(".logo_container", {
            opacity: 0,
            delay: 3,
            duration: 1,
            x: -20,
            
            
        });
    gsap.from(".right_hero", {
            opacity: 0,
            delay: 3,
            duration: 1,
            x: 20,
            
            
        });


   });



    const close = () => {

        document.getElementById("menu").style.right = "-65%";
        
    }
    const open = () => {

        document.getElementById("menu").style.right = "0%";
        
    }


  return (
    <>
      <nav>
    <div id="menu" className="menu_bar">
        <img onClick={close} className="cross" src="/images/icon-close-menu.svg" alt="" />
    <ul className="menu_nav_lists">
            <div className="menu_drop_fe">
              <button className="dropbtn">
                Features
                <img
                  className="down_feature"
                  src="/images/icon-arrow-down.svg"
                  alt=""
                />
              </button>
              <div className="menu_features">
                <ul>
                  <li>
                    {" "}
                    <img src="/images/icon-todo.svg" alt="" /> ToDo List
                  </li>
                  <li>
                    <img src="/images/icon-calendar.svg" alt="" /> Calender
                  </li>
                  <li>
                    <img src="/images/icon-reminders.svg" alt="" /> Reminders
                  </li>
                  <li>
                    {" "}
                    <img src="/images/icon-planning.svg" alt="" /> Planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="menu_drop_co">
              <button className="dropbtn">
                Company
                <img className="down_company" src="/images/icon-arrow-down.svg"/>
              </button>

              <div className="menu_Company">
                <ul>
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>

            <li>Careers </li>
            <li>About </li>
    </ul>

    <div className="menu_login">
          <button className=" login_btn">Login</button>
          <button className="register_btn">Register</button>
        </div>
        
    </div>

        <div className="left_nav">
          <div className="logo">
            <h1>snap</h1>
          </div>
          <img onClick={open} id="open_menu" className="menu" src="/images/icon-menu.svg" alt="" />




          <ul className="nav_lists ">
            <div className="drop_fe">
              <button className="dropbtn l-1">
                Features
                <img
                  className="down_feature"
                  src="/images/icon-arrow-down.svg"
                  alt=""
                />
              </button>
              <div className="features">
                <ul>
                  <li>
                    {" "}
                    <img src="/images/icon-todo.svg" alt="" /> ToDo List
                  </li>
                  <li>
                    <img src="/images/icon-calendar.svg" alt="" /> Calender
                  </li>
                  <li>
                    <img src="/images/icon-reminders.svg" alt="" /> Reminders
                  </li>
                  <li>
                    {" "}
                    <img src="/images/icon-planning.svg" alt="" /> Planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="drop_co">
              <button className="dropbtn l-1">
                Company
                <img
                  className="down_company"
                  src="/images/icon-arrow-down.svg"
                  alt=""
                />
              </button>

              <div className="Company">
                <ul>
                  <li >History</li>
                  <li  >Our Team</li>
                  <li >Blog</li>
                </ul>
              </div>
            </div>

            <li className="l-1">Careers </li>
            <li className="l-1">About </li>
          </ul>

         
        </div>
        <div className="right_nav ">
          <button className=" login_btn nav_right">Login</button>
          <button className="register_btn nav_right">Register</button>
        </div>



      </nav>

      <section className="hero">
        <div className="left_hero">
          <h1 className="left_anime">
            Make <br /> remote Work
          </h1>

          <p className="left_anime">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="learn_more left_anime">Learn More</button>

          <div className="logo_container">
            <img src="/images/client-databiz.svg" alt="" />
            <img src="/images/client-audiophile.svg" alt="" />
            <img src="/images/client-meet.svg" alt="" />
            <img src="/images/client-maker.svg" alt="" />
          </div>
        </div>

        <div className="right_hero"></div>
      </section>
    </>
  );
};

export default Home;
