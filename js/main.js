import { cargarTodasLasEstructuras, estructuraGlobal, updateEstructuraGlobal } from "./structureLoader.js"
import { generarEstructuraBloque } from "./uiGenerator.js"
import { initializeProgressButton } from "./progressButton.js"

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOMContentLoaded event fired")

  try {
    // Load all structures
    await cargarTodasLasEstructuras()

    if (Object.keys(estructuraGlobal).length === 0) {
      throw new Error("Failed to load estructuras")
    }

    // Determine the current block using the new function
    const currentBlockId = getCurrentBlockId()
    console.log(`Current block ID: ${currentBlockId}`)

    // Generate UI only for the current block
    if (estructuraGlobal[currentBlockId]) {
      generarEstructuraBloque(estructuraGlobal[currentBlockId])
    } else {
      console.error(`No structure found for block ${currentBlockId}`)
    }

    // Initialize progress button after UI is generated
    initializeProgressButton()

    // Update global structure after everything is initialized
    updateEstructuraGlobal()

    console.log("Initialization complete")
  } catch (error) {
    console.error("Error during initialization:", error)
  }
})

// Function to determine the current block ID (you need to implement this based on your navigation logic)
function getCurrentBlockId() {
  const block = document.querySelector("body")
  let blockId = 1 // Default to 1 if no match is found

  if (block.id === "2000000000") {
    blockId = 2
  } else if (block.id === "1000000000") {
    blockId = 1
  } else if (block.id === "3000000000") {
    blockId = 3
  } else if (block.id === "4000000000") {
    blockId = 4
  }

  console.log(`Current block ID: ${blockId}`)
  return blockId
}

// Listen for exam completion events
document.addEventListener("examCompleted", async (event) => {
  const { bloqueId, currentPointIndex } = event.detail
  await updateEstructuraGlobal()
  // Trigger any necessary UI updates here
})

