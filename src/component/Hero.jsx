export default function Hero() {
  return (
    <section className="">
      <ul className="mt-20 py-1 justify-center flex">
        <li>
          <img className="flex" src="/512.gif" width="45" height="45" />
        </li>
        <li className="space-x-10">
          <span className="text-main text-3xl mt-40 font-semibold">Hi,</span>
        </li>
      </ul>
      <h1 className="text-main text-center text-3xl py-3">I'm DEEPAK</h1>

      <div className="justify-self-center">
        <img
          src="https://readme-typing-svg.demolab.com?font=Bungee+Spice&size=27&letterSpacing=0.5px&duration=5013&pause=800&color=00000&background=fffff&vCenter=true&random=true&width=324&height=40&lines=I'm+A+Web+Developer;I'm+A+Web+Designer"
          alt="Typing SVG"
        />
      </div>
    </section>
  );
}
