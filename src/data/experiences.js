const experiences = []

function addExperience(duration, designation, company, location, description) {
    experiences.push(
        {
            duration: duration,
            designation: designation,
            company: company,
            location: location,
            description: description
        }
    );
}

addExperience(
    "Aug 2022 - Present", 
    "Software Engineer",
    "Endur Shell Energy",
    "Bengaluru, India",
    "Developing and maintaining modules for Endur software for Shell Energy"
);

addExperience(
    "April 2022 - May 2022", 
    "Software Engineer Intern",
    "Khushi Infotech",
    "Bengaluru, India",
    "Worked on building a full stack web application using Angular, Java Spring boot and MongoDB"
);

export default experiences;