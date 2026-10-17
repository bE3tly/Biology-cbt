import { Question } from "../types";

export const familyQuestions: Question[] = [
  {
    id: 161,
    question: "Which of the following reaction conditions represents the Wurtz Reaction, used to prepare symmetrical alkanes from alkyl halides?",
    options: [
      "Heating an alkyl halide with zinc dust in hydrochloric acid",
      "Reacting two molecules of an alkyl halide with metallic sodium in dry ether solvent",
      "Heating a carboxylic acid salt with soda lime",
      "Treating an alkene with hydrogen gas and nickel catalyst"
    ],
    answerIndex: 1,
    explanation: "The Wurtz reaction involves coupling two alkyl halide molecules using metallic sodium in dry ether to synthesize higher symmetrical alkanes (2 R-X + 2 Na -> R-R + 2 NaX)."
  },
  {
    id: 162,
    question: "What is 'soda lime' and what reaction does it catalyze when heated with sodium salts of carboxylic acids?",
    options: [
      "A mixture of Ca(OH)₂ and H₂SO₄; catalyzes esterification",
      "A mixture of NaOH and CaO; catalyzes decarboxylation to produce alkanes",
      "A mixture of Na₂CO₃ and NaCl; catalyzes hydration",
      "A liquid solution of citric acid; catalyzes reduction"
    ],
    answerIndex: 1,
    explanation: "Soda lime is a solid mixture of sodium hydroxide (NaOH) and calcium oxide (CaO). Heating it with a sodium carboxylate (R-COONa) removes carbon dioxide (decarboxylation) to produce an alkane (R-H)."
  },
  {
    id: 163,
    question: "What is the primary organic product of the Kolbe Electrolytic Method when an aqueous solution of sodium acetate (CH₃COONa) is electrolyzed?",
    options: [
      "Methane",
      "Ethane, along with carbon dioxide at the anode",
      "Propane",
      "Methanol"
    ],
    answerIndex: 1,
    explanation: "Kolbe electrolysis of sodium acetate involves anode oxidation of acetate ions (CH₃COO⁻) to form methyl radicals (•CH₃), which couple to produce ethane gas (CH₃-CH₃) and carbon dioxide (CO₂)."
  },
  {
    id: 164,
    question: "Which catalytic system, known as Sabatier-Senderens reaction, is used to convert unsaturated hydrocarbons (alkenes/alkynes) into saturated alkanes?",
    options: [
      "Lithium aluminum hydride in dry ether",
      "Hydrogen gas (H₂) in the presence of finely divided Raney Nickel, Platinum, or Palladium catalyst",
      "Sodium metal in liquid ammonia",
      "Zinc amalgam in concentrated hydrochloric acid"
    ],
    answerIndex: 1,
    explanation: "The Sabatier-Senderens reaction is the catalytic hydrogenation of alkenes or alkynes into alkanes using hydrogen gas (H₂) over a transition metal catalyst (Ni, Pt, or Pd)."
  },
  {
    id: 165,
    question: "What is the Lindlar Catalyst, and what is its specific utility in the reduction of alkynes?",
    options: [
      "Anhydrous aluminum chloride; used to oxidize alkynes",
      "A poisoned palladium catalyst (Pd/CaCO₃ treated with lead acetate or quinoline) that partially reduces alkynes to cis-alkenes",
      "Sodium in liquid ammonia; reduces alkynes to trans-alkenes",
      "Concentrated sulfuric acid; dehydrates alkynes to dienes"
    ],
    answerIndex: 1,
    explanation: "Lindlar's catalyst is a heterogeneous palladium catalyst deactivated (poisoned) with lead or quinoline. It selectively stops the hydrogenation of alkynes at the alkene stage, yielding the cis-alkene (syn addition of hydrogen)."
  },
  {
    id: 166,
    question: "When an alkyne is reduced using sodium or lithium metal in liquid ammonia (Birch reduction), what stereochemical product is obtained?",
    options: [
      "A cis-alkene",
      "A trans-alkene, due to anti-addition of hydrogen through a radical-anion intermediate",
      "A saturated alkane",
      "An alkyl halide"
    ],
    answerIndex: 1,
    explanation: "Reduction of internal alkynes with alkali metals (Na or Li) in liquid ammonia yields trans-alkenes selectively, because the radical-anion intermediates favor the trans-conformation to minimize steric repulsion."
  },
  {
    id: 167,
    question: "What is the product when propyne (CH₃-C≡CH) is treated with water in the presence of dilute H₂SO₄ and mercuric sulfate (HgSO₄) catalyst?",
    options: [
      "Propanal",
      "Propan-1-ol",
      "Propanone (acetone), via keto-enol tautomerism of an unstable enol intermediate",
      "Propane-1,2-diol"
    ],
    answerIndex: 2,
    explanation: "Hydration of alkynes follows Markownikoff's rule. For propyne, addition of H₂O yields an unstable enol intermediate (CH₃-C(OH)=CH₂), which rapidly tautomerizes into the much more stable ketone, propanone (acetone)."
  },
  {
    id: 168,
    question: "Which qualitative test uses an ammoniacal solution of silver nitrate to distinguish terminal alkynes (like propyne) from non-terminal alkynes (like but-2-yne) and alkenes?",
    options: [
      "Fehling's Test",
      "Tollens' Test (forming a white/grey precipitate of silver acetylides due to the acidic nature of terminal alkyne hydrogens)",
      "Lucas Test",
      "iodoform Test"
    ],
    answerIndex: 1,
    explanation: "Terminal alkynes contain acidic C-H bonds (sp-hybridized carbon is highly electronegative). They react with ammoniacal silver nitrate (Tollens' reagent) to precipitate silver acetylides (R-C≡C-Ag). Non-terminal alkynes lack this acidic hydrogen and do not react."
  },
  {
    id: 169,
    question: "In the laboratory, what reagent is used in the Lucas Test to classify alcohols as primary, secondary, or tertiary, and what is the basis of this classification?",
    options: [
      "Sodium metal; based on the volume of hydrogen gas evolved",
      "A mixture of anhydrous Zinc Chloride and concentrated Hydrochloric acid (Lucas Reagent); based on the rate of formation of insoluble alkyl chloride turbidity",
      "Potassium permanganate; based on the change of color from purple to green",
      "Acetic acid; based on the aroma of the ester formed"
    ],
    answerIndex: 1,
    explanation: "Lucas reagent (ZnCl₂/HCl) converts alcohols to alkyl chlorides via an S_N1 mechanism. Tertiary alcohols react instantly (forming a cloudy emulsion of insoluble alkyl halide), secondary alcohols react within 5 minutes, and primary alcohols do not react at room temperature."
  },
  {
    id: 170,
    question: "Which of the following methods represents the Williamson Ether Synthesis?",
    options: [
      "Reaction of an alcohol with concentrated sulfuric acid at 140°C",
      "Nucleophilic substitution (S_N2) of an alkyl halide with a sodium alkoxide (R-ONa + R'-X → R-O-R' + NaX)",
      "Reaction of an alkene with ozone followed by zinc reduction",
      "Heating a carboxylic acid with an alcohol in acid"
    ],
    answerIndex: 1,
    explanation: "The Williamson ether synthesis is an S_N2 reaction where a sodium alkoxide (or phenoxide) acts as a strong nucleophile and attacks a primary alkyl halide to form an asymmetrical or symmetrical ether."
  },
  {
    id: 171,
    question: "What is the product of the reaction between an ester and excess Grignard reagent (R-MgX) after acid hydrolysis?",
    options: [
      "A primary alcohol",
      "A secondary alcohol",
      "A tertiary alcohol (with two identical R groups derived from the Grignard reagent)",
      "An aldehyde"
    ],
    answerIndex: 2,
    explanation: "Grignard reagents add to esters. The first addition forms a ketone intermediate (by expelling the alkoxide leaving group). The ketone then reacts with a second molecule of Grignard reagent to yield a tertiary alcohol after aqueous workup."
  },
  {
    id: 172,
    question: "What are the reagents used in the Clemmensen Reduction and the Wolff-Kishner Reduction to reduce carbonyl groups (-CO-) to methylene groups (-CH₂-)?",
    options: [
      "Clemmensen: LiAlH₄; Wolff-Kishner: NaBH₄",
      "Clemmensen: Zinc amalgam (Zn/Hg) and concentrated HCl; Wolff-Kishner: Hydrazine (NH₂NH₂) and a strong base (KOH) in a high-boiling solvent like ethylene glycol",
      "Clemmensen: H₂/Ni; Wolff-Kishner: Na in liquid NH₃",
      "Clemmensen: HNO₃; Wolff-Kishner: H₂SO₄"
    ],
    answerIndex: 1,
    explanation: "Both reactions reduce ketones/aldehydes to alkanes. Clemmensen reduction uses acidic conditions (Zn(Hg)/HCl), which is ideal for base-sensitive substrates. Wolff-Kishner reduction uses basic conditions (NH₂NH₂/KOH/heat), which is ideal for acid-sensitive substrates."
  },
  {
    id: 173,
    question: "Which qualitative tests can be used to chemically distinguish Aldehydes from Ketones?",
    options: [
      "Bromine water test",
      "Tollens' Test (silver mirror formation) or Fehling's Test (red cuprous oxide precipitation), because aldehydes are easily oxidized whereas ketones are not",
      "Lucas Test or iodoform Test",
      "Lassaigne's Test"
    ],
    answerIndex: 1,
    explanation: "Aldehydes have a hydrogen atom bonded to the carbonyl carbon, making them easy to oxidize. Mild oxidizing agents like Tollens' reagent ([Ag(NH₃)₂]⁺) or Fehling's reagent (Cu²⁺ tartrate complex) oxidize aldehydes to carboxylates, while reducing silver to a metallic mirror or copper to red Cu₂O. Ketones do not react."
  },
  {
    id: 174,
    question: "What is the Aldol Condensation?",
    options: [
      "The oxidation of an alcohol to an aldehyde",
      "A self-condensation reaction of aldehydes or ketones containing at least one alpha-hydrogen, catalyzed by dilute base, to form beta-hydroxy aldehydes (aldols) or beta-hydroxy ketones",
      "The esterification of a carboxylic acid with an aldehyde",
      "The pyrolytic decomposition of an ether"
    ],
    answerIndex: 1,
    explanation: "The Aldol condensation involves a base abstracting an alpha-hydrogen from an aldehyde/ketone to form a nucleophilic enolate ion, which attacks another carbonyl molecule to yield a beta-hydroxy carbonyl compound (an aldol)."
  },
  {
    id: 175,
    question: "Which of the following organic carbonyl compounds undergoes the Cannizzaro Reaction when treated with concentrated (50%) NaOH?",
    options: [
      "Acetaldehyde (ethanal)",
      "Acetone (propanone)",
      "Formaldehyde (methanal) or Benzaldehyde, because they lack alpha-hydrogens",
      "Ethyl acetate"
    ],
    answerIndex: 2,
    explanation: "Carbonyl compounds without alpha-hydrogens (like formaldehyde or benzaldehyde) cannot form enolates. Instead, when treated with highly concentrated base, they undergo the Cannizzaro reaction—a self-redox (disproportionation) yielding one molecule of alcohol and one molecule of carboxylate salt."
  },
  {
    id: 176,
    question: "What is the acid-catalyzed esterification reaction (Fischer Esterification)?",
    options: [
      "The reaction between an aldehyde and a ketone to form an ether",
      "The reversible reaction of a carboxylic acid with an alcohol in the presence of an acid catalyst (like conc. H₂SO₄) to form an ester and water",
      "The reduction of an acyl chloride with hydrogen gas",
      "The hydrolysis of an amide"
    ],
    answerIndex: 1,
    explanation: "Fischer esterification is the thermodynamic, acid-catalyzed condensation of a carboxylic acid and an alcohol, yielding an ester and water in equilibrium."
  },
  {
    id: 177,
    question: "What is the order of decreasing reactivity of carboxylic acid derivatives towards nucleophilic acyl substitution, and what is the key factor?",
    options: [
      "Amides > Esters > Acid Anhydrides > Acyl Halides",
      "Acyl Halides > Acid Anhydrides > Esters > Amides, because halide ions are the best leaving groups and nitrogen is the poorest",
      "They all display identical reactivity",
      "Esters > Amides > Acyl Halides > Acid Anhydrides"
    ],
    answerIndex: 1,
    explanation: "Reactivity depends on leaving group ability (conjugate base stability) and resonance donation. Halide (Cl⁻) is a highly stable conjugate base (excellent leaving group). Amide (NH₂⁻) is a terrible leaving group due to high basicity, and is stabilized by resonance. Thus, the order is: Acyl Halides > Anhydrides > Esters > Amides."
  },
  {
    id: 178,
    question: "What is the name of the reaction where an amide is treated with bromine (Br₂) and potassium hydroxide (KOH) to yield a primary amine with one less carbon atom?",
    options: [
      "Hofmann Degradation (Hofmann Rearrangement)",
      "Gabriel Phthalimide Synthesis",
      "Beckmann Rearrangement",
      "Curtius Reaction"
    ],
    answerIndex: 0,
    explanation: "The Hofmann degradation converts primary amides (RCONH₂) to primary amines (R-NH₂) with one less carbon. The carbonyl carbon is lost as carbonate ion (CO₃²⁻)."
  },
  {
    id: 179,
    question: "Which synthesis is highly preferred for preparing pure primary aliphatic amines without contamination by secondary or tertiary amines?",
    options: [
      "Reaction of ammonia with alkyl halides",
      "Gabriel Phthalimide Synthesis",
      "Hofmann alkylation of amines",
      "Reduction of nitro compounds"
    ],
    answerIndex: 1,
    explanation: "Alkylation of ammonia with alkyl halides always leads to mixtures of 1°, 2°, 3° amines and quaternary ammonium salts. The Gabriel Phthalimide Synthesis uses phthalimide as a protected nitrogen source, allowing nucleophilic substitution followed by hydrolysis to yield exclusively pure 1° amines."
  },
  {
    id: 180,
    question: "What is the product of the Diazotization reaction when aniline (primary aromatic amine) is treated with nitrous acid (NaNO₂ + HCl) at cold temperatures (0-5°C)?",
    options: [
      "Phenol",
      "Nitrobenzene",
      "Benzenediazonium chloride, which is a highly versatile synthetic intermediate for dye coupling and Sandmeyer reactions",
      "Chlorobenzene"
    ],
    answerIndex: 2,
    explanation: "Aniline reacts with nitrous acid at 0-5°C to form stable benzenediazonium chloride (C₆H₅N₂⁺Cl⁻). This salt is a cornerstone of synthetic aromatic chemistry because the diazonium group is an excellent leaving group that can be replaced by -Cl, -Br, -I, -CN, -OH, -H, etc."
  }
];
