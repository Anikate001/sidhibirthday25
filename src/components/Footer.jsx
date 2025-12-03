/* ===================================
   FOOTER COMPONENT
   Closing section with copyright and credits
   KEEP COPY PLATONIC — no hearts
   =================================== */

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 md:py-24 border-t border-gray-800">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4">
          <p className="text-sm md:text-base text-gray-500">Made with care for a remarkable friend.</p>
          <p className="text-sm md:text-base text-gray-600">
            © {currentYear} A tribute to Siddhi. All rights reserved.
          </p>
        </div>

        <div className="divider-accent w-16"></div>

        <p className="text-xs md:text-sm text-gray-700 max-w-xl leading-relaxed">
          This site celebrates the friendship, creativity, and curiosity that define Siddhi. Designed with smooth
          scrolling, minimal aesthetics, and a focus on clarity — because the best tributes speak softly but clearly.
        </p>
      </div>
    </footer>
  )
}
