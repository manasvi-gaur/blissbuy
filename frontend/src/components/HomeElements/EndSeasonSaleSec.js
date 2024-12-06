import React, { useState } from "react";
import EndSeasonCardLayout from "./EndSeasonCardLayout";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "react-bootstrap";
import { data } from "../Data/EndSeasonData";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";

export default function EndSeasonSaleSec() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
  };

  const slideprev = () => setActiveIndex(activeIndex - 1);
  const slidenext = () => setActiveIndex(activeIndex + 1);

  const synxActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data.map((data) => (
    <EndSeasonCardLayout key={data.id} data={data} />
  ));
  return (
    <div className=" px-4 ld:px-5">
      <div className="relative px-5">
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1500}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          // for scrolling carosel
          // onSlideChange={synxActiveIndex}
          // activeIndex={activeIndex}
        />
      </div>
      {/* {activeIndex !== 0 && <Button
        variant="contained"
        onClick={slideprev}
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <ArrowCircleLeftTwoToneIcon />
      </Button>}
      <Button
        variant="contained"
        onClick={slideprev}
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "8rem",
          left: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <ArrowCircleRightTwoToneIcon />
      </Button> */}
    </div>
  );
}
