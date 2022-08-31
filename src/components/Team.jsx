import React from "react";
import TeamCard from "./TeamCard";
import team from "./team.json";
function Team() {
  return (
    <section class="bg-primary">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            Meet Our team
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            The pioneers of Hack Club SVIT
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center">
          {team.map((member) => {
            return (
              <TeamCard key={member.id} name={member.name} image={member.img} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
