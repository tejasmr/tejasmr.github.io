const projects = []

function addProject(name, role, description, actions) {
    projects.push(
        {
            name: name,
            role: role,
            description: description,
            actions: actions
        }
    );
}

addProject(
    "Sign language translator",
    "Lead developer",
    "Sign language translator using sensor-based hand gesture recognition was my final year project which translates signs into spoken language. I have worked on the interfacing of sensors with the microcontroller and the code for collecting data from the sensors. I worked on analysis of said data and used Dynamic Time Warping along with Feed forward neural networks with memory-based learning to classify gestures with 96.74% accuracy. I worked on creating an improved model which uses BiLSTM architecture with online learning which yielded f1-score of 98.91%.",
    [
        {
            "text": "View the project on Github",
            "link": "https://github.com/slt-artpark/"
        },
        {
            "text": "Funding Source: ARTPARK",
            "link": "https://www.artpark.in/innoProgramme"
        }
    ]

);

addProject(
    "OurVision",
    "Lead developer",
    "OurVision is an assistive device for the visually impaired and the blind community. It can be used to read books, documents, street signs, billboards, etc. It can convey the objects in a room and its relative position to the user. It also uses cloud technologies for regional language recognition like Kannada and Hindi. I worked on integrating Document Scanner and Document OCR modules. I have also created an innovative way for button handling in which the main thread handles the buttons and each module is called as a Process. To stop all the processes when cancel button is pressed, a SubprocessObserver class was created to register all the active processes which uses Observer design pattern.",
    [
        {
            "text": "View the project on Github",
            "link": "https://github.com/tejas1904/OurVision"
        },
        {
            "text": "Read more at IEEE EPICS",
            "link": "https://epics.ieee.org/blogs/students-use-open-source-software-to-create-an-assistive-device-for-the-blind-community/"
        }
    ]

);


addProject(
    "Table Creator",
    "Developer",
    "Table creator is a react component library which can be used to create tables easily. It also takes all the styles applied on any react component using it. I was the sole developer of it.",
    [
        {
            "text": "View the project on Github",
            "link": "https://github.com/tejasmr/table-creator"
        },
        {
            "text": "View the package on NPM",
            "link": "https://www.npmjs.com/package/table-creator"
        }
    ]

);

addProject(
    "genREADME",
    "Developer",
    "genREADME is a github action in which you can insert code from a file in README.md. It can be added to your CI and automatically, the readme is generated. It was solely developed by me.",
    [
        {
            "text": "View the project on Github",
            "link": "https://github.com/tejasmr/genREADME"
        },
        {
            "text": "View on Actions Marketplace",
            "link": "https://github.com/marketplace/actions/run-generate-readme-md"
        }
    ]

);

export default projects;