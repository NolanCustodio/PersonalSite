const ProjectsInfo = {
    'portfolio':{
        'projectName':`Portfolio`,
        'projectBlurb':`More information about this website here.`,
        'projectGithub':`https://github.com/NolanCustodio/PersonalSite`,
        'projectSubtext':`You are here!`,
        'projectDescription':`Being able to create a simple static website using much more up-to-date technology and tools was always a big goal for me after I was able to work on NewsBox. This website uses 2 Docker containers to run and is being hosted on a DigitalOcean Droplet. First, the more robust container has Node running, builds my React project, uses Nginx to set a server to listen for incoming requests. I wanted to practice using more than 1 container and start using a proxy server to handle the requests. Leading into the second container, which was much more of an introduction to Nginx for me. For now, the Nginx container only handles incoming internet traffic but I also would like to use more features in later projects like Synchat. The Nginx container also has the information for an SSL certificate to make sure that I am using a secure connection. I did look into hosting on AWS and was able to get the project up and running there, but saw that DigitalOcean offered more of what I was looking for. `,
        'projectTechnology':[
            `Docker with docker-compose to create a multi-container application`,
            `React for all of the front-end as well as tools such as redux and routing`,
            `Nginx handles incoming HTTP(S) requests as a proxy`,
            `DigitalOcean as a hosting platform was much more appealing`,
            `AWS did offer a lot of tools, which I did learn, but did not feel like the right fit for this project`,

        ]
    },
    'synchat':{
        'projectName':`Synchat`,
        'projectBlurb':`I am currently working on this.`,
        'projectGithub':`https://github.com/NolanCustodio/Synchat`,
        'projectSubtext':`For the Long Road`,
        'projectDescription':`I want to make a product that people are able to use and I have chosen to make a communication application. The problem I would like to fix is as follows: “I want to get together with my friends but it is hard to compile what days are good for each person and what activities sound fun to the group.” The difficulty of lining up a date where everyone is free can be complicated especially if everyone is busy so I want to make an app that makes the process more streamline. As for what I will use to make this app I know I want to use Docker, Nginx, MySQL, RabbitMQ. I am currently considering using NextJS with Typescript for this project and there are probably many more tools and aspects that I cannot see yet which I will have to use.`,
        'projectTechnology':[
            `Docker will hold each container to be a microservice`,
            `Nginx will act as a proxy as well as handle AMQP messages`,
            `RabbitMQ will be how the services communicate and send data to each other`,
            `I want there to be individual users so a database will be neded for various aspects and I have chosen MySQL for now`,
            `Creating single page applications is interesting for me so I will use either React or NextJS, but I can see myself using whatever I find best`,

        ]

    },
    'newsbox':{
        'projectName':`NewsBox`,
        'projectBlurb':`First full stack application.`,
        'projectGithub':`https://github.com/jcs78/News-Box-Application`,
        'projectSubtext':`The Spark`,
        'projectDescription':`A full stack application that was built from the ground up. This was the first major project that I worked on during Undergrad where I started to understand how all the small pieces can interact. The task was to make an application, with the stipulation that some of the parts needed to be made by hand for the sake of complete understanding. Over the course of 3 months, in a group, we created 4 virtual machines where each machine was a microservice with a specific task. The 4 machines were seen as Front-End, Back-End, RabbitMQ, and API. Most parts of the project were rushed and unpolished to a degree that I did not like. In spite of that, the application worked, and it showed me that creating an application was what I wanted to do.`,
        'projectTechnology':[
            `Virtualbox was used to create virtual machines for each microservice`,
            `The VMs all used Linux and LAMP was the tech stack that we used`,
            `Linux tools such as systemd, cronjobs, systemctl, iptables, and more`,
            `We had an ssl certificate for Apache`,
            `MySQL database formation and data backup was scripted using BASH`,
            `Created an MVC from scratch for this project`,
            `For the most part PHP was used throughout the project`,
            `RabbitMQ facilitated communication between VMs`,
            `Used a News API to dynamically populate custom homepages for users`
            ]
    }
}

export default ProjectsInfo;