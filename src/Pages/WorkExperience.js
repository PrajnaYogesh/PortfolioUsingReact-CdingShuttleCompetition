import React from "react";
import "./WorkExperience.css";
import { Carousel } from "antd";
import Infy from "./Infy.jpg";
import tcs from "./tcs.webp";
import niit from "./niitLogo.png";

function WorkExperience() {
  const contentStyle = {
    height: "470px",
    color: "#141413",
    lineHeight: "25px",
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    background:
      "radial-gradient(circle, rgba(174,126,126,1) 0%, rgba(235,62,6,1) 100%)",
    paddingTop: "20px",
    paddingLeft: "40px",
  };

  return (
    <Carousel effect="fade">
      {/* TCS */}
      <div>
        <div style={contentStyle} className="mainP">
          
          <img className="image-style" src={tcs} alt="tcs image" />

          <div className="work-info">
            <h2 className="exp-heading">Experience and Responsibilities:</h2>
            <h3> Role: Team Lead (04/2022 - 07/2022) </h3>
            <ul>
              <li>Experience of 3 months as Java production support lead.</li>
              <li>
                Managed around 18 warranty production application both internal
                and external with a team of 8 people (both at onsite and
                offshore) for client Stellantis.
              </li>
              <li>
                Worked on migrating the Legacy applications to be compatible
                with latest browsers.
              </li>
              <li>
                {" "}
                Communication with Business and Internal IT to provide updates
                on the current issues and the permanent fix for recurring
                issues.
              </li>

              <li>
                {" "}
                Requirement gathering, analysis and design of new enhancements
                to the existing system.
              </li>
              <li>
                Creating user stories and allocating stories to each sprint
                based on team capacity and ensuring the confidence in delivering
                the output to customer within deadline.
              </li>
              <li>
                Analyze issues and provide pointers for faster
                resolution.Performing code review and UAT for small
                enhancements.
              </li>
              <li>
                {" "}
                Performing application health checkup before the business hours,
                on weekends and after production release.{" "}
              </li>
              <li>
                {" "}
                Attending Backlog refinement, Sprint Planning to organize and
                prioritize user stories for quick and easy delivery of
                application to customers.
              </li>
             
            </ul>
            
         
          </div>
          
       
         
        </div>
      </div>

      {/* Infosys */}
      <div>
        <div style={contentStyle}>
          <img className="image-style" src={Infy} alt="Infy image" />

          <div className="work-info">
            <h2 className="exp-heading">Experience and Responsibilities</h2>
            <h3> Role: Systems Engineer (06/2013 - 09/2015)</h3>
            <ul>
              <li>Experience of 2.3 years in Java production support role.</li>
              <li>
                Monitoring the production issues and supporting the most
                critical application of the client Apple such as
                Appleid.apple.com, iforgot.com etc
              </li>
              <li>
                Developing Java API and SQL queries for customer required data
                extract and also for certain cases which involves root cause
                analysis.
              </li>
              <li>
                {" "}
                Enhancements and defect fixing, preventive maintenance
                activities, emergency bug fixing and data corrections.
              </li>

              <li>
                {" "}
                Knowledge in using the third party Scheduler like Autosys for
                schedule of jobs and Splunk for debugging purposes in
                applications
              </li>
              <li>
                Worked closely with the Operations team during deployments and
                providing technical support and taking care of urgent/critical
                issues on a daily basis
              </li>
              <li>
                Provided 24/7 Support to monitor and resolve critical issues
                during the Apple production launch.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NIIT */}

      <div>
        <div style={contentStyle}>
          <img className="image-style" src={niit} alt="niit image" />

          <div className="work-info">
            <h2 className="exp-heading">Experience and Responsibilities</h2>
            <h3> Role: Instructor (08/2012 - 04/2013)</h3>
            <ul>
              <li>Experience of 9 months as a Instructor.</li>
              <li>
                Teaching Java to students seeking professional career in IT
                industry.
              </li>
              <li>Evaluate students and conduct exams.</li>
            </ul>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default WorkExperience;
