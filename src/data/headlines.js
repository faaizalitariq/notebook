export const headlines = [
  { line: "I build the parts", lead: "you ", emphasis: "depend on." },
  { line: "I connect the dots", lead: "behind ", emphasis: "the scenes." },
  { line: "I make the pieces", lead: "work ", emphasis: "together." },
  { line: "Good backends", lead: "leave room to ", emphasis: "grow." },
  { line: "Big changes.", lead: "Small, ", emphasis: "careful steps." },
];

// Choose once per page load so the heading stays put while someone reads.
// Session storage prevents consecutive repeats within the same tab.
function chooseHeadline() {
  let previous;
  try {
    previous = sessionStorage.getItem("notebook-headline");
  } catch {
    // The heading still works when browser storage is unavailable.
  }

  const choices = headlines.filter((headline) => headline.line !== previous);
  const headline = choices[Math.floor(Math.random() * choices.length)];

  try {
    sessionStorage.setItem("notebook-headline", headline.line);
  } catch {
    // Remembering the previous choice is optional.
  }

  return headline;
}

export const headline = chooseHeadline();
