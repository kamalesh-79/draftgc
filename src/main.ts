import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-hero-gradient flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-8 animate-slide-up">
        Welcome
      </h1>
      <p class="text-xl text-white/80 animate-slide-down">
        Your Tailwind project is ready!
      </p>
    </div>
  </div>
`