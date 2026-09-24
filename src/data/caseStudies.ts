    export const caseStudies = {

    "fruit-freshness": {

    title: "Fruit Freshness Classification",

    command:
        'load_case_study(project="fruit-freshness")',


    image:
        "/RM.png",



    info: {

        type:
        "Deep Learning Research",

    workMode:
        "Team Project",

    role:
        "AI Engineer",

    team:
        "3 Members",

    timeline:
        "Feb 2026 - Jun 2026",

        stack:[

        "Python",
        "TensorFlow",
        "Keras",
        "MobileNetV2",
        "EfficientNetB0",
        "VGG16",
        "MobileViT-XS",
        "Computer Vision",
        "Deep Learning"
        ]

    },



    links: {

    paper:
        "/Paper.pdf",

    youtube:
        "https://youtu.be/UYeDFE8JX98?si=g5rnXt3F2nR91cBM"

    },



    about:
    `
    Fruit Freshness Classification is a deep learning research project focused on developing an automated computer vision system to classify fruit and vegetable freshness levels. The research proposed MobileNetV2-Fusion, a lightweight CNN architecture that combines intermediate texture features andhigh-level semantic representations to improve freshness classification performance while maintaining computational efficiency. The model was evaluated against several deep learning architectures including VGG16, EfficientNetB0, MobileNetV2, and MobileViT-XS using a dataset containing 49,156 images across 30 fresh and rotten fruit and vegetable classes.
    `,



    highlights:[

        "Proposed MobileNetV2-Fusion with dual-level feature fusion",

        "Achieved 99.19% test accuracy with 0.9919 Weighted-F1 score",

        "Maintained lightweight architecture with only 2.65M parameters",

        "Achieved efficient inference performance at 11.02ms per image",

        "Research paper prepared for ICORIS Conference submission"

    ],



    contribution:[

        "Implemented and managed the complete deep learning experimentation pipeline",

        "Developed and tested multiple model configurations including MobileNetV2, VGG16, EfficientNetB0, and MobileViT-XS",

        "Performed dataset preparation, preprocessing, augmentation, training, and evaluation experiments",

        "Analyzed model performance using accuracy, F1-score, latency, and computational metrics",

        "Contributed to research paper writing, experiment documentation, and result analysis"

    ],



    designThinking:
    `
    The research began by identifying the limitations of manual fruit freshness inspection, which can be subjective, time-consuming, and difficult to scale.The approach focused on developing a lightweight AI solution that could achieve high classification accuracy while maintaining efficient computational performance. Instead of relying only on final CNN representations, the proposed approach introduced dual-level feature fusion by combining intermediate texture features with high-level semantic features to better capture freshness degradation patterns.
    `,



    implementation:
    `
    The research pipeline consists of:
    1. Dataset preparation and class balancing
    2. Image preprocessing and augmentation using TensorFlow/Keras
    3. Transfer learning with ImageNet pretrained architectures
    4. Development of MobileNetV2-Fusion architecture by combining intermediate and final feature representations
    5. Two-stage training strategy:
    - Warm-up training with frozen backbone
    - Fine-tuning selected backbone layers
    6. Model evaluation using accuracy, Macro-F1, Weighted-F1, inference latency, FPS, and computational complexity analysis
    `,



    results:[

        "99.19% Test Accuracy",

        "0.9919 Weighted-F1 Score",

        "11.02ms Inference Latency",

        "90.71 FPS Throughput",

        "2.65M Model Parameters"

    ],



    learned:
    `
    This research strengthened my understanding of deep learning experimentation, CNN architecture optimization, and computer vision model evaluation. Through this project, I learned how to design controlled experiments, compare different neural network architectures, analyze performance trade-offs, and translate experimental findings into a structured research paper. I also gained experience in collaborating on academic research, from implementing models and validating results to contributing to scientific writing and publication preparation.
    `

    },



    "gymbot": {

        title:
        "GymBot AI",


        command:
        'load_case_study(project="gymbot")',


        image:
        "/gymbot.png",



        info:{

            type:
            "Generative AI Website",

            workMode:
            "Team Project",

            role:
            "AI Engineer & Front End Developer",

            team:
            "3 Members",

            timeline:
            "Sept 2025 - Dec 2025",


            stack:[

                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Express.js",
                "Gemini API",
                "REST API"

            ]

        },



        links: {

            github:
                "https://github.com/KevinReynald029/Project-AI-GYMBOT",

            youtube:
                "https://youtu.be/BPZwednic1k?si=3zQPIUPYJSzo-gsg"

        },



        about:
        `
        GymBot AI is a generative AI fitness assistant that provides personalized workout recommendations and fitness guidance through an interactive chatbot powered by Gemini API. The application combines user fitness information with AI capabilities to deliver adaptive responses and improve the user's fitness planning experience.
        `,


        highlights:[

            "Integrated Google Gemini API as an AI-powered chatbot service",

            "Built interactive chatbot interface for personalized fitness assistance",

            "Designed AI prompt workflow to generate contextual responses",

            "Implemented API communication between frontend and backend services"

        ],


        contribution:[

            "Developed the frontend interface and user interaction flow for the AI fitness assistant",

            "Integrated Gemini API into the application to enable chatbot functionality",

            "Designed request and response handling between frontend, backend, and AI services",

            "Created prompt structures to improve AI response relevance based on user information"

        ],


        designThinking:
        `
        The system was designed to solve the problem of users needing accessible and personalized fitness guidance without requiring direct assistance from professional trainers. The approach focused on creating an intuitive chatbot experience where users could interact naturally and receive AI-generated recommendations based on their fitness goals and personal information.
        `,


        implementation:
        `
        The application workflow:

        User Interaction
        ↓
        Frontend Chat Interface
        ↓
        REST API Request
        ↓
        Backend Processing
        ↓
        Gemini API Integration
        ↓
        AI Generated Response
        ↓
        Personalized Fitness Recommendation
        `,


        results:[

            "Successfully developed an AI-powered fitness chatbot using Gemini API",

            "Created a responsive interface for interacting with generative AI services",

            "Implemented reliable API communication and response handling",

            "Built a system capable of generating personalized workout recommendations"

        ],


        learned:
        `
        Learned how to integrate generative AI models into real-world applications, design effective AI prompt workflows, handle API communication between frontend and AI services, and develop user-focused interfaces for AI-powered systems.
        `

    },


    "financial-sentiment": {
        title: "Financial News Sentiment Analysis",
        command: 'load_case_study(project="financial-sentiment")',
        image: "/nlp.png",
        
        info: {
        type: "Natural Language Processing",
        workMode:
        "Team Project",
        role: "AI Engineer",
        team: "3 Members",
        timeline: "Feb 2026 - Jun 2026",
        stack: [
            "Python",
            "Scikit-learn",
            "Sastrawi",
            "Transformers",
            "IndoDistilBERT",
            "Streamlit"
        ]
        },

        links: {

            website:
                "https://analysis-sentimen-ekonomi.streamlit.app/",

            github:
                "https://github.com/KevinReynald029/Project-NLP",

            huggingface:
                "https://huggingface.co/KevinRey"

        },

        about: `
    Financial markets are highly sensitive to news. This project aims to build an automated Natural Language Processing (NLP) pipeline to classify the sentiment of Indonesian financial news headlines (from CNBC Indonesia). By accurately evaluating whether a news piece is positive, negative, or neutral, this tool helps investors make faster, data-driven decisions.
    `,

        highlights: [
        "Achieved a 0.882 (88.2%) Macro F1-Score using the IndoDistilBERT architecture.",
        "Successfully benchmarked 4 different classical ML and transformer-based models.",
        "Deployed a lightweight, interactive web application using Streamlit for real-time inference."
        ],

        contribution: [
        "Developed and maintained the experimental codebase.",
        "Cleaned and tokenized raw news datasets, preparing them for both TF-IDF vectorization and sub-word tokenization.",
        "Fine-tuned transformer models (IndoBERT and IndoDistilBERT) using the HuggingFace library.",
        "Packaged the winning model into a production-ready Streamlit application (app.py)."
        ],

        designThinking: `
    The process began by identifying that parsing Indonesian financial jargon requires a model that understands local linguistic context, not just standard translations. I benchmarked lightweight classical Machine Learning models against heavy, state-of-the-art Transformer models. The goal was to find the perfect balance between high accuracy and low computational cost, ultimately selecting IndoDistilBERT for its efficiency in real-time inference.
    `,

        implementation: `
    1. Data Preparation: Cleaned and tokenized the raw news datasets (Data_Preparation.ipynb).
    2. Classical ML Baseline: Developed models using Scikit-learn (Random Forest, SVM) to establish a baseline performance metric (Classical_Train.ipynb).
    3. Transformer Fine-tuning: Leveraged HuggingFace to fine-tune IndoBERT and IndoDistilBERT on the financial dataset (train_IndoDistilBERT.ipynb).
    4. Deployment: Packaged the winning model into a lightweight, interactive web application using Streamlit (app.py).
    `,

        results: [
        "0.882 Macro F1-Score (IndoDistilBERT)",
        "4 Models Evaluated (Random Forest, SVM, IndoBERT, IndoDistilBERT)",
        "1 Interactive Streamlit App Deployed"
        ],

        learned: `
    This project deepened my understanding of the trade-offs between model complexity and production readiness. I learned that while large language models (LLMs) often yield the highest raw metrics, distilled transformer models (like IndoDistilBERT) are far more practical for deployment. Managing the entire lifecycle—from raw data processing to building a clean Streamlit UI—significantly strengthened my end-to-end software engineering skills within an AI context.
    `
    },

    "nusatrip": {

        title:
            "NusaTrip Travel Platform",


        command:
            'load_case_study(project="nusatrip")',


        image:
            "/nusatrip.png",



        info: {

            type:
            "Software Engineering",

            workMode:
            "Team Project",

            role:
            "Frontend Developer",

            team:
            "6 Members",

            timeline:
            "Feb 2026 - Jun 2026",


            stack:[

            "React.js",
            "TypeScript",
            "JavaScript",
            "REST API",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Figma"

            ]

        },



        links: {

        website:
            "https://nusatrip-fe.vercel.app/",

        github:
            "https://github.com/orgs/NusaTrip-Application/repositories"

        },



        about:
        `
        NusaTrip is a full-stack travel planning platform designed to help users explore destinations, create personalized itineraries, and organize travel plans through a structured digital experience. The platform provides features for destination exploration, itinerary management, and travel information organization, allowing users to plan their trips more efficiently through a centralized web application. The system was developed using a full-stack architecture where the frontend communicates with backend services through API integration to deliver dynamic and structured travel data.
        `,



        highlights:[

            "Developed a full-stack travel planning platform with integrated frontend and backend services",

            "Implemented responsive user interface for destination exploration and itinerary management",

            "Integrated frontend application with backend REST API for dynamic data processing",

            "Designed user experience flow and initial interface prototype using Figma"

        ],



        contribution:[

            "Designed and implemented frontend interfaces based on user requirements and system flow",

            "Built responsive web components and interactive features for the application",

            "Integrated frontend components with backend REST API endpoints to retrieve and manage application data",

            "Collaborated in designing initial UI/UX concepts and interface layouts using Figma",

            "Performed frontend testing, debugging, and refinement to improve application usability"

        ],



        designThinking:
        `
        The project started by identifying the challenges users face when planning trips, such as organizing destinations, schedules, and travel information across different sources. The design approach focused on creating a centralized travel planning experience where users can easily discover destinations and organize their itinerary through a simple and structured interface. User flow and interface design were planned before development through initial wireframes and design discussions to ensure the application provided an intuitive navigation experience.
        `,



        implementation:
        `
        The development process consisted of:
        1. Designing initial user interface concepts and layouts using Figma
        2. Developing responsive frontend components and application pages
        3. Implementing interactive features using JavaScript/TypeScript
        4. Connecting frontend services with backend REST API endpoints
        5. Managing application state and displaying dynamic travel data
        6. Testing frontend functionality and improving user experience
        `,



        results:[

            "Successfully developed an interactive travel planning web application",

            "Implemented frontend and backend communication through API integration",

            "Created a structured interface for destination exploration and itinerary management",

            "Improved understanding of collaborative full-stack development workflow"

        ],



        learned:
        `
        Through this project, I learned how to develop a frontend system that communicates with backend services through API integration.  I gained practical experience in designing user interfaces, managing frontend application flow, consuming API data, and collaborating within a full-stack development environment. This project also improved my understanding of how frontend, backend, database, and UI/UX design processes work together to build a complete web application.
        `

    },

    "mind-sense": {

        title:
            "MindSense AI",


        command:
            'load_case_study(project="mind-sense")',


        image:
            "/mindsense.png",



        info: {

            type:
            "Machine Learning",
            
            workMode:
            "Team Project",

            role:
            "Machine Learning Engineer",

            team:
            "3 Members",

            timeline:
            "Feb 2026 - Jun 2026",


            stack:[

            "Python",
            "Pandas",
            "Scikit-learn",
            "Machine Learning",
            "Streamlit"

            ]

        },



        links: {

            website:
                "https://mind-sense-ai.streamlit.app/",

            github:
                "https://github.com/stwllabs/ML-Project"

        },



        about:
        `MindSense AI is a machine learning-based system that predicts student stress levels by analyzing behavioral and academic factors through data preprocessing, classification models, evaluation, and deployment into an interactive Streamlit application.`,



        highlights:[

            "Built an end-to-end machine learning pipeline for student stress prediction",

            "Experimented and compared multiple classification algorithms to analyze model performance",

            "Processed behavioral and academic features to identify patterns related to student stress levels",

            "Developed an interactive Streamlit dashboard for real-time stress prediction"

        ],



        contribution:[

            "Performed exploratory data analysis and prepared datasets for machine learning training",

            "Developed preprocessing workflow including feature transformation and data preparation",

            "Trained and evaluated multiple classification models to determine prediction performance",

            "Analyzed model results using evaluation metrics such as accuracy, F1-score, and AUC",

            "Assisted in developing the Streamlit interface to demonstrate the machine learning model"

        ],



        designThinking:
        `The project was initiated from the challenge of identifying student stress levels through measurable academic and behavioral indicators. The approach focused on transforming raw student data into meaningful features, experimenting with various machine learning algorithms, and developing a predictive system that could support early stress identification.`,



        implementation:
        `The technical workflow includes data exploration, data preprocessing, feature engineering, machine learning model training, classification algorithm comparison, performance evaluation using classification metrics and AUC analysis, model serialization, and deployment through an interactive Streamlit application.`,



        results:[

            "Developed a machine learning system capable of predicting student stress levels based on structured data",

            "Evaluated multiple classification models to compare performance and prediction reliability",

            "Successfully deployed an interactive Streamlit application for machine learning model demonstration"

        ],



        learned:
        `Through this project, I gained experience in developing an end-to-end machine learning workflow from dataset analysis to model deployment. I improved my understanding of data preprocessing, feature engineering, model experimentation, evaluation techniques, and integrating machine learning models into interactive applications.`

    },

    "mr-coffee": {

        title:
            "Mr. Coffee",


        command:
            'load_case_study(project="mr-coffee")',


        image:
            "/mr.coffee.png",



        info: {

            type:
            "Frontend Development",

            workMode:
            "Individual Project",

            role:
            "Front End Developer",

            team:
            "Individual Project",

            timeline:
            "Feb 2025 - Jun 2025",


            stack:[

            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Frontend Development"

            ]

        },



        links: {

            figma:
                "https://www.figma.com/design/HrSHp8YMAtO8IJB4yy87kr/Mr.Coffee?node-id=0-1&t=l8vfenr2YB5hMGwj-1",

            github:
                "https://github.com/KevinReynald029/Project-Mr.Coffee"

        },



        about:
        `
        Mr. Coffee is a responsive coffee shop website designed to provide customers with an interactive digital experience through product browsing, menu filtering, reward features, and a dynamic ordering system.
        `,



        highlights:[

            "Developed complete coffee shop website from initial concept to final implementation",

            "Implemented interactive menu filtering and dynamic ordering features",

            "Designed responsive user interface for desktop and mobile devices",

            "Created structured website navigation and user experience flow"

        ],



        contribution:[

            "Designed the initial website interface and user experience flow",

            "Developed the entire frontend structure using HTML, CSS, and JavaScript",

            "Implemented interactive features including menu filtering and ordering functionality",

            "Created responsive layouts to ensure usability across different screen sizes",

            "Tested and refined website functionality and interface consistency"

        ],



        designThinking:
        `
        The project was designed based on the goal of creating a simple and engaging digital experience for coffee shop customers. The approach focused on understanding user needs, organizing product information clearly, and creating an intuitive ordering flow through a clean and responsive interface.
        `,



        implementation:
        `
        The website development process includes:
        1. Creating the initial interface design and website structure
        2. Developing responsive layouts using HTML and CSS
        3. Implementing interactive features with JavaScript
        4. Building product catalog, category filtering, and ordering workflow
        5. Testing website functionality and improving user experience
        `,



        results:[

            "Successfully developed a functional coffee shop website",

            "Implemented interactive customer features including menu filtering and ordering system",

            "Delivered responsive interface optimized for different screen sizes"

        ],



        learned:
        `
        This project improved my understanding of frontend development and user interface design. I learned how to transform design concepts into functional websites, implement interactive features using JavaScript, create responsive layouts, and build digital experiences focused on usability.
        `

    },

    };

    export const projectOrder = [
    "fruit-freshness",
    "financial-sentiment",
    "nusatrip",
    "gymbot",
    "mind-sense",
    "mr-coffee",
    ];