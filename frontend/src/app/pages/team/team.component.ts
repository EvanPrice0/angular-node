import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/images';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  images: Images[] = [
    {
      path:
      [
        'assets/img/russ.jpg',
      ],
      header: 'P. Russell Price, P.E., President –',
      body: [
      `Professional experience since 1989,`,
      `Technical responsibilities include conceptual and detailed design; economic and technical feasibility,
      studies; design, layout, and specification of power, heating, and chiller plant equipment; and institutional,
      plants. Project experience includes completing these tasks for power plants, district energy systems (central,
      heating and cooling, combined heat and power, etc.), and utility distribution systems. Russ is responsible for,
      evaluating, selecting, and applying standard design engineering techniques, procedures, and criteria to execute,
      and design for the project. This includes the application of NFPA 85 for boiler combustion controls and burner,
      management and ASME Boiler and Pressure Vessel Code to a variety of projects. In addition, Russ has experience,
      interpreting and applying RCRA hazardous waste disposal requirements.,`,
      `Project experience also includes project management and design services for modifications to mission-critical ,
      utility services on an emergency basis and developing plans to minimize or avoid disruptions to plant operations.,
      Russ’ experience also includes a number of retainer contracts for utility-type services.,`
      ]
    },
    {
      path:
      [
        'assets/img/kevin.jpg',
      ],
      header: 'Kevin C. Voss, P.E., Principal Electrical Engineer –',
      body: [
      `Professional experience since 2001`,
      `Kevin is very experienced with electrical design and project management for utility power plants, central chilled water plants, campus boiler plants, and power distribution systems for private and public clients. Design experience includes preparation of economic and technical feasibility studies, preparation of detailed electrical system analyses (load flow, protection relay coordination studies, short-circuit studies, arc flash analysis), preparation of power system configuration design, and preparing and reviewing design drawings. Project management experience includes power distribution, back-up generation and controls, protection relaying upgrades, short-circuit and protection relay coordination projects, and campus power distribution and plant projects.`,
      `Power distribution experience includes utility power plant power generation and distribution systems through chilled water plant design projects with equipment ranging from 15kV and 5kV power distribution switchgear, 480V substations and switchgear, motor control centers, and low-voltage distribution equipment. Kevin has detailed design the power distribution systems for large coal-fired utility power plants with plan auxiliary loads in excess of 30MW. Equipment design experience includes large motor installation design up to 13.8kV, 12,000 HP machines, and station class stepdown transformers up to 75MVA at 13.8kV and generator step-up unit (GSU) transformers up to 465MVA. During Kevin’s tenure, he has designed, oversaw installation, and startup services of more than 15 lineups of 5kV and 15kV metal-clad, medium-voltage switchgear.`,
      `Control systems experience includes specifying and designing distributed control systems (DCS), development of input/output (I/O) lists, development of control system descriptions, and coordinating with system integrator. Hardware experience includes Allen-Bradley ControlLogix, ABB Infi90 and Symphony DCS systems, OSISoft PI historians, DeltaV DCS systems, Schweitzer Engineering Labs (SEL) platforms, and other various equipment suppliers. Protection relaying experience includes installation, testing, and programming of Schweitzer Electric Labs (SEL), GE Mutlilin, Beckwith, and Basler protection relays.`,
      `Kevin possesses extensive experience in medium- (18kV and below) and low-voltage power generation and distribution systems and equipment.  All these projects included modifications or additions to power distribution systems as well as integration of generator controls into plant SCADA systems. Kevin has considerable experience in interconnecting medium-voltage generation directly into a medium-voltage distribution systems.`,
      `Generation experience includes the design and construction support of two (2) 300MW large steam turbine generators down to 600kW diesel engine generators. Past experience includes design for small and large combustion turbine installations.`  
    ]
    },
    {
      path:
      [
        'assets/img/jim.jpg',
      ],
      header: 'James J. Nonnenmann, P.E., Vice President –',
      body: [
      `Professional experience since 1999`,
      `Technical responsibilities include preparation of economic and technical feasibility studies, including development of CHP energy and cost dispatch models for a variety of fuels, equipment types, and CHP systems; preparation of conceptual and detailed design documents; preparation of and checking mechanical computations; preparation of and reviewing technical specifications; and preparation of and reviewing design drawings. Project experience includes completing these tasks for district energy systems (CHP, central heating and cooling, etc.), utility distribution systems, power generation systems, and supporting facility mechanical systems. He is responsible for evaluating, selecting, and applying standard design engineering techniques, procedures, and criteria to execute and design the project. Technical and economic feasibility studies have included calculation of net present value (NPV) and return on investment (ROI) for life-cycle costs technical options considered.`,
      `Project experience also includes project management and design services for constructing new standalone and satellite district energy plants, modifying mission-critical utility services, and developing detailed plans to minimize or avoid disruptions to utility services and plant operations. Jim’s experience includes many utility-type projects. These projects include coal-fired and gas-/oil-fired power plants, central heating plants, central chilled water plants of a large range of sizes and complexity, and utility distribution (steam, condensate, chilled water, hot water, and compressed air).`,
      `
      Jim was the project manager (while working for a former employer) for the design and construction services for the “Largest Chilled Water Plant in the World” in Doha, Qatar. This project featured a 130,000-ton central chilled water plant serving the cooling needs for a manmade island in the Persian Gulf. Included with the plant was a 15,000 cubic meter per day reverse osmosis plant to provide a portion of the makeup water needed for plant operations.`,
      `Jim is the past president and is a member of the Mississippi Valley Chapter of the American Society of Heating, Refrigerating, and Air-Conditioning Engineers and is a member of the Iowa Engineering Society. He was recognized in 2009 with Consulting-Specifying Engineer’s 40 Under 40 award.`,
    ]
    },
  ]
}
