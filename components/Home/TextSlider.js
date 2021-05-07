import { useState, useEffect } from "react";

export default function TextSlider() {
  const texts = [
    "React.js | Next.js | Node.js",
    "Ruby / Ruby on Rails",
  ];
  const [sliderContent, setSliderContent] = useState(texts[0]);
  const maxLength = texts.length - 1;

  const autoSwitchSliderText = (val) => {
    const update = (value) => {
      setSliderContent(texts[value]);
      autoSwitchSliderText(value);
    };
    setTimeout(function () {
      val == maxLength ? update(0) : update((val += 1));
    }, 1500);
  };

  useEffect(() => {
    autoSwitchSliderText(0);
  }, []);

  return (
    <>
      <p>{sliderContent}</p>
    </>
  );
}
