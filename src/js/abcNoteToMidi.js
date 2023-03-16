//TODO: compute pitch depending on key signature
export function abcNoteToMidi(note, key) {
  // Define a dictionary to map pitch classes to MIDI note numbers
  const noteMidiNums = {
    C: 60,
    D: 62,
    E: 64,
    F: 65,
    G: 67,
    A: 69,
    B: 71,
  };

  //Define arrays for # and b keys
  const bKeys = ["F", "Bb", "Eb", "Ab", "Db"];
  const sharpKeys = ["G", "D", "A", "E", "B", "F#"];

  //Define lookup table to reflecting the effect of key signature on note pitch
  const lookupTable = {
    C: [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    D: [0, -1, 0, 0, 1, 0, 1, 0, -1, 0, 0, 1],
    E: [0, -1, 0, -1, 0, 0, 1, 0, -1, 0, -1, 0],
    F: [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    G: [0, -1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    A: [0, -1, 0, -1, 0, 0, 1, 0, -1, 0, 0, 1],
    B: [0, -1, 0, -1, 0, -1, 0, 0, -1, 0, -1, 0],
  };

  //extract the pitch class from the note string
  const regex = /[a-zA-Z]/;
  const pitchClassNotCapitalized = regex.exec(note)[0];
  const pitchClass = pitchClassNotCapitalized.toUpperCase();

  //determine the effect of the natural accidental
  function determineEffectOfNatural(key) {
    if (bKeys.includes(key)) {
      return 1;
    } else if (sharpKeys.includes(key)) {
      return -1;
    } else {
      return 0;
    }
  }

  const effectOfNatural = determineEffectOfNatural(key);

  //determine the effect of the key signature on the note pitch
  function determineEffectOfKey(key, pitchClass) {
    return lookupTable[pitchClass][
      ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"].indexOf(
        key
      )
    ];
  }

  const effectOfKey = determineEffectOfKey(key, pitchClass);

  // adjust the midi number based on the octave number and accidental correction
  let octaveNum = 4; // default to middle C's octave number
  let accidentalCorrection = 0;

  for (let i = 0; i < note.length; i++) {
    const char = note[i];

    if (char === "'") {
      octaveNum += 1;
    } else if (char === ",") {
      octaveNum -= 1;
    } else if (char === "^") {
      accidentalCorrection += 1;
    } else if (char === "_") {
      accidentalCorrection += -1;
    } else if (char === "=") {
      accidentalCorrection += effectOfNatural;
    }
  }

  // -------------- If the note is lowercase, adjust the octave number
  if (pitchClassNotCapitalized === pitchClassNotCapitalized.toLowerCase()) {
    octaveNum += 1;
  }

  // -------------- Calculate the MIDI note number based on the pitch class and octave number
  const midiNum = noteMidiNums[pitchClass] + 12 * (octaveNum - 4);

  // Return the MIDI note number considering the accidental correction and key signature
  return midiNum + accidentalCorrection + effectOfKey;
}
