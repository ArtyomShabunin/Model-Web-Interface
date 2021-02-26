import React from 'react'
import {Background,
        ElectrifiedValve,
        CheckValve,
        TriangleBig,
        TriangleSmall,
        Throttle,
        Filter,
        Pump} from '../svg'
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
      <path d="M810 730 L 750 700 V 590 H 1095 V 730"
            style={fedwater_secondary_style}/>

      // Обессоленная вода
      <path d="M1325 325 V 775 H 1130 V 730"
            style={fedwater_secondary_style}
            marker-start="url(#fedwater_primary)"/>
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
      <path d="M810 730 V 825 H 610"
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
      <path d="M810 730 L 850 795 H 1005"
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

      // Обратный клапан на рециркуляции ПЭН-А
      <CheckValve id="80LAB13AA401" x={900} y={210} rotation={0} scale={20/65} />
      // Обратный клапан на рециркуляции ПЭН-Б
      <CheckValve id="80LAB23AA401" x={900} y={180} rotation={0} scale={20/65} />
      // Обратные клапаны на трубопроводах обессоленной воды
      <CheckValve id="80GHC91AA401" x={1170} y={345} rotation={180} scale={20/65} />
      <CheckValve id="80GHC92AA401" x={1200} y={775} rotation={180} scale={20/65} />
      // Обратный клапан на отборе из промступени ПЭН-А
      <CheckValve id="80LAF11AA401" x={785} y={470} rotation={90} scale={20/65} />
      // Обратный клапан на отборе из промступени ПЭН-Б
      <CheckValve id="80LAF21AA401" x={810} y={785} rotation={90} scale={20/65} />
      // Обратный клапан на напоре ПЭН-А
      <CheckValve id="80LAB12AA401" x={400} y={400} rotation={180} scale={20/65} />
      // Обратный клапан на напоре ПЭН-Б
      <CheckValve id="80LAB22AA401" x={340} y={730} rotation={180} scale={20/65} />

      // Электрифицированная задвижка на всасе ПЭН-А
      <ElectrifiedValve id="80LAB11AA101" x={1165} y={400} rotation={0} scale={20/65}/>
      // Электрифицированная задвижка на всасе ПЭН-Б
      <ElectrifiedValve id="80LAB21AA101" x={1165} y={730} rotation={0} scale={20/65}/>
      // Электрифицированная задвижка на напоре ПЭН-А
      <ElectrifiedValve id="80LAB12AA101" x={300} y={400} rotation={0} scale={20/65}/>
      // Электрифицированная задвижка на напоре ПЭН-Б
      <ElectrifiedValve id="80LAB22AA101" x={235} y={730} rotation={0} scale={20/65}/>
      // Электрифицированная задвижка на байпасе напорной задвижки ПЭН-А
      <ElectrifiedValve id="80LAB12AA102" x={300} y={355} rotation={0} scale={20/65}/>
      // Электрифицированная задвижка на байпасе напорной задвижки ПЭН-Б
      <ElectrifiedValve id="80LAB22AA102" x={235} y={685} rotation={0} scale={20/65}/>
      // Задвижка перед ПВД
      <ElectrifiedValve id="80LAB30AA101" x={140} y={275} rotation={90} scale={20/65}/>
      // Задвижка на байпасе перед ПВД
      <ElectrifiedValve id="80LAB30AA102" x={90} y={275} rotation={90} scale={20/65}/>
      // Задвижка за ПВД
      <ElectrifiedValve id="80LAB40AA101" x={140} y={120} rotation={90} scale={20/65}/>
      // Задвижка на байпасе ПВД
      <ElectrifiedValve id="80LAB31AA101" x={240} y={215} rotation={90} scale={20/65}/>
      // Задвижки на рециркуляции ПЭН-А
      <ElectrifiedValve id="80LAB13AA101" x={600} y={300} rotation={90} scale={20/65}/>
      <ElectrifiedValve id="80LAB13AA102" x={550} y={300} rotation={90} scale={20/65}/>
      // Задвижки на рециркуляции ПЭН-Б
      <ElectrifiedValve id="80LAB23AA101" x={530} y={630} rotation={90} scale={20/65}/>
      <ElectrifiedValve id="80LAB23AA102" x={480} y={630} rotation={90} scale={20/65}/>
      // Задвижки на трубопроводе от промступени ПЭН-А
      <ElectrifiedValve id="80LAF11AA101" x={700} y={540} rotation={0} scale={20/65}/>
      <ElectrifiedValve id="80LAF11AA102" x={700} y={585} rotation={0} scale={20/65}/>
      // Задвижки на трубопроводе от промступени ПЭН-А
      <ElectrifiedValve id="80LAF21AA101" x={685} y={825} rotation={0} scale={20/65}/>
      <ElectrifiedValve id="80LAF21AA102" x={685} y={780} rotation={0} scale={20/65}/>
      // Задвижки на дренаже ПЭН-А
      <ElectrifiedValve id="80LAB27AA101" x={640} y={495} rotation={0} scale={20/65}/>
      <ElectrifiedValve id="80LAB27AA102" x={605} y={495} rotation={0} scale={20/65}/>
      // Задвижки на дренаже ПЭН-Б
      <ElectrifiedValve id="80LAB28AA101" x={925} y={795} rotation={0} scale={20/65}/>
      <ElectrifiedValve id="80LAB28AA102" x={965} y={795} rotation={0} scale={20/65}/>
      // Ограничительная шайбы на внутренней рециркуляции ПЭН-А
      <Throttle id="80LAB25BP001" x={870} y={260} rotation={0} scale={30/65} />
      // Ограничительная шайбы на внутренней рециркуляции ПЭН-Б
      <Throttle id="80LAB26BP001" x={900} y={590} rotation={0} scale={30/65} />
      // Ограничительные шайбы на рециркуляции ПЭН-А
      <Throttle id="80LAB13BP001" x={600} y={270} rotation={90} scale={30/65} />
      <Throttle id="80LAB13BP002" x={550} y={270} rotation={90} scale={30/65} />
      // Ограничительные шайбы на рециркуляции ПЭН-Б
      <Throttle id="80LAB23BP001" x={530} y={600} rotation={90} scale={30/65} />
      <Throttle id="80LAB23BP002" x={480} y={600} rotation={90} scale={30/65} />
      // Фильтр на всасе ПЭН-А
      <Filter id="80LAB11AT001" x={1030} y={400} rotation={0} scale={30/65} />
      // Фильтр на всасе ПЭН-Б
      <Filter id="80LAB21AT001" x={1060} y={730} rotation={0} scale={30/65} />
      // ПЭН-А
      <Pump id="80LAC11AP001" x={785} y={400} rotation={0} scale={40/65} />
      // ПЭН-Б
      <Pump id="80LAC21AP001" x={810} y={730} rotation={0} scale={40/65} />

    </svg>
  )
}

export default V80LAB00EN001
