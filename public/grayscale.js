/** image-chunks.js
 * Webworker script for grayscaling a chunk of image data.
 * @param {Buffer} data - the data to process
 */
onmessage = function(event) {
  console.log('fggkjlsdjfkghfdklsjghjlk');
  var data = event.data;
  // Process each pixel separately
  for (var i = 0; i < l; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        // Generate the grayscale values using weights based
        // on human perception
        var value = r * 0.2989 + g * 0.5870 + b 0.1140;

        // Set the pixel RGB values to our grayscale value
        binaryData[i] = value;
        binaryData[i + 1] = value;
        binaryData[i + 2] = value;
    }
    // Send the transformed data back to the main thread
    postMessage(data);
}
