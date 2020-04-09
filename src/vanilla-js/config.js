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
            description: 'If not properly responded to, based on current projections, COVID-19 is expected to have a significant affect on existing available healthcare staff within Kenya. This in turn will have many ripple affects including current PEPFAR programming.',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.65
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.65
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.65
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.65
            }]
    },

        {
            id: 'Countrywide-2',
            image: 'https://raw.githubusercontent.com/CmdrKerfy/covid-hiv-story-map-hcw/master/src/vanilla-js/images/COVIDCases.png',
            description: 'Within the city limits are six health faclities with one a few kilometers north of the city. Based on the last in-province assessment, three facilities are preforming above expectations (green), two are preforming at expectation (yellow), and two are preforming significantly below expectations.',
            location: {
                center: [36.53520, 1.31810],
                zoom: 5.71,
                pitch: 2.50,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.65
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.65
            }
        ],
            onChapterExit: [{
                layer: 'April 8th - Doc CURR',
                opacity: 0.65
            },
            {
                layer: 'April 8th - Nurse CURR',
                opacity: 0.65
            }]
        },

        {
            id: 'Saurimo-3',
            title: 'Saurimo',
            image: 'https://d2drhpw56bvoc4.cloudfront.net/wp-content/uploads/2016/07/26134356/201607_WASH-Bie_Edson-Monteiro2.jpg',
            description: 'The ECONOMIC BREAKDOWN',
            location: {
                center: [20.38438, -9.67590],
                zoom: 12.42,
                pitch: 19.00,
                bearing: 0.16
            },
            onChapterEnter: [{
                    layer: 'Saurimo Color Health',
                    opacity: 0.65
                },
                {
                    layer: 'Saurimo Fake Economic',
                    opacity: 0.65
                }
            ],
            onChapterExit: [{
                    layer: 'Saurimo Fake Economic',
                    opacity: 0
                },
                {
                    layer: 'Saurimo Color Health',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Saurimo-4',
            title: 'Saurimo',
            image: 'https://d2drhpw56bvoc4.cloudfront.net/wp-content/uploads/2016/07/26134356/201607_WASH-Bie_Edson-Monteiro2.jpg',
            description: 'The health facility compared to fake neighborhoods',
            location: {
                center: [20.38438, -9.67590],
                zoom: 12.42,
                pitch: 19.00,
                bearing: 0.16
            },
            onChapterEnter: [{
                    layer: 'Saurimo Color Health',
                    opacity: 0.65
                },
                {
                    layer: 'Saurimo Fake Treatment',
                    opacity: 0.65
                }
            ],
            onChapterExit: [{
                layer: 'Saurimo Fake Treatment',
                opacity: 0
                },
                {
                    layer: 'Saurimo Color Health',
                    opacity: 0      
                }]
        },

        {
            id: 'HOS-Province',
            title: 'Hospital Provincial Lunda Sul',
            image: 'http://s2.reutersmedia.net/resources/r/?m=02&d=20181025&t=2&i=1318543827&r=LYNXNPEE9O16B&w=1200',
            description: 'The main hospital within Saurimo, this location also includes the Centro Materno Infantil de Saurimo.',
            location: {
                center: [20.39212, -9.66001],
                zoom: 17.00,
                pitch: 51.00,
                bearing: -56.80
            },
            onChapterEnter: [{
                    layer: 'Saurimo Color Health',
                    opacity: 0.65
                },
                { 
                    layer: 'Saurimo Buildings',
                    opacity: 0.45
                },
                {
                    layer: 'S Health Labels',
                    opacity: 0  
                },
                {
                    layer: 'Saurimo Fake Treatment',
                    opacity: 0.65
                }
            ],
            onChapterExit: [{
                    layer: 'Saurimo Color Health',
                    opacity: 0
                },
                {
                    layer: 'Saurimo Fake Treatment',
                    opacity: 0
                },
                { 
                    layer: 'Saurimo Buildings',
                    opacity: 0
                },
            ]
        },

        {
            id: 'HOS-Province-2',
            title: 'Hospital Provincial Lunda Sul',
            image: 'http://s2.reutersmedia.net/resources/r/?m=02&d=20181025&t=2&i=1318543827&r=LYNXNPEE9O16B&w=1200',
            description: 'The main hospital within Saurimo, this location also includes the Centro Materno Infantil de Saurimo.',
            location: {
                center: [20.39212, -9.66001],
                zoom: 17.00,
                pitch: 51.00,
                bearing: -56.80
            },
            onChapterEnter: [{
                layer: 'Saurimo Color Health',
                opacity: 0.65
            }],
            onChapterExit: [{
                layer: 'Saurimo Color Health',
                opacity: 0
            }],
        },

        {
            id: 'HOS-Mulombe',
            title: 'Centro de Saude Mulombe',
            image: 'https://live.staticflickr.com/1943/31203198868_01b23c0821_b.jpg',
            description: 'A health facility on the outside of the city. This center services a KP population.',
            location: {
                center: [20.39629, -9.69189],
                zoom: 16.68,
                pitch: 30.00,
                bearing: -16.32
            },
            onChapterEnter: [{
                layer: 'Saurimo Color Health',
                opacity: 0.65
            }, ],
            onChapterExit: [{
                layer: 'Saurimo Color Health',
                opacity: 0
            }, ]
        }
    ]
};
