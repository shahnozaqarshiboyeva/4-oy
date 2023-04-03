import React, { useState } from "react";
function TabHeader() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [imageNames, symbol_title] = useState([...symbol_title]);
  const [isShaking, setIsShaking] = useState(false);

  const handleTabClick = index => {
    setSelectedTab(index);
  };

  const handleImageClick = symbol_title => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 1000);
  };

  const imageTabs = imageNames.map((name, index) => (
    <div
      key={index}
      className={selectedTab === index ? "tab active" : "tab"}
      onClick={() => handleTabClick(index)}
    >
      {name}
    </div>
  ));

  const imageElements = imageNames.map((name, index) => (
    <img
      key={index}
      src={name}
      alt="header-img"
      className={index === selectedTab ? "image active" : "image"}
      onClick={() => handleImageClick(name)}
    />
  ));

  return (
    <div>
      <div className="tabs-container">{imageTabs}</div>
      <div className={`image-container ${isShaking && "shake"}`}>
        {imageElements}
      </div>
      <h1>{imageNames[selectedTab]}</h1>
    </div>
  );
}

export default TabHeader;

