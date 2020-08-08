import React from 'react';
import rockwell from '../images/rockwell.jpeg';
import boeing from '../images/boeing.jpeg';
import usa from '../images/usa.jpeg';
import accenture from '../images/accenture.jpeg';
import usaa from '../images/usaa.jpeg';

function Resume() {
    return (
      <section>
        <h2 id="resume">Resume</h2><br/>
        <p>
          <h4>Technical Slills</h4>
          <ul>
            <li>
              Platforms: Client/Server (Windows) and IBM Mainframe
            </li>
            <li>
              Servers: WebSphere, WebLogic, ColdFusion, JBoss and Tomcat
            </li>
            <li>
              Databases: Oracle,DB2 and SQLServer
            </li>
            <li>
              Languages: Java, JEE, C#, HTML, SQL, JavaScript, ActionScript, Adobe Flex, C and COBOL
            </li>
            <li>
              IDEs: Eclipse, Netbeans, SpringSource, Visual Studio 2010 and JBuilder
            </li>
            <li>
              Tools: Java Core, Hibernate, Spring MVC, JDBC, BlazeDS, JUnit, Entity Framework, Subversion (SVN), Maven, Microsoft Products including MS Word, Excel and PowerPoint
            </li>
          </ul>
        </p>

        <p>
        <h4>Companies</h4>
        <img className="companies"
          src={rockwell}
          alt="Rockwell International"
        />
        <img className="companies"
          src={boeing}
          alt="Boeing"
        />
        <img className="companies"
          src={usa}
          alt="United Cpace Alliance"
        />
        <img className="companies"
          src={accenture}
          alt="Accenture"
        />
        <img className="companies"
          src={usaa}
          alt="USAA"
        />
        </p>
      </section>
    );
  }
  
  export default Resume;
