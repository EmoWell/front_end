import React from "react";
import Lamp1 from "../Components/LandingPageComponents/Lamp1";
import { MovingCards } from "../Components/LandingPageComponents/MovingCards";
import { LandingPageText } from "../Components/LandingPageComponents/LandingpageText";
import GetStartedBtn from "../Components/LandingPageComponents/GetStartedBtn";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const items = [
    {
      name: "According to the 2015 NHMS survey, one in every 20 Indians, or 5.3% of the population, was found to have suffered from depressive disorders at some point in their lives.",
      quote: "Depression just is, like the weather",
      title: "",
    },
    {
      name: "According to a Deloitte survey of 3,995 employees in 2021-2022, 59% reported symptoms of depression, including feelings of sadness, lack of interest, fatigue, concentration issues, and poor decision-making.",
      quote: "“I battle” depression instead of “I suffer” with it",
      title: "",
    },
    {
      name: "In a 2021 UNICEF survey, around 14% of 15 to 24-year-olds in India reported frequently feeling depressed or disinterested.",
      quote: "You look happy, but you don't feel happy.",
      title: "",
    },
    {
      name: "The World Health Organization’s 2015 report suggested that 4.5% of the Indian population, or approximately 56,675,969 people, were affected by depressive disorders.",
      quote:
        "Depression is being colorblind and constantly told how colorful the world is",
      title: "",
    },
    {
      name: "The number of Indians seeking information about depression symptoms has doubled since 2018, peaking in 2020 with the onset of the COVID-19 pandemic ",
      quote:
        "'I’m tired' means a permanent state of exhaustion that sleep doesn’t fix.",
      title: "",
    },
    {
      name: "According to recent studies, the prevalence of depression in young people in India is between 31% and 57%.",
      quote: "This isn’t a battle I asked to fight.",
      title: "",
    },
    {
      name: "The prevalence of anxiety and depression is estimated to have gone up by a whopping 25 per cent globally in the first year of the Covid-induced pandemic, a 2022 report of the World Health Organisation (WHO) noted. ",
      quote: "Today my forest is dark. ",
      title: "",
    },
    {
      name: "New data released by the WHO shows that 9.3 per cent of youth (18–24 years) in India suffered depression in the earlier months of the lockdown (May 2020), which increased to 16.8 per cent by March 2022.",
      quote: "Depression isn’t about the outside; it’s about the inside.",
      title: "",
    },
    {
      name: "Social isolation, along with widespread disruption in the labour market and the inability to engage with communities are important reasons for the rise in depression. ",
      quote: " You don’t control your thoughts, your thoughts control you. ",
      title: "",
    },
    {
      name: "WHO underlined that many countries reported major disruptions in life-saving services for mental health, including for suicide prevention.",
      quote: "Sleep just isn’t sleep anymore, it’s an escape.",
      title: "",
    },
  ];
  return (
    <div>
      <div className="w-screen h-40">
        <Lamp1 />
      </div>
      <div>
        <LandingPageText
          words={"hello there, isn't it a depression detection page"}
        />
      </div>
      <div className="w-full h-40 mt-32">
        <MovingCards items={items} direction="right" speed="slow" />
      </div>
      <div>
      <Link to="/chatbot-dashboard">
        <GetStartedBtn />
        </Link>
      </div>
    </div>
  );
}
