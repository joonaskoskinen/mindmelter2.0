// MindMelter - Paranneltu reaktiotesti
const MindMelter = (() => {
  // Tekstit eri kielillä
  const texts = {
    fi: {
      // Yleiset
      start: "Aloita testi",
      clickWhenReady: "Klikkaa illuusiota vasta, kun se muuttuu!",
      clickNow: "Klikkaa nyt!",
      tooEarly: "Liian aikaisin!",
      resultText: (s) => `Vasteaikasi: ${s}s`,
      average: (s) => `Keskiarvoinen vasteaikasi: ${s}s`,
      thanks: "Kiitos testaamisesta!",
      compareTitle: "Keskimääräiset vasteajat ikäryhmittäin:",
      restart: "Testaa uudestaan",
      donate: "Haluatko tukea projektia?",
      donateLink: "Lahjoita Ko-fi:ssa",
      selectAge: "Valitse ikäryhmäsi:",
      saveResults: "Tallenna tuloksesi",
      shareResults: "Jaa tuloksesi",
      bestTime: "Paras aikasi: ",
      worstTime: "Huonoin aikasi: ",
      loading: "Ladataan...",
      testProgress: "Testi {current}/{total}",
      history: "Historia",
      noHistory: "Ei aiempia tuloksia",
      historyTitle: "Aiemmat tuloksesi",
      date: "Päivämäärä",
      time: "Aika",
      soundOn: "Äänet päällä",
      soundOff: "Äänet pois",
      tutorial: "Ohje",
      close: "Sulje",
      settings: "Asetukset",
      countdown: "Valmistaudu...",
      reactionTest: "Reaktiotesti",

      // Saavutukset
      achievement: "Saavutus avattu!",
      achievementFast: "Salamannopea! Alle 0.2s reaktioaika.",
      achievementConsistent: "Tasainen suoritus! Alle 0.05s vaihtelu.",
      achievementMaster: "Reaktiomestari! Keskiarvo alle 0.25s.",

      // Teemat
      theme: "Teema:",
      themeNeon: "Neon",
      themeDark: "Tumma",
      themeLight: "Vaalea",
      themeRetro: "Retro",

      // Harjoitustila
      practiceMode: "Harjoitustila",
      testMode: "Testitila",

      // Saavutettavuus
      accessibility: "Saavutettavuus",
      highContrast: "Korkea kontrasti",
      largerText: "Suurempi teksti",
      reducedMotion: "Vähemmän animaatioita",
      keyboardControls: "Näppäimistöohjaus",

      // Tutoriaali
      tutorialText:
        "Tässä testissä mitataan reaktioaikaasi. Odota, että illuusio muuttuu, ja klikkaa sitä mahdollisimman nopeasti muutoksen jälkeen. Älä klikkaa liian aikaisin!",
      tutorialKeyboard: "Voit myös käyttää välilyöntiä tai Enter-näppäintä klikkaamiseen.",
      waitForChange: "Odota muutosta",
      waitForChangeDesc: "Odota, että illuusio muuttuu. Älä klikkaa liian aikaisin!",
      clickQuickly: "Klikkaa nopeasti",
      clickQuicklyDesc: "Kun illuusio muuttuu, klikkaa sitä mahdollisimman nopeasti.",
      seeResults: "Katso tuloksesi",
      seeResultsDesc: "Testin jälkeen näet tuloksesi ja voit verrata niitä muihin.",

      // Historia
      historyBest: "Paras tulos",
      historyAverage: "Keskiarvo",
      historyCount: "Testejä",

      // Ilmoitukset
      greatJob: "Hienoa työtä!",
      keepGoing: "Jatka samaan malliin!",
      newRecord: "Uusi ennätys!",
      almostThere: "Melkein perillä!",
      focusUp: "Keskity!",
    },
    en: {
      // General
      title: "MindMelter - Reaction Test",
      tagline: "Test your reaction time with visual illusions",
      start: "Start Test",
      clickWhenReady: "Click the illusion only when it changes!",
      clickNow: "Click now!",
      tooEarly: "Too early!",
      resultText: (s) => `Your reaction time: ${s}s`,
      average: (s) => `Your average reaction time: ${s}s`,
      thanks: "Thanks for testing!",
      compareTitle: "Average reaction times by age group:",
      restart: "Try again",
      donate: "Want to support the project?",
      donateLink: "Donate on Ko-fi",
      selectAge: "Select your age group:",
      saveResults: "Save your results",
      shareResults: "Share your results",
      bestTime: "Your best time: ",
      worstTime: "Your worst time: ",
      loading: "Loading...",
      testProgress: "Test {current}/{total}",
      history: "History",
      noHistory: "No previous results",
      historyTitle: "Your previous results",
      date: "Date",
      time: "Time",
      soundOn: "Sound on",
      soundOff: "Sound off",
      tutorial: "Tutorial",
      close: "Close",
      settings: "Settings",
      countdown: "Get ready...",
      reactionTest: "Reaction Test",

      // Achievements
      achievement: "Achievement unlocked!",
      achievementFast: "Lightning Fast! Reaction time under 0.2s.",
      achievementConsistent: "Consistent Performer! Variation less than 0.05s.",
      achievementMaster: "Reaction Master! Average under 0.25s.",

      // Themes
      theme: "Theme:",
      themeNeon: "Neon",
      themeDark: "Dark",
      themeLight: "Light",
      themeRetro: "Retro",

      // Practice mode
      practiceMode: "Practice Mode",
      testMode: "Test Mode",

      // Accessibility
      accessibility: "Accessibility",
      highContrast: "High Contrast",
      largerText: "Larger Text",
      reducedMotion: "Reduced Motion",
      keyboardControls: "Keyboard Controls",

      // Tutorial
      tutorialText:
        "This test measures your reaction time. Wait for the illusion to change, then click it as quickly as possible after the change. Don't click too early!",
      tutorialKeyboard: "You can also use the spacebar or Enter key to click.",
      waitForChange: "Wait for the change",
      waitForChangeDesc: "Wait for the illusion to change. Don't click too early!",
      clickQuickly: "Click quickly",
      clickQuicklyDesc: "When the illusion changes, click it as quickly as possible.",
      seeResults: "See your results",
      seeResultsDesc: "After the test, you'll see your results and can compare them to others.",

      // History
      historyBest: "Best result",
      historyAverage: "Average",
      historyCount: "Tests",

      // Notifications
      greatJob: "Great job!",
      keepGoing: "Keep going!",
      newRecord: "New record!",
      almostThere: "Almost there!",
      focusUp: "Focus up!",
    },
  }

  // Laajennettu illuusiovalikoima
  const illusions = [
    {
      html: '<div class="illusion illusion-spin"></div>',
      name: "spin",
    },
    {
      html: '<div class="illusion illusion-grid"></div>',
      name: "grid",
    },
    {
      html: '<div class="illusion illusion-perspective"></div>',
      name: "perspective",
    },
    {
      html: '<div class="illusion illusion-spiral"></div>',
      name: "spiral",
    },
    {
      html: '<div class="illusion illusion-wave"></div>',
      name: "wave",
    },
    {
      html: '<div class="illusion illusion-pulse"></div>',
      name: "pulse",
    },
    {
      html: '<div class="illusion illusion-morph"></div>',
      name: "morph",
    },
    {
      html: '<div class="illusion illusion-flicker"></div>',
      name: "flicker",
    },
    // Uudet illuusiot
    {
      html: '<div class="illusion illusion-color-shift"></div>',
      name: "color-shift",
    },
    {
      html: '<div class="illusion illusion-zoom"></div>',
      name: "zoom",
    },
  ]

  const averageByAge = [
    { range: "10–19", avg: 0.25 },
    { range: "20–29", avg: 0.24 },
    { range: "30–39", avg: 0.27 },
    { range: "40–49", avg: 0.3 },
    { range: "50–59", avg: 0.33 },
    { range: "60+", avg: 0.36 },
  ]

  // Saavutukset
  const achievements = [
    { id: "fast", condition: (result) => Math.min(...result) < 0.2, text: "achievementFast", icon: "⚡" },
    {
      id: "consistent",
      condition: (result) => {
        const max = Math.max(...result)
        const min = Math.min(...result)
        return max - min < 0.05 && result.length >= 3
      },
      text: "achievementConsistent",
      icon: "🎯",
    },
    {
      id: "master",
      condition: (result) => {
        const avg = result.reduce((a, b) => a + b, 0) / result.length
        return avg < 0.25 && result.length >= 4
      },
      text: "achievementMaster",
      icon: "🏆",
    },
    // Uudet saavutukset
    {
      id: "persistent",
      condition: (result) => result.length >= 10,
      text: "Sitkeä testaaja! Suoritit 10 testiä.",
      icon: "🔄",
    },
  ]

  // Ääniefektit - ladataan vain kun tarvitaan
  const sounds = {}

  // Sovelluksen tila
  const state = {
    lang: "fi",
    results: [],
    current: 0,
    startTime: 0,
    userAgeGroup: null,
    isRunning: false,
    savedResults: [],
    soundEnabled: true,
    theme: "neon",
    practiceMode: false,
    accessibilitySettings: {
      highContrast: false,
      largerText: false,
      reducedMotion: false,
      keyboardControls: true,
    },
    unlockedAchievements: [],
    currentView: "main", // main, reaction-test, results
    // Mobiilitunnistus
    isMobile: false,
    // Suorituskyvyn mittaus
    performanceMetrics: {
      fps: 0,
      lastFrameTime: 0,
      frameCount: 0,
    },
    // Partikkelit
    particles: [],
  }

  // DOM-elementtien viittaukset
  let elements = {}

  // Alustusfunktio
  function init() {
    // Ladataan tallennetut asetukset
    loadSavedSettings()

    // Tarkistetaan onko kyseessä mobiililaite
    checkMobileDevice()

    // Alustetaan suorituskyvyn mittaus
    initPerformanceMonitoring()

    // Haetaan DOM-elementit
    elements = {
      app: document.getElementById("app"),
      mainMenu: document.getElementById("main-menu"),
      testContainer: document.getElementById("test-container"),
      illusionContainer: document.querySelector(".illusion-container"),
      feedback: document.getElementById("feedback-text"),
      startButton: document.getElementById("start-button"),
      resultsScreen: document.getElementById("results-screen"),
      resultsDetail: document.getElementById("results-detail"),
      compareTable: document.getElementById("compare-table"),
      finalAverage: document.getElementById("final-average"),
      restartButton: document.getElementById("restart-button"),
      progressBar: document.getElementById("progress-bar"),
      progressText: document.getElementById("progress-text"),
      ageSelect: document.getElementById("age-select"),
      bestTime: document.getElementById("best-time"),
      worstTime: document.getElementById("worst-time"),
      saveButton: document.getElementById("save-button"),
      shareButton: document.getElementById("share-button"),
      historyButton: document.getElementById("history-button"),
      historyScreen: document.getElementById("history-screen"),
      historyList: document.getElementById("history-list"),
      closeHistoryButton: document.getElementById("close-history-button"),
      soundToggle: document.getElementById("sound-toggle"),
      tutorialButton: document.getElementById("tutorial-button"),
      tutorialScreen: document.getElementById("tutorial-screen"),
      closeTutorialButton: document.getElementById("close-tutorial-button"),
      achievementContainer: document.getElementById("achievement-container"),
      settingsButton: document.getElementById("settings-button"),
      settingsPanel: document.getElementById("settings-panel"),
      closeSettingsButton: document.getElementById("close-settings-button"),
      notificationContainer: document.getElementById("notification-container"),
      countdown: document.getElementById("countdown"),
      historyBest: document.getElementById("history-best"),
      historyAverage: document.getElementById("history-average"),
      historyCount: document.getElementById("history-count"),
      particles: document.querySelector(".particles"),
    }

    // Lisätään tapahtumankuuntelijat
    addEventListeners()

    // Alustetaan ikäryhmävalitsin
    initAgeSelect()

    // Alustetaan teemavalinnat
    initThemeOptions()

    // Päivitetään käyttöliittymä valitun kielen mukaan
    updateUI()

    // Ladataan tallennetut saavutettavuusasetukset
    loadAccessibilitySettings()

    // Asetetaan teema
    setTheme(state.theme)

    // Alustetaan partikkelit
    initParticles()

    // Add this after initParticles() in the init function
    initParticleInteraction()

    // Näytetään päävalikko
    showView("main")
  }

  // Ladataan tallennetut asetukset
  function loadSavedSettings() {
    // Add this to the loadSavedSettings function
    state.lang = localStorage.getItem("mindMelterLang") || "fi"

    // Ladataan tallennetut tulokset
    try {
      state.savedResults = JSON.parse(localStorage.getItem("mindMelterResults") || "[]")
    } catch (e) {
      console.error("Virhe tulosten lataamisessa:", e)
      state.savedResults = []
    }

    // Ladataan tallennetut saavutukset
    try {
      state.unlockedAchievements = JSON.parse(localStorage.getItem("mindMelterAchievements") || "[]")
    } catch (e) {
      console.error("Virhe saavutusten lataamisessa:", e)
      state.unlockedAchievements = []
    }

    // Ladataan tallennettu teema
    state.theme = localStorage.getItem("mindMelterTheme") || "neon"

    // Ladataan ääniasetus
    state.soundEnabled = localStorage.getItem("mindMelterSound") !== "false"
  }

  // Tarkistetaan onko kyseessä mobiililaite
  function checkMobileDevice() {
    state.isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      (window.matchMedia && window.matchMedia("(max-width: 768px)").matches)

    // Lisätään mobiililuokka body-elementtiin
    if (state.isMobile) {
      document.body.classList.add("mobile-device")
    }
  }

  // Alustetaan suorituskyvyn mittaus
  function initPerformanceMonitoring() {
    // Käytetään requestAnimationFrame mittaamaan FPS
    state.performanceMetrics.lastFrameTime = performance.now()
    state.performanceMetrics.frameCount = 0

    function measureFPS(timestamp) {
      // Lasketaan FPS sekunnin välein
      state.performanceMetrics.frameCount++

      const elapsed = timestamp - state.performanceMetrics.lastFrameTime

      if (elapsed >= 1000) {
        state.performanceMetrics.fps = Math.round((state.performanceMetrics.frameCount * 1000) / elapsed)
        state.performanceMetrics.lastFrameTime = timestamp
        state.performanceMetrics.frameCount = 0

        // Optimoidaan animaatioita FPS:n perusteella
        optimizeAnimations()
      }

      requestAnimationFrame(measureFPS)
    }

    requestAnimationFrame(measureFPS)
  }

  // Optimoidaan animaatioita FPS:n perusteella
  function optimizeAnimations() {
    // Jos FPS on alhainen, vähennetään animaatioiden määrää
    if (state.performanceMetrics.fps < 30) {
      document.body.classList.add("reduce-animations")
    } else {
      document.body.classList.remove("reduce-animations")
    }
  }

  // Alustetaan partikkelit
  function initParticles() {
    if (!elements.particles) return

    // Tyhjennetään partikkelit
    elements.particles.innerHTML = ""

    // Luodaan partikkelit
    for (let i = 0; i < 20; i++) {
      createParticle()
    }
  }

  // Modify the createParticle function to add transition for smooth movement
  function createParticle() {
    if (!elements.particles) return

    const particle = document.createElement("div")
    particle.className = "particle"

    // Satunnaiset arvot
    const size = Math.random() * 10 + 5
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    const xDest = (Math.random() - 0.5) * 200
    const yDest = (Math.random() - 0.5) * 200
    const delay = Math.random() * 5

    // Asetetaan tyyli
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.left = `${x}px`
    particle.style.top = `${y}px`
    particle.style.setProperty("--x", `${xDest}px`)
    particle.style.setProperty("--y", `${yDest}px`)
    particle.style.animationDelay = `${delay}s`
    particle.style.transition = "transform 0.3s ease-out" // Add transition for smooth movement

    // Lisätään partikkeli
    elements.particles.appendChild(particle)

    // Poistetaan partikkeli animaation jälkeen
    setTimeout(
      () => {
        particle.remove()
        createParticle()
      },
      (delay + 3) * 1000,
    )
  }

  // Initialize cursor interaction with particles
  function initParticleInteraction() {
    let mouseX = 0
    let mouseY = 0

    // Track mouse position
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    // Update particle positions based on mouse proximity
    function updateParticles() {
      const particles = document.querySelectorAll(".particle")
      const repelRadius = 100 // Distance at which particles start to move away
      const repelStrength = 0.5 // How strongly particles move away

      particles.forEach((particle) => {
        const rect = particle.getBoundingClientRect()
        const particleX = rect.left + rect.width / 2
        const particleY = rect.top + rect.height / 2

        // Calculate distance between mouse and particle
        const dx = particleX - mouseX
        const dy = particleY - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // If mouse is close enough, move particle away
        if (distance < repelRadius) {
          // Calculate repel force (stronger when closer)
          const force = (repelRadius - distance) / repelRadius

          // Calculate new position
          const moveX = dx * force * repelStrength
          const moveY = dy * force * repelStrength

          // Apply movement with transform
          particle.style.transform = `translate(${moveX}px, ${moveY}px)`
        } else {
          // Reset transform if mouse is far away
          particle.style.transform = ""
        }
      })

      requestAnimationFrame(updateParticles)
    }

    // Start the animation loop
    updateParticles()
  }

  // Lisätään tapahtumankuuntelijat
  function addEventListeners() {
    // Reaktiotesti
    if (elements.startButton) {
      elements.startButton.addEventListener("click", startReactionTest)
    }

    if (elements.restartButton) {
      elements.restartButton.addEventListener("click", () => {
        resetTest()
        showView("main")
      })
    }

    // Tulosten tallennus ja jakaminen
    if (elements.saveButton) {
      elements.saveButton.addEventListener("click", saveResults)
    }

    if (elements.shareButton) {
      elements.shareButton.addEventListener("click", shareResults)
    }

    // Historia
    if (elements.historyButton) {
      elements.historyButton.addEventListener("click", showHistory)
    }

    if (elements.closeHistoryButton) {
      elements.closeHistoryButton.addEventListener("click", () => {
        elements.historyScreen.classList.add("hidden")
      })
    }

    // Äänet
    if (elements.soundToggle) {
      elements.soundToggle.addEventListener("click", toggleSound)
      updateSoundButton()
    }

    // Tutoriaali
    if (elements.tutorialButton) {
      elements.tutorialButton.addEventListener("click", showTutorial)
    }

    if (elements.closeTutorialButton) {
      elements.closeTutorialButton.addEventListener("click", () => {
        elements.tutorialScreen.classList.add("hidden")
      })
    }

    // Asetukset
    if (elements.settingsButton) {
      elements.settingsButton.addEventListener("click", toggleSettings)
    }

    if (elements.closeSettingsButton) {
      elements.closeSettingsButton.addEventListener("click", toggleSettings)
    }

    // Näppäimistön kuuntelu
    document.addEventListener("keydown", handleKeyDown)

    // Kosketustapahtumien optimointi mobiililaitteille
    if (state.isMobile) {
      document.addEventListener("touchstart", handleTouchStart, { passive: true })
    }
  }

  // Näppäimistön käsittely
  function handleKeyDown(e) {
    // Vain jos näppäimistöohjaus on käytössä
    if (!state.accessibilitySettings.keyboardControls) return

    // ESC-näppäin sulkee modaalit
    if (e.key === "Escape") {
      if (!elements.historyScreen.classList.contains("hidden")) {
        elements.historyScreen.classList.add("hidden")
        return
      }

      if (!elements.tutorialScreen.classList.contains("hidden")) {
        elements.tutorialScreen.classList.add("hidden")
        return
      }

      if (!elements.settingsPanel.classList.contains("hidden")) {
        toggleSettings()
        return
      }
    }

    // Reaktiotesti
    if (state.currentView === "reaction-test" && state.isRunning) {
      if (e.code === "Space" || e.code === "Enter") {
        // Estetään sivun vieritys
        e.preventDefault()

        // Simuloidaan klikkausta
        const illusion = elements.illusionContainer.querySelector(".illusion")
        if (illusion) {
          illusion.click()
        }
      }
    }
  }

  // Kosketustapahtumien käsittely
  function handleTouchStart(e) {
    // Optimoitu kosketuskäsittely mobiililaitteille
    if (state.currentView === "reaction-test" && state.isRunning) {
      // Tarkistetaan kosketettiinko illuusiota
      const touch = e.touches[0]
      const illusion = elements.illusionContainer.querySelector(".illusion")

      if (illusion) {
        const rect = illusion.getBoundingClientRect()

        if (
          touch.clientX >= rect.left &&
          touch.clientX <= rect.right &&
          touch.clientY >= rect.top &&
          touch.clientY <= rect.bottom
        ) {
          // Simuloidaan klikkausta
          illusion.click()
        }
      }
    }
  }

  // Alustetaan ikäryhmävalitsin
  function initAgeSelect() {
    if (elements.ageSelect) {
      elements.ageSelect.innerHTML = '<option value="">-- Valitse --</option>'

      averageByAge.forEach((group) => {
        const option = document.createElement("option")
        option.value = group.range
        option.textContent = group.range
        elements.ageSelect.appendChild(option)
      })

      elements.ageSelect.addEventListener("change", (e) => {
        state.userAgeGroup = e.target.value
      })
    }
  }

  // Alustetaan teemavalinnat
  function initThemeOptions() {
    const themeOptions = document.querySelectorAll(".theme-option")

    if (themeOptions.length > 0) {
      themeOptions.forEach((option) => {
        const theme = option.dataset.theme

        // Merkitään aktiivinen teema
        if (theme === state.theme) {
          option.classList.add("active")
        }

        // Lisätään tapahtumankuuntelija
        option.addEventListener("click", () => {
          // Poistetaan aktiivinen luokka kaikilta
          themeOptions.forEach((opt) => opt.classList.remove("active"))

          // Lisätään aktiivinen luokka valitulle
          option.classList.add("active")

          // Asetetaan teema
          setTheme(theme)
        })
      })
    }
  }

  // Ladataan tallennetut saavutettavuusasetukset
  function loadAccessibilitySettings() {
    const savedSettings = JSON.parse(localStorage.getItem("mindMelterAccessibility") || "{}")

    if (savedSettings) {
      state.accessibilitySettings = { ...state.accessibilitySettings, ...savedSettings }

      // Päivitetään käyttöliittymä asetusten mukaan
      for (const [key, value] of Object.entries(state.accessibilitySettings)) {
        if (value) {
          document.body.classList.add(`a11y-${key}`)

          const checkbox = document.getElementById(`accessibility-${key}`)
          if (checkbox) checkbox.checked = true
        }
      }
    }
  }

  // Käyttöliittymän päivitys kielen mukaan
  function updateUI() {
    const t = texts[state.lang]

    // Päivitetään kaikki tekstit
    updateTextElements(t)

    // Päivitetään ääninappi
    updateSoundButton()
  }

  // Päivitetään tekstielementit
  function updateTextElements(t) {
    // Yleiset tekstit
    updateElementText("start-button .button-text", t.start)
    updateElementText("instructions", t.clickWhenReady)
    updateElementText("thanks-text", t.thanks)
    updateElementText("age-compare-title", t.compareTitle)
    updateElementText("restart-button .button-text", t.restart)
    updateElementText("donate-text", t.donate)
    updateElementText("donate-link .button-text", t.donateLink)
    updateElementText("age-select-label", t.selectAge)
    updateElementText("save-button .button-text", t.saveResults)
    updateElementText("share-button .button-text", t.shareResults)
    updateElementText("history-button .button-text", t.history)
    updateElementText("history-title", t.historyTitle)
    updateElementText("tutorial-button", t.tutorial)
    updateElementText("tutorial-text", t.tutorialText)
    updateElementText("tutorial-keyboard", t.tutorialKeyboard)
    updateElementText("close-tutorial-button", t.close)
    updateElementText("theme-label", t.theme)
    updateElementText("accessibility-title", t.accessibility)
    updateElementText("settings-button", t.settings)
    updateElementText("close-settings-button", t.close)

    // Historia
    updateElementText("history-best + .stat-label", t.historyBest)
    updateElementText("history-average + .stat-label", t.historyAverage)
    updateElementText("history-count + .stat-label", t.historyCount)

    // Harjoitustila
    if (elements.practiceToggle && elements.practiceToggle.nextElementSibling) {
      elements.practiceToggle.nextElementSibling.textContent = state.practiceMode ? t.practiceMode : t.testMode
    }
  }

  // Apufunktio tekstien päivitykseen
  function updateElementText(selector, text) {
    const element = document.querySelector(`#${selector}`) || document.querySelector(`.${selector}`)
    if (element) {
      element.textContent = text
    }
  }

  // Ääninapin päivitys
  function updateSoundButton() {
    if (elements.soundToggle) {
      elements.soundToggle.textContent = state.soundEnabled ? texts[state.lang].soundOn : texts[state.lang].soundOff
      elements.soundToggle.setAttribute(
        "aria-label",
        state.soundEnabled ? texts[state.lang].soundOn : texts[state.lang].soundOff,
      )
    }
  }

  // Äänen vaihto
  function toggleSound() {
    state.soundEnabled = !state.soundEnabled
    updateSoundButton()

    // Tallennetaan asetus
    localStorage.setItem("mindMelterSound", state.soundEnabled)

    // Soitetaan ääni jos äänet päällä
    if (state.soundEnabled) {
      playSound("success")
    }
  }

  // Äänen soitto - laiska lataus
  function playSound(soundName) {
    if (!state.soundEnabled) return

    // Ladataan ääni vain kun sitä tarvitaan
    if (!sounds[soundName]) {
      switch (soundName) {
        case "ready":
          sounds.ready = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3")
          break
        case "success":
          sounds.success = new Audio("https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3")
          break
        case "fail":
          sounds.fail = new Audio("https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3")
          break
        case "achievement":
          sounds.achievement = new Audio("https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3")
          break
        case "countdown":
          sounds.countdown = new Audio("https://assets.mixkit.co/active_storage/sfx/1529/1529-preview.mp3")
          break
      }
    }

    if (sounds[soundName]) {
      // Resetoidaan ääni ennen soittoa
      sounds[soundName].currentTime = 0

      // Soitetaan ääni
      const playPromise = sounds[soundName].play()

      // Käsitellään virheet
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.log("Äänen soitto epäonnistui:", e)
        })
      }
    }
  }

  // Näytä tutoriaali
  function showTutorial() {
    elements.tutorialScreen.classList.remove("hidden")
  }

  // Teeman asetus
  function setTheme(theme) {
    state.theme = theme

    // Poistetaan vanhat teemaluokat
    document.body.className = document.body.className
      .split(" ")
      .filter((cls) => !cls.startsWith("theme-"))
      .join(" ")

    // Lisätään uusi teemaluokka
    document.body.classList.add(`theme-${theme}`)

    // Lisätään saavutettavuusluokat takaisin
    for (const [key, value] of Object.entries(state.accessibilitySettings)) {
      if (value) {
        document.body.classList.add(`a11y-${key}`)
      }
    }

    // Lisätään mobiililuokka takaisin
    if (state.isMobile) {
      document.body.classList.add("mobile-device")
    }

    // Tallennetaan teema
    localStorage.setItem("mindMelterTheme", theme)
  }

  // Saavutettavuusasetusten päivitys
  function updateAccessibility(e) {
    const setting = e.target.id.replace("accessibility-", "")
    state.accessibilitySettings[setting] = e.target.checked

    // Päivitetään luokat body-elementtiin
    document.body.classList.toggle(`a11y-${setting}`, e.target.checked)

    // Tallennetaan asetukset
    localStorage.setItem("mindMelterAccessibility", JSON.stringify(state.accessibilitySettings))
  }

  // Kielen vaihto
  function toggleLang() {
    state.lang = state.lang === "fi" ? "en" : "fi"

    // Save language preference
    localStorage.setItem("mindMelterLang", state.lang)

    // Update HTML lang attribute for accessibility
    document.documentElement.lang = state.lang

    // Update page title
    document.title = state.lang === "fi" ? "MindMelter - Reaktiotesti" : "MindMelter - Reaction Test"

    // Update all elements with data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n")
      if (texts[state.lang][key]) {
        element.textContent = texts[state.lang][key]
      }
    })

    // Update other UI elements
    updateUI()
  }

  // Asetuspaneelin näyttäminen/piilottaminen
  function toggleSettings() {
    elements.settingsPanel.classList.toggle("hidden")
  }

  // Näkymän vaihtaminen
  function showView(view) {
    state.currentView = view

    // Piilotetaan kaikki näkymät
    elements.mainMenu.classList.add("hidden")
    elements.testContainer.classList.add("hidden")
    elements.resultsScreen.classList.add("hidden")

    // Näytetään valittu näkymä
    switch (view) {
      case "main":
        elements.mainMenu.classList.remove("hidden")
        break
      case "reaction-test":
        elements.testContainer.classList.remove("hidden")
        break
      case "results":
        elements.resultsScreen.classList.remove("hidden")
        break
    }
  }

  // Reaktiotestin aloitus
  function startReactionTest() {
    resetTest()
    showView("reaction-test")

    // Aloitetaan laskuri
    startCountdown()
  }

  // Laskurin aloitus
  function startCountdown() {
    if (!elements.countdown) return

    let count = 3
    elements.countdown.textContent = count
    elements.countdown.style.display = "flex"

    // Soitetaan ääni
    playSound("countdown")

    const interval = setInterval(() => {
      count--

      if (count > 0) {
        elements.countdown.textContent = count
        playSound("countdown")
      } else {
        clearInterval(interval)
        elements.countdown.style.display = "none"

        // Näytetään edistymispalkki
        if (elements.progressBar) {
          elements.progressBar.style.width = "0%"
          elements.progressBar.parentElement.classList.remove("hidden")
          updateProgressText(1, illusions.length)
        }

        state.isRunning = true
        runTest()
      }
    }, 1000)
  }

  // Testin nollaus
  function resetTest() {
    state.results = []
    state.current = 0
    elements.illusionContainer.innerHTML = ""
    elements.feedback.textContent = ""
  }

  // Sekoitetaan illuusiot
  function shuffleIllusions() {
    // Fisher-Yates sekoitusalgoritmi
    for (let i = illusions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[illusions[i], illusions[j]] = [illusions[j], illusions[i]]
    }
  }

  // Yksittäisen testin suoritus
  function runTest() {
    // Sekoitetaan illuusiot ensimmäisellä kerralla
    if (state.current === 0) {
      shuffleIllusions()
    }

    if (state.current >= illusions.length || !state.isRunning) {
      return showResults()
    }

    // Päivitetään edistymispalkki
    if (elements.progressBar) {
      const progress = (state.current / illusions.length) * 100
      elements.progressBar.style.width = `${progress}%`
      updateProgressText(state.current + 1, illusions.length)
    }

    elements.illusionContainer.innerHTML = illusions[state.current].html
    elements.feedback.textContent = texts[state.lang].clickWhenReady

    const el = elements.illusionContainer.querySelector(".illusion")
    let clicked = false
    let ready = false

    // Lisätään aria-label saavutettavuutta varten
    el.setAttribute("aria-label", texts[state.lang].clickWhenReady)
    el.setAttribute("role", "button")
    el.setAttribute("tabindex", "0")

    // Satunnainen viive ennen illuusion muutosta
    const baseDelay = 2000
    const randomFactor = Math.random() * 1500
    const delay = baseDelay + randomFactor

    const timeout = setTimeout(() => {
      if (!clicked) {
        el.classList.add("illusion-ready")
        state.startTime = performance.now()
        ready = true
        elements.feedback.textContent = texts[state.lang].clickNow

        // Päivitetään aria-label
        el.setAttribute("aria-label", texts[state.lang].clickNow)

        // Soitetaan ääni
        playSound("ready")

        // Lisätään haptinen palaute mobiililaitteille
        if (state.isMobile && navigator.vibrate) {
          navigator.vibrate(100)
        }
      }
    }, delay)

    // Käyttäjän vastauksen käsittely
    function handleResponse() {
      if (clicked) return
      clicked = true

      if (!ready) {
        clearTimeout(timeout)
        elements.feedback.textContent = texts[state.lang].tooEarly

        // Päivitetään aria-live alue
        el.setAttribute("aria-label", texts[state.lang].tooEarly)

        // Soitetaan ääni
        playSound("fail")

        // Visuaalinen palaute
        el.classList.add("too-early")

        // Haptinen palaute mobiililaitteille
        if (state.isMobile && navigator.vibrate) {
          navigator.vibrate([50, 50, 50])
        }

        cleanup()
        return setTimeout(() => {
          state.current++
          runTest()
        }, 1500)
      }

      const reaction = ((performance.now() - state.startTime) / 1000).toFixed(2)
      state.results.push(Number(reaction))
      elements.feedback.textContent = texts[state.lang].resultText(reaction)

      // Päivitetään aria-live alue
      el.setAttribute("aria-label", texts[state.lang].resultText(reaction))

      // Soitetaan ääni
      playSound("success")

      // Visuaalinen palaute
      el.classList.add("clicked")

      // Haptinen palaute mobiililaitteille
      if (state.isMobile && navigator.vibrate) {
        navigator.vibrate(200)
      }

      // Näytetään kannustava viesti
      if (state.current < illusions.length - 1) {
        showNotification(getRandomEncouragement())
      }

      // Luodaan partikkeliefekti
      createClickParticles(el)

      cleanup()
      state.current++
      setTimeout(runTest, 1200)
    }

    // Tapahtumankuuntelijoiden poisto
    function cleanup() {
      el.removeEventListener("click", handleResponse)
    }

    // Tapahtumankuuntelijoiden lisäys
    el.addEventListener("click", handleResponse)
  }

  // Luodaan partikkeliefekti klikkaukselle
  function createClickParticles(element) {
    if (!element) return

    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Luodaan 10 partikkelia
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      // Satunnaiset arvot
      const size = Math.random() * 8 + 4
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 100 + 50
      const xDest = Math.cos(angle) * distance
      const yDest = Math.sin(angle) * distance

      // Asetetaan tyyli
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${centerX}px`
      particle.style.top = `${centerY}px`
      particle.style.setProperty("--x", `${xDest}px`)
      particle.style.setProperty("--y", `${yDest}px`)

      // Lisätään partikkeli
      document.body.appendChild(particle)

      // Poistetaan partikkeli animaation jälkeen
      setTimeout(() => {
        particle.remove()
      }, 3000)
    }
  }

  // Edistymistekstin päivitys
  function updateProgressText(current, total) {
    if (elements.progressText) {
      elements.progressText.textContent = texts[state.lang].testProgress
        .replace("{current}", current)
        .replace("{total}", total)
    }
  }

  // Tulosten näyttäminen
  function showResults() {
    state.isRunning = false

    // Piilotetaan edistymispalkki
    if (elements.progressBar && elements.progressBar.parentElement) {
      elements.progressBar.parentElement.classList.add("hidden")
    }

    if (state.results.length === 0) {
      showView("main")
      return
    }

    const avg = (state.results.reduce((a, b) => a + b, 0) / state.results.length).toFixed(2)
    elements.finalAverage.textContent = texts[state.lang].average(avg)

    // Yksityiskohtaiset tulokset
    const rows = state.results.map((r, i) => `<tr><td>${i + 1}</td><td>${r.toFixed(2)}s</td></tr>`).join("")

    elements.resultsDetail.innerHTML = `
      <table class="results-table">
        <tr>
          <th>#</th>
          <th>${state.lang === "fi" ? "Vasteaika (s)" : "Time (s)"}</th>
        </tr>
        ${rows}
      </table>`

    // Vertailutaulukko
    const compareRows = averageByAge
      .map((g) => {
        const highlight = Math.abs(avg - g.avg) < 0.03 ? ' class="highlight-row"' : ""
        const isUserGroup = g.range === state.userAgeGroup ? ' class="user-age-group"' : ""
        const rowClass = highlight ? highlight : isUserGroup

        return `<tr${rowClass}><td>${g.range}</td><td>${g.avg.toFixed(2)}s</td></tr>`
      })
      .join("")

    elements.compareTable.innerHTML = `
      <table class="results-table">
        <tr>
          <th>${state.lang === "fi" ? "Ikäryhmä" : "Age Group"}</th>
          <th>${state.lang === "fi" ? "Keskiarvo" : "Avg."}</th>
        </tr>
        ${compareRows}
      </table>`

    // Paras ja huonoin aika
    if (elements.bestTime && elements.worstTime) {
      const best = Math.min(...state.results).toFixed(2)
      const worst = Math.max(...state.results).toFixed(2)

      elements.bestTime.textContent = best + "s"
      elements.worstTime.textContent = worst + "s"
    }

    // Piirretään tuloskaavio
    if (elements.resultsChart) {
      drawResultsChart()
    }

    // Tarkistetaan saavutukset
    checkAchievements()

    // Näytetään tulokset
    showView("results")

    // Animoidaan tulosruutu
    elements.resultsScreen.classList.add("fade-in")
  }

  // Piirretään tuloskaavio
  function drawResultsChart() {
    const canvas = elements.resultsChart
    const ctx = canvas.getContext("2d")

    // Tyhjennetään canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (state.results.length === 0) return

    const padding = 30
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Määritetään asteikko
    const maxTime = Math.max(...state.results, 0.5) // Vähintään 0.5s näkyviin
    const minTime = Math.max(0, Math.min(...state.results) - 0.1) // Hieman marginaalia alaspäin

    // Piirretään taustaruudukko
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 1

    // Vaakaviivat
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(padding + chartWidth, y)
      ctx.stroke()

      // Asteikko
      const timeValue = maxTime - ((maxTime - minTime) / 5) * i
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.font = "12px Orbitron"
      ctx.textAlign = "right"
      ctx.fillText(timeValue.toFixed(2) + "s", padding - 5, y + 4)
    }

    // Pystyviivat
    for (let i = 0; i <= state.results.length; i++) {
      const x = padding + (chartWidth / state.results.length) * i
      ctx.beginPath()
      ctx.moveTo(x, padding)
      ctx.lineTo(x, padding + chartHeight)
      ctx.stroke()

      // Asteikko
      if (i < state.results.length) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.font = "12px Orbitron"
        ctx.textAlign = "center"
        ctx.fillText((i + 1).toString(), x + chartWidth / state.results.length / 2, padding + chartHeight + 15)
      }
    }

    // Piirretään tuloskäyrä
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")
    ctx.lineWidth = 3
    ctx.beginPath()

    // Liukuväri käyrän alle
    const gradient = ctx.createLinearGradient(0, padding, 0, padding + chartHeight)
    gradient.addColorStop(0, "rgba(var(--primary-color-rgb), 0.5)")
    gradient.addColorStop(1, "rgba(var(--primary-color-rgb), 0)")

    // Aloitetaan käyrän alle jäävän alueen piirto
    ctx.beginPath()
    ctx.moveTo(padding, padding + chartHeight)

    // Piirretään käyrä ja täytetään alue
    for (let i = 0; i < state.results.length; i++) {
      const x = padding + (chartWidth / state.results.length) * i + chartWidth / state.results.length / 2
      const normalizedValue = (state.results[i] - minTime) / (maxTime - minTime)
      const y = padding + chartHeight - normalizedValue * chartHeight

      ctx.lineTo(x, y)
    }

    // Suljetaan polku
    ctx.lineTo(padding + chartWidth, padding + chartHeight)
    ctx.closePath()

    // Täytetään alue
    ctx.fillStyle = gradient
    ctx.fill()

    // Piirretään käyrä uudelleen
    ctx.beginPath()

    for (let i = 0; i < state.results.length; i++) {
      const x = padding + (chartWidth / state.results.length) * i + chartWidth / state.results.length / 2
      const normalizedValue = (state.results[i] - minTime) / (maxTime - minTime)
      const y = padding + chartHeight - normalizedValue * chartHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }

    ctx.stroke()

    // Piirretään pisteet ja arvot
    for (let i = 0; i < state.results.length; i++) {
      const x = padding + (chartWidth / state.results.length) * i + chartWidth / state.results.length / 2
      const normalizedValue = (state.results[i] - minTime) / (maxTime - minTime)
      const y = padding + chartHeight - normalizedValue * chartHeight

      // Piirretään piste
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--secondary-color")
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fill()

      // Piirretään arvo
      ctx.fillStyle = "white"
      ctx.font = "12px Orbitron"
      ctx.textAlign = "center"
      ctx.fillText(state.results[i].toFixed(2), x, y - 10)
    }

    // Piirretään keskiarvoviiva
    const avg = state.results.reduce((a, b) => a + b, 0) / state.results.length
    const avgY = padding + chartHeight - ((avg - minTime) / (maxTime - minTime)) * chartHeight

    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent-color")
    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.moveTo(padding, avgY)
    ctx.lineTo(padding + chartWidth, avgY)
    ctx.stroke()
    ctx.setLineDash([])

    // Keskiarvoteksti
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent-color")
    ctx.font = "12px Orbitron"
    ctx.textAlign = "left"
    ctx.fillText(`Avg: ${avg.toFixed(2)}s`, padding + 5, avgY - 5)

    // Lisätään interaktiivisuus
    if (!canvas.hasInteractiveListeners) {
      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left

        // Tarkistetaan onko hiiri jonkin datapisteen lähellä
        for (let i = 0; i < state.results.length; i++) {
          const x = padding + (chartWidth / state.results.length) * i + chartWidth / state.results.length / 2
          const normalizedValue = (state.results[i] - minTime) / (maxTime - minTime)
          const y = padding + chartHeight - normalizedValue * chartHeight

          const distance = Math.sqrt(Math.pow(mouseX - x, 2))

          if (distance < 15) {
            // Piirretään korostettu piste
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drawResultsChart() // Piirretään kaavio uudelleen

            // Korostetaan piste
            ctx.fillStyle = "#ffffff"
            ctx.beginPath()
            ctx.arc(x, y, 8, 0, Math.PI * 2)
            ctx.fill()

            // Näytetään tooltip
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
            ctx.fillRect(x - 40, y - 40, 80, 30)
            ctx.fillStyle = "#ffffff"
            ctx.font = "bold 12px Orbitron"
            ctx.textAlign = "center"
            ctx.fillText(`${state.results[i].toFixed(2)}s`, x, y - 20)

            canvas.style.cursor = "pointer"
            return
          }
        }

        canvas.style.cursor = "default"
      })

      canvas.hasInteractiveListeners = true
    }
  }

  // Tarkistetaan saavutukset
  function checkAchievements() {
    if (state.results.length === 0 || state.practiceMode) return

    achievements.forEach((achievement) => {
      // Tarkistetaan onko saavutus jo avattu
      if (state.unlockedAchievements.includes(achievement.id)) return

      // Tarkistetaan täyttyykö saavutuksen ehto
      if (achievement.condition(state.results)) {
        // Lisätään saavutus avattuihin
        state.unlockedAchievements.push(achievement.id)
        localStorage.setItem("mindMelterAchievements", JSON.stringify(state.unlockedAchievements))

        // Näytetään ilmoitus
        showAchievementNotification(achievement)
      }
    })
  }

  // Näytetään saavutusilmoitus
  function showAchievementNotification(achievement) {
    if (!elements.achievementContainer) return

    // Soitetaan saavutusääni
    playSound("achievement")

    // Luodaan ilmoituselementti
    const notification = document.createElement("div")
    notification.className = "achievement-notification"
    notification.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-content">
        <h3>${texts[state.lang].achievement}</h3>
        <p>${texts[state.lang][achievement.text] || achievement.text}</p>
      </div>
    `

    // Lisätään ilmoitus sivulle
    elements.achievementContainer.appendChild(notification)

    // Animoidaan ilmoitus
    setTimeout(() => {
      notification.classList.add("show")
    }, 100)

    // Poistetaan ilmoitus ajastimella
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        notification.remove()
      }, 500)
    }, 5000)
  }

  // Näytetään ilmoitus
  function showNotification(message) {
    if (!elements.notificationContainer) return

    // Luodaan ilmoituselementti
    const notification = document.createElement("div")
    notification.className = "notification"
    notification.textContent = message

    // Lisätään ilmoitus sivulle
    elements.notificationContainer.appendChild(notification)

    // Animoidaan ilmoitus
    setTimeout(() => {
      notification.classList.add("show")
    }, 100)

    // Poistetaan ilmoitus ajastimella
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        notification.remove()
      }, 500)
    }, 2000)
  }

  // Satunnainen kannustusviesti
  function getRandomEncouragement() {
    const messages = [
      texts[state.lang].greatJob,
      texts[state.lang].keepGoing,
      texts[state.lang].almostThere,
      texts[state.lang].focusUp,
    ]

    return messages[Math.floor(Math.random() * messages.length)]
  }

  // Tulosten tallennus
  function saveResults() {
    if (state.results.length === 0) return

    const result = {
      date: new Date().toISOString(),
      ageGroup: state.userAgeGroup,
      results: [...state.results],
      average: (state.results.reduce((a, b) => a + b, 0) / state.results.length).toFixed(2),
    }

    state.savedResults.push(result)
    localStorage.setItem("mindMelterResults", JSON.stringify(state.savedResults))

    // Visuaalinen palaute tallennuksesta
    elements.saveButton.classList.add("success")
    setTimeout(() => {
      elements.saveButton.classList.remove("success")
    }, 1500)

    // Näytetään ilmoitus
    showNotification(texts[state.lang].lang === "fi" ? "Tulokset tallennettu!" : "Results saved!")
  }

  // Näytä historia
  function showHistory() {
    if (!elements.historyScreen || !elements.historyList) return

    // Tyhjennetään lista
    elements.historyList.innerHTML = ""

    if (state.savedResults.length === 0) {
      elements.historyList.innerHTML = `<p class="no-history">${texts[state.lang].noHistory}</p>`

      // Nollataan tilastot
      if (elements.historyBest) elements.historyBest.textContent = "0.00s"
      if (elements.historyAverage) elements.historyAverage.textContent = "0.00s"
      if (elements.historyCount) elements.historyCount.textContent = "0"
    } else {
      // Järjestetään tulokset uusimmasta vanhimpaan
      const sortedResults = [...state.savedResults].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )

      // Luodaan taulukko
      const table = document.createElement("table")
      table.className = "history-table"

      // Otsikkorivi
      const headerRow = document.createElement("tr")
      headerRow.innerHTML = `
        <th>${texts[state.lang].date}</th>
        <th>${texts[state.lang].time}</th>
      `
      table.appendChild(headerRow)

      // Tulosrivit
      sortedResults.forEach((result) => {
        const row = document.createElement("tr")

        // Muotoillaan päivämäärä
        const date = new Date(result.date)
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`

        row.innerHTML = `
          <td>${formattedDate}</td>
          <td>${result.average}s</td>
        `

        table.appendChild(row)
      })

      elements.historyList.appendChild(table)

      // Päivitetään tilastot
      if (elements.historyBest) {
        const bestResult = Math.min(...state.savedResults.map((r) => Number.parseFloat(r.average)))
        elements.historyBest.textContent = bestResult.toFixed(2) + "s"
      }

      if (elements.historyAverage) {
        const avgResult =
          state.savedResults.reduce((sum, r) => sum + Number.parseFloat(r.average), 0) / state.savedResults.length
        elements.historyAverage.textContent = avgResult.toFixed(2) + "s"
      }

      if (elements.historyCount) {
        elements.historyCount.textContent = state.savedResults.length.toString()
      }
    }

    // Näytetään historia
    elements.historyScreen.classList.remove("hidden")
  }

  // Tulosten jakaminen
  function shareResults() {
    if (state.results.length === 0) return

    const avg = (state.results.reduce((a, b) => a + b, 0) / state.results.length).toFixed(2)

    // Muodostetaan jaettava teksti
    let shareText = `${texts[state.lang].resultText(avg)}\n`
    shareText += `${texts[state.lang].bestTime}${Math.min(...state.results).toFixed(2)}s\n`
    shareText += `${texts[state.lang].worstTime}${Math.max(...state.results).toFixed(2)}s\n`
    shareText += `${texts[state.lang].average(avg)}\n\n`
    shareText += texts[state.lang].thanks

    // Yritetään jakaa natiivin jakamistoiminnon avulla
    if (navigator.share) {
      navigator
        .share({
          title: "MindMelter - Reaktiotestin tulokset",
          text: shareText,
          url: window.location.href,
        })
        .then(() => console.log("Onnistui!"))
        .catch((error) => {
          console.error("Virhe jakamisessa:", error)
          fallbackShare(shareText)
        })
    } else {
      fallbackShare(shareText)
    }
  }

  // Jakamistoiminnon varamekanismi
  function fallbackShare(shareText) {
    // Kopioidaan teksti leikepöydälle
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        alert(texts[state.lang].lang === "fi" ? "Tulokset kopioitu leikepöydälle!" : "Results copied to clipboard!")
      })
      .catch((error) => console.error("Virhe leikepöydälle kopioinnissa:", error))
  }

  // Harjoitustilan vaihto
  function togglePracticeMode() {
    state.practiceMode = !state.practiceMode
    updateUI()
  }

  // Julkiset API:t
  return {
    init: init,
    toggleLang: toggleLang,
  }
})()

// Sovelluksen käynnistys
document.addEventListener("DOMContentLoaded", () => {
  MindMelter.init()
})
