import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  slide1: Slide = {
    path: '../../assets/img/arc3d.jpg',
    header: "Arc 3d",
    description: "here is Arc 3d",
    alt: 'Arc 3d'
  }
  slides: Slide[] = [
    {
      path: '../../assets/img/pipes.jpg',
      header: "Pipes",
      description: "here are pipes",
      alt: 'Pipes'
    },
    {
      path: '../../assets/img/boiler.jpg',
      header: "Boiler",
      description: "here is a boiler",
      alt: 'Boiler'
    }
  ]
  serviceAsideList: string[] = [
    'We provide valuation, study, renovation, and design services for the following types of facilities:',
    'Combined Heat and Power Plants',
    'Central Chilled Water Plants',
    'Central Heating Plants',
    'Power Generation Plants',
    'Industrial Manufacturing Facilities'
  ]
  serviceList: string[] = [
    'We provide the following services:'
    , 'Commissioning'
    , 'Emissions Control Studies and Design'
    , "Chilled Water Distribution System Evaluation, Study, and Design"
    , 'Steam and Condensate and Electric Distribution System Evaluation, Study, and Design'
    , 'Project Planning and Management'
    , 'Feasibility Studies'
    , 'Life-Cycle Cost Analysis'
    , 'Plant Maintenance Projects'
    , 'Utility Master Planning'
    , 'Energy Audits'
    , '3D and CAD Design and Laser Scanning'
  ]
}
