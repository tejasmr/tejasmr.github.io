const educations = []

function addEducation(duration, college, degree, location, description) {
    educations.push(
        {
            duration: duration,
            college: college,
            degree: degree,
            location: location,
            description: description
        }
    );
}

addEducation(
    "2018 - 2022", 
    "M S Ramaiah Institute of Technology",
    "B.E Information Science",
    "Bengaluru, India",
    "Studied about basics of Computer Science and Software Engineering. Got to work on wonderful projects like OurVision and Sign Language Translator"
);

export default educations;