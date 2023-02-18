const questions = [
    [
        {
            category: "Site Sustainability",
            question: "In the building you want to apply the rainwater management system by?",
            answers: [
                {
                    text: "rainwater redirection strategy",
                    cost: 0,
                    point: 0.5,
                    img: "1_1_1.png"
                },
                {
                    text: "site infiltration paving with not connected tiles with gravel joints open-graded aggregate systems to the ground groundwater recharge",
                    cost: -6,
                    point: 0.5,
                    img: "1_1_2.png"
                },
                {
                    text: "open grid paving systems to storage tanks Use in building water supply system",
                    cost: -19000,
                    point: 0.5,
                    img: "1_1_3.png"
                }
            ],
            isMultiSelect: false,
            color: "#8497B0"
        },
        {
            category: "Site Sustainability",
            question: "In the building you want to apply more features from Site Sustainability category chose one or more?",
            answers: [
                {
                    text: "A management strategy is created by a qualified Environmental Professional to ensure the survival and enhancement of the natural landscape",
                    cost: -26000,
                    point: 1,
                    img: "1_2_1.jpg"
                },
                {
                    text: "The three-year aged Solar Reflectance Index (SRI) values of the hardscape, shade structures and roofs meet the requirement",
                    cost: -5500,
                    point: 1,
                    img: "1_2_2.png"
                },
                {
                    text: "following the light and glare standards values in requirement",
                    cost: -1300,
                    point: 1,
                    img: "1_2_3.png"
                }
            ],
            isMultiSelect: true,
            color: "#8497B0"
        },
        {
            category: "Site Sustainability",
            question: "In the building you want to covering the unused roof area and/or structures used for shading by vegetative surface?",
            answers: [
                {
                    text: "covering with an extensive green roof type",
                    cost: 6000,
                    point: 1,
                    img: "1_3_1.png"
                },
                {
                    text: "covering with a Bisolar roof green roof type",
                    cost: 13000,
                    point: 1,
                    img: "1_3_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#8497B0"
        }
    ],
    [
        {
            category: "Transportation and Connectivity",
            question: "In the building you want to install an electric vehicle supply equipment?",
            answers: [
                {
                    text: "Electric Vehicle Supply Equipment (Phoenix Contact)",
                    cost: -750000,
                    point: 1,
                    img: "2_1_1.png"
                },
                {
                    text: "Electric Vehicle Supply Equipment (BESENERGY EV)",
                    cost: -26000,
                    point: 1,
                    img: "2_1_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#70919A"

        },
        {
            category: "Transportation and Connectivity",
            question: "In the building you want to have a separate home office/study?",
            answers: [
                {
                    text: "In case of replacing the use of one of the bedrooms to an office",
                    cost: 2000,
                    point: 1,
                    img: "2_2_1.jpg"
                },
                {
                    text: "An area of a room that has been separated by gypsum boards with an area of 15 square meters",
                    cost: -6000,
                    point: 1,
                    img: "2_2_2.jpg"
                }
            ],
            isMultiSelect: false,
            color: "#70919A"
        },
        {
            category: "Transportation and Connectivity",
            question: "Do you want to have a fully shaded parking area for a bicycle?",
            answers: [
                {
                    text: "shaded bicycle parking floor stand type",
                    cost: -1600,
                    point: 0.5,
                    img: "2_3_1.png"
                },
                {
                    text: "shaded bicycle parking wall hanger type",
                    cost: -2000,
                    point: 0.5,
                    img: "2_3_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#70919A"
        },
    ],
    [
        {
            category: "Region and Culture",
            question: "Do you want to design the building harmoniously aligns with the local cultural and regional identities and traditions?",
            answers: [
                {
                    text: "Islamic geometric motifs on the building façade Architectural patterns",
                    cost: -20000,
                    point: 2,
                    img: "3_1_1.jpg"
                },
                {
                    text: "Interior courtyards naturally lit and shaded",
                    cost: 0,
                    point: 2,
                    img: "3_1_2.png"
                }
            ],
            isMultiSelect: true,
            color: "#B0C9C8"
        }
    ],
    [
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "Two wall system (improvement 6.78%)",
                    cost: 280000,
                    point: 1,
                    img: "4_1_1.png"
                },
                {
                    text: "lightweight aerated concrete AAC wall (improvement 5.88 %)",
                    cost: 5900,
                    point: 1,
                    img: "4_1_2.jpg"
                },
                {
                    text: "Exterior Green Vertical Landscaping Facades- Intensive Green Walls Types- (improvement 3.03 %)",
                    cost: -300,
                    point: 0.5,
                    img: "4_1_3.png"
                },
            ],
            isMultiSelect: false,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "High insulation roof  layers (improvement 4.7%)",
                    cost: 5800,
                    point: 1,
                    img: "4_2_1.png"
                },
                {
                    text: "Cool Roof Use Highly Reflective Coatings on Roofs (improvement 2 %)",
                    cost: 46000,
                    point: 0.5,
                    img: "4_2_2.png"
                }
            ],
            isMultiSelect: true,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "Low-E glass coating Window (improvement 0.35%)",
                    cost: 7500,
                    point: 0.5,
                    img: "4_3_1.jpg"
                },
                {
                    text: "Argon gas filled windows in triple Pane Window with Low-E glass coating (improvement 1.25 %)",
                    cost: 10000,
                    point: 1,
                    img: "4_3_2.jpg"
                },
                {
                    text: "Electric shutter (improvement 0.53 %)",
                    cost: -1200,
                    point: 0.5,
                    img: "4_3_3.png"
                }
            ],
            isMultiSelect: false,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "One External Light Shelve (improvement 0.86%)",
                    cost: 10000,
                    point: 0.5,
                    img: "4_4_1.jpg"
                },
                {
                    text: "(improvement 0.74 %) the Daylight Light Shelve",
                    cost: 21000,
                    point: 0.5,
                    img: "4_4_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "adding a motion-sensitive lighting  methods in (entrance, stairs, bathrooms, dressing rooms)(improvement 3.90%)",
                    cost: 46000,
                    point: 1,
                    img: "4_5_1.png"
                },
                {
                    text: "Arrange light switches according to window opening by distributed lighting fixtures to more than one switch in the sunlight level that entering room (improvement 0.85 %)",
                    cost: 26000,
                    point: 0.5,
                    img: "4_5_2.png"
                },
                {
                    text: "thermal insulation of all pipelines with fiberglass  (improvement 0.5 %)",
                    cost: 200,
                    point: 0.5,
                    img: "4_5_3.png"
                }
            ],
            isMultiSelect: true,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "Installing outdoor lighting units based on the solar energy (improvement 0.3 %)",
                    cost: 500,
                    point: 0.5,
                    img: "4_6_1.png"
                },
                {
                    text: "Installing outdoor Motion sensors lighting (improvement 0.27%)",
                    cost: 800,
                    point: 0.5,
                    img: "4_6_2.png"
                },
                {
                    text: "Using Technologies GE CYNC Smart Thermostat and Humidity Sensor (improvement 3%)",
                    cost: 18,
                    point: 0.5,
                    img: "4_6_3.png"
                }
            ],
            isMultiSelect: true,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to applay features that reduce energy consumption?",
            answers: [
                {
                    text: "Yellow (D) efficiency AC  (13.0>EER>11.8)(improvement 12.90 %)",
                    cost: 9700,
                    point: 2,
                    img: "4_7_1.jpg"
                },
                {
                    text: "light green (B) efficiency AC (16.5>EER>14.5)(improvement 24%)",
                    cost: -38000,
                    point: 3,
                    img: "4_7_2.jpg"
                }
            ],
            isMultiSelect: false,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building you want to apply more features from Energy category chose one or more?",
            answers: [
                {
                    text: "Make sure that all systems and controls have been installed, and are operating, as intended by the commissioning certificates list of installed in the MOSTADAM Guide",
                    cost: 1300,
                    point: 1,
                    img: "4_8_1.png"
                },
                {
                    text: "A competent professional is retained to oversee basic building envelope verification",
                    cost: 2400,
                    point: 0.5,
                    img: "4_8_2.jpg"
                },
                {
                    text: "The building envelope is tested for condensation, water ingress, air infiltration and thermal bridging to ensure performance is as designed and in accordance with standards and has a pre-testing certificate.",
                    cost: 4500,
                    point: 0.5,
                    img: "4_8_3.jpg"
                }
            ],
            isMultiSelect: true,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building you want to apply more features from Energy category chose one or more?",
            answers: [
                {
                    text: "A metering strategy is created and implemented which monitors the building's energy usage and conforms to SBC 1001 Chapter 6.",
                    cost: 0,
                    point: 1,
                    img: "4_9_1.jpg"
                },
                {
                    text: "All relevant electrical appliances have an energy efficiency label from the Saudi standards",
                    cost: 6900,
                    point: 1,
                    img: "4_9_2.jpg"
                },
                {
                    text: "All refrigerants, fire suppression systems and maintenance gases installed and used within the project boundary have an ODP of zero.",
                    cost: 0,
                    point: 1,
                    img: "4_9_3.jpg"
                }
            ],
            isMultiSelect: true,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to have Solar hot water (SHW) panels that specified and installed to provide a minimum percentage of hot water demand?",
            answers: [
                {
                    text: "Solar hot water panels provide 30% of hot water demand",
                    cost: 800,
                    point: 1,
                    img: "4_10_1.png"
                },
                {
                    text: "Solar hot water panels provide 50% of hot water",
                    cost: 1400,
                    point: 2,
                    img: "4_10_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#F1EA92"
        },
        {
            category: "Energy",
            question: "In the building do you want to generate electricity by photovoltaic (PV) that is installed onsite and provide a percentage of the total annual building energy demand?",
            answers: [
                {
                    text: "PV panels achieve 4% of the renewable energy generated",
                    cost: -600,
                    point: 1,
                    img: "4_11_1.jpg"
                },
                {
                    text: "PV panels achieve 25% of the renewable energy generated",
                    cost: -3700,
                    point: 5,
                    img: "4_11_2.jpg"
                }
            ],
            isMultiSelect: false,
            color: "#F1EA92"
        },
    ],
    [
        {
            category: "Water",
            question: "Do you want to reduction the indoor water in the building compared to minimum performance levels?",
            answers: [
                {
                    text: "reduction 10% of indoor water consumption",
                    cost: 600,
                    point: 3,
                    img: "5_1_1.png"
                },
                {
                    text: "reduction 45% of indoor water consumption",
                    cost: 10000,
                    point: 10,
                    img: "5_1_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#71A3D0"
        },
        {
            category: "Water",
            question: "Do you want to reduction the Outdoor water in the building compared to minimum performance levels?",
            answers: [
                {
                    text: "Reduces 50% by returning to landscape design professionals to plan irrigation areas and use automatic Micro Drip Irrigation System that connecting to the rain and surplus water collection tank",
                    cost: -2000,
                    point: 2,
                    img: "5_2_1.png"
                },
                {
                    text: "Reduces 80% by use Central Reverse Osmosis System Station as an irrigation Source",
                    cost: -23000,
                    point: 5,
                    img: "5_2_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#71A3D0"
        },
        {
            category: "Water",
            question: "Do you want to make the irrigation system controlled by smart controllers and / or soil moisture sensors to water reduces?",
            answers: [
                {
                    text: "use soil moisture sensors in irrigation",
                    cost: -1500,
                    point: 2,
                    img: "5_3_1.png"
                },
                {
                    text: "use soil moisture sensors and smart controllers in irrigation",
                    cost: -1400,
                    point: 2,
                    img: "5_3_2.png"
                }
            ],
            isMultiSelect: false,
            color: "#71A3D0"
        },
        {
            category: "Water",
            question: "In the building you want to apply more features from Water category chose one or more?",
            answers: [
                {
                    text: "There are no turfed areas within the project boundary",
                    cost: 18000,
                    point: 2,
                    img: "5_4_1.png"
                },
                {
                    text: "Air conditioning water condensate",
                    cost: -3600,
                    point: 1,
                    img: "5_4_2.png"
                }
            ],
            isMultiSelect: true,
            color: "#71A3D0"
        },
        {
            category: "Water",
            question: "In the building you want to apply more features from Water category chose one or more?",
            answers: [
                {
                    text: "<b>Graywater recycling</b> Graywater from showers, sinks, washing machines and dishwashers is collected and recycled to be used on-site for WC flushing or irrigation.",
                    cost: -48000,
                    point: 1,
                    img: "5_5_1.jpg"
                },
                {
                    text: "<b>Treated wastewater</b> At least 50% of wastewater is treated on-site and infiltrated or used on-site for irrigation.",
                    cost: -8600,
                    point: 1,
                    img: "5_5_2.png"
                }
            ],
            isMultiSelect: true,
            color: "#71A3D0"
        },
    ],
    [
        {
            category: "Health and Comfort",
            question: "In the building you want to apply more features from Health and Comfort category chose one or more ?",
            answers: [
                {
                    text: "Daylight and Artificial Lighting illuminance targets specified in the Supporting Guidance are achieved",
                    cost: 19000,
                    point: 1,
                    img: "6_1_1.png"
                },
                {
                    text: "have views and manual glare control are installed on all windows",
                    cost: 200,
                    point: 1,
                    img: "6_1_2.png"
                },
                {
                    text: "have views and automated glare-control devices are installed on all windows",
                    cost: -500,
                    point: 1,
                    img: "6_1_3.png"
                }
            ],
            isMultiSelect: true,
            color: "#DDB3F3"
        },
        {
            category: "Health and Comfort",
            question: "In the building you want to have a comfort zone of acoustics and indoor air quality?",
            answers: [
                {
                    text: "field test reports obtained from the specialist audio engineer to make sure the Internal ambient noise levels are less than 35 to 40dB(A)",
                    cost: -200,
                    point: 1,
                    img: "6_2_1.png"
                },
                {
                    text: "Indoor Air Quality (IAQ) Testing",
                    cost: -3000,
                    point: 0.5,
                    img: "6_2_2.jpg"
                },
            ],
            isMultiSelect: true,
            color: "#DDB3F3"
        },
        {
            category: "Health and Comfort",
            question: "For building tightening the envelope the external doors for all building types are weather-stripped?",
            answers: [
                {
                    text: "the external doors draft stopper under door seal (v shape) types",
                    cost: -300,
                    point: 0.5,
                    img: "6_3_1.png"
                },
                {
                    text: "the external doors draft stopper under door seal (PVC rubber) types",
                    cost: -100,
                    point: 0.5,
                    img: "6_3_2.png"
                },
            ],
            isMultiSelect: false,
            color: "#DDB3F3"
        },
        {
            category: "Health and Comfort",
            question: "In the building you want to apply more features from Health and Comfort category chose one or more?",
            answers: [
                {
                    text: "Front Entrance shading",
                    cost: -400,
                    point: 1,
                    img: "6_4_1.png"
                },
                {
                    text: "Courtyards/ patios shading cover",
                    cost: -2000,
                    point: 1,
                    img: "6_4_2.png"
                },
                {
                    text: "shading the walkways paths",
                    cost: -9600,
                    point: 1,
                    img: "6_4_3.jpg"
                },
            ],
            isMultiSelect: true,
            color: "#DDB3F3"
        },
        {
            category: "Health and Comfort",
            question: "In the building you want to apply more features from Health and Comfort category chose one or more?",
            answers: [
                {
                    text: "Purchase orders for all (adhesives, Sealants, Paints and Coatings) do not exceed the VOC limits of (SCAQMD)",
                    cost: -2080,
                    point: 1,
                    img: "6_5_1.jpg"
                },
                {
                    text: "All internal composite wood materials and Suspended Ceiling Systems have maximum formaldehyde emissions as per the Supporting Guidance.",
                    cost: 1400,
                    point: 1,
                    img: "6_5_2.jpg"
                },
                {
                    text: "The design of the building complies with the requirements of the Lifetime Homes standard In to make building Access for All",
                    cost: -72500.88,
                    point: 1,
                    img: "6_5_3.png"
                },
            ],
            isMultiSelect: true,
            color: "#DDB3F3"
        },

    ],
    [
        {
            category: "Materials and Waste",
            question: "In the bulding do you want to apply construction and demolition waste management plan (CDMP)?",
            answers: [
                {
                    text: "Have a Contractor develops a construction and demolition waste management plan (CDWMP)",
                    cost: -7000,
                    point: 0.5,
                    img: "7_1_1.jpg"
                },
                {
                    text: "monthly monitoring of the CDWMP",
                    cost: -6000,
                    point: 0.5,
                    img: "7_1_2.jpg"
                }
            ],
            isMultiSelect: true,
            color: "#638C64"
        },
        {
            category: "Materials and Waste",
            question: "In the building you want to have a features from Materials and Waste category chose one or more?",
            answers: [
                {
                    text: "A minimum of 50% of all reinforcing or stressing steel used within the project boundary has a minimum of 80% post- consumer or pre-consumer recycled content.",
                    cost: 700,
                    point: 1,
                    img: "7_2_1.jpg"
                },
                {
                    text: "A minimum of 15% of all aggregates used on site are recycled aggregates.",
                    cost: -3200,
                    point: 1,
                    img: "7_2_2.jpg"
                },
            ],
            isMultiSelect: true,
            color: "#638C64"
        }
    ],
    [
        {
            category: "Education and Innovation",
            question: "  In the bulding do you want to adopte an innovative design or construction solution that improves the durability or flexibility of the building or reduces maintenance requirements?",
            answers: [
                {
                    text: "An innovative design or environmentally friendly product",
                    cost: -4600,
                    point: 2,
                    img: "8_1_1.png"
                },
                {
                    text: "sustainable innovation in the building structure or in the hydraulic or smart systems",
                    cost: -58000,
                    point: 2,
                    img: "8_1_2.jpg"
                }
            ],
            isMultiSelect: false,
            color: "#C9A77E"
        }
    ],
    [
        {
            category: "Policies, Management and Maintenance",
            question: "In the building you want to have a features from Policies, Management and Maintenance category chose one or more?",
            answers: [
                {
                    text: "Residential Waste Management by Recycling bins",
                    cost: -600,
                    point: 0.5,
                    img: "9_1_1.jpg"
                },
                {
                    text: "Residential Waste Management by Recycling waste sorting bag",
                    cost: -22,
                    point: 0.5,
                    img: "9_1_2.png"
                },
                {
                    text: "Smart meters and digital feedback systems are installed which configure and display energy and water usage data",
                    cost: 0,
                    point: 0,
                    img: "9_1_3.png"
                }
            ],
            isMultiSelect: true,
            color: "#5F7256"
        }
    ],
]

export default questions