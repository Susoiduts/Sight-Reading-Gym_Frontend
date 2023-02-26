//TODO: compute pitch depending on key signature
export function abcNoteToMidi(note) {
    // Define a dictionary to map note names to MIDI note numbers
    const noteMidiNums = {
      "C": 60,
      "C#": 61,
      "Db": 61,
      "D": 62,
      "D#": 63,
      "Eb": 63,
      "E": 64,
      "F": 65,
      "F#": 66,
      "Gb": 66,
      "G": 67,
      "G#": 68,
      "Ab": 68,
      "A": 69,
      "A#": 70,
      "Bb": 70,
      "B": 71
    };
    
    // Parse the note string to get the pitch class (letter) and octave number
    const regex = /[a-zA-Z]/;
    let pitchClassNotCapitalized = regex.exec(note)[0];
    let pitchClass = pitchClassNotCapitalized.toUpperCase();
    let octaveNum = 4; // default to middle C's octave number
    
    for (let i = 0; i < note.length; i++) {
      const char = note[i];
      
      if (char === "'") {
        octaveNum += 1;
      } else if (char === ",") {
        octaveNum -= 1;
      } else if (char === "^") {
        pitchClass += "#";
      } else if (char === "_") {
        pitchClass += "b";
      }
    }
    
    // If the note is lowercase, adjust the octave number
    if (pitchClassNotCapitalized === pitchClassNotCapitalized.toLowerCase()) {
      octaveNum += 1;
    }
    
    // Calculate the MIDI note number based on the pitch class and octave number
    const midiNum = noteMidiNums[pitchClass] + (12 * (octaveNum - 4));
    
    // Return the MIDI note number
    return midiNum;
  }