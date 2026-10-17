import { Question } from "../types";

export const svgStructureQuestions: Question[] = [
  {
    id: 501,
    question: "Analyze the stereochemical structure shown below. What is the correct IUPAC name of this compound, and is it polar or non-polar?",
    options: [
      "cis-but-2-ene; polar",
      "trans-but-2-ene; non-polar",
      "cis-but-2-ene; non-polar",
      "trans-but-2-ene; polar"
    ],
    answerIndex: 0,
    explanation: "The diagram shows cis-but-2-ene, where both methyl (-CH₃) groups are on the same side of the restricted-rotation double bond (cis configuration). Because of the lack of symmetry, the individual C-sp³ to C-sp² bond dipoles add up vectorially, giving cis-but-2-ene a net dipole moment of approximately 0.33 D (making it weakly polar), whereas trans-but-2-ene has a dipole moment of 0 D due to cancellation by inversion symmetry.",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><line x1="80" y1="70" x2="120" y2="70" stroke="currentColor" stroke-width="4" /><line x1="83" y1="64" x2="117" y2="64" stroke="currentColor" stroke-width="2" /><text x="70" y="76" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><text x="122" y="76" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="68" y1="60" x2="48" y2="35" stroke="currentColor" stroke-width="2" /><text x="25" y="30" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="68" y1="80" x2="48" y2="102" stroke="currentColor" stroke-width="2" /><text x="35" y="112" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H</text><line x1="132" y1="60" x2="152" y2="35" stroke="currentColor" stroke-width="2" /><text x="156" y="30" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text><line x1="132" y1="80" x2="152" y2="102" stroke="currentColor" stroke-width="2" /><text x="156" y="112" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H</text></svg>`
  },
  {
    id: 502,
    question: "Consider the chair conformation of cyclohexane shown below. What is the spatial orientation of the substituent 'X' attached to Carbon-1, and is this conformer more or less stable than the axial conformer?",
    options: [
      "Equatorial; more stable due to minimized 1,3-diaxial steric interactions",
      "Axial; more stable due to hyperconjugation",
      "Equatorial; less stable due to torsional strain",
      "Axial; less stable due to angle strain"
    ],
    answerIndex: 0,
    explanation: "Substituent 'X' is in the equatorial position (lying along the equator of the ring). Equatorial conformers are more stable because they avoid unfavorable 1,3-diaxial steric interactions (also called gauche interactions) with axial hydrogens on carbons 3 and 5, reducing steric strain.",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><line x1="50" y1="70" x2="80" y2="40" stroke="currentColor" stroke-width="2" /><line x1="80" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="2" /><line x1="140" y1="40" x2="160" y2="70" stroke="currentColor" stroke-width="2" /><line x1="160" y1="70" x2="130" y2="100" stroke="currentColor" stroke-width="2" /><line x1="130" y1="100" x2="70" y2="100" stroke="currentColor" stroke-width="2" /><line x1="70" y1="100" x2="50" y2="70" stroke="currentColor" stroke-width="2" /><line x1="160" y1="70" x2="185" y2="75" stroke="currentColor" stroke-width="2" /><text x="190" y="80" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">X</text><line x1="160" y1="70" x2="160" y2="92" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2,2" /><text x="156" y="104" font-family="monospace" font-size="11" fill="currentColor">H</text></svg>`
  },
  {
    id: 503,
    question: "Identify the systematic IUPAC name for the aromatic carboxylic acid derivative shown below:",
    options: [
      "benzoic acid",
      "phenol",
      "benzenol",
      "phenylmethanal"
    ],
    answerIndex: 0,
    explanation: "The structure shows a benzene ring directly attached to a carboxylic acid group (-COOH). This is benzoic acid (systematic IUPAC name: benzenecarboxylic acid, commonly accepted as benzoic acid).",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,50 135,70 135,110 100,130 65,110 65,70" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="56" x2="129" y2="73" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="107" x2="100" y2="124" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="107" x2="71" y2="73" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="50" x2="100" y2="25" stroke="currentColor" stroke-width="2" /><text x="85" y="20" font-family="monospace" font-size="13" font-weight="bold" fill="currentColor">COOH</text></svg>`
  },
  {
    id: 504,
    question: "The compound illustrated below is an unsaturated aldehyde found in smoke and used as a biocide. What is its correct IUPAC name?",
    options: [
      "prop-2-enal",
      "propenol",
      "prop-1-en-3-al",
      "acrylaldehyde"
    ],
    answerIndex: 0,
    explanation: "The structure CH₂=CH-CHO consists of a 3-carbon chain containing an aldehyde group (defining Carbon 1) and a double bond starting at Carbon 2. Therefore, its systematic IUPAC name is prop-2-enal (often commonly called acrolein).",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="20" y="80" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₂</text><line x1="50" y1="70" x2="75" y2="70" stroke="currentColor" stroke-width="4" /><line x1="50" y1="76" x2="75" y2="76" stroke="currentColor" stroke-width="2" /><text x="80" y="80" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH</text><line x1="100" y1="73" x2="125" y2="73" stroke="currentColor" stroke-width="2" /><text x="130" y="80" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH</text><line x1="140" y1="64" x2="140" y2="40" stroke="currentColor" stroke-width="2" /><line x1="146" y1="64" x2="146" y2="40" stroke="currentColor" stroke-width="2" /><text x="138" y="32" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">O</text></svg>`
  },
  {
    id: 505,
    question: "Based on the structure shown below, what is the hybridization of the central carbonyl carbon and its molecular geometry?",
    options: [
      "sp²; trigonal planar",
      "sp³; tetrahedral",
      "sp; linear",
      "sp²; bent"
    ],
    answerIndex: 0,
    explanation: "The central carbon in propan-2-one (acetone) is double-bonded to an oxygen atom and single-bonded to two methyl carbons. It has three regions of electron density (σ bonds) and zero lone pairs, making it sp² hybridized with a trigonal planar geometry and bond angles of approximately 120°.",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="92" y="75" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="88" y1="70" x2="52" y2="70" stroke="currentColor" stroke-width="2" /><text x="14" y="75" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="108" y1="70" x2="144" y2="70" stroke="currentColor" stroke-width="2" /><text x="148" y="75" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text><line x1="97" y1="58" x2="97" y2="34" stroke="currentColor" stroke-width="2" /><line x1="103" y1="58" x2="103" y2="34" stroke="currentColor" stroke-width="2" /><text x="94" y="28" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">O</text></svg>`
  },
  {
    id: 506,
    question: "To synthesize the ester shown in the structural formula below, which carboxylic acid and alcohol should be reacted under acid catalysis (Fischer Esterification)?",
    options: [
      "Ethanoic acid (acetic acid) and Methanol",
      "Methanoic acid (formic acid) and Ethanol",
      "Ethanoic acid and Ethanol",
      "Propanoic acid and Methanol"
    ],
    answerIndex: 0,
    explanation: "The ester shown is methyl acetate (methyl ethanoate), which has an acyl group derived from ethanoic acid (acetic acid, 2 carbons) and an alkoxy group derived from methanol (1 carbon). Acid-catalyzed reaction of ethanoic acid and methanol yields methyl ethanoate and water.",
    svgStructure: `<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="15" y="70" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="47" y1="65" x2="79" y2="65" stroke="currentColor" stroke-width="2" /><text x="83" y="70" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="87" y1="53" x2="87" y2="29" stroke="currentColor" stroke-width="2" /><line x1="93" y1="53" x2="93" y2="29" stroke="currentColor" stroke-width="2" /><text x="86" y="23" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">O</text><line x1="99" y1="65" x2="127" y2="65" stroke="currentColor" stroke-width="2" /><text x="131" y="70" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">O</text><line x1="147" y1="65" x2="175" y2="65" stroke="currentColor" stroke-width="2" /><text x="179" y="70" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text></svg>`
  },
  {
    id: 507,
    question: "Study the Fischer projection of the amino acid alanine shown below. Determine whether it belongs to the D- or L-family and identify its chiral configuration under R/S guidelines.",
    options: [
      "L-alanine; S-configuration",
      "D-alanine; R-configuration",
      "L-alanine; R-configuration",
      "D-alanine; S-configuration"
    ],
    answerIndex: 0,
    explanation: "In the Fischer projection of alanine, with the carboxyl group (-COOH) at the top and methyl (-CH₃) at the bottom, the amino group (-NH₂) is on the left, making it an L-amino acid. Applying CIP priorities: 1: -NH₂, 2: -COOH, 3: -CH₃, 4: -H. Since H is on a horizontal bond, tracing 1 -> 2 -> 3 goes clockwise (which would normally be R), but reversing it gives S-configuration.",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><line x1="100" y1="40" x2="100" y2="120" stroke="currentColor" stroke-width="2" /><line x1="50" y1="80" x2="150" y2="80" stroke="currentColor" stroke-width="2" /><text x="80" y="30" font-family="monospace" font-size="13" font-weight="bold" fill="currentColor">COOH</text><text x="20" y="85" font-family="monospace" font-size="13" font-weight="bold" fill="currentColor">H₂N</text><text x="155" y="85" font-family="monospace" font-size="13" font-weight="bold" fill="currentColor">H</text><text x="85" y="135" font-family="monospace" font-size="13" font-weight="bold" fill="currentColor">CH₃</text></svg>`
  },
  {
    id: 508,
    question: "What is the systematic name of the aromatic compound below, and how does the lone pair on the nitrogen atom affect electrophilic aromatic substitution (EAS)?",
    options: [
      "aniline (benzenamine); strongly activating and ortho/para-directing",
      "nitrobenzene; deactivating and meta-directing",
      "aniline (benzenamine); deactivating and meta-directing",
      "benzamide; weakly activating and ortho/para-directing"
    ],
    answerIndex: 0,
    explanation: "The structure is aniline (benzenamine). The non-bonding lone pair of electrons on the nitrogen atom is delocalized into the aromatic ring's pi-system by resonance, increasing electron density primarily at the ortho and para positions. This makes aniline strongly activated towards electrophilic aromatic substitution.",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="35" stroke="currentColor" stroke-width="2" /><text x="88" y="28" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">NH₂</text></svg>`
  },
  {
    id: 509,
    question: "The compound pictured below yields a characteristic deep violet/purple complex when treated with neutral Iron(III) chloride (FeCl₃) solution. What is this compound's common systematic name, and what is the nature of this test?",
    options: [
      "phenol; test for hydroxyl groups attached directly to an aromatic ring",
      "cyclohexanol; test for aliphatic alcohols",
      "benzoic acid; test for carboxylic acid acidity",
      "benzaldehyde; test for carbonyl reduction"
    ],
    answerIndex: 0,
    explanation: "The compound is phenol (hydroxybenzene). Phenols react with neutral ferric chloride (FeCl₃) to form colored coordination complexes (typically purple/violet due to iron-phenolate complexation), which is a diagnostic test distinguishing phenols from aliphatic alcohols.",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="35" stroke="currentColor" stroke-width="2" /><text x="91" y="28" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">OH</text></svg>`
  },
  {
    id: 510,
    question: "The aromatic dicarboxylic acid monomer pictured below is copolymerized with ethylene glycol to manufacture polyethylene terephthalate (PET) polyester. What is its systematic IUPAC name?",
    options: [
      "benzene-1,4-dicarboxylic acid (terephthalic acid)",
      "benzene-1,2-dicarboxylic acid (phthalic acid)",
      "benzene-1,3-dicarboxylic acid (isophthalic acid)",
      "4-carboxyphenylmethanoic acid"
    ],
    answerIndex: 0,
    explanation: "The structure shows benzene-1,4-dicarboxylic acid (commonly referred to as terephthalic acid). Copolymerization of this dicarboxylic acid with ethane-1,2-diol (ethylene glycol) via ester linkages produces PET, an extremely common plastic and synthetic polyester fiber.",
    svgStructure: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="38" stroke="currentColor" stroke-width="2" /><text x="85" y="32" font-family="monospace" font-size="12" font-weight="bold" fill="currentColor">COOH</text><line x1="100" y1="140" x2="100" y2="162" stroke="currentColor" stroke-width="2" /><text x="85" y="174" font-family="monospace" font-size="12" font-weight="bold" fill="currentColor">COOH</text></svg>`
  },
  {
    id: 511,
    question: "Identify the systematic name for the aromatic compound with a fragrant almond odor illustrated below:",
    options: [
      "benzaldehyde (benzenecarbaldehyde)",
      "benzyl alcohol",
      "benzoic acid",
      "phenyloxirane"
    ],
    answerIndex: 0,
    explanation: "The structure depicts benzaldehyde, also known systematically as benzenecarbaldehyde. It consists of a formyl group (-CHO) attached directly to a benzene ring.",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="35" stroke="currentColor" stroke-width="2" /><text x="85" y="28" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CHO</text></svg>`
  },
  {
    id: 512,
    question: "What is the systematic IUPAC name of the weak carboxylic acid represented below, which is the principal acid constituent of vinegar?",
    options: [
      "ethanoic acid",
      "methanoic acid",
      "propanoic acid",
      "ethyl methanoate"
    ],
    answerIndex: 0,
    explanation: "The compound is ethanoic acid (commonly known as acetic acid). It consists of a 2-carbon chain with a carboxylic acid functional group (-COOH).",
    svgStructure: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="25" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="58" y1="60" x2="90" y2="60" stroke="currentColor" stroke-width="2" /><text x="94" y="65" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="98" y1="48" x2="98" y2="24" stroke="currentColor" stroke-width="2" /><line x1="104" y1="48" x2="104" y2="24" stroke="currentColor" stroke-width="2" /><text x="96" y="18" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">O</text><line x1="110" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="2" /><text x="144" y="65" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">OH</text></svg>`
  },
  {
    id: 513,
    question: "Identify the systematic IUPAC name for the highly flammable ether compound below, historically used as a general anesthetic:",
    options: [
      "ethoxyethane",
      "methoxymethane",
      "1-methoxypropane",
      "propoxyethane"
    ],
    answerIndex: 0,
    explanation: "The structure is CH₃CH₂-O-CH₂CH₃, which represents diethyl ether. The systematic IUPAC name is ethoxyethane, containing two ethyl groups connected by an oxygen atom.",
    svgStructure: `<svg viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="15" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="48" y1="50" x2="78" y2="50" stroke="currentColor" stroke-width="2" /><text x="82" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₂</text><line x1="112" y1="50" x2="132" y2="50" stroke="currentColor" stroke-width="2" /><text x="136" y="55" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">O</text><line x1="152" y1="50" x2="172" y2="50" stroke="currentColor" stroke-width="2" /><text x="176" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₂</text><line x1="206" y1="50" x2="226" y2="50" stroke="currentColor" stroke-width="2" /><text x="230" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₃</text></svg>`
  },
  {
    id: 514,
    question: "Analyze the linear hydrocarbon represented in the structure below. What is its systematic IUPAC name?",
    options: [
      "ethyne",
      "ethene",
      "ethane",
      "propyne"
    ],
    answerIndex: 0,
    explanation: "The structure shows a carbon-carbon triple bond (H-C≡C-H), which is ethyne (commonly known as acetylene). It is the simplest alkyne and is linear with sp hybridized carbons.",
    svgStructure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="35" y="55" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">H</text><line x1="48" y1="50" x2="74" y2="50" stroke="currentColor" stroke-width="2" /><text x="78" y="55" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="92" y1="50" x2="118" y2="50" stroke="currentColor" stroke-width="4" /><line x1="92" y1="44" x2="118" y2="44" stroke="currentColor" stroke-width="1.5" /><line x1="92" y1="56" x2="118" y2="56" stroke="currentColor" stroke-width="1.5" /><text x="122" y="55" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">C</text><line x1="136" y1="50" x2="162" y2="50" stroke="currentColor" stroke-width="2" /><text x="166" y="55" font-family="monospace" font-size="16" font-weight="bold" fill="currentColor">H</text></svg>`
  },
  {
    id: 515,
    question: "What is the systematic name of the aromatic compound below, which is a key precursor to aniline and acts as a deactivating, meta-directing group in EAS?",
    options: [
      "nitrobenzene",
      "benzenamine",
      "phenylamine",
      "benzonitrile"
    ],
    answerIndex: 0,
    explanation: "The structure shows a nitro group (-NO₂) directly attached to a benzene ring, representing nitrobenzene. The nitro group is strongly electron-withdrawing by both induction and resonance, deactivating the ring and directing electrophiles to the meta position.",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="35" stroke="currentColor" stroke-width="2" /><text x="86" y="28" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">NO₂</text></svg>`
  },
  {
    id: 516,
    question: "Study the primary alcohol represented by the chemical structure below. What is its correct IUPAC name?",
    options: [
      "propan-1-ol",
      "propan-2-ol",
      "ethanol",
      "butan-1-ol"
    ],
    answerIndex: 0,
    explanation: "The compound is a straight-chain primary alcohol containing three carbons with the hydroxyl group (-OH) on the first carbon, making its systematic name propan-1-ol.",
    svgStructure: `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="15" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="48" y1="50" x2="74" y2="50" stroke="currentColor" stroke-width="2" /><text x="78" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₂</text><line x1="108" y1="50" x2="134" y2="50" stroke="currentColor" stroke-width="2" /><text x="138" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₂</text><line x1="168" y1="50" x2="188" y2="50" stroke="currentColor" stroke-width="2" /><text x="192" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">OH</text></svg>`
  },
  {
    id: 517,
    question: "What is the systematic name of the primary alcohol illustrated below, commonly found in alcoholic beverages and widely used as a biofuel?",
    options: [
      "ethanol",
      "methanol",
      "propan-1-ol",
      "ethanoic acid"
    ],
    answerIndex: 0,
    explanation: "The structural formula represents ethanol (CH₃CH₂OH), which is a 2-carbon primary alcohol.",
    svgStructure: `<svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><text x="15" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">H₃C</text><line x1="48" y1="50" x2="74" y2="50" stroke="currentColor" stroke-width="2" /><text x="78" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">CH₂</text><line x1="108" y1="50" x2="128" y2="50" stroke="currentColor" stroke-width="2" /><text x="132" y="55" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">OH</text></svg>`
  },
  {
    id: 518,
    question: "Identify the name of the alicyclic hydrocarbon illustrated below. What is its approximate carbon-carbon-carbon bond angle in its most stable envelope conformation?",
    options: [
      "cyclopentane; ~104° to 105°",
      "cyclobutane; ~88°",
      "cyclohexane; ~109.5°",
      "cyclopentene; ~120°"
    ],
    answerIndex: 0,
    explanation: "The structure is a five-membered fully saturated ring, which is cyclopentane. In its planar form, the interior angles would be 108°, but to minimize torsional strain (eclipsing strain) of the C-H bonds, it adopts an 'envelope' conformation, bringing the C-C-C bond angles down slightly to around 104°-105°.",
    svgStructure: `<svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="90,30 130,60 115,110 65,110 50,60" fill="none" stroke="currentColor" stroke-width="2" /></svg>`
  },
  {
    id: 519,
    question: "What is the IUPAC name of the aromatic amide illustrated in the structural formula below?",
    options: [
      "benzamide",
      "benzenamine",
      "benzoic acid",
      "benzylamine"
    ],
    answerIndex: 0,
    explanation: "The structure shows a benzene ring directly attached to an amide group (-CONH₂), which is benzamide (systematic name: benzenecarboxamide).",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="35" stroke="currentColor" stroke-width="2" /><text x="84" y="28" font-family="monospace" font-size="13" font-weight="bold" fill="currentColor">CONH₂</text></svg>`
  },
  {
    id: 520,
    question: "Determine the IUPAC name of the halogenated aromatic compound shown below. How does the halogen atom direct subsequent electrophilic substitution?",
    options: [
      "chlorobenzene; ortho/para-directing but deactivating",
      "chlorobenzene; meta-directing and deactivating",
      "chlorobenzene; ortho/para-directing and activating",
      "benzyl chloride; ortho/para-directing but deactivating"
    ],
    answerIndex: 0,
    explanation: "The structure shows a chlorine atom attached directly to a benzene ring (chlorobenzene). Halogens are unique in EAS: they are deactivating due to their strong inductive electron withdrawal (-I effect), but ortho/para-directing because they can donate a lone pair to stabilize the carbocation intermediate via resonance (+M effect).",
    svgStructure: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" class="mx-auto"><polygon points="100,60 135,80 135,120 100,140 65,120 65,80" fill="none" stroke="currentColor" stroke-width="2" /><line x1="100" y1="66" x2="129" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="129" y1="117" x2="100" y2="134" stroke="currentColor" stroke-width="1.5" /><line x1="71" y1="117" x2="71" y2="83" stroke="currentColor" stroke-width="1.5" /><line x1="100" y1="60" x2="100" y2="35" stroke="currentColor" stroke-width="2" /><text x="91" y="28" font-family="monospace" font-size="14" font-weight="bold" fill="currentColor">Cl</text></svg>`
  }
];
