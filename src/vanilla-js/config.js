var config = {
    style: 'mapbox://styles/kerfy/ck8sadhtn0uip1inskm9tqsa1',
    accessToken: 'pk.eyJ1Ijoia2VyZnkiLCJhIjoiY2szOTE0dG43MDE4dDNqbzZ4ajdld3A1eCJ9.IYIY3O7YU3fZvR2izUZUGQ',
    showMarkers: false,
    theme: 'red',
    alignment: 'left',
    title: 'THE EFFECTS OF COVID ON HIV PROGRAMMING IN KENYA',
    subtitle: '[6 Week Projections Based on PEPFAR Modelling]',
    // byline: 'By PEPFAR',
    footer: 'Source: PEPFAR.',
    chapters: [{
            id: 'Countrywide-1',
            title: 'The Waiting Game',
            // video: 'https://www.youtube.com/watch?v=7s5WrI3bZ8o',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDCases.png',
            description: 'Based on current models, COVID-19 is expected to have a significant affect on existing available healthcare staff within Kenya. The following information is a projection of the strain a possible outbreak will have on exisiting healthcare capacities. While these models are susceptible to change, the hope is to inform our partners of the possible impact a COVID-19 outbreak will have on PEPFAR programming nationwide. ',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }]
    },

        {
            id: 'Countrywide-2',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/kenyahos.jpg',
            description: 'Please note that in the following maps, the BLUE circles represent doctor capacity by county. The RED circles represent nurse capacity by county.',
            location: {
                center: [35.70804, 0.01256],
                zoom: 6.26,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0
            }]
        },

        {
            id: 'Week1',
            title: 'WEEK 1 PROJECTION',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week1combo.png',
            description: 'In week one into an outbreak, our capacity will be already be stressed but still generally manageable.',
            location: {
                center: [35.70804, 0.01256],
                zoom: 6.26,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc Week1',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc Week1',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0
            }]
        },

        {
            id: 'Lamu',
            //image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/kenyabed.jpg',
            description: 'By week 1, total staff capacity in Isiolo and Lamu will be critically low to non-existent.',
            location: {
                center: [38.40658, -0.52094],
                zoom: 6.90,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'Lamu-isiolo',
                opacity: 0.45
            },
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0.45
            }
        ],
            onChapterExit: [{
                layer: 'Lamu-isiolo',
                opacity: 0.
            },
            {
                layer: 'April 8th - Nurse Week1',
                opacity: 0
            }]
        },

        {
            id: 'Week2',
            title: 'WEEK 2 PROJECTION',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week2chart.png',
            description: 'By week 2, we can see office visits from our HIV beneficiaries start to shift sharply upward.',
            location: {
                center: [35.70804, 0.01256],
                zoom: 6.26,
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
            }]
        },
    
        {
            id: 'Week3',
            title: 'WEEK 3 PROJECTION',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week3chart.png',
            description: 'By week 3, the situation is already far outpacing capacity.',
            location: {
                center: [35.70804, 0.01256],
                zoom: 6.26,
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
            }]
        },

        {
            id: 'Week4',
            title: 'WEEK 4 PROJECTION',
            //image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/week3chart.png',
            description: 'By week 4, both doctor and nurse capacity are projected to be just a fraction of its current status.',
            location: {
                center: [35.70804, 0.01256],
                zoom: 6.26,
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
            }]
        },

        {
            id: 'Week5',
            title: 'WEEK 5 & 6 PROJECTION',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDVisitsHIV.png',
            description: 'By week 5 and 6, the outbreak has caused an unsustainable strain on exisiting healthcare worker capacity.',
            location: {
                center: [35.70804, 0.01256],
                zoom: 6.26,
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
            }]
        },
    ]
};
