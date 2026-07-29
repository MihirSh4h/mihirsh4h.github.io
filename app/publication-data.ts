export type Publication = {
  year: number;
  authors: string;
  title: string;
  journal: string;
  doi: string;
  note?: string;
};

// Add new publications at the top. The page groups entries by year automatically.
export const publications: Publication[] = [
  {
    year: 2026,
    authors: "Shah MM, Chen JK, Honari G.",
    title:
      "Disparities in Patch Testing for Allergic Contact Dermatitis: Insights From a National Electronic Health Record Dataset.",
    journal: "Dermatitis (2026)",
    doi: "10.1177/17103568261451685",
  },
  {
    year: 2026,
    authors: "Shah MM, Fukaya E, Chen JK, Honari G, Bae GH.",
    title:
      "Clinical Spectrum of Hypersensitivity and Granulomatous Reactions to VenaSeal™ Cyanoacrylate Closure.",
    journal: "Dermatitis (2026)",
    doi: "10.1177/17103568261446233",
  },
  {
    year: 2026,
    authors: "Shah MM, Mohammad AP, Ko JM, Bae GH.",
    title:
      "EPIC Cosmos Analysis of Dupilumab Utilization and Access Disparities in Atopic Dermatitis.",
    journal: "Journal of the American Academy of Dermatology (2026)",
    doi: "10.1016/j.jaad.2026.04.007",
  },
  {
    year: 2026,
    authors:
      "Pattin E, Mangual KPS, Prosperi LR, Prosperi W, Shah MM, Kourosh AS, Murase JE.",
    title:
      "Dermatology’s Ether Moment: Reflecting on the Breakthrough of Anesthesia as a Lens for Recalcitrant Pruritus.",
    journal: "Journal of the American Academy of Dermatology (2026)",
    doi: "10.1016/j.jaad.2026.03.059",
  },
  {
    year: 2026,
    authors: "Mohammad AP, Shiau C, Choi R, Shah MM, Bae GH.",
    title:
      "Shifts in Procedural Dermatology: Increasing Role of PAs and NPs Across Lesion Sizes and Repairs – 2007-2023 MarketScan® Claims Analysis.",
    journal: "Journal of the American Academy of Dermatology (2026)",
    doi: "10.1016/j.jaad.2026.02.053",
  },
  {
    year: 2026,
    authors: "Shah MM, Cheema KS, Feng AS, Rieger KE, Bae GH.",
    title:
      "Kerion as an atypical presentation of tinea capitis in an elderly patient: A case report.",
    journal: "JAAD Case Reports (2026)",
    doi: "10.1016/j.jdcr.2025.11.018",
  },
  {
    year: 2025,
    authors:
      "Qu Y, Huang K, Yin M, Zhan K, Liu D, Yin D, Cousins HC, Johnson WA, Wang X, Shah MM, Altman RB, Zhou D, Wang M, Cong L.",
    title: "CRISPR-GPT for agentic automation of gene-editing experiments.",
    journal: "Nature Biomedical Engineering (2025)",
    doi: "10.1038/s41551-025-01463-z",
  },
  {
    year: 2025,
    authors:
      "Utti V, Bikias T, Agarwal AA, Bikia V, Zhou AY, Shah MM, Daneshjou R.",
    title: "Artificial Intelligence in Dermatology Research and Drug Discovery.",
    journal: "Dermatologic Clinics (2025)",
    doi: "10.1016/j.det.2025.05.008",
  },
  {
    year: 2025,
    authors:
      "Liu GS, Fereydooni S, Lee MC, Polkampally S, Huynh J, Kuchibhotla S, Shah MM, Ayoub NF, Capasso R, Chang MT, Doyle PC, Holsinger FC, Patel ZM, Pepper JP, Sung CK, Creighton FX, Blevins NH, Stankovic KM.",
    title:
      "Scoping review of deep learning research illuminates artificial intelligence chasm in otolaryngology-head and neck surgery.",
    journal: "NPJ Digital Medicine (2025)",
    doi: "10.1038/s41746-025-01693-0",
  },
  {
    year: 2024,
    authors:
      "Shah MM*, Layhadi JA*, Hourcade DE*, Fulton WT, Tan TJ, Dunham D, Chang I, Vel MS, Fernandes A, Lee AS, Liu J, Arunachalam PS, Galli SJ, Boyd SD, Pulendran B, Davis MM, O’Hara R, Park H, Mitchell LM, Akk A, Patterson A, Jerath MR, Monroy JM, Ren Z, Kendall PL, Durham SR, Fedina A, Gibbs BF, Agache I, Chinthrajah S, Sindher SB, Heider A, Akdis CA, Shamji MH, Pham CTN, Nadeau KC.",
    title:
      "Elucidating allergic reaction mechanisms in response to SARS-CoV-2 mRNA vaccination in adults.",
    journal: "Allergy (2024)",
    doi: "10.1111/all.16231",
    note: "*Co-first author",
  },
  {
    year: 2023,
    authors:
      "Tan IL, Perez AR, Lew RJ, Sun X, Baldwin A, Zhu YK, Shah MM, Berger MS, Doudna JA, Fellmann C.",
    title:
      "Targeting the non-coding genome and temozolomide signature enables CRISPR-mediated glioma oncolysis.",
    journal: "Cell Reports (2023)",
    doi: "10.1016/j.celrep.2023.113339",
  },
  {
    year: 2023,
    authors:
      "Gao F, Mallajoysula V, Arunachalam PS, van der Ploeg K, Manohar M, Röltgen K, Yang F, Wirz O, Hoh R, Haraguchi E, Lee JY, Willis R, Ramachandiran V, Li J, Kathuria KR, Li C, Lee AS, Shah MM, Sindher SB, Gonzalez J, Altman JD, Wang TT, Boyd SD, Pulendran B, Jagannathan P, Nadeau KC, Davis MM.",
    title:
      "Robust T cell responses to Pfizer/BioNTech vaccine compared to infection and evidence of attenuated peripheral CD8+ T cell responses due to COVID-19.",
    journal: "Immunity (2023)",
    doi: "10.1016/j.immuni.2023.03.005",
  },
  {
    year: 2023,
    authors:
      "Lee AS, Aguilera J, Efobi JA, Jung YS, Seastedt H, Shah MM, Yang E, Konvinse K, Utz PJ, Sampath V, & Nadeau KC.",
    title:
      "Climate change and public health - The effects of global warming on the risk of allergies and autoimmune diseases.",
    journal: "EMBO Reports (2023)",
    doi: "10.15252/embr.202356821",
  },
  {
    year: 2022,
    authors:
      "Röltgen K, Nielsen SCA, Silva O, Younes SF, Maxim Z, Costales C, Yang F, Wirz OF, Solis D, Hoh RA, Wang A, Arunachalam PS, Colburg D, Zhao S, Haraguchi E, Lee AS, Shah MM, Manohar M, Chang I, Gao F, Mallajosyula V, Li C, Liu J, Shoura MJ, Sindher SB, Parsons E, Dashdorj NJ, Dashdorj ND, Monroe R, Serrano GE, Beach TG, Chinthrajah RS, Charville GW, Wilbur JL, Wohlstadter JN, Davis MM, Pulendran B, Troxell ML, Sigal GB, Natkunam Y, Pinsky BA, Nadeau KC, & Boyd SD.",
    title:
      "Immune imprinting, breadth of variant recognition, and germinal center response in human SARS-COV-2 infection and vaccination.",
    journal: "Cell, 185(6) (2022)",
    doi: "10.1016/j.cell.2022.01.018",
  },
  {
    year: 2021,
    authors:
      "Miller JA, Solis D, Sahoo MK, Arunachalam PS, Lee AS, Shah MM, Liu J, Byambabaatar S, Bat-Ulzii P, Enkhbat A, Batbold E, Zulkhuu D, Ochirsum B, Khurelsukh T, Dalantai G, Burged N, Baatarsuren U, Ariungerel N, Oidovsambuu O, Bungert AS, Genden Z, Yagaanbuyant D, Mordorj A, Pulendran B, Chinthrajah S, Nadeau KC, Jardetzky T, Wilbur JL, Wohlstadter JN, Sigal GB, Pinsky BA, Boyd SD, Dashdorj ND.",
    title:
      "Direct comparison of antibody responses to four SARS-CoV-2 vaccines in Mongolia.",
    journal: "Cell Host & Microbe, 29, 1738–1743 (2021)",
    doi: "10.1016/j.chom.2021.11.004",
  },
  {
    year: 2021,
    authors:
      "Warren CM, Snow TT, Lee AS, Shah MM, Heider A, Blomkalns A, Betts B, Buzzanco AS, Gonzalez J, Chinthrajah RS, Do E, Chang I, Dunham D, Lee G, O'Hara R, Park H, Shamji MH, Schilling L, Sindher SB, Sisodiya D, Smith E, Tsai M, Galli SJ, Akdis C, Nadeau KC.",
    title:
      "Assessment of Allergic and Anaphylactic Reactions to mRNA COVID-19 Vaccines With Confirmatory Testing in a US Regional Health System.",
    journal: "JAMA Network Open, 4(9):e2125524 (2021)",
    doi: "10.1001/jamanetworkopen.2021.25524",
  },
  {
    year: 2021,
    authors:
      "Arunachalam PS, Scott MKD, Hagan T, Li C, Feng Y, Wimmers F, Grigoryan L, Trisal M, Edara VV, Lai L, Chang SE, Feng A, Dhingra S, Shah M, Lee AS, Chinthrajah S, Sindher SB, Mallajosyula V, Gao F, Sigal N, Kowli S, Gupta S, Pellegrini K, Tharp G, Maysel-Auslender S, Hamilton S, Aoued H, Hrusovsky K, Roskey M, Bosinger SE, Maecker HT, Boyd SD, Davis MM, Utz PJ, Suthar MS, Khatri P, Nadeau KC, Pulendran B.",
    title: "Systems vaccinology of the BNT162b2 mRNA vaccine in humans.",
    journal: "Nature, 596, 410–416 (2021)",
    doi: "10.1038/s41586-021-03791-x",
  },
  {
    year: 2021,
    authors:
      "Sampath V*, Rabinowitz G*, Shah M*, Jain S, Diamant Z, Jesenak M, Rabin R, Vieths S, Agache I, Akdis M, Barber D, Breiteneder H, Chinthrajah S, Chivato T, Collins W, Eiwegger T, Fast K, Fokkens W, O'Hehir RE, Ollert M, O'Mahony L, Palomares O, Pfaar O, Riggioni C, Shamji MH, Sokolowska M, Jose Torres M, Traidl-Hoffmann C, van Zelm M, Wang Y, Zhang L, Akdis CA, Nadeau KC.",
    title:
      "Vaccines and allergic reactions: The past, the current COVID-19 pandemic, and future perspectives.",
    journal: "Allergy, 76:1640-1660 (2021)",
    doi: "10.1111/all.14840",
    note: "*Co-first author",
  },
  {
    year: 2018,
    authors:
      "Morrison MA, Payabvash S, Chen Y, Avadiappan S, Shah M, Zou X, Hess CP, Lupo JM.",
    title:
      "A user-guided tool for semi-automated cerebral microbleed detection and volume segmentation: Evaluating vascular injury and data labelling for machine learning.",
    journal: "NeuroImage: Clinical, 20, 498–505 (2018)",
    doi: "10.1016/j.nicl.2018.08.002",
  },
];
