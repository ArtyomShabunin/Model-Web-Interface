import React from 'react'
import {Background,
        ElectrifiedValve,
        TriangleBig,
        TriangleSmall} from '../svg'
import {viewBox,
        equipment,
        fedwater_primary_style,
        fedwater_secondary_style,
        fedwater_drain_style,} from './constants'

import './videogram.css'

const V80LAB00EN001 = () => {
  return (
    <svg
      id="80LAB00EN001"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}>

      <TriangleBig id="fedwater_primary" fill={fedwater_secondary_style.stroke} />

      <Background/>

      // Трубопровод питательной воды
      // Участок от деаэратора
      <path d="M1225 125 V 540 H 1195"
            style={fedwater_primary_style}/>
      // ПЭН-А
      <path d="M1195 540 V 400 H 140"
            style={fedwater_primary_style}/>
      // ПЭН-Б
      <path d="M1195 540 V 730 H 140 V 400"
            style={fedwater_primary_style}/>
      // Рециркуляция ПЭН-А
      <path d="M575 400 V 330 H 600 V 240 H 575 V 210 H 1115 V 125"
            style={fedwater_primary_style}/>
      <path d="M575 330 H 550 V 240 H 575"
            style={fedwater_primary_style}/>
      // Рециркуляция ПЭН-Б
      <path d="M505 730 V 660 H 530 V 570 H 505 V 405"
            style={fedwater_primary_style}/>
      <path d="M505 660 H 480 V 570 H 505"
            style={fedwater_primary_style}/>
      <path d="M505 395 V 180 H 1085 V 125"
            style={fedwater_primary_style}/>
      // Внутренняя рециркуляция ПЭН-А
      <path d="M785 400 L 730 370 V 260 H 1070 V 400"
            style={fedwater_secondary_style}/>
      // Внутренняя рециркуляция ПЭН-Б
      <path d="M785 730 L 750 700 V 590 H 1070 V 730"
            style={fedwater_secondary_style}/>

      // Обессоленная вода
      <path d="M1325 325 V 775 H 1130 V 730"
            style={fedwater_secondary_style}/>

      <path d="M1325 345 H 1230"
            style={fedwater_secondary_style}/>
      <path d="M1220 345 H 1105 V 400"
            style={fedwater_secondary_style}/>

      // Отбор ПВ из промступени ПЭН-А
      <path d="M785 400 V 540 H 610 V 725"
            style={fedwater_secondary_style}/>
      <path d="M610 735 V 880 H 1205"
            style={fedwater_secondary_style}
            marker-end="url(#fedwater_primary)"/>
      <path d="M725 540 V 585 H 640 V 540"
            style={fedwater_secondary_style}/>
      // Отбор ПВ из промступени ПЭН-Б
      <path d="M785 730 V 825 H 610"
            style={fedwater_secondary_style}/>
      <path d="M725 825 V 780 H 640 V 825"
            style={fedwater_secondary_style}/>
      // Впрыск в РОУ
      <path d="M1125 880 V 820 H 1205"
            style={fedwater_secondary_style}
            marker-end="url(#fedwater_primary)"/>

      // Байпас напорной задвижки ПЭН-А
      <path d="M340 400 V 355 H 260 V 400"
            style={fedwater_secondary_style}/>
      // Байпас напорной задвижки ПЭН-Б
      <path d="M275 730 V 685 H 195 V 730"
            style={fedwater_secondary_style}/>

      // ПВД
      <path d="M140 400 V 215 L 165 190 H 115 L 140 165 V 20"
            style={fedwater_primary_style}
            marker-end="url(#fedwater_primary)"/>
      <path d="M140 225 H 175 V 155 H 105 V 225 Z"
            style={equipment}/>

      // Байпас ПВД
      <path d="M140 355 H 240 V 95 H 140"
            style={fedwater_secondary_style}/>
      // Байпас задвижки перед ПВД
      <path d="M140 310 H 90 V 240 H 140"
            style={fedwater_secondary_style}/>

      // В коллектор опорожнения ПВД
      <path d="M365 400 V 450"
            style={fedwater_secondary_style}
            marker-end="url(#fedwater_primary)"/>
      <path d="M310 730 V 815"
            style={fedwater_secondary_style}
            marker-end="url(#fedwater_primary)"/>

      // Впрыск в БРОУ ВД
      <path d="M140 370 H 90"
            style={fedwater_secondary_style}
            marker-end="url(#fedwater_primary)"/>
      // На впрыски котла
      <path d="M140 70 H 260"
            style={fedwater_secondary_style}
            marker-end="url(#fedwater_primary)"/>

      // Дренаж на всасе ПЭН
      <path d="M1195 630 H 1275"
            style={fedwater_drain_style}
            marker-end="url(#fedwater_primary)"/>

      // Дренаж ПЭН-А
      <path d="M785 400 L 725 495 H 570"
            style={fedwater_drain_style}
            marker-end="url(#fedwater_primary)"/>
      // Дренаж ПЭН-Б
      <path d="M785 730 L 850 795 H 1005"
            style={fedwater_drain_style}
            marker-end="url(#fedwater_primary)"/>

      // Деаэратор
      // Контур
      <path d="M1127.5 15 H 1230 C 1280 20 1280 120 1230 125 H 1025 C 975 120 975 20 1025 15 Z"
            style={equipment}/>
      // Центральная линия
      <path d="M988 67.5 H 1267"
            style={equipment}/>
      // Деаэрационные устройства
      // Левое
      <path d="M1115 15 V 40 H 1085 V 15"
            style={equipment}/>
      <path d="M1110 15 V 35 H 1090 V 15"
            style={equipment}/>
      <path d="M1115 40 L 1110 35 M1085 40 L 1090 35"
            style={equipment}/>
      <path d="M1106 35 V 37.5 H 1094 V 35"
            style={equipment}/>
      // Правое
      <path d="M1140 15 V 40 H 1170 V 15"
            style={equipment}/>
      <path d="M1145 15 V 35 H 1165 V 15"
            style={equipment}/>
      <path d="M1140 40 L 1145 35 M1170 40 L 1165 35"
            style={equipment}/>
      <path d="M1149 35 V 37.5 H 1161 V 35"
            style={equipment}/>

    </svg>
  )
}

export default V80LAB00EN001
