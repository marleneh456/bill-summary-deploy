import React, { useState, useEffect } from "react"; // Import React, and the hooks useState and useEffect

function AboutPage() {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about-company">
        <h1>About the Project</h1>
        <p className="about-description">
          The Bill Summary API is an innovative platform designed to streamline
          the process of analyzing and summarizing U.S. congressional bills. Our
          goal is to provide concise, AI-driven summaries that break down
          complex legal documents into easy-to-understand language. Leveraging
          Google’s T5-small language model, this project is designed to assist
          legislators, voters, and the public by making legislative processes
          more transparent and accessible.
        </p>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <h2>Technologies Used</h2>
        <div className="tech-grid">
          {/* Technology cards */}
          <div className="tech-card">
            <img
              src="./bill-summary-deploy/images/ai.png"
              alt="Google T5 Small"
              className="tech-icon"
            />
            <h5>Google T5-Small Model</h5>
            <p>AI for Summarization</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/python.png" alt="Python" className="tech-icon" />
            <h5>Python</h5>
            <p>Backend Development</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/react.png" alt="React" className="tech-icon" />
            <h5>React</h5>
            <p>Frontend Development</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/flask.jpg" alt="Flask" className="tech-icon" />
            <h5>Flask</h5>
            <p>Backend Development</p>
          </div>
          <div className="tech-card">
            <img src="./bill-summary-deploy/images/api.png" alt="REST API" className="tech-icon" />
            <h5>REST API</h5>
            <p>Web-based API</p>
          </div>
        </div>
      </section>
      {/* Transparency Section */}
      <section className="transparency">
        <h2>Transparency about our process of transforming your bill</h2>
        <p>
          We utilized a preexisting Large Language Model (LLM) that we
          customized, through a process called fine-tuning, to be able to
          summarize federal bills, acts, and amendments. The LLM we used is
          Google’s Text-to-Text Transfer Transformer (T5) small model. This
          model was trained by Google to be able to perform many Natural
          Language Processing (NLP) tasks to include but not limited to text
          classification, question answering, and text summarization. We utilize
          the summarization task for our service.
        </p>
        <p>
          To fine-tune the model, we utilized data from the United States
          Federal Government’s Bulk Data Website to pull legislation from the
          113th Congress through the 118th Congress. This website offers bills,
          acts, and amendments with their complementary summaries. We finished
          training the T5-small model with these bills, acts, and amendments
          with their complementary summaries to achieve our finished AI model
          that can summarize legislation with a high level of accuracy. It is
          hard to pinpoint a percentage of how accurate the model is due to
          limitations in comparison methods, currently. However, below are a few
          examples of our model’s generated summaries and summaries provided by
          the government’s bulk data website.
        </p>

        <h2>Comparing AI-generated vs. official federal summaries:</h2>
        <div className="summary-comparison">
          <div className="comparison-item">
            <h4>Protecting Veterans Credit Act of 2018</h4>
            <p>
              <strong>Model-generated summary:</strong> Protecting Veterans
              Credit Act of 2018 This bill amends the Fair Credit Reporting Act
              to require the Department of Veterans Affairs (VA) to establish a
              database to allow consumer reporting agencies to verify whether a
              debt furnished to a VA is a veteran's medical debt, access to
              verification information in a secure electronic format, timely
              access to verify information, and any other features that would
              promote the efficient, timely, and secure delivery of information
              that consumers could use to verify if a veterans' medical debt has
              been characterized as delinquent, charged off, or in collection if
              the VA has actual knowledge that the information is related to the
              veteran.
            </p>
            <p>
              <strong>Government summary:</strong> Protecting Veterans Credit
              Act of 2018 This bill amends the Fair Credit Reporting Act to
              limit, and establish a dispute process and verification procedures
              with respect to, the inclusion of a veteran's medical debt in a
              consumer credit report.
            </p>
          </div>
          <div className="comparison-item">
            <h4>Medicare Patient Access to Hospice Act of 2015</h4>
            <p>
              <strong>Model-generated summary:</strong> Amends title XVIII
              (Medicare) of the Social Security Act to provide for the
              recognition of attending physician assistants as attending
              physicians to serve hospice patients.
            </p>
            <p>
              <strong>Government summary:</strong> Medicare Patient Access to
              Hospice Act of 2015 Amends title XVIII (Medicare) of the Social
              Security Act to recognize attending physician assistants as
              attending physicians to serve hospice patients.
            </p>
          </div>
          <div className="comparison-item">
            <h4>Supporting American Families, Employers, Kids, and Jobs Act</h4>
            <p>
              <strong>Model-generated summary:</strong> Supporting American
              Families, Employers, Kids and Jobs Act or the SAFE Kids&nbsp;and*
              [sic] Jobs Act This bill allows a payroll tax credit for certain
              employee dependent care expenses paid by employers for each
              calendar quarter. Specifically, the credit is limited to $2,500.
              The credit is reduced by any amounts provided by federal, state,
              or local government for purposes of making or reimbursing such
              expenses.
            </p>
            <p>
              <strong>Government summary:</strong> Supporting American Families,
              Employers, Kids and Jobs Act or the SAFE Kids and Jobs Act This
              bill allows an employer a payroll tax credit for 30% of qualified
              employee dependent care expenses (i.e., dependent care assistance)
              paid by the employer in a calendar quarter. The amount of
              qualified expenses eligible for the credit is limited to $2,500
              per employee in any calendar quarter.
            </p>
          </div>
        </div>

        <div className="sources-section">
          <h3>
            <i className="fas fa-database"></i> Sources:
          </h3>
          <p>
            All source code is open source and can be found on our{" "}
            <a
              href="https://github.com/cheaptrix2/MTSUFall2024SoftwareEngineering"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p>
            The custom dataset used for fine-tuning can be found in the{" "}
            <a
              href="https://huggingface.co/datasets/MTSUFall2024SoftwareEngineering/UnitedStatesSenateBillsAndSummaries"
              target="_blank"
            >
              Hugging Face
            </a>
          </p>
          <p>
            Our AI model’s code and evaluation statistics can be found in our{" "}
            <a
              href="https://huggingface.co/MTSUFall2024SoftwareEngineering/UnitedStatesSenateBillsSummarys"
              target="_blank"
            >
              Hugging Face
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; // Export the component for use in other parts of the app
