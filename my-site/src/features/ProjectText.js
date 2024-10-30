const ProjectsInfo = {
    portfolio:{
        'projectName':`Portfolio`,
        'projectBlurb':`More information about this website here.`,
        'projectGithub':`https://github.com/NolanCustodio/PersonalSite`,
        'projectSubtext':`You are here!`,
        'projectDescription':`
            Being able to create a simple static website using much more up-to-date 
            technology and tools was always a big goal for me after I was able to 
            work on NewsBox. This website uses 2 Docker containers to run and is being 
            hosted on a DigitalOcean Droplet. First, the more robust container has Node 
            running, builds my React project, and uses Nginx to set a server to listen for 
            incoming requests. I wanted to practice using more than 1 container and start 
            using a proxy server to handle incoming internet traffic. Which leads into the second 
            container, this project was an introduction to Nginx to get a better 
            feel while using this tool. For now, the Nginx container only has the one job of handling 
            incoming users but I also would like to learn things such as load balancing. 
            Cloudflare was used to secure all connections and provides an SSL certificate. I did look into hosting on 
            AWS and was able to get the project up and running there, but saw that DigitalOcean offered 
            more of what I was looking for. 
        `,
        newProjectDescription:
            {
                Infrastructure: `This site is running on a DigitalOcean Droplet that uses 
                2 docker containers, 1 node with React and 1 Nginx, to handle creating the 
                pages and navigation. In order to keep your connection to the site secure I 
                am proxying through Cloudflare which provides an SSL certificate.`,
                Purpose: `I am continuously updating this website whenever I create new 
                projects or my current projects have been updated substantially.`
            }

        ,
        'projectTechnology':[
            `Docker with docker-compose to create a multi-container application`,
            `React for all of the front-end as well as tools such as redux and routing`,
            `Nginx handles incoming HTTP requests as a proxy`,
            `Cloudflare secure the connection and also acts a proxy`,
            `DigitalOcean as a hosting platform was much more appealing to a project this size`,
            `AWS did offer a lot of tools, which I did learn, but did not feel like the right fit for this project`,

        ]
    },
    synchat:{
        'projectName':`Synchat`,
        'projectBlurb':`I am currently working on this.`,
        'projectGithub':`https://github.com/NolanCustodio/Synchat`,
        'projectSubtext':`For the Long Road`,
        'projectDescription':`
            I have always wanted to make a product that people are able to use and I have chosen 
            to make a communication application. The problem I would like to fix is as follows: 
            “I want to get together with my friends but it is hard to compile what days are good 
            for each person and what activity the group would like to do.” The difficulty of lining 
            up a date where everyone is free can be complicated especially if everyone is busy so 
            I want to make an app that makes the process more streamline. As for what I will use 
            to make this app, I know I want to use Docker, Nginx, MySQL, RabbitMQ. I am currently 
            considering using NextJS with Typescript for this project and there are probably many 
            more tools and aspects that I cannot see yet which I will have to use.
        `,
        'projectTechnology':[
            `Docker will hold each container to be a microservice`,
            `Nginx will act as a proxy as well as handle AMQP requests`,
            `RabbitMQ will be how the services communicate and send data to each other`,
            `I want there to be individual users so a database will be neded for various 
                aspects and I have chosen MySQL for now`,
            `Creating single page applications is interesting for me so I will use either 
                React or NextJS, but I can see myself using whatever I find best`,

        ]

    },
    newsbox:{
        'projectName':`NewsBox`,
        'projectBlurb':`First full stack application.`,
        'projectGithub':`https://github.com/jcs78/News-Box-Application`,
        'projectSubtext':`The Spark`,
        'projectDescription':`A full stack application that was built from the ground up. 
            This was the first major project that I worked on during Undergrad where I 
            started to understand how all the small pieces can interact. The task was to 
            make an application, with the stipulation that some of the parts needed to be 
            made by hand for the sake of complete understanding. Over the course of 4 months, 
            in a group, we created 4 virtual machines where each machine was a microservice 
            with a specific task. The 4 machines were seen as Front-End, Back-End, RabbitMQ, 
            and API. Most parts of the project were rushed and unpolished to a degree that 
            I did not like. In spite of that, the application worked, and it showed me that 
            creating an application was what I wanted to do.
        `,
        'projectTechnology':[
            `Virtualbox was used to create virtual machines for each microservice`,
            `The VMs all used Ubuntu and LAMP was the tech stack that we used`,
            `Linux tools such as systemd, cronjobs, systemctl, iptables, and more were used to 
                secure, facilitate, and automate`,
            `We had an ssl certificate for Apache`,
            `MySQL database formation and data backup was scripted using BASH`,
            `Created an MVC from scratch for this project to handle navigation and page data`,
            `PHP was used throughout the project as the main language`,
            `RabbitMQ facilitated communication between VMs`,
            `Used a News API to dynamically populate custom homepages for users`
            ]
    }
}

console.log(typeof(ProjectsInfo))

export default ProjectsInfo;