"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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

  return (
    <section
      ref={sectionRef}
      className={`mb-24 md:mb-32 space-y-6 md:space-y-8 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
      <div className="h-px bg-gradient-to-r from-[#0ea5ff] to-transparent w-16"></div>

      <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-300 leading-relaxed">
        <p>
          BHAI SUNNNNNN first of all happy birthday suar , i really realllllly miss you and before our friendship got nerfed due to this huge distance and you getting a job we were soooooo chaotic and bakchod, i miss those days but life h , i never thought mujhe ye sb grown up wali harkate krni pdegi but here I am .
          So meri pyaari si suar , ik badi hogi tum microsofttttt!!!! me job lg gyi and all but you are still the same piddu sii indecisive and clumsy , road ko akele paar na kr pane wali , ek single decision na le pane wali , miles away from being aesthetic siddhi. We shared this wholesome choatic sa bond na that whenever we intract , me na aisee full on bkchodi mode me hi rhta tha.You really were a blessing and aaj kal toh madam ji ke paas time ni h naaaa reeels bhejne ka calll krne kaaa toh m hi calll kr deta hu but ab toh US chaliii gyiiii abhi kaisee kru calllllll suarrrrr?????????????? so i'm making this website , just to tell you how much you mean to me and I still cherish you very much no matter what the circumstances are , distance bhaichareee ke beecchhh thodii aa skta right? SO once again happy birthday meriii suar sii siddhii. 
        </p>

        <p>
          No matter what the occasion, Siddhi you've really made it special with your infectious energy and "suarpana" . Remember when we used to plan those trips ki bhaii abhhii lucknow jana h yaha jana h waha jana h and all , now we have that space and can actually travel but bhai kabhii time hi ni hota dono pe lol.ISTG ek baar intership ya something lg jaye I'll personally come to your place and kidnap you for the weekend trip and then wapis safely job pe chorr kr aaunga monday morning ko with a cup of coffee in your hand. So jaldii se free ho jaoo yrr I miss youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu.
        </p>

        <p>
         OK enoughhhh tareeefe , dekho no need to get on cloud nine abhi se , life me itni badi achievement milii h tumhe abhi se lagta h sab kuch mil gya , but trust me yrr life me bahut kuch achieve krna h abhi , aur tum karogi bhi because you are one hell of a hard working person and I know you will reach heights . Just keep being the same humours and "social butterfly" that you are piddiii. Wishing you a happy birthday once again and a life full of happiness and success and my presence ofcourse XD tangg karta rhunga tumheee purii lifeeeeeee , abhii jo ek ek din ignoreee kr rii naa har ghnte ka hisab lungaa .
        </p>
      </div>
    </section>
  )
}
