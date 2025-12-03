"use client"

import { useEffect, useRef, useState } from "react"

export default function Highlights() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const highlights = [
    {
      title: "HOW SIDDHI REACTS TO THINGS   ",
      description: "COFFEE PI LETI HU, GHUMMII GHUMIII KR LETI HU , SO JATI HU, ANYTHING THAT WILL HELP HER ESCAPE (Don't deny this okkkieee dekha h tumhee).",
    },
    {
      title: "FAVOURITE FOOD",
      description: "This little creature don't really have any favourite food , as long as she craves it , she'll even consume kuhlaad wala glass.",
    },
    {
      title: "WHAT I ADMIRE MOST",
      description: "AS MUCH AS I RANT ABOUT HER INDECISIVENESS , I ADMIRE HER ABILITY TO STAY CALM AND COLLECTED IN CHAOTIC SITUATIONS. and lowkey she heals me a lot , like talking with her and just knowing that she is there for me (highly doubt that though now :)))))))))) call toh krti ni ab suar) ik i'll be fine.",
    },
    {
      title: "ABOUT US",
      description: "DEKH BHAIII I MET YOU AND MY FIRST THOUGHT WAS WOW KOI INSAAAN 20 KA HO KR ITTNA SA KAISE HO SKTA H ,AB TOH DOSTI KRNI PDEGI , and then a lot of shit happened with us , but ho gya manage. And now I consider her as that bestttessstttt friend , chaddii budddyy type shit.",
    },
    {
      title: "I'M RUNNING OUT OF IDEAS ATP PLS HELP ME BHAIII ABHI BHI READ KR RI KYA??????",
      description: "GIBBERISHH BHAR DU YA TAREEEEEF KARU , IS AMEERRRICA KA DALAAL KI , EK TOH YE IMPORTANT BHI BOHT H MERE LIYE TOH BEZATIII BHII LIMIT ME REH KR KRNI PADTI VARNA MADAM JI GUSSA HO JATI AND BHAIII ME YE WEBSITE AROUND 2-3 WEEKS SE SOCH RHA AND BANA RHA , AND WRITER'S BLOCK IS AT AN ALL TIME HIGH BHAIII SO JUST TO LET YOU KNOW ME TUMHAREEEEE BIRTHDAY KE LIYE TUMSE ZYADA EXCITED THA AND LAST YEAR SOCHA THA IS BAAR SATH M MANAYNGE BUT AGAINNNNNNNNNNNNNNNN NI HO PARHA , SO THIS IS MY DIGITAL HUG TO YOU CONGRATULATIONSSSS SIDDHII AND HAPPPY BIRTHDAY.",
    },
    {
      title: "2K25 ME WEBSITE BANA DETA HU KYUKI 26 M TOH DUNIYA KHTM H NAAA!!!!",
      description: "DUNIYAA KHTM HO YA NA HOOOO YAPPING TOH KRTA RHUNGA M TMHARE SATH , CHUGULKHORI EXPERTS AND CHARCHA ON COFFEE BEST SUITS US FR BHAY. MAN YOU ARE REALLY FAR AWAY AND I WISH CLOSE HOTI TUM JUST LIKE HYDERABAD ME THE , AGR US TIME TUMHARA BDAY ATAA NAA THEN ME SHOW KRTA KITTAAA KUCHH KR SKTE BDAY PE TUMHARE , AND BHAI VO HYDERABAD WALI FLIGHT MISS , THEN MID AIRPORT GARBA SESSION THEN WHAT NOW THAT WHOLE SHENANIGANS , THOSE WERE THE DAYSSSSSS.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className={`mb-24 md:mb-32 space-y-6 md:space-y-8 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">Highlights</h2>
      <div className="h-px bg-gradient-to-r from-[#0ea5ff] to-transparent w-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-white">{highlight.title}</h3>
            <p className="text-base md:text-lg text-gray-400">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
