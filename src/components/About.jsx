function About() {
  return (
    <section class="bg-[#2c2c2c]">
      {/* <div>About Us</div> */}
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          class="w-full dark:block rounded-lg"
          src="/team.png"
          alt="dashboard image"
        />
        <div class="mt-4 md:mt-0 text-left">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            Who are we ?
          </h2>
          <p class="mb-6 font-light text-white md:text-2xl">
            Hack Club SVIT is Community of passionate coders,students who are
            curios to learn and whos belive in mutual growth and want to learn
            in public
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
