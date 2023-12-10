window.addEventListener("load", () => {
  const numberOfImages = 100;

  // Reference to the container element
  const imageContainer = document.getElementById("imageContainer");

  // Load images into the container
  for (let i = 1; i <= numberOfImages; i++) {
    const image = document.createElement("img");
    image.src = `../../imgs/safeimagekit-100x100-image (${i}) - Copy.png`; // Replace with the actual path to your images
    image.alt = `Image ${i}`;
    imageContainer.appendChild(image);
  }
});
