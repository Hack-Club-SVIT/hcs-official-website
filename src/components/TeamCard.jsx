import React from "react";

function TeamCard({ name, image }) {
  return (
    <div class="text-center w-64 text-gray-500 dark:text-gray-400 bg-[#2c2c2c] rounded-lg">
      <img
        class="mx-auto w-full h-56 rounded-tr-md rounded-tl-md object-cover"
        src={image}
        alt={name}
      />
      <h3 class="text-2xl py-2 font-bold rounded-bl-md rounded-br-md tracking-tight text-white bg-primary-red">
        <a href="#">{name}</a>
      </h3>
    </div>
  );
}

export default TeamCard;
