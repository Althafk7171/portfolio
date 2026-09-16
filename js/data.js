// Portfolio Data strictly verified against Muhammed Althaf K's Resume
const portfolioData = {
  personal: {
    name: "Muhammed Althaf K",
    shortName: "ALTHAF K",
    title: "Data Science • Analytics • Machine Learning",
    tagline: "Turning data into insights and intelligent solutions.",
    summary: "B.Tech graduate in Computer Science (Data Science and Machine Learning) with hands-on experience in end-to-end machine learning pipelines, exploratory data analysis, dashboard development, and statistical modeling. Proficient in Python, SQL, Power BI, and Excel with a strong foundation in feature engineering, predictive modeling, and data visualization.",
    workflowStatement: "I work across the full data workflow — from cleaning and exploration to visualization, modeling and deployment.",
    email: "althafk7171@gmail.com",
    phone: "+91-7736212397",
    linkedin: "https://www.linkedin.com/in/muhammed-althaf-k",
    linkedinDisplay: "linkedin.com/in/muhammed-althaf-k",
    github: "https://github.com/Althafk7171",
    githubDisplay: "github.com/Althafk7171",
    resumeUrl: "assets/Muhammed_Althaf_K_Resume.pdf"
  },
  heroMetrics: [
    { value: "10", label: "ENGINEERED FEATURES" },
    { value: "6", label: "ML MODELS BENCHMARKED" },
    { value: "7,431", label: "TRANSACTIONS ANALYZED" },
    { value: "9", label: "BUSINESS KPIs" }
  ],
  projects: [
    {
      id: "silent-burnout",
      featured: true,
      title: "Silent Burnout AI",
      subtitle: "Student Disengagement Detection",
      date: "May 2026",
      tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Joblib"],
      description: "Built an end-to-end machine learning pipeline using the OULAD dataset; engineered 10 behavioral and academic features including LMS click patterns, active days, engagement variability, and assessment score trends to classify students into Low, Moderate, or High burnout risk categories.",
      metrics: [
        { label: "ENGINEERED FEATURES", value: "10" },
        { label: "BENCHMARKED MODELS", value: "6" },
        { label: "RISK TIERS", value: "3 Levels" },
        { label: "DEPLOYMENT", value: "Streamlit App" }
      ],
      links: {
        live: "https://silent-burnout.streamlit.app",
        github: "https://github.com/Althafk7171"
      },
      caseStudy: {
        overview: "Virtual learning platforms produce extensive activity logs, but dropout prevention systems frequently react too late. Silent Burnout AI detects early indicators of student disengagement by learning from nuanced temporal and behavioral patterns before assessment failures occur.",
        dataset: {
          name: "Open University Learning Analytics Dataset (OULAD)",
          details: "Comprehensive educational telemetry including student interaction logs (VLE clicks), course timelines, assessment submission records, and registration histories."
        },
        pipeline: [
          { step: "Data Extraction", desc: "Aggregated student interaction logs, course module timelines, and assessment scores." },
          { step: "Data Cleaning", desc: "Processed unregistration events, anomalous zero-click days, and missing assessment timelines." },
          { step: "EDA & Profiling", desc: "Identified distinct drop-offs in interaction frequency 2-3 weeks prior to major submission deadlines." },
          { step: "Feature Engineering", desc: "Engineered 10 behavioral and academic features: LMS click patterns, active days count, engagement variability, and assessment score trajectories." },
          { step: "Model Benchmarking", desc: "Trained and benchmarked 6 algorithms: Logistic Regression, Decision Tree, Random Forest, KNN, SVM, and Gradient Boosting." },
          { step: "Model Selection", desc: "Selected Gradient Boosting as the superior architecture based on risk-category recall and generalization." },
          { step: "Deployment", desc: "Deployed an interactive live dashboard on Streamlit Community Cloud delivering risk predictions, confidence scores, and engagement radar profiles." }
        ],
        technicalWork: [
          "Extracted 10 behavioral and academic features quantifying student interaction velocity, day-to-day engagement variability, active study days, and assessment score trends.",
          "Constructed a multi-class predictive target categorizing students into Low, Moderate, and High burnout risk levels.",
          "Benchmarked 6 ML models: Logistic Regression, Decision Tree, Random Forest, KNN, SVM, and Gradient Boosting.",
          "Selected Gradient Boosting as the top-performing model and implemented live deployment with confidence scores and dynamic radar visualizations."
        ],
        results: [
          { title: "Selected Model", value: "Gradient Boosting" },
          { title: "Models Benchmarked", value: "6 Architectures" },
          { title: "Engineered Features", value: "10 Behavioral & Academic" },
          { title: "Target Categories", value: "Low / Moderate / High Risk" }
        ],
        radarProfiles: {
          labels: ["LMS Clicks", "Active Days", "Score Trend", "Engagement Stability", "Submission Regularity"],
          lowRisk: [88, 92, 85, 90, 82],
          modRisk: [52, 58, 64, 48, 55],
          highRisk: [22, 28, 35, 20, 18]
        },
        keyTakeaway: "Demonstrates complete ownership of an applied machine learning project: from cleaning raw telemetry and engineering domain-relevant behavioral features to rigorous multi-model benchmarking and deploying an accessible, stakeholder-ready web application."
      }
    },
    {
      id: "shopify-analytics",
      featured: false,
      title: "Shopify Customer & Sales Analysis",
      subtitle: "Interactive Commercial Intelligence Dashboard",
      date: "Aug 2025",
      tech: ["Power BI", "DAX", "Excel", "Power Query"],
      description: "Designed a 2-page interactive Power BI dashboard analyzing 7,431 Shopify transactions and tracking 9 KPIs including Net Sales, Average Order Value, Repeat Rate, Customer Lifetime Value, and Purchase Frequency with regional maps and product-type breakdowns.",
      metrics: [
        { label: "TRANSACTIONS", value: "7,431" },
        { label: "BUSINESS KPIs", value: "9" },
        { label: "DASHBOARD PAGES", value: "2 Pages" },
        { label: "DATA WORKFLOW", value: "Power Query + DAX" }
      ],
      links: {
        github: "https://github.com/Althafk7171"
      },
      caseStudy: {
        overview: "Retail e-commerce stores often struggle with fragmented visibility into repeat customer behavior, geographic revenue distribution, and SKU profit velocity. This project unified retail transactions into an automated, stakeholder-ready business intelligence dashboard.",
        dataset: {
          name: "Shopify Transactional Store Dataset",
          details: "7,431 customer purchase orders spanning billing regions, product hierarchies, discount levels, fulfillment statuses, and customer identification keys."
        },
        pipeline: [
          { step: "Data Extraction", desc: "Imported multi-table transactional records and customer lists from Shopify store exports." },
          { step: "Power Query ETL", desc: "Automated transformations: currency formatting, null imputation, duplicate elimination, and date hierarchy construction." },
          { step: "Data Modeling", desc: "Created star-schema data models connecting sales facts with calendar, product category, and customer dimensions." },
          { step: "DAX Formulations", desc: "Engineered customized DAX measures calculating 9 strategic metrics including CLV, Repeat Rate, and AOV." },
          { step: "Visual Design", desc: "Designed a 2-page interactive Power BI dashboard with regional maps, product breakdowns, and executive KPI cards." }
        ],
        technicalWork: [
          "Tracked 9 strategic KPIs: Net Sales, Average Order Value (AOV), Repeat Rate, Customer Lifetime Value (CLV), Purchase Frequency, Order Volume, Units Sold, Return Rate, and Regional Revenue Share.",
          "Automated ETL pipelines utilizing Power Query to streamline repetitive reporting refreshes.",
          "Authored robust DAX measures utilizing CALCULATE, RELATEDTABLE, DATESYTD, and customer retention segmentation logic.",
          "Delivered stakeholder-ready visuals simplifying complex retail trends for non-technical business teams."
        ],
        results: [
          { title: "Dataset Scale", value: "7,431 Transactions Analyzed" },
          { title: "Tracked KPIs", value: "9 Strategic Business Metrics" },
          { title: "Dashboard Architecture", value: "2-Page Interactive Power BI" },
          { title: "Transformation", value: "Automated via Power Query" }
        ],
        keyTakeaway: "Demonstrates practical data analytics and business intelligence capability: translating raw commerce logs into clear commercial KPIs, automating ETL workflows, and delivering actionable decision dashboards for business stakeholders."
      }
    },
    {
      id: "traffic-forecasting",
      featured: false,
      title: "Traffic Volume Forecasting",
      subtitle: "MentorMind × Uber × upGrad Mentorship",
      date: "Aug 2025 – Oct 2025",
      tech: ["Python", "ARIMA", "LSTM", "Gradient Boosting", "Scikit-learn"],
      description: "Built a predictive machine learning model to forecast hourly traffic volumes at road junctions by integrating multi-source data including historical traffic records, weather data (temperature, precipitation, wind speed), and event data into a unified pipeline.",
      metrics: [
        { label: "MODELS COMPARED", value: "ARIMA, LSTM, GB" },
        { label: "PIPELINE", value: "Multi-Source" },
        { label: "VALIDATION", value: "Time-Based CV" },
        { label: "OPTIMIZATION", value: "Grid & Random Search" }
      ],
      links: {
        github: "https://github.com/Althafk7171"
      },
      caseStudy: {
        overview: "Accurate junction-level traffic prediction is crucial for congestion mitigation and municipal routing. Conducted under the MentorMind × Uber × upGrad mentorship program, this project synthesized environmental, calendar, and sensor feeds to forecast hourly junction volume.",
        dataset: {
          name: "Multi-Source Junction & Weather Dataset",
          details: "Hourly junction traffic counters combined with environmental meteorological metrics (temperature, precipitation, wind speed) and municipal calendar event flags."
        },
        pipeline: [
          { step: "Data Integration", desc: "Unified multi-source feeds: historical hourly traffic logs, weather parameters, and event calendars into a single pipeline." },
          { step: "Feature Engineering", desc: "Engineered time-based features: hour of day, day of week, lag values, and binary event indicators." },
          { step: "Congestion EDA", desc: "Conducted peak-hour congestion analysis using moving averages, congestion metrics, and heatmap visualizations." },
          { step: "Model Training", desc: "Trained and compared statistical (ARIMA), recurrent neural (LSTM), and tree-based ensemble (Gradient Boosting) models." },
          { step: "Validation Protocol", desc: "Evaluated performance using MAE, RMSE, and R-squared with k-fold and time-based cross-validation to prevent data leakage." },
          { step: "Hyperparameter Search", desc: "Optimized hyperparameters using Grid Search and Random Search for robust generalization." }
        ],
        technicalWork: [
          "Constructed time-dependent lag structures and cyclic encodings to capture diurnal and weekly traffic rhythms.",
          "Integrated weather covariates (temperature, precipitation, wind speed) to assess environmental elasticity on driver volume.",
          "Conducted rigorous time-based split validation ensuring models are tested strictly on future unseen time horizons.",
          "Benchmarked ARIMA, LSTM, and Gradient Boosting across MAE, RMSE, and R-squared metrics."
        ],
        results: [
          { title: "Benchmarked Architectures", value: "ARIMA, LSTM, Gradient Boosting" },
          { title: "Engineered Covariates", value: "Weather, Lags, Event Flags" },
          { title: "Evaluation Metrics", value: "MAE, RMSE, R-squared" },
          { title: "Tuning Methodology", value: "Grid Search & Random Search" }
        ],
        keyTakeaway: "Demonstrates advanced proficiency in time-series predictive modeling, multi-source pipeline engineering, guarding against temporal lookahead bias, and tuning complex architectures."
      }
    },
    {
      id: "laptop-price",
      featured: false,
      title: "Laptop Price Prediction",
      subtitle: "Regression & Feature Engineering Benchmark",
      date: "May 2025",
      tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy"],
      description: "Processed 1,300+ records with 8 engineered attributes; applied log transformation on the target variable; compared Linear Regression, KNN, and Random Forest models — Random Forest achieved R-squared of 0.887 and MAE of 0.159.",
      metrics: [
        { label: "DATASET RECORDS", value: "1,300+" },
        { label: "ENGINEERED ATTRS", value: "8 Features" },
        { label: "MODEL R² SCORE", value: "0.887" },
        { label: "MODEL MAE", value: "0.159" }
      ],
      links: {
        github: "https://github.com/Althafk7171"
      },
      caseStudy: {
        overview: "Consumer electronics pricing involves complex, non-linear trade-offs between component specifications, brand premium, and form factor. Built an empirical price estimation model by extracting deep tabular attributes from unstructured hardware specs.",
        dataset: {
          name: "Laptop Technical Specifications Dataset",
          details: "1,300+ hardware configurations containing raw text descriptions of CPU clock speeds, RAM configurations, screen dimensions, GPU models, and price in Euros."
        },
        pipeline: [
          { step: "Text Feature Extraction", desc: "Parsed raw hardware specifications to isolate memory sizes, drive types (SSD/HDD), and GPU architectures." },
          { step: "Attribute Engineering", desc: "Engineered 8 domain attributes including Pixels Per Inch (PPI) derived from resolution and screen size, and CPU tier classifications." },
          { step: "Target Normalization", desc: "Identified positive skew in price distribution; applied logarithmic transformation (np.log1p) to normalize variance." },
          { step: "Model Comparison", desc: "Trained and benchmarked Linear Regression, K-Nearest Neighbors (KNN), and Random Forest regressor." },
          { step: "Evaluation & Selection", desc: "Evaluated models using R-squared and Mean Absolute Error (MAE); Random Forest emerged as the top performer." }
        ],
        technicalWork: [
          "Processed 1,300+ records with 8 engineered attributes reflecting hardware performance tiers and display ergonomics.",
          "Applied log transformation on the right-skewed target variable to stabilize error variance.",
          "Compared Linear Regression, KNN, and Random Forest models under identical train-test validation splits.",
          "Random Forest achieved an R-squared of 0.887 and a Mean Absolute Error (MAE) of 0.159."
        ],
        results: [
          { title: "Processed Records", value: "1,300+ hardware specs" },
          { title: "Engineered Attributes", value: "8 engineered features" },
          { title: "Best Model R²", value: "0.887 (Random Forest)" },
          { title: "Mean Absolute Error", value: "0.159 (MAE)" }
        ],
        keyTakeaway: "Demonstrates practical machine learning fundamentals: data preparation, domain-informed feature engineering from unstructured text, target variable stabilization, and rigorous comparative regression analysis."
      }
    }
  ],
  skills: [
    {
      category: "PROGRAMMING",
      items: ["Python", "SQL"]
    },
    {
      category: "DATA ANALYSIS",
      items: ["Pandas", "NumPy", "Data Cleaning", "EDA", "Data Wrangling", "Statistical Analysis", "SciPy"]
    },
    {
      category: "VISUALIZATION",
      items: ["Power BI", "Tableau", "Excel (Advanced)", "DAX", "Power Query", "Matplotlib", "Seaborn"]
    },
    {
      category: "MACHINE LEARNING",
      items: ["Scikit-learn", "Feature Engineering", "Predictive Modeling", "Joblib"]
    },
    {
      category: "TOOLS / PLATFORMS",
      items: ["Jupyter Notebook", "Google Colab", "GitHub", "Streamlit", "Oracle Cloud Infrastructure"]
    }
  ],
  experience: [
    {
      role: "Traffic Forecasting Mentorship",
      organization: "MentorMind × Uber × upGrad",
      period: "Aug 2025 – Oct 2025",
      type: "Mentorship & Applied Project",
      bullets: [
        "Built a predictive machine learning model to forecast hourly traffic volumes at road junctions by integrating multi-source data including historical traffic records, weather data (temperature, precipitation, wind speed), and event data into a unified pipeline.",
        "Engineered time-based features including hour of day, day of week, lag values, and binary event indicators; performed peak hour analysis using congestion metrics, moving averages, and heatmap visualizations.",
        "Trained and compared ARIMA, LSTM, and Gradient Boosting models; evaluated performance using MAE, RMSE, and R-squared with k-fold and time-based cross-validation; optimized hyperparameters using Grid Search and Random Search."
      ]
    },
    {
      role: "Complete Machine Learning and Data Science Program",
      organization: "GeeksForGeeks",
      period: "Jun 2024 – Jul 2024",
      type: "Applied Training",
      bullets: [
        "Completed a 90-hour applied program covering exploratory data analysis (EDA), predictive modeling, and visualization using Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      specialization: "Specialization in Data Science with Machine Learning",
      institution: "Lovely Professional University, Punjab",
      period: "May 2026",
      isPrimary: true
    },
    {
      degree: "Class XII — Science",
      institution: "Seethi Sahib Higher Secondary School, Kerala",
      score: "95%",
      period: "Mar 2022",
      isPrimary: false
    },
    {
      degree: "Class X",
      institution: "Seethi Sahib High School, Kerala",
      score: "95%",
      period: "Mar 2020",
      isPrimary: false
    }
  ],
  certifications: [
    {
      title: "Oracle Cloud Infrastructure — Certified Data Science Professional",
      issuer: "Oracle",
      date: "Oct 2025",
      badge: "OCI Data Science"
    },
    {
      title: "Complete Machine Learning and Data Science",
      issuer: "GeeksForGeeks",
      date: "Jul 2024",
      badge: "90-Hour Specialization"
    },
    {
      title: "Become a Data Scientist",
      issuer: "LinkedIn Learning",
      date: "Mar 2023",
      badge: "Foundations"
    }
  ]
};
