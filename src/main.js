// Fix the boostrap navbar href problem
$('#nav > li > .link').click(function () {
    window.location = $(this).attr('href');
});

i18next.init({
    lng: 'en', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
    interpolation: {
        escape: false,
        escapeValue: false
    },
    resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
        en: {
            translation: {
                navbar: {
                    about: 'About',
                    resume: 'Resume',
                    projects: 'Projects',
                    contact: 'Contact'
                },
                headerwrap: {
                    title: 'Project engineer | work@didelotkev.ovh'
                },
                about: {
                    title: 'ABOUT',
                    description: 'Passionate about new technologies, I studied at ESME Sudria Paris. Currently alternating at Capgemini and CentralSupelec. I specialize myself in the business of information systems architect.',
                    downloadPdf: 'DOWNLOAD PDF'
                },
                education: {
                    title: 'EDUCATIONS',
                    central: {
                        title: 'Master Spé in IS architecture',
                        place: 'CentralSupelec',
                        duration: '16 mois',
                        graduation: 'GRADUATING IN FEBRUARY 2019',
                        state: 'IN PROGRESS'
                    },
                    esme: {
                        title: 'Master of Engineering',
                        place: 'Esme Sudria',
                        duration: '5 Years',
                        graduation: 'SEPTEMBER 2017'
                    },
                    vinci: {
                        title: 'Scientific Baccalaureate',
                        place: 'Léonard de Vinci',
                        duration: '3 Years',
                        graduation: 'AUGUST 2012'
                    }
                },
                works: {
                    title: 'WORKS',
                    capgemini: {
                        title: 'IS Architect junior',
                        company: 'Capgemini',
                        description: 'Alternance training in collaboration with CentralSupelec to validate a Master\'s degree in iS architecture.',
                        period: 'OCTOBER 2017 - CURRENT'
                    },
                    steamulo: {
                        title: 'Project engineer',
                        company: 'Steamulo',
                        description: 'My achievements:<br/>' +
                        '• Bootstrapping and front-end development of a web application (React, Redux).<br/>' +
                        '• Integration html.<br/>' +
                        '• Development of webservice (Struts2 et Spring).<br/>' +
                        '• Graph creation with the Highcharts library.',
                        period: 'APRIL 2017 - SEPTEMBER 2017'
                    },
                    acadomia: {
                        title: 'Mathematics Tutor',
                        company: 'Acadomia',
                        description: 'For high school students: <br/>' +
                        '• Training sessions<br/>' +
                        '• Student difficulties analysis<br/>' +
                        '• Implementation of appropriate working methodologies<br/>' +
                        '• Deepening',
                        period: 'SEPTEMBER 2015 - AUGUST 2016'
                    }
                },
                skills: {
                  title: 'SKILLS'
                },
                projects: {
                    title: 'PROJECTS',
                    openstack: {
                        title: 'OPENSTACK DEPLOYMENT',
                        description: 'A monitoring project aimed at understanding several new elements such as the sdn and openstack.',
                        tags: {
                            poc: '<i class="icon-tag"></i> POC',
                            devops: '<i class="icon-tag"></i> devOps',
                            openstack: '<i class="icon-tag"></i> openstack',
                            linux: '<i class="icon-tag"></i> linux',
                            vagrant: '<i class="icon-tag"></i> vagrant',
                            ansible: '<i class="icon-tag"></i> ansible'
                        }
                    },
                    jenkins: {
                        title: 'CONTINUOUS INTEGRATION UNDER JENKINS',
                        description: 'Personal project to set up a platform of continuous integration.',
                        tags: {
                            devops: '<i class="icon-tag"></i> devOps',
                            jenkins: '<i class="icon-tag"></i> jenkins',
                            linux: '<i class="icon-tag"></i> linux',
                            vagrant: '<i class="icon-tag"></i> vagrant',
                            ansible: '<i class="icon-tag"></i> ansible',
                            docker: '<i class="icon-tag"></i> docker'
                        }
                    }
                },
                contact: {
                    title: 'CONTACT',
                    adress: 'Adress',
                    phone: 'Phone',
                    social: 'SOCIAL LINKS'
                }
            }
        },
        fr: {
            translation: {
                navbar: {
                    about: 'A Propos',
                    resume: 'CV',
                    projects: 'Projets',
                    contact: 'Contact'
                },
                headerwrap: {
                    title: 'Ingénieur Projet | work@didelotkev.ovh'
                },
                about: {
                    title: 'A PROPOS',
                    description: 'Passionné des nouvelles technologies, j\'ai étudié à l\'ESME Sudria Paris. Actuellement en alternance chez Capgemini et CentralSupelec, je me spécialise dans le métier d\'architecte des systèmes d\'information.',
                    downloadPdf: 'TELECHARGER PDF'
                },
                education: {
                    title: 'FORMATIONS',
                    central: {
                        title: 'Master Spécialisé en architecture des SI',
                        place: 'CentralSupelec',
                        duration: '16 mois',
                        graduation: 'DIPLOME EN FEVRIER 2019',
                        state: 'EN COURS'
                    },
                    esme: {
                        title: 'Titre d\'ingénieur',
                        place: 'Esme Sudria',
                        duration: '5 ans',
                        graduation: 'SEPTEMBRE 2017'
                    },
                    vinci: {
                        title: 'Baccalauréat Scientifique',
                        place: 'Léonard de Vinci',
                        duration: '3 ans',
                        graduation: 'AOUT 2012'
                    }
                },
                works: {
                    title: 'EXPERIENCES',
                    capgemini: {
                        title: 'Architecte des SI junior',
                        company: 'Capgemini',
                        description: 'Alternance en collaboration avec CentralSupelec en vue de valider un Master Spé en architecture des SI.',
                        period: 'OCTOBRE 2017 - ACTUEL'
                    },
                    steamulo: {
                        title: 'Ingénieur projet',
                        company: 'Steamulo',
                        description: 'Mes réalisations:<br/>' +
                        '• Bootstrapping et développement d\'une l\'application React.<br/>' +
                        '• Intégration html.<br/>' +
                        '• Développement de webservice en Struts2 et Spring.<br/>' +
                        '• Création de graphique animé avec la bibliothèque highcharts.',
                        period: 'AVRIL 2017 - SEPTEMBRE 2017'
                    },
                    acadomia: {
                        title: 'Professeur de Mathématiques',
                        company: 'Acadomia',
                        description: 'Niveau lycée: <br/>' +
                        '• Remise à niveau<br/>' +
                        '• Analyse des difficultés rencontrées par l\'élève <br/>' +
                        '• Mise en place d\'une méthodologie adaptée<br/>' +
                        '• Approfondissement',
                        period: 'SEPTEMBRE 2015 - AOUT 2016'
                    }
                },
                skills: {
                    title: 'COMPETENCES'
                },
                projects: {
                    title: 'PROJETS',
                    openstack: {
                        title: 'DEPLOIEMENT OPENSTACK',
                        description: 'Projet de veille ayant pour but d\'appréhender plusieurs nouveaux éléments tels que le sdn et openstack.',
                        tags: {
                            devops: '<i class="icon-tag"></i> devOps',
                            openstack: '<i class="icon-tag"></i> openstack',
                            linux: '<i class="icon-tag"></i> linux',
                            vagrant: '<i class="icon-tag"></i> vagrant',
                            ansible: '<i class="icon-tag"></i> ansible'
                        }
                    },
                    jenkins: {
                        title: 'INTEGRATION CONTINUE SOUS JENKINS',
                        description: 'Projet personnel visant à mettre en place une plateforme d\'intégration continue.',
                        tags: {
                            devops: '<i class="icon-tag"></i> devOps',
                            jenkins: '<i class="icon-tag"></i> jenkins',
                            linux: '<i class="icon-tag"></i> linux',
                            vagrant: '<i class="icon-tag"></i> vagrant',
                            ansible: '<i class="icon-tag"></i> ansible',
                            docker: '<i class="icon-tag"></i> docker'
                        }
                    }
                },
                contact: {
                    title: 'CONTACT',
                    adress: 'Adresse',
                    phone: 'Téléphone',
                    social: 'LIENS SOCIAUX'
                }
            }
        }
    }
}, function(err, t) {
    // for options see
    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
    jqueryI18next.init(i18next, $, {
        interpolation: {
            escapeValue: false
        }
    });
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('#translation').localize();
});

i18next.on('languageChanged', function() {
    $('#translation').localize();
});