import React from 'react';

export default function About() {
    return (
        <div className="about-container">
            <section className="resume-section">
                <h2 className="resume-header">Femi Babatunde - Professional Summary</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '12px' }}>
                    I am a data enthusiast with more than 5 years of combined experience in Data Engineering and Analytics.
                    Proficient in the use of statistics and machine learning to analyze trends in data and drive profitability.
                    Experienced with SQL, Python, Tableau, Sisense, Power BI, Seaborn, and application of machine learning models to big data.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                    I have in-depth experience in Python, Java, C++, SQL and other statistical packages for data collection,
                    data wrangling, cleaning, modelling, analysis and machine learning.
                </p>
            </section>

            <section className="resume-section" style={{ marginTop: '24px' }}>
                <h2 className="resume-header">Technical Skills & Proficiency</h2>

                <div className="resume-item">
                    <h3 className="resume-title" style={{ color: '#f59e0b' }}>🏗️ Data Architecture & Modeling</h3>
                    <p><strong>Architectures:</strong> Medallion Architecture (Bronze/Silver/Gold), Data Lakehouse, and Delta Lake.</p>
                    <p><strong>Modeling:</strong> Dimensional Modeling (Star/Snowflake Schema), Semantic Modeling, and Transactional Data Modeling.</p>
                    <p><strong>Specialized Platforms:</strong> Microsoft Fabric (Certified), Databricks, and Snowflake.</p>
                </div>

                <div className="resume-item" style={{ marginTop: '16px' }}>
                    <h3 className="resume-title" style={{ color: '#f59e0b' }}>⚙️ Core Engineering & ETL/ELT</h3>
                    <p><strong>Languages:</strong> Expert-level Python and SQL, with proficiency in Java, C++, and VBA.</p>
                    <p><strong>ETL/ELT Frameworks:</strong> Azure Data Factory (ADF), SSIS, and Apache Beam (familiarity).</p>
                    <p><strong>Process Automation:</strong> Designing high-performance pipelines for global-scale data ingestion (30+ international field offices).</p>
                </div>

                <div className="resume-item" style={{ marginTop: '16px' }}>
                    <h3 className="resume-title" style={{ color: '#f59e0b' }}>☁️ Cloud, DevOps & Orchestration</h3>
                    <p><strong>Multi-Cloud Ecosystems:</strong> Azure, AWS (Certified Solutions Architect), and GCP (BigQuery, GCS).</p>
                    <p><strong>Orchestration & Containers:</strong> Airflow, Docker, Kubernetes (K8s), and Terraform.</p>
                    <p><strong>CI/CD:</strong> Automating analytical asset deployment using Databricks Asset Bundles, Git, and Azure DevOps.</p>
                </div>

                <div className="resume-item" style={{ marginTop: '16px' }}>
                    <h3 className="resume-title" style={{ color: '#f59e0b' }}>🤖 Machine Learning Engineering (MLOps)</h3>
                    <p><strong>NLP & Automation:</strong> Operationalizing NLP models for manual task automation (e.g., automated indicator tagging).</p>
                    <p><strong>Predictive Workflows:</strong> End-to-end ML workflows from Snowflake data extraction to predictive modeling.</p>
                    <p><strong>Techniques:</strong> Decision Trees, Random Forests, Clustering, and Neural Networks.</p>
                </div>

                <div className="resume-item" style={{ marginTop: '16px' }}>
                    <h3 className="resume-title" style={{ color: '#f59e0b' }}>📊 Analytics & Governance</h3>
                    <p><strong>Governance:</strong> Architecting automated data governance systems via Power Automate.</p>
                    <p><strong>BI Suites:</strong> Power BI (Expert DAX/M), Tableau, and SSRS/SSAS.</p>
                    <p><strong>Statistical Analysis:</strong> A/B Testing, Hypothesis Testing, and Regression Analysis.</p>
                </div>

                <div className="resume-item" style={{ marginTop: '16px' }}>
                    <h3 className="resume-title" style={{ color: '#f59e0b' }}>⚙️ Version Control & Collaboration</h3>
                    <p><strong>Git & GitHub:</strong> Expert in branching, merging, and collaborative development workflows for robust code management.</p>
                </div>
            </section>
        </div>
    );
}
