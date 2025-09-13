# 0x04. TypeScript

## 📌 Project Overview  
This project introduces **TypeScript** and its features for writing safer and more maintainable JavaScript code.  
You will learn about TypeScript's type system, interfaces, classes, generics, namespaces, declaration merging, and more — while working with the DOM, external libraries, and building real-world-style solutions.

**Level:** Novice  
**Weight:** 1  
**Project Start:** Sep 8, 2025 12:00 AM  
**Deadline:** Sep 15, 2025 12:00 AM  
**Auto-review:** Will run at the deadline.

---

## 📚 Resources  

- [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 🎯 Learning Objectives  

By the end of this project, you should be able to explain (without using Google):  

- ✅ Basic Types in TypeScript  
- ✅ Interfaces, Classes, and Functions  
- ✅ How to work with the DOM using TypeScript  
- ✅ Generic Types  
- ✅ How to use Namespaces  
- ✅ How to merge Declarations  
- ✅ How to use Ambient Namespaces to import an external library  
- ✅ Basic Nominal Typing in TypeScript  

---

## 🛠️ Requirements  

- **Editors:** `vi`, `vim`, `emacs`, or **Visual Studio Code**  
- All files must end with a **new line**  
- Code will be transpiled on **Ubuntu 18.04**  
- TypeScript code must pass `tsc` compilation with **no errors or warnings**  
- Scripts will be tested with **Jest v24.9.\***  
- Files should use the `.ts` extension where possible  
- A `README.md` is **mandatory** at the root of the project  

---

## ⚙️ Configuration Files  

Each task folder should include the following config files:

task_x/
├── package.json
├── .eslintrc.js
├── tsconfig.json
├── webpack.config.js
└── js/
└── main.ts


These files ensure proper linting, compilation, and bundling.

---

## 📂 Project Tasks  

### **Task 0: Creating an Interface for a Student**

- Define a `Student` interface with `firstName`, `lastName`, `age`, `location`.
- Create 2 students and store them in an array `studentsList`.
- Dynamically render a table with student `firstName` and `location` using TypeScript DOM methods.

**Files:**  
`task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`

---

### **Task 1: Teacher Interface & Extension**

- Create `Teacher` interface with:
  - `firstName` (readonly)
  - `lastName` (readonly)
  - `fullTimeEmployee` (boolean)
  - `yearsOfExperience` (optional number)
  - `location` (string)
  - Allow additional arbitrary attributes
- Extend `Teacher` with `Directors` interface (adds `numberOfReports`).
- Implement `printTeacher` function with interface typing.
- Create `StudentClass` with constructor interface and methods `workOnHomework` and `displayName`.

**Files:**  
`task_1/js/main.ts`, `task_1/webpack.config.js`, `task_1/tsconfig.json`, `task_1/package.json`

---

### **Task 2: Advanced Types**

- Define `DirectorInterface` and `TeacherInterface` with:
  - `workFromHome()`
  - `getCoffeeBreak()`
  - Task methods (`workDirectorTasks` / `workTeacherTasks`)
- Implement `Director` and `Teacher` classes.
- Implement `createEmployee` function returning correct class based on salary.
- Add `isDirector` type predicate and `executeWork` function.
- Add string literal type `Subjects` (`"Math"` or `"History"`) and `teachClass` function.

**Files:**  
`task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`

---

### **Task 3: Ambient Namespaces**

- Create `RowID` type and `RowElement` interface in `interface.ts`.
- Declare type definitions in `crud.d.ts`.
- Import and use CRUD functions in `main.ts` with type safety.

**Files:**  
`task_3/js/interface.ts`, `task_3/js/crud.d.ts`, `task_3/js/main.ts`

---

### **Task 4: Namespaces & Declaration Merging**

- Create namespace `Subjects` with `Teacher` interface, `Subject` class, and language classes (`Cpp`, `Java`, `React`).
- Use declaration merging to add optional attributes for each subject.
- Implement `getRequirements` and `getAvailableTeacher` methods.
- Create `main.ts` to instantiate teachers and log outputs.

**Files:**  
`task_4/js/subjects/*.ts`, `task_4/js/main.ts`, `task_4/package.json`, `task_4/tsconfig.json`

---

### **Task 5: Nominal Typing**

- Define branded types `MajorCredits` and `MinorCredits`.
- Implement `sumMajorCredits` and `sumMinorCredits` functions that return correctly typed results.

**Files:**  
`task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`

---

## 🚀 How to Run  

1. **Install dependencies** (inside each task folder):  
```bash
npm install
```

2. Build project:
```bash
npm run build
```

3. Open in browser (for DOM-related tasks):
 - Open the generated dist/index.html in your browser.
4. Run tests:
```bash
npm test
```

# 🏗️ Example Folder Tree
```lua
0x04-TypeScript/
├── task_0/
│   ├── js/
│   │   └── main.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── webpack.config.js
│   └── .eslintrc.js
├── task_1/
│   ├── js/main.ts
│   ├── package.json
│   └── ...
├── task_2/
│   └── ...
├── task_3/
│   └── ...
├── task_4/
│   └── ...
├── task_5/
│   └── ...
└── README.md
```