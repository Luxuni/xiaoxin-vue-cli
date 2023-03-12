<template>
  <main>
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <Suspense>
          <div
            class="flex items-center justify-center w-full h-screen bg-gray-900 bg-no-repeat bg-cover"
            style="
              background-image: url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80');
            ">
            <div class="px-16 py-10 bg-gray-800 bg-opacity-50 shadow-lg rounded-xl backdrop-blur-md max-sm:px-8">
              <div class="text-white">
                <div class="flex flex-col items-center mb-8">
                  <img
                    src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                    width="150"
                    alt=""
                    srcset="" />
                  <h1 class="mb-2 text-2xl">Xiaoxin</h1>
                  <span class="text-gray-300">Enter Login Details</span>
                </div>
                <component :is="Component" :key="route.fullPath" />
              </div>
            </div>
          </div>
        </Suspense>
      </template>
    </RouterView>
  </main>
</template>
