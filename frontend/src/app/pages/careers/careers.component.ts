import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/reuse/card/card.component';
import { Position } from '../../models/position';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent extends CardComponent {

  posit: Position[] = [
    {
      type: 'Senior Mechanical Engineer',
      header: `PRVN Consultants, Inc. is seeking a Senior Mechanical Engineer, P.E., with 5+ years’ experience to add to our team. The position includes execution and supervision of detail-oriented mechanical engineering design projects in a consulting environment for the industrial, institutional, and utility sectors. Projects include steam turbine, steam and hot water boiler, power generation, combined heat and power, central chilled water and standby generation plants, campus-type utility distribution systems, industrial/process facilities, and more. The successful candidate will be a highly motivated leader, knowledgeable, enthusiastic, organized, flexible, and share our company values of exceeding customer expectations as part of a talented team of professionals.`,
      descriptions: [`Responsible for project deliverables including:`,
        `Leading projects from proposal generation through design to final delivery.`,
        `Working with a team of both junior and experienced Engineers and Designers to deliver detail-oriented mechanical engineering
        design projects. The role will include management, supervisory, and execution responsibilities.`,
        `Knowledge of boilers, chillers, steam turbines, gas turbines, engine generators, pumps, high-temperature hot water and steam
        piping distributions systems, and chilled water distribution systems.`,
        `Plant design and layout for mechanical, process, and piping systems.`,
        `Preparation of engineering reports, project proposals, scope of work documentation, and construction documents.`,
        `Preparation of design calculations, technical documents, and drawings necessary for purchasing, manufacturing, and installation
        of mechanical systems.`,
        `Mechanical design of pressure vessels, process equipment, piping and steam systems, and boiler components.`,
        `Construction supervision, commissioning, and field supervision of mechanical equipment installation.`,
        `Vendor equipment specification and selection.`,
        `Leadership, communication, and strong customer relationship skills are essential.`],
      benefit: `Salary is above industry average. Excellent benefits include flexible and casual work environment, including optional four 10-hour-day work weeks; health, eye, and dental insurance coverage; 401k; and eligible for generous profit-sharing program. Range is based on applicant qualifications.`,
      skills: [
        `We are seeking candidates that possess some or all of the following skills:`,
        `Bachelor of Science degree in Mechanical Engineering.`,
        `Professional Engineer is a plus.`,
        `Piping design and stress analysis including familiarity with ASME B31.1 code.`,
        `Pressure vessel design to ASME VIII Div.1 and Div.2.`,
        `PFD and P&ID development.`]
    },
    {
      type: 'Senior Electrical Engineer',
      header: `PRVN Consultants, Inc. is seeking a Senior Electrical Engineer, P.E., with 5+ years’ experience to add to our team. The position includes execution and supervision of detail-oriented electrical engineering design projects in a consulting environment for the industrial, institutional, and utility sectors. Projects include steam turbine, steam and hot water boiler, power generation, combined heat and power, central chilled water and standby generation plants, campus-type utility distribution systems, industrial/process facilities, and more.The successful candidate will be a highly motivated leader, knowledgeable, enthusiastic, organized, flexible, and share our company values of exceeding customer expectations as part of a talented team of professionals.`,
      skills: [
        `We are seeking candidates that possess some or all of the following skills:`,
        `Bachelor of Science degree in Electrical Engineering.`,
        `Professional Engineer is a plus.`,
        `Experience and knowledge in controls (process safety and controls strategies, DCS, Allen Bradley PLCs, Siemens PLCs, I/O
  counts, instrument sizing and specifications, functional descriptions, automation and controls, operator control panels / HMI).`,
        `Experience and knowledge in power distribution for high-, medium- and low-voltage schematics, wiring diagrams, one-lines,
  equipment arrangements, and lighting design.`,
        `P&ID development.`
      ],
      benefit: `Salary is above industry average. Excellent benefits include flexible and casual work environment, including optional four 10-hour-day work weeks; health, eye, and dental insurance coverage; 401k; and eligible for generous profit-sharing program. Range is based on applicant qualifications.`,
      descriptions: [
        `Responsible for project deliverables including:`,
        `Leading electrical design for projects from proposal generation through design to final delivery.`,
        `Working with a team of both junior and experienced Engineers and Designers to deliver detail- oriented engineering design
  projects.The role will include management, supervisory, and execution responsibilities.`,
        `Install or modify new or existing equipment used to monitor and control engineering systems, machinery, and processes.`,
        `Design and develop new control systems(platforms vary but experience with Allen Bradley and Siemens PLCs and modern and
legacy DCS systems is required).`,
        `Develop and maintain instrument lists / databases schematics, wiring diagrams, one - lines, equipment arrangements, and lighting
design.`,
        `Preparation of engineering reports, project proposals, scope of work documentation, and bid packages.`,
        `Preparation of design calculations, technical documents, and drawings necessary for purchasing, manufacturing, and installation
 of electrical systems.`,
        `Construction supervision, commissioning, and field supervision of electrical equipment installation.`,
        `Vendor equipment specification and selection.`,
        `Leadership, communication, and strong customer relationship skills are essential.`
      ]
    },
    {
      type: 'Senior Structural Engineer',
      header: `PRVN Consultants, Inc. is seeking a Senior Structural Engineer, P.E., S.E., with 5+ years’ experience to add to our team. The position includes execution and supervision of detail-oriented structural engineering design projects in a consulting environment for the industrial, institutional, and utility sectors. Projects include steam turbine, steam and hot water boiler, power generation, combined heat and power, central chilled water and standby generation plants, campus-type utility distribution systems, industrial/process facilities, and more.The successful candidate will be a highly motivated leader, knowledgeable, enthusiastic, organized, flexible, and share our company values of exceeding customer expectations as part of a talented team of professionals.`,
      skills: [
        `We are seeking candidates that possess some or all of the following skills:`,
        `Bachelor of Science degree in Structural Engineering.`,
        `Professional Engineer license in Iowa or the ability for immediate licensure in Iowa.`,
        `5+ years of structural engineering experience in the design, modification, and evaluation of building and non-building structures in a variety of project types.`,
        `Knowledge of structual design using steel, concrete, wood, and masonry`,
        `Experience with RISA structural analysis programs AutoCAD and Revit preferred`,
        `Must have previous experience developing and managing client relations`
      ],
      benefit: `Salary is above industry average. Excellent benefits include flexible and casual work environment, including optional four 10-hour-day work weeks; health, eye, and dental insurance coverage; 401k; and eligible for generous profit-sharing program. Range is based on applicant qualifications.`,
      descriptions: ['']
    }
  ]

}
