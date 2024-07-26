import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import worldGeoJson from '../assets/countries.geo.json'; // Adjust path as needed
import './MapChart.css'

const WorldMap = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (geo) => {
    setHovered(geo.properties.name);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (geo) => {
    console.log(geo.properties.name); // Log the name of the clicked country
  };

  const getColor = (name) => {
    if (name === hovered) return '#ff5722'; // Color for hovered country
    return '#b0bec5'; // Color for unhovered countries
  };

  return (
    <div className='MapChart-Container'>
      <ComposableMap
        projection="geoMercator"
        style={{ width: '80%', height: '50%',  }}
      >
        <Geographies geography={worldGeoJson}>
          {({ geographies }) => 
            geographies.map((geo) => {
              // Determine if the current geography is a country
              const isCountry = geo.properties.name;
              const fill = isCountry !== "Bermuda" ? getColor(geo.properties.name) : 'white'; // Ocean or other non-country areas

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(geo)} // Add click event handler
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' }
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Add annotations */}
        {worldGeoJson.features
          .filter(feature => feature.geometry.type === 'Point') // Adjust filter as needed
          .map((feature, index) => (
            <Annotation
              key={index}
              subject={feature.geometry.coordinates}
              dx={15}  // Adjust dx and dy as needed
              dy={-15}
            >
              <text
                x="0"
                textAnchor="middle"
                alignmentBaseline="middle"
                style={{ fontSize: 12, fill: '#333' }}
              >
                {feature.properties.name}
              </text>
            </Annotation>
          ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
