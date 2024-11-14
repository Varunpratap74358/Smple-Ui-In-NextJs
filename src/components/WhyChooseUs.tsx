"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Echoes of Tomorrow",
      description: "A futuristic blend of synth and organic sounds exploring themes of technology and humanity."
    },
    {
      title: "Soulful Rhythms",
      description: "A vibrant jazz project capturing the spirit and groove of classic and modern jazz fusion."
    },
    {
      title: "Infinite Dreams",
      description: "A cinematic soundscape album designed to evoke vast, dreamlike worlds."
    },
    {
      title: "Rhythm of the Night",
      description: "A high-energy electronic dance music collection inspired by the nightlife and urban beats."
    },
    {
      title: "Acoustic Serenade",
      description: "A soothing acoustic album with intimate, unplugged sessions and heartfelt melodies."
    },
    {
      title: "Urban Poetry",
      description: "A hip-hop project that combines intricate lyricism with contemporary beats and storytelling."
    },
    {
      title: "Wanderlust",
      description: "A world music project capturing sounds and rhythms from across the globe, exploring cultural diversity."
    },
    {
      title: "Vintage Vibes",
      description: "A retro-inspired collection of tracks celebrating sounds from the '70s and '80s era."
    },
    {
      title: "Nature's Symphony",
      description: "An ambient album inspired by the sounds of nature, blending field recordings and ambient textures."
    },
    {
      title: "Ethereal Echoes",
      description: "A mystical journey through ambient, downtempo, and ethereal sounds for meditation and relaxation."
    }
  ];
  

const WhyChooseUs = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
