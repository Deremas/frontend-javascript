// Interfaces with nominal typing using a brand property
interface MajorCredits {
  credits: number;
  _brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  _brand: "MinorCredits";
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits } as MajorCredits;
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits } as MinorCredits;
}

// Example usage to demonstrate nominal typing and the functions
console.log("Demonstrating the functions:");

const majorSubject1: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 4, _brand: "MajorCredits" };

const minorSubject1: MinorCredits = { credits: 1, _brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 2, _brand: "MinorCredits" };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
