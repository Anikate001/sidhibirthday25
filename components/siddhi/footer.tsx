"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 md:py-24 border-t border-gray-800">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-500">HAPPPPPPIIEEEE WALA BDAY SIDDHHIII </p>
          <p className="text-sm md:text-base text-gray-600">
            © {currentYear} I'VE DEPLOYED IT SO HAMESHA RAHEGII YE ENGINEERRR SAHAB.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-[#0ea5ff] to-transparent w-16"></div>

        <p className="text-xs md:text-sm text-gray-700 max-w-xl leading-relaxed">
          I HOPE I MADE YOUR BIRTHDAY A BIT SPECIAL WITH THIS WEBSITE AND I HOPE YOU LIKE IT. BE SAFE SIDDHHII AND DON'T LOSE YOUR CHARM OVER THESE SILLLY LITTLE CORPORATE LIFE.I MISS YOU - YOUR ANIKATE.
        </p>
      </div>
    </footer>
  )
}
