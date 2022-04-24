const Data = {
    data: function () {
        return {
            profileInfo: {
                email: 'yunusaydinonline@gmail.com',
                linkedinURL: 'https://www.linkedin.com/in/yunusaydinonline',
                githubURL: 'https://github.com/yunusaydinonline',
                skype: 'yunusaydinonline',
                location: 'Istanbul/Turkey'
            },
            menuItems: [
                {
                    url: '#AboutMe',
                    text: 'ABOUT ME'
                },
                {
                    url: '#Experiences',
                    text: 'EXPERIENCES'
                },
                {
                    url: '#Skills',
                    text: 'SKILLS'
                },
                {
                    url: '#Contact',
                    text: 'CONTACT'
                }
            ],
            experiences: [
                {
                    title: 'Mobile Developer',
                    company: 'VOIPZeker (Remote)',
                    dateAndLocation: 'Nov 2020 - Present | Netherlands',
                    jobDescription: 'Creating iOS and Android apps using by React Native, Swift and Java. Responsible on building mobile VOIP soft phones.',
                    details: {
                        detailsList: []
                    }
                },
                {
                    title: 'Full-Stack Software Developer',
                    company: 'Sarki Pro (Remote)',
                    dateAndLocation: 'Dec 2018 - Nov 2020 | ISTANBUL, TURKEY',
                    jobDescription: 'Software development on the company\'s betting web sites and services developed with django-channels socket services, VueJS front-end and OctoberCMS PHP software layers.',
                    details: {
                        detailsList: ['Software development of Python-Django socket layers and data feeder application,', 'Software development of OctoberCMS backend panel,', 'Software development of data analysis screen with PHP,', 'Software development of VueJS front-end and web socket layers.']
                    }
                },
                {
                    title: 'Full-Stack Software Developer',
                    company: 'AROFT Software Studio (Remote, In Office)',
                    dateAndLocation: 'Mar 2016 - Dec 2018 | ISTANBUL, TURKEY',
                    jobDescription: 'Software development of machine learning applications and blockchain-based stock market applications. Design, system modeling and documentation development.',
                    details: {
                        detailsList: ['Software development of machine learning applications for the stock market with Python,', 'Software development of stock market applications in C# with blockchain structure,', 'Mobile application development for iOS and Android operating systems,', 'Software development of trading robots and indicators for Metatrader 4 in MQL (C++ based coding language for Metatrader).', 'Project management,', 'System modelling.']
                    }
                },
                {
                    title: 'Senior Software/Front-End Developer',
                    company: 'Ardela Technologies (In Office)',
                    dateAndLocation: 'Oct 2012 - Mar 2016 | ISTANBUL, TURKEY',
                    jobDescription: 'Responsible for the development, documentation and management of web, mobile and desktop applications.',
                    details: {
                        detailsList: ['Backend and front-end software developments of enterprise applications with C# .NET,', 'Backend and front-end software developments with jQuery, jQuery UI, Telerik Kendo UI and Devexpres frameworks,', 'Mobile application design and software development for iOS and Android operating systems.']
                    }
                },
                {
                    title: 'Web Developer',
                    company: 'Medyasis Electronic and Communication Systems (In Office)',
                    dateAndLocation: 'May 2011 - Jun 2012 | ISTANBUL, TURKEY',
                    jobDescription: 'Integration of template and visual designs into the company\'s content management system and e-commerce software like Opencart or WooCommerce.',
                    details: {
                        detailsList: ['Front-end development and integrations with jQuery,', 'Plugin developments and integrations with PHP.']
                    }
                },
                {
                    title: 'Software Specialist',
                    company: 'RA-CE Computer Systems (In Office)',
                    dateAndLocation: 'Oct 2010 - Mar 2011 | ISTANBUL, TURKEY',
                    jobDescription: 'Software development on the network marketing application developed by RA-CE and adaptation of various fee distribution formulas to the system.',
                    details: {
                        detailsList: ['Software development with ASP and C#.']
                    }
                },
                {
                    title: 'Web Design & Development Specialist',
                    company: 'Eniac Web Agency (In Office)',
                    dateAndLocation: 'Jan 2007 - Sep 2010 | ANTALYA, TURKEY',
                    jobDescription: 'Web design and development specialist for all companies operating in the tourism sector, such as hotels, car rental companies, etc.',
                    details: {
                        detailsList: ['Web development with HTML, CSS and JavaScript coding languages and front-end design with Adobe apps like Photoshop, Illustrator, etc.']
                    }
                },
                {
                    title: 'Junior Web Designer & Developer',
                    company: 'Antalya Design Group (In Office)',
                    dateAndLocation: 'Jan 2006 - Jan 2007 | ANTALYA, TURKEY',
                    jobDescription: 'Design and development of HTML, CSS and JavaScript based websites.',
                    details: {
                        detailsList: []
                    }
                }
            ],
            topSkills: [
                {
                    title: 'JavaScript',
                    description: 'For a long time, I used JavaScript for simple front-end operations rather than reactive operations. But with the development of Node.js in last decade, I have been using it for reactive programming. I use frameworks such as React, React Native and VueJS.',
                    image: 'javascript-icon.svg'
                },
                {
                    title: 'Python',
                    description: 'Python is one of the most fun and effective programming language for me. I have started to code Python for machine learning and continued my journey with Tensorflow, Keras, Django, Plotly and the other frameworks. I mainly use Python for data analysis and machine learning.',
                    image: 'python-icon.svg'
                },
                {
                    title: 'C#',
                    description: 'C# occupies an important place in my professional life. In almost every company I have worked with, I did software development with C#. Many of them were enterprise applications. Database operations, desktop applications, RESTful API and countless applications.',
                    image: 'csharp-icon.svg'
                },
            ],
            otherSkills: ['React Native', 'Vue.js', 'Swift', 'Objective C', 'Java (For Android)', 'Django', 'Tensorflow', 'Keras', 'PyQt5', 'Plotly', 'SQL Alchemy', 'Axios', '.NET Framework', 'Accord.NET', 'Git, SVN', 'Node.js', 'Postman', 'Machine Learning', 'Genetic Programming', 'Figma']
        }
    }
};

export {
    Data
}