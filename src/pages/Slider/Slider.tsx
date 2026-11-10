import { useEffect, useRef } from "react";
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export const Slider = () =>{
    const slider = useRef('sl')
    //var slider = document.getElementById('slider');
    useEffect(()=>{
        if (slider.current['noUiSlider']) return;
        //@ts-ignore
        const oslider = noUiSlider.create(slider.current, {
            tooltips: false,
            start: [20, 40, 60],
            connect: [true, true, true, true],
            range: {
                'min': 0,
                'max': 100
            },
            step: 0.01,
            pips: {
                values: [25.123,59.1999,100.259,100.0199],
                mode: 'values',
                density: 100
            },
            round_type: '00.000'
        });
/* 

 $scope.analogSlider = {
      range: {
        min: +data.vmin,
        max: +data.vmax,
      },
      pips: {
        values: [+data.vmin, data.value, +data.vmax],
      },
      start: [data["low_alarm"], data["low_warning"], data["high_warning"], data["high_alarm"]],
      class: "multiple-range",
      valueClass: $scope.editedElement.color,
      type: "float",
      round_type: $scope.editedElement.round_type || "00.00"
    };
					scope.options.connect = scope.connect.slice(0, nv.start.length+1);
					scope.options.step = nv.type === 'int' ? 1 : 0.01; */
        console.log(slider.current)

        oslider.on('update', (v)=>{
            console.log('update',v);
        });

    },[])

    
    
    return (<div ref={slider} className="mt-50" ></div>);
}