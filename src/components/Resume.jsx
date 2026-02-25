import React from 'react';

export default function Resume() {
    return (
        <div className="resume-container">
            <section className="resume-section">
                <h2 className="resume-header">PROFESSIONAL SUMMARY</h2>
                <p>
                    Data enthusiast with more than 5 years of combined experience in Data Engineering and Analytics.
                    Proficient in the use of statistics and machine learning to analyze trends in data and drive profitability.
                    Experienced with SQL, Python, Tableau, Sisense, Power BI, Seaborn, and application of machine learning models to big data.
                </p>
            </section>

            <section className="resume-section">
                <h2 className="resume-header">EXPERIENCE</h2>
                <div className="resume-item">
                    <div className="resume-title">Data Engineer (BI & Analytics) | Government of Alberta</div>
                    <div className="resume-meta">Feb 2025 - current</div>
                    <ul>
                        <li>Engineered a unified semantic data model integrating six disparate legacy data sources, enabling high-performance executive reporting and reducing manual data processing by 80%.</li>
                        <li>Developed complex data transformation logic using DAX and M to standardize 18-month forecasting horizons and trend analysis.</li>
                        <li>Architected and deployed an automated data governance system using Power Automate to orchestrate multi-stage notifications for contract lifecycles.</li>
                        <li>Partnered with stakeholder groups to gather qualitative requirements and translate them into technical data specifications.</li>
                    </ul>
                </div>
                <div className="resume-item">
                    <div className="resume-title">Int. Data Engineer/ETL Developer | World Vision Canada</div>
                    <div className="resume-meta">Dec 2021 - Jan 2025</div>
                    <ul>
                        <li>Architected secure, containerized data pipelines using Docker and Airflow to process sensitive global datasets while ensuring strict data privacy and compliance.</li>
                        <li>Leveraged Kubernetes to orchestrate distributed data processing jobs, improving environment consistency and deployment reliability.</li>
                        <li>Applied CI/CD practices using Databricks Asset Bundles to automate the versioning and deployment of analytical assets.</li>
                        <li>Deployed ML models using NLP to automate manual indicator tagging, increasing team capacity by 18%.</li>
                    </ul>
                </div>
                <div className="resume-item">
                    <div className="resume-title">Data Engineer & Analytics Specialist | Celero Int.</div>
                    <div className="resume-meta">Nov 2020 – Dec 2021</div>
                    <ul>
                        <li>Automated data pipelines and warehouse refreshes using SSIS and Databricks, significantly increasing the accuracy of organizational resource tracking.</li>
                        <li>Developed a departmental health monitor and skill-set repository by collecting and cleaning fragmented data to support resource allocation.</li>
                        <li>Implemented data quality management processes to standardize reporting across multiple departments, reducing discrepancies by improving consistency.</li>
                        <li>Conducted BI acceptance testing and developed comprehensive test plans to ensure the reliability of production data solutions.</li>
                    </ul>
                </div>
                <div className="resume-item">
                    <div className="resume-title">Data Systems Analyst (Contract) | Foytech Labs</div>
                    <div className="resume-meta">Aug 2020 – Nov 2020</div>
                    <ul>
                        <li>Containerized legacy data applications using Docker, ensuring environment consistency across development, testing, and production phases.</li>
                        <li>Optimized data warehouses using Microsoft SQL, improving data retrieval efficiency and query performance by 30%.</li>
                        <li>Designed and implemented high-performance ETL pipelines, leveraging Kubernetes for workload orchestration in an Agile, DevOps-focused environment.</li>
                        <li>Optimized machine learning models using hyperparameter tuning to improve performance for revenue projection datasets.</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section">
                <h2 className="resume-header">EDUCATION & CERTIFICATIONS</h2>
                <ul>
                    <li>AWS Certified Solutions Architect – Associate</li>
                    <li>Microsoft Fabric Certified</li>
                    <li>Project Management Professional (PMP)</li>
                    <li>Master of Science in Economics | University of Ibadan</li>
                    <li>Bachelor of Science in Industrial Physics | Covenant University</li>
                </ul>
            </section>
        </div>
    );
}
