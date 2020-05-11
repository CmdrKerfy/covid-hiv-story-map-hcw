var config = {
    style: 'mapbox://styles/kerfy/ck9u32oq914jz1ipy74ytvn36',
    accessToken: 'pk.eyJ1Ijoia2VyZnkiLCJhIjoiY2szOTE0dG43MDE4dDNqbzZ4ajdld3A1eCJ9.IYIY3O7YU3fZvR2izUZUGQ',
    showMarkers: false,
    theme: 'red',
    alignment: 'left',
    title: 'How COVID-19 Could Overload Healthcare Workers in Kenya',
    subtitle: 'Six Week Projections',
    footer: 'Source of Data: PEPFAR <br /> Source of Images: PEPFAR, Getty Images, Associated Press, VOA News, Bloomberg News, BBC News, Ruters, Al Jazeera, National Media Group, and Wikicommons',
    chapters: [

        {
            id: 'Intro',
            title: 'Visualing the Strain on Healthcare Workers in Kenya',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDCases.png',
            description: 'This story map is based off an impact simulation developed by PEPFAR to capture the potential effects of COVID-19 on healthcare workers in Kenya.  While the model is susceptible to change, the hope is to inform our partners of the possible impact a COVID-19 outbreak will have on PEPFAR programming nationwide. <br /> ',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'Intro-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/chapter_titles/GenNotes.png',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'Scenarios-Intro',
            title: 'Study Background',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h13.jpg',
            description: 'The models were established by an intra-agency group of scientists and economists using best practices. <br /> <br /> Included within these maps are five scenarios. Unless otherwise stated, all visualizations will depict the first (base) scenario, with significant differences highlighted when applicable.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        // {
        //     id: 'Scenarios-Diff',
        //     title: 'Scenario #1 vs Scenario #5',
        //     image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h21.jpg',
        //     description: 'Please note that the Scenario #1 (Base) is considered the best case within the context of this study. Conversely, Scenario #5 illustrates the worst outcome from a COVID outbreak.',
        //     location: {
        //         center: [35.40804, -0.19256],
        //         zoom: 5.71,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'April 8th - Doc CURR',
        //         opacity: 0
        //     }],
        //     onChapterExit: [{
        //         layer: 'April 8th - Doc CURR',
        //         opacity: 0.
        //     }]
        // },

        {
            id: 'Gen-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/chapter_titles/hcstaff.png',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'Aspect-1',
            title: 'An Expected Decrease in Available Healthcare Workers',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/WeekOne_2.png',
            description: 'If current trends continue, COVID-19 will likely significantly reduce the number of available healthcare workers in Kenya. As infections increase, more and more healthcare workers will become affected and be unable to provide healthcare services. The map in this box shows the number of available doctors and nurses currently, and the large map shows the projected number of available doctors and nurses in six weeks.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week5-6',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week5-6',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week5-6',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week5-6',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Lamu',
            description: 'In every scenario, we are expecting total staff capacity in Isiolo and Lamu will be critically low to non-existent by week 1.',
            location: {
                center: [37.40658, -0.17094],
                zoom: 6.70,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'Lamu-isiolo',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'Lamu-isiolo',
                opacity: 0.
            }]
        },

        {
            id: 'Aspect3-HIVgraph',
            title: 'An Expected Increase in Health Visits by People Living with HIV',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/kenyahos.jpg',
            description: 'While the number of nurses and doctors will decrease, the number of health visits will dramatically increase as shown by projected number of COVID visits just by people living with HIV. These maps depicit healthcare capacity within the base scenario',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Nurse Week1',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Doc Week1',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Nurse Week1',
                    opacity: 0
                },
                {
                    layer: 'April 8th - Doc Week1',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Aspect3-Week-Two',
            title: 'Week Two Health Visits',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h6.jpg',
            description: 'By week two, the increase in health visit demand by the total population will begin to strain the limited number of available healthcare workers as the number of visits shift sharply upward.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week2',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week2',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week2',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week2',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Aspect3-Week-Three',
            title: 'Week Three Health Visits',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/news/ap1.jpg',
            description: 'By week three, the demand is already far outpacing capacity.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week3',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week3',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week3',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week3',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Aspect3-Week-Four',
            title: 'Week Four Health Visits',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/news/bloomberg1.jpg',
            description: 'By week 4, both doctor and nurse capacity are projected to be just a fraction of current status.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week4',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week4',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week4',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week4',
                    opacity: 0
                }
            ]
        },

        {
            id: 'Aspect3-Week-Five',
            title: 'Health Visits Week 5 & 6',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDVisitsHIV.png',
            description: '*The graph above depicts the base scenario as a point of reference* <br /> <br /> By week 5 and 6, the outbreak has caused an unsustainable strain on exisiting healthcare worker capacity. By week 6, the healthcare system will be so overloaded, irreparable damage will likely have occurred. ',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                    layer: 'April 8th - Doc Week5-6',
                    opacity: 0.45
                },
                {
                    layer: 'April 8th - Nurse Week5-6',
                    opacity: 0.45
                }
            ],
            onChapterExit: [{
                    layer: 'April 8th - Doc Week5-6',
                    opacity: 0.
                },
                {
                    layer: 'April 8th - Nurse Week5-6',
                    opacity: 0
                }
            ]
        },

        // {
        //     id: 'Scenario5-Week6',
        //     title: 'Scenario 5: (Week 6)',
        //     image: '/img/news/reuters1.jpg',
        //     description: 'In contrast to the pervious map, Scenario 5, Week 6, sees even more dramatic dropoffs',
        //     location: {
        //         center: [35.40804, -0.19256],
        //         zoom: 5.71,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [{
        //         layer: 'April 8th - Doc Week5-6',
        //         opacity: 0.45
        //     },
        //     {
        //         layer: 'April 8th - Nurse Week5-6',
        //         opacity: 0.45
        //     }
        // ],
        //     onChapterExit: [{
        //         layer: 'April 8th - Doc Week5-6',
        //         opacity: 0.
        //     },
        //     {
        //         layer: 'April 8th - Nurse Week5-6',
        //         opacity: 0
        //     }]
        // },

        {
            id: 'MO-Explain',
            title: 'A Special Note on Medical Officers',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h26.jpg',
            description: 'Medical Officers are appointed by the government and typically focused on preventive care. Their role can vary between technical and managerial roles, depending on clinc needs. While accounted for in this study, their numbers stay relatively consistent throughout the predicted outbreak.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/chapter_titles/PLHIV.png',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-Explain',
            title: 'Current HIV-Positive Kenyan Patients',
            description: 'While we started this visualization on doctors, nurses, and medical offiers, it is important to also focus on the effects COVID will have on people living with HIV',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S1-Week1',
            title: 'SCENARIO #1, WEEK 1',
            description: 'Starting with the Base Scenario, we can see the effects of COIVD on the number of people living with HIV visiting meidcal facilities.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S1W1',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S1W1',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S1-Week6',
            title: 'SCENARIO #1, WEEK 6',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h14.jpg',
            description: '...and the expected increase by week 6.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S1W6',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S1W6',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S5-Week1',
            title: 'SCENARIO #5, WEEK 1',
            description: 'Similarly, we can look at Scenario #5 to see an increased burden, starting with week 1.',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S5W1',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S5W1',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-S5-Week6',
            title: 'SCENARIO #5, WEEK 6',
            //description: 'In contrast, the last week of scenario #5:',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/news/nationmediagroup.jpg',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV Visits S5W6',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV Visits S5W6',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-COVID-S1',
            title: 'People Living with HIV (No Viral Supression)',
            description: 'We can also use the models in this study to examine the relationship between COVID and the HIV population that is not virally suppressed. <br /> <br /> This map depicts the amount of people non-virally suppressed HIV population expected to become infected by COVID-19, based on Scenario #1 (Base)',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV NVS COVID S1',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV NVS COVID S1',
                opacity: 0.
            }]
        },

        {
            id: 'PLHIV-COVID-S4',
            title: 'SCENARIO #5, WEEK 6',
            //description: 'In comparison, Scenario #5.',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h25.jpg',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'PLHIV NVS COVID S6',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'PLHIV NVS COVID S6',
                opacity: 0.
            }]
        },

        {
            id: 'NextSteps-Intro',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/chapter_titles/nextsteps.png',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }]
        },

        {
            id: 'NextSteps-Explain',
            // title: 'Putting it All Together',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/img/wikicom/h7.jpg',
            description: 'We hope that the findings of this study can use by key stakeholders within Kenya to help with their planning and resource allocation',
            location: {
                center: [35.40804, -0.19256],
                zoom: 5.71,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0
            }]
        },



    ]
};


// location: {
//     center: [35.70804, 0.01256],
//     zoom: 6.26,
//     pitch: 0.00,
//     bearing: 0.00
// },

// {
//     // Outstanding: 1) Need new picture.  
//     id: 'GenCOVID-Intro',
//     image: '/img/chapter_titles/GeHeCOVID.png',
//     location: {
//         center: [35.40804, -0.19256],
//         zoom: 5.71,
//         pitch: 0.00,
//         bearing: 0.00
//     },
//     onChapterEnter: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0
//     }
// ],
//     onChapterExit: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0.
//     }]
// },

// {
//     // Outstanding: 1) Need new picture.  
//     id: 'GeHeCOVID-Explain',
//     title: 'Putting it All Together',
//     description: 'adsfasdfjkas;dfj;asjdfja;sdfjka;jsdklf',
//     location: {
//         center: [35.40804, -0.19256],
//         zoom: 5.71,
//         pitch: 0.00,
//         bearing: 0.00
//     },
//     onChapterEnter: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0
//     }
// ],
//     onChapterExit: [{
//         layer: 'April 8th - Doc CURR',
//         opacity: 0.
//     }]
// },