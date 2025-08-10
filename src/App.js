import React, { useState, useEffect, useRef } from 'react';
// Tu peux supprimer les imports inutiles
// import logo from './logo.svg';
// import './App.css';

const PERIODIC_TABLE = {
  "H": { atomicNumber: 1, name: "Hydrogène" },
    "He": { atomicNumber: 2, name: "Hélium" },
    "Li": { atomicNumber: 3, name: "Lithium" },
    "Be": { atomicNumber: 4, name: "Béryllium" },
    "B": { atomicNumber: 5, name: "Bore" },
    "C": { atomicNumber: 6, name: "Carbone" },
    "N": { atomicNumber: 7, name: "Azote" },
    "O": { atomicNumber: 8, name: "Oxygène" },
    "F": { atomicNumber: 9, name: "Fluor" },
    "Ne": { atomicNumber: 10, name: "Néon" },
    "Na": { atomicNumber: 11, name: "Sodium" },
    "Mg": { atomicNumber: 12, name: "Magnésium" },
    "Al": { atomicNumber: 13, name: "Aluminium" },
    "Si": { atomicNumber: 14, name: "Silicium" },
    "P": { atomicNumber: 15, name: "Phosphore" },
    "S": { atomicNumber: 16, name: "Soufre" },
    "Cl": { atomicNumber: 17, name: "Chlore" },
    "Ar": { atomicNumber: 18, name: "Argon" },
    "K": { atomicNumber: 19, name: "Potassium" },
    "Ca": { atomicNumber: 20, name: "Calcium" },
    "Sc": { atomicNumber: 21, name: "Scandium" },
    "Ti": { atomicNumber: 22, name: "Titane" },
    "V": { atomicNumber: 23, name: "Vanadium" },
    "Cr": { atomicNumber: 24, name: "Chrome" },
    "Mn": { atomicNumber: 25, name: "Manganèse" },
    "Fe": { atomicNumber: 26, name: "Fer" },
    "Co": { atomicNumber: 27, name: "Cobalt" },
    "Ni": { atomicNumber: 28, name: "Nickel" },
    "Cu": { atomicNumber: 29, name: "Cuivre" },
    "Zn": { atomicNumber: 30, name: "Zinc" },
    "Ga": { atomicNumber: 31, name: "Gallium" },
    "Ge": { atomicNumber: 32, name: "Germanium" },
    "As": { atomicNumber: 33, name: "Arsenic" },
    "Se": { atomicNumber: 34, name: "Sélénium" },
    "Br": { atomicNumber: 35, name: "Brome" },
    "Kr": { atomicNumber: 36, name: "Krypton" },
    "Rb": { atomicNumber: 37, name: "Rubidium" },
    "Sr": { atomicNumber: 38, name: "Strontium" },
    "Y": { atomicNumber: 39, name: "Yttrium" },
    "Zr": { atomicNumber: 40, name: "Zirconium" },
    "Nb": { atomicNumber: 41, name: "Niobium" },
    "Mo": { atomicNumber: 42, name: "Molybdène" },
    "Tc": { atomicNumber: 43, name: "Technétium" },
    "Ru": { atomicNumber: 44, name: "Ruthénium" },
    "Rh": { atomicNumber: 45, name: "Rhodium" },
    "Pd": { atomicNumber: 46, name: "Palladium" },
    "Ag": { atomicNumber: 47, name: "Argent" },
    "Cd": { atomicNumber: 48, name: "Cadmium" },
    "In": { atomicNumber: 49, name: "Indium" },
    "Sn": { atomicNumber: 50, name: "Étain" },
    "Sb": { atomicNumber: 51, name: "Antimoine" },
    "Te": { atomicNumber: 52, name: "Tellure" },
    "I": { atomicNumber: 53, name: "Iode" },
    "Xe": { atomicNumber: 54, name: "Xénon" },
    "Cs": { atomicNumber: 55, name: "Césium" },
    "Ba": { atomicNumber: 56, name: "Baryum" },
    "La": { atomicNumber: 57, name: "Lanthane" },
    "Ce": { atomicNumber: 58, name: "Cérium" },
    "Pr": { atomicNumber: 59, name: "Praséodyme" },
    "Nd": { atomicNumber: 60, name: "Néodyme" },
    "Pm": { atomicNumber: 61, name: "Prométhium" },
    "Sm": { atomicNumber: 62, name: "Samarium" },
    "Eu": { atomicNumber: 63, name: "Europium" },
    "Gd": { atomicNumber: 64, name: "Gadolinium" },
    "Tb": { atomicNumber: 65, name: "Terbium" },
    "Dy": { atomicNumber: 66, name: "Dysprosium" },
    "Ho": { atomicNumber: 67, name: "Holmium" },
    "Er": { atomicNumber: 68, name: "Erbium" },
    "Tm": { atomicNumber: 69, name: "Thulium" },
    "Yb": { atomicNumber: 70, name: "Ytterbium" },
    "Lu": { atomicNumber: 71, name: "Lutécium" },
    "Hf": { atomicNumber: 72, name: "Hafnium" },
    "Ta": { atomicNumber: 73, name: "Tantale" },
    "W": { atomicNumber: 74, name: "Tungstène" },
    "Re": { atomicNumber: 75, name: "Rhénium" },
    "Os": { atomicNumber: 76, name: "Osmium" },
    "Ir": { atomicNumber: 77, name: "Iridium" },
    "Pt": { atomicNumber: 78, name: "Platine" },
    "Au": { atomicNumber: 79, name: "Or" },
    "Hg": { atomicNumber: 80, name: "Mercure" },
    "Tl": { atomicNumber: 81, name: "Thallium" },
    "Pb": { atomicNumber: 82, name: "Plomb" },
    "Bi": { atomicNumber: 83, name: "Bismuth" },
    "Po": { atomicNumber: 84, name: "Polonium" },
    "At": { atomicNumber: 85, name: "Astate" },
    "Rn": { atomicNumber: 86, name: "Radon" },
    "Fr": { atomicNumber: 87, name: "Francium" },
    "Ra": { atomicNumber: 88, name: "Radium" },
    "Ac": { atomicNumber: 89, name: "Actinium" },
    "Th": { atomicNumber: 90, name: "Thorium" },
    "Pa": { atomicNumber: 91, name: "Protactinium" },
    "U": { atomicNumber: 92, name: "Uranium" },
    "Np": { atomicNumber: 93, name: "Neptunium" },
    "Pu": { atomicNumber: 94, name: "Plutonium" },
    "Am": { atomicNumber: 95, name: "Américium" },
    "Cm": { atomicNumber: 96, name: "Curium" },
    "Bk": { atomicNumber: 97, name: "Berkélium" },
    "Cf": { atomicNumber: 98, name: "Californium" },
    "Es": { atomicNumber: 99, name: "Einsteinium" },
    "Fm": { atomicNumber: 100, name: "Fermium" },
    "Md": { atomicNumber: 101, name: "Mendélévium" },
    "No": { atomicNumber: 102, name: "Nobélium" },
    "Lr": { atomicNumber: 103, name: "Lawrencium" },
    "Rf": { atomicNumber: 104, name: "Rutherfordium" },
    "Db": { atomicNumber: 105, name: "Dubnium" },
    "Sg": { atomicNumber: 106, name: "Seaborgium" },
    "Bh": { atomicNumber: 107, name: "Bohrium" },
    "Hs": { atomicNumber: 108, name: "Hassium" },
    "Mt": { atomicNumber: 109, name: "Meitnerium" },
    "Ds": { atomicNumber: 110, name: "Darmstadtium" },
    "Rg": { atomicNumber: 111, name: "Roentgenium" },
    "Cn": { atomicNumber: 112, name: "Copernicium" },
    "Nh": { atomicNumber: 113, name: "Nihonium" },
    "Fl": { atomicNumber: 114, name: "Flérovium" },
    "Mc": { atomicNumber: 115, name: "Moscovium" },
    "Lv": { atomicNumber: 116, name: "Livermorium" },
    "Ts": { atomicNumber: 117, name: "Tennessine" },
    "Og": { atomicNumber: 118, name: "Oganesson" },
};

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
    <path d="M3 12a9 9 0 0 1 9-9c2.39 0 4.68.94 6.4 2.6l-2.4 2.4" />
    <path d="M21 12a9 9 0 0 1-9 9c-2.39 0-4.68-.94-6.4-2.6l2.4-2.4" />
    <path d="M3 7v6h6" />
    <path d="M21 17v-6h-6" />
  </svg>
);

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [foundElement, setFoundElement] = useState(null);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  useEffect(() => {
    if (!input1) {
      setFoundElement(null);
      return;
    }
    const combined = input1 + input2;
    const symbol = combined.charAt(0).toUpperCase() + combined.slice(1).toLowerCase();
    const elementData = PERIODIC_TABLE[symbol];
    if (elementData) {
      setFoundElement({ symbol, ...elementData });
    } else {
      setFoundElement(null);
    }
  }, [input1, input2]);

  const handleInput1Change = (e) => {
    const value = e.target.value.toUpperCase();
    setInput1(value);
    if (value) input2Ref.current.focus();
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value.toUpperCase());
  };

  const handleReset = () => {
    setInput1('');
    setInput2('');
    setFoundElement(null);
    input1Ref.current.focus();
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-md bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-cyan-400 mb-6">
          Code tableau périodique
        </h1>
        
        {/* Section des contrôles (entrées et bouton) */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
          <input
            ref={input1Ref}
            type="text"
            value={input1}
            onChange={handleInput1Change}
            maxLength="1"
            placeholder="1ère"
            className="w-20 h-14 bg-slate-700 text-white text-3xl text-center font-mono rounded-lg border-2 border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition duration-200 outline-none"
            autoFocus
          />
          <input
            ref={input2Ref}
            type="text"
            value={input2}
            onChange={handleInput2Change}
            maxLength="1"
            placeholder="2ème"
            className="w-20 h-14 bg-slate-700 text-white text-3xl text-center font-mono rounded-lg border-2 border-slate-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 transition duration-200 outline-none"
          />
          <button
            onClick={handleReset}
            className="flex items-center justify-center px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition duration-200 h-14"
            title="Réinitialiser"
          >
            <RefreshIcon />
            Reset
          </button>
        </div>

        {/* Section des résultats */}
        <div className="bg-slate-900 rounded-lg p-4 min-h-[120px] flex items-center justify-center transition-all duration-300">
          {foundElement ? (
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-400">
                {foundElement.symbol} - {foundElement.name}
              </p>
              <p className="text-slate-300 mt-2">
                Numéro atomique: {foundElement.atomicNumber}
              </p>
              <p className="text-slate-300">
                Code: {String(foundElement.atomicNumber).padStart(3, '0')}
              </p>
            </div>
          ) : (
            <p className="text-slate-500">Élément inconnu...</p>
          )}
        </div>
      </div>
      <footer className="text-center mt-8 text-slate-500 text-sm">
      </footer>
    </div>
  );
}

export default App;
