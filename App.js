import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function Website() {
  const descs = [["To the left are some of my favorite projects I've worked on – \
                  hover over them to read more about them and see their stack. This \
                  is a non-exhaustive list of the projects I have been a part of, as well \
                  as the technologies I have used in my coding experience, but the languages, \
                  libraries, and frameworks indicated are those where I have an especially \
                  strong understanding. The stack below lists some programming languages I am \
                  comfortable with, going from completely fluent to proficient.",
                  ["https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem.png",
                  "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png", 
                  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                  "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png"], "text-default-class"],
                  ["This project was an assignment for my Natural Language Processing course. \
                  It is a model that takes the corpus of Shakespeare's work and can generate \
                  novel 'Shakespearian' text using markov chains, as well as run author attribution \
                  calculations on inputted text. The code is not dependent on Shakespeare – any corpus \
                  large enough will work. It is coded in Python, and spaCy is used mainly for tokenization \
                  and Part of Speech tagging. In working on this project and others for the class, I also \
                  implemented code with NLTK, Flask, and Word2vec.",
                  ["https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem.png", 
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/1200px-SpaCy_logo.svg.png"], "text-accent-class"], 
                  ["My tenure on this research project, which explored the semantics of ditransitive \
                  constructions in Icelandic, Faroese, lasted just under 18 months. Through that time, \
                  I was responsible for the statistical analysis of participant data and visualizing the \
                  results. This has been my longest-term project to date, and through it I practiced writing \
                  flexible and scalable code that could react to new data as it was collected. While the project \
                  was ultimately done with the technology below, my early iterations used R.",
                  ["https://logos-world.net/wp-content/uploads/2021/10/Python-Emblem.png", 
                  "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png", 
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png"], "text-accent-class"], 
                  ["This was the result of a course on Computer Graphics, the sole focus of which was \
                  to code from scratch a triangle rasterizization engine and a ray tracing engine. The final \
                  engines were capable of outputting scenes with texturing, animations, complex lighting set-ups, \
                  shadowing, and refraction and reflection effects. Scenes were also viewed with a 'camera' \
                  so the full landscape could be seen at any position and angle. C and OpenGL were the only \
                  technologies used. The project took three months to complete.",
                  ["https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", 
                  "https://www.khronos.org/assets/images/api_logos/opengl.svg"], "text-accent-class"], 
                  ["The website you are on right now was coded entirely from scratch by me! This was my first \
                  foray into web development, and for it I learned HTML, CSS, and polished my JavaScript, culminating \
                  in using the technologies listed below. While this was my first foray into web development, it will \
                  not be my last – I have been working with a local business to build them website. For that job, I am \
                  developing competency with quality assurance and testing in web development, as well as expanding my \
                  stack so their website can be efficient and utilize industry-standard technologies.",
                  ["https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", 
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"], "text-accent-class"]
                ]
  const [proj_desc, set_proj_desc] = useState(descs[0]);
  let stack = proj_desc[1].map((tool) => <div className={proj_desc[2]} ><img src={tool}></img></div>);

  return (
    <body>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle" href="javascript:void(0)">
          <span></span>
        </label>
        <ul class="menu__box">
          <li><a class="menu__item" href="#Title">Home</a></li>
          <li><a class="menu__item" href="#About">About</a></li>
          <li><a class="menu__item" href="#Projects">Projects</a></li>
          <li><a class="menu__item" href="#Contact">Contact</a></li>
        </ul>
      </div>
      <div id="holster">
        <div className="Panel" id="Title">
          <div id="left-title">
            <h2 className="descriptors">
              <span id="word-1">CAPABLE. </span>
              <span id="word-2">ADAPTABLE. </span>
              <span id="word-3"><em>HIREABLE. </em></span>
            </h2>
          </div>
          <div id="right-title">
            <h1 id="fullname"><span id="word-4">JACK UCHITEL</span></h1>
          </div>
        </div>
        <div className="Panel" id="About">
          <div id="about-header">
            <h1>ABOUT ME</h1>
          </div>
          <div id="about-paragraph">
            <p>
              Hello! My name is Jack Uchitel – I am a recent graduate of Carleton College
              with a BA in Linguistics and concentrations in Mathematics and Computer Science.
              I am an aspiring software engineer with both project and research experience, and
              proficiency in multiple langauges and frameworks – keep scrolling to see some of the
              projects I have worked on. I have experience in mutiple computational subfiels,
              including Natural Language Processing, Distributed Computing, Machine Learning, and
              Computer Graphics. When I'm not coding, I love playing saxophone, rock climbing, or
              watching a new movie! Below are links to my LinkedIn, GitHub, and Resume.
            </p>
          </div>
          <div id="account-logos">
            <a target="_blank" href="https://www.linkedin.com/in/jack-uchitel"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn from FlatIcon"></img></a>
            <a target="_blank" href="https://github.com/jack-uchitel"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub from FlatIcon"></img></a>
            <a target="_blank" href="https://docs.google.com/document/d/141T9mTMWlmCpLZw8E0YKL9U64m0cZ8QhF-Oj7ttpEmY/edit?usp=sharing"><img src="https://www.freeiconspng.com/thumbs/resume-icon-png/resume-icon-png-15.png" alt="Resume from FreeIcons"></img></a>
          </div>
        </div>
        <div className="Panel" id="Projects">
          <div id="panel-left">
            <h2 id="stg">
              <span onMouseEnter={() => set_proj_desc(descs[1])} onMouseLeave={() => set_proj_desc(descs[0])}>
                Shakespeare Text Generator
              </span>
            </h2>
            <h2 id="ida">
              <span onMouseEnter={() => set_proj_desc(descs[2])} onMouseLeave={() => set_proj_desc(descs[0])}>
                Icelandic Data Analysis
              </span>
            </h2>
            <h2 id="cge">
              <span onMouseEnter={() => set_proj_desc(descs[3])} onMouseLeave={() => set_proj_desc(descs[0])}>
                Computer Graphics Engine
              </span>
            </h2>
            <h2 id="pbw">
              <span onMouseEnter={() => set_proj_desc(descs[4])} onMouseLeave={() => set_proj_desc(descs[0])}>
                Personal Website
              </span>
            </h2>
          </div>
          <div id="panel-right">
            <div id="project-description">
              <p className={proj_desc[2]}>{proj_desc[0]}</p>
            </div>
            <div id="project-stack">
              {stack}
            </div>
          </div>
        </div>
        <div className="Panel" id="Contact">
          <div id="contact-both">
            <div id="contact-left">
              <h1>CONTACT</h1>
              <p>If you are interested in reaching out, you can contact me at <a href="mailto:mr.jack.uchitel@gmail.com">mr.jack.uchitel@gmail.com</a>. 
                I'll respond to all messages, whatever the focus: job queries, collaboration ideas, or anything else! If you notice a bug you think I
                missed on the website, you can use the form to the left, and leave a name and/or email if you would like.
              </p>
            </div>
            <div id="contact-right">
              <form action="jackuchitel.com" method="post">
                <label for="name">NAME: </label><br />
                <input type="text" id="name" name="user_name" size="50"/><br />
                <label for="mail">E-MAIL: </label><br />
                <input type="email" id="mail" name="user_email" size="50"/><br />
                <label for="msg">MESSAGE: </label><br />
                <textarea id="msg" name="user_message" rows="20" cols="50" required></textarea><br /><br />
                <input type="button" class="button" value="SUBMIT"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Website;
