# Build a Drum Machine

**Note**: React 18 has known incompatibilities with the tests for this project ([see issue](https://github.com/freeCodeCamp/testable-projects-fcc/issues)).

## Objective
Build an app that is functionally similar to this: [Drum Machine Example](https://drum-machine.freecodecamp.rocks/).

Fulfill the user stories below and ensure all tests pass. Use any libraries or APIs you need, and give the project your own personal style.

## Technologies
You can use any combination of the following:
- **HTML**, **JavaScript**, **CSS**, **Bootstrap**, **SASS**, **React**, **Redux**, and **jQuery**.

> **Note**: This section focuses on learning frontend frameworks, so you should use one (e.g., React). Additional technologies not listed above are not recommended and using them is at your own risk. 

We are exploring support for frameworks like Angular and Vue, but they are not currently supported. If you use the suggested stack and encounter issues, we will try to address them.

Happy coding!

---

## User Stories

1. **User Story #1**:  
   I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.

2. **User Story #2**:  
   Within `#drum-machine`, I can see an element with a corresponding `id="display"`.

3. **User Story #3**:  
   Within `#drum-machine`, I can see 9 clickable drum pad elements:  
   - Each has a class name of `drum-pad`.  
   - Each has a unique `id` that describes the audio clip it triggers.  
   - Each has inner text corresponding to one of the following keys: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`.  
   - The drum pads **must** be in this order.

4. **User Story #4**:  
   Within each `.drum-pad`, there should be an HTML5 `<audio>` element with:  
   - A `src` attribute pointing to an audio clip.  
   - A class name of `clip`.  
   - An `id` matching the inner text of its parent `.drum-pad` (e.g., `id="Q"`, `id="W"`, etc.).

5. **User Story #5**:  
   When I click on a `.drum-pad` element, the audio clip contained in its child `<audio>` element should be triggered.

6. **User Story #6**:  
   When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `<audio>` element should be triggered (e.g., pressing the `Q` key triggers the drum pad containing the string `Q`).

7. **User Story #7**:  
   When a `.drum-pad` is triggered, a string describing the associated audio clip should be displayed as the inner text of the `#display` element. Each string must be unique.

---

## Audio Samples
Here are some audio samples you can use for your drum machine:

- Heater 1  
- Heater 2  
- Heater 3  
- Heater 4  
- Clap  
- Open-HH  
- Kick-n'-Hat  
- Kick  
- Closed-HH  

---

## Development Resources

### CodePen Template
You can build your project using this [CodePen template](https://codepen.io/freeCodeCamp/pen/MJjpwO). Click **Save** to create your own pen.

### Test CDN
Alternatively, you can use this CDN link to run the tests in any environment you like:  
[https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js)

---

## Submission
Once you're done, submit the URL to your working project with all tests passing.
```