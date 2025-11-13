<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white shadow-md"
  >
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      
      <div class="flex items-center gap-8">
        <RouterLink to="/">
          <img src="/jtv_putih.png" alt="JTV Logo" class="h-10" />
        </RouterLink>

        <div class="hidden md:flex items-center gap-6 font-medium">
          <RouterLink
            to="/"
            class="hover:text-orange-300 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/live"
            class="hover:text-orange-300 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold"
          >
            Live
          </RouterLink>
          <RouterLink
            to="/video"
            class="hover:text-orange-300 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold"
          >
            Video
          </RouterLink>
          <RouterLink
            to="/event"
            class="hover:text-orange-300 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold"
          >
            Event
          </RouterLink>
          <RouterLink
            to="/community"
            class="hover:text-orange-300 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold"
          >
            JTV Community
          </RouterLink>
          <RouterLink
            to="/social"
            class="hover:text-orange-300 transition-colors aria-[current=page]:text-orange-500 aria-[current=page]:font-bold"
          >
            Social Media
          </RouterLink>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button
          class="bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Login
        </button>
      </div>
      
    </div> </nav>
</template>