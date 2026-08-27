export default function App() {
  return (
    <div className="font-sans bg-black text-white">
      {/* ------------ NAVBAR ------------ */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16 bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="text-2xl font-black tracking-widest uppercase">
          VAL<span className="text-red-500">ORANT</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wide text-zinc-300">
          <li>
            <a href="#home" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#agents" className="hover:text-red-500">
              Agents
            </a>
          </li>
          <li>
            <a href="#maps" className="hover:text-red-500">
              Maps
            </a>
          </li>
          <li>
            <a href="#ranked" className="hover:text-red-500">
              Ranked
            </a>
          </li>
          <li>
            <a href="#news" className="hover:text-red-500">
              News
            </a>
          </li>
        </ul>
        <a
          href="#play"
          className="hidden md:inline-block bg-red-600 text-white px-6 py-2 font-bold uppercase text-sm tracking-wide hover:bg-red-700 transition"
        >
          Play Now
        </a>
      </nav>

      {/* ------------ HERO ------------ */}
      <section
        id="home"
        className="relative bg-zinc-950 px-6 md:px-16 py-24 flex flex-col md:flex-row items-center gap-12 border-b border-zinc-800"
      >
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-red-600/20 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-1 border border-red-600 mb-5">
            Free To Play Tactical Shooter
          </span>
          <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-6">
            Defy <br className="hidden md:block" /> The{" "}
            <span className="text-red-500">Limits</span>
          </h1>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto md:mx-0">
            A 5v5 character-based tactical shooter. Precise gunplay meets unique
            agent abilities in every round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              id="play"
              href="#"
              className="bg-red-600 text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-red-700 transition"
            >
              Play For Free
            </a>
            <a
              href="#agents"
              className="border border-zinc-600 px-8 py-3 font-bold uppercase tracking-wide hover:border-red-500 hover:text-red-500 transition"
            >
              Watch Trailer
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-zinc-900 border border-zinc-700 w-full h-72 md:h-96 flex items-center justify-center text-zinc-500 text-lg font-bold uppercase">
            [ Hero Key Art Placeholder ]
          </div>
        </div>
      </section>

      {/* ------------ STATS STRIP ------------ */}
      <section className="bg-black px-6 md:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-zinc-800">
        <div>
          <p className="text-3xl font-black text-red-500">20+</p>
          <p className="text-xs uppercase tracking-wide text-zinc-400">
            Agents
          </p>
        </div>
        <div>
          <p className="text-3xl font-black text-red-500">9</p>
          <p className="text-xs uppercase tracking-wide text-zinc-400">Maps</p>
        </div>
        <div>
          <p className="text-3xl font-black text-red-500">8</p>
          <p className="text-xs uppercase tracking-wide text-zinc-400">
            Rank Tiers
          </p>
        </div>
        <div>
          <p className="text-3xl font-black text-red-500">15M+</p>
          <p className="text-xs uppercase tracking-wide text-zinc-400">
            Active Players
          </p>
        </div>
      </section>

      {/* ------------ AGENTS ------------ */}
      <section id="agents" className="px-6 md:px-16 py-20 bg-zinc-950">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-black uppercase mb-3">
            Choose Your Agent
          </h2>
          <p className="text-zinc-400">
            Every agent brings a unique set of abilities. Master your role and
            outplay the enemy team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600 transition">
            <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center text-red-500 font-bold mb-5">
              DL
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Duelist</h3>
            <p className="text-zinc-400 text-sm">
              Self-sufficient fraggers who create and take space for their team
              to advance.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600 transition">
            <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center text-red-500 font-bold mb-5">
              CT
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Controller</h3>
            <p className="text-zinc-400 text-sm">
              Area-denial specialists who cut off sightlines and control the
              pace of engagements.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-8 hover:border-red-600 transition">
            <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center text-red-500 font-bold mb-5">
              SN
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Sentinel</h3>
            <p className="text-zinc-400 text-sm">
              Defensive experts who watch flanks, plant traps, and hold down the
              fort.
            </p>
          </div>
        </div>
      </section>

      {/* ------------ MAPS / ABOUT ------------ */}
      <section
        id="maps"
        className="px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12 border-t border-zinc-800"
      >
        <div className="flex-1">
          <div className="bg-zinc-900 border border-zinc-700 w-full h-72 md:h-96 flex items-center justify-center text-zinc-500 font-bold uppercase">
            [ Map Callout Placeholder ]
          </div>
        </div>
        <div className="flex-1">
          <span className="text-red-500 font-bold text-sm uppercase tracking-widest">
            The Battlefield
          </span>
          <h2 className="text-3xl font-black uppercase mt-2 mb-5">
            Fight Across Iconic Maps
          </h2>
          <p className="text-zinc-400 mb-6">
            From tight corridors to wide-open sightlines, every map is built
            around tactical positioning, sound cues, and split-second decisions.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="text-zinc-300 text-sm">
                9 unique maps with rotating map pool
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="text-zinc-300 text-sm">
                Attacker vs Defender round structure
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600"></span>
              <span className="text-zinc-300 text-sm">
                Spike plant and defuse objectives
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ------------ RANKED / TESTIMONIALS ------------ */}
      <section id="ranked" className="px-6 md:px-16 py-20 bg-red-600 text-white">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-black uppercase mb-3">
            Climb The Ranks
          </h2>
          <p className="text-red-100">
            From Iron to Radiant. Prove yourself in competitive queue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/20 backdrop-blur p-8 border border-white/20">
            <p className="text-red-50 text-sm mb-6">
              "Every match feels different. The abilities completely change how
              you approach each round."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/30"></div>
              <div>
                <p className="font-bold text-sm uppercase">Maria Santos</p>
                <p className="text-xs text-red-200">Diamond 2</p>
              </div>
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur p-8 border border-white/20">
            <p className="text-red-50 text-sm mb-6">
              "The gunplay is unmatched. Clean, precise, and rewards actual aim
              skill."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/30"></div>
              <div>
                <p className="font-bold text-sm uppercase">John Reyes</p>
                <p className="text-xs text-red-200">Immortal 1</p>
              </div>
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur p-8 border border-white/20">
            <p className="text-red-50 text-sm mb-6">
              "Best free-to-play shooter out there. The agent variety keeps it
              fresh every season."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/30"></div>
              <div>
                <p className="font-bold text-sm uppercase">Ana Cruz</p>
                <p className="text-xs text-red-200">Ascendant 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ CTA / NEWS ------------ */}
      <section id="news" className="px-6 md:px-16 py-20 text-center bg-zinc-950">
        <h2 className="text-3xl font-black uppercase mb-4">
          Ready To Drop In?
        </h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-8">
          Download now and join millions of players in the fight for Radiant.
        </p>
        <a
          href="#"
          className="inline-block bg-red-600 text-white px-10 py-3 font-bold uppercase tracking-wide hover:bg-red-700 transition"
        >
          Download Now
        </a>
      </section>

      {/* ------------ FOOTER ------------ */}
      <footer className="bg-black text-zinc-400 px-6 md:px-16 py-12 border-t border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-xl font-black uppercase text-white mb-3">
              Valorant
            </p>
            <p className="text-sm text-zinc-500">
              A 5v5 tactical shooter from Riot Games.
            </p>
          </div>
          <div>
            <p className="font-bold text-white mb-3 text-sm uppercase">Game</p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a href="#agents" className="hover:text-red-500">
                  Agents
                </a>
              </li>
              <li>
                <a href="#maps" className="hover:text-red-500">
                  Maps
                </a>
              </li>
              <li>
                <a href="#ranked" className="hover:text-red-500">
                  Ranked
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3 text-sm uppercase">
              Resources
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a href="#" className="hover:text-red-500">
                  Patch Notes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Esports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-3 text-sm uppercase">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>support@valorant.com</li>
              <li>Riot Games Inc.</li>
              <li>Los Angeles, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          © 2026 Riot Games, Inc. Fan-made practice project — not affiliated
          with Riot Games.
        </div>
      </footer>
    </div>
  );
}
