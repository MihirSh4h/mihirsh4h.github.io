import type { ReactNode } from "react";

export type Essay = {
  slug: string;
  title: string;
  date: string;
  deck: string;
  body: ReactNode;
};

const external = {
  natureReadiness:
    "https://www.nature.com/articles/s41591-025-04198-1",
  decideAi: "https://www.nature.com/articles/s41591-022-01772-9",
  fdaDevices:
    "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices",
  aiChasm: "https://doi.org/10.1038/s41746-025-01693-0",
  rockHealth:
    "https://rockhealth.com/insights/2025-year-end-digital-health-funding-overview-a-tale-of-two-markets/",
  ahrqPractice: "https://www.ahrq.gov/cpi/centers/cepi/dpi.html",
  evidenceNow:
    "https://www.ahrq.gov/evidencenow/projects/heart-health/about/index.html",
  medicaidTelehealth:
    "https://www.medicaid.gov/medicaid/benefits/telehealth",
  gaoEvidence: "https://www.gao.gov/products/gao-23-105460",
  federalData: "https://strategy.data.gov/principles/",
  gaoAi: "https://www.gao.gov/products/gao-21-519sp",
  nistAi: "https://www.nist.gov/itl/ai-risk-management-framework",
  adaMedical: "https://www.ada.gov/resources/medical-care-mobility/",
  adaEquipment:
    "https://www.ada.gov/resources/2024-08-08-mde-fact-sheet/",
  adaTelehealth: "https://www.ada.gov/topics/telehealth/",
  ncdEquipment: "https://www.ncd.gov/report/eames-report/",
  physicianAda: "https://www.healthaffairs.org/doi/10.1377/hlthaff.2021.01136",
  synTnpB: "https://www.science.org/doi/10.1126/science.aed6123",
  alphafold2: "https://www.nature.com/articles/s41586-021-03819-2",
  alphafoldDb: "https://alphafold.ebi.ac.uk/",
  alphafold3: "https://www.nature.com/articles/s41586-024-07487-w",
  esmFold: "https://www.science.org/doi/10.1126/science.ade2574",
  rfdiffusion: "https://www.nature.com/articles/s41586-023-06415-8",
  nobelChemistry:
    "https://www.nobelprize.org/prizes/chemistry/2024/summary/",
  bespokeEditing: "https://www.nejm.org/doi/full/10.1056/NEJMoa2504747",
  synthesisScreening: "https://www.science.org/doi/10.1126/science.adu8578",
  casgevy: "https://www.fda.gov/vaccines-blood-biologics/casgevy",
  natureFinancing: "https://www.nature.com/articles/s41587-025-02723-8",
  ventureGap:
    "https://www.biopharmadive.com/news/biotech-venture-capital-funding-2026-first-half/824881/",
  bioSuccessRates:
    "https://www.bio.org/clinical-development-success-rates-and-contributing-factors-2011-2020",
  dealforma:
    "https://dealforma.com/china-dominates-big-licensing-deals-as-ma-starts-2026-with-a-bang/",
  chinaTracker:
    "https://www.biopharmadive.com/news/china-biotech-drug-licensing-deals-pipeline/758283/",
  novelApprovals:
    "https://www.fda.gov/drugs/novel-drug-approvals-fda/novel-drug-approvals-2025",
  geneTherapyUptake:
    "https://www.biopharmadive.com/news/vertex-earnings-casgevy-q4-2025/812243/",
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatEssayDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export const essays: Essay[] = [
  {
    slug: "proteins-as-design-problems",
    title: "Proteins are becoming design problems",
    date: "2026-07-26",
    deck:
      "A new generation of models can write enzymes that beat the ones evolution supplied. The harder part is everything that has to happen after the sequence exists.",
    body: (
      <>
        <p className="essay-lead">
          For most of the history of molecular biology, a useful protein was
          something you found. You went looking in a hot spring, a soil sample,
          a phage, or a metagenomic dataset, and if you were lucky you came back
          with an enzyme that did roughly what you needed. Then you spent years
          nudging it. Point mutations, directed evolution, a few thousand
          variants if your screen was good. The protein was a given, and your
          job was to negotiate with it.
        </p>

        <p>
          That relationship is changing quickly. On July 16, a team from the
          Innovative Genomics Institute and UC Berkeley reported in{" "}
          <a href={external.synTnpB} target="_blank" rel="noreferrer">
            Science
          </a>{" "}
          that they had designed synthetic RNA-guided nucleases that match or
          beat their natural counterparts in human cells. They started with
          TnpB, the compact transposon-encoded nuclease from which the Cas12
          family is thought to descend, fed its structure into an
          inverse-folding model, and constrained the model&apos;s output with
          evolutionary information about which residues actually tolerate
          change. Out came 1,980 candidate sequences. They screened them in
          bacteria, in Arabidopsis, and in human cells.
        </p>

        <p>
          At one human target, the natural enzyme edited about 28 percent of
          alleles. Two designed variants hit 46 and 50 percent, and at some
          targets the improvement was larger still. The best performer shares
          only 77 percent of its sequence with the wild-type protein, which puts
          it well outside the range of a tweaked homolog. The team also solved
          its structure, the first experimental structure of an AI-designed
          RNA-guided nuclease, and found new hydrogen bonds and electrostatic
          contacts at the interface where the guide RNA meets its DNA target.
          The model had, in effect, proposed a mechanism that nobody asked it
          for.
        </p>

        <h2>How the field got here</h2>

        <p>
          None of this arrived suddenly. It sits on top of about five years of
          compounding work.{" "}
          <a href={external.alphafold2} target="_blank" rel="noreferrer">
            AlphaFold2
          </a>{" "}
          made accurate structure prediction ordinary in 2021, and the{" "}
          <a href={external.alphafoldDb} target="_blank" rel="noreferrer">
            structure database
          </a>{" "}
          that followed now covers more than 200 million sequences. Two years
          later,{" "}
          <a href={external.esmFold} target="_blank" rel="noreferrer">
            protein language models
          </a>{" "}
          showed that structural information emerges from sequence alone at
          scale, fast enough to characterize hundreds of millions of
          metagenomic proteins.{" "}
          <a href={external.alphafold3} target="_blank" rel="noreferrer">
            AlphaFold 3
          </a>{" "}
          extended prediction to complexes: proteins with nucleic acids, with
          small molecules, with ions.
        </p>

        <p>
          Prediction and design are different problems, though, and the design
          side moved on its own track.{" "}
          <a href={external.rfdiffusion} target="_blank" rel="noreferrer">
            RFdiffusion
          </a>{" "}
          showed in 2023 that a generative model could produce protein backbones
          for specified jobs, from nanomolar binders against a named target to
          symmetric assemblies that held up under electron microscopy, and it
          did so while requiring far fewer designs per success than earlier
          methods. The{" "}
          <a href={external.nobelChemistry} target="_blank" rel="noreferrer">
            2024 Nobel Prize in Chemistry
          </a>{" "}
          split the difference between the two lineages, recognizing structure
          prediction and de novo design in the same breath.
        </p>

        <p>
          What the TnpB work adds is a specific kind of discipline. A purely
          generative approach can wander into sequence space that folds
          beautifully and functions poorly. Layering evolutionary constraint on
          top of structural design keeps the proposals near regions where
          catalysis has already been shown to work, while still letting them
          drift a quarter of the way from anything natural. Structure gave the
          model a target, and evolution gave it a list of things it was not
          allowed to break.
        </p>

        <h2>Why a smaller enzyme matters more than a better one</h2>

        <p>
          Editing efficiency in a cell line is a satisfying number, but the
          reason to care about TnpB specifically is size. It is a fraction of
          the length of Cas9. Anyone who has tried to package a gene editor into
          an adeno-associated virus has run into the roughly 4.7 kilobase
          ceiling, and that ceiling has done more to shape which diseases the
          field pursues than most people outside it realize. A compact,
          programmable nuclease with strong activity
          changes the arithmetic of delivery, and delivery is where most gene
          editing programs actually die.
        </p>

        <p>
          The clinical side has started to move at a comparable pace. Last year,
          a team at Penn and CHOP designed a bespoke adenine base editor for a
          single infant with carbamoyl-phosphate synthetase 1 deficiency and
          delivered it in a lipid nanoparticle within months of diagnosis. The{" "}
          <a href={external.bespokeEditing} target="_blank" rel="noreferrer">
            case report
          </a>{" "}
          describes two infusions, more dietary protein tolerated, and the
          nitrogen scavenger dose cut in half. One patient is one patient. But
          it establishes that a therapy can be specified, built, cleared, and
          dosed on a timescale that used to belong to platform development
          rather than patient care.
        </p>

        <p>
          Put the two results next to each other and you get a plausible near
          future: the editor is designed for the target, the delivery vehicle is
          chosen for the tissue, and the protein itself stops being the
          constraint. That is a real shift. It also relocates the bottleneck
          rather than removing it.
        </p>

        <h2>The bottleneck moves to manufacturing and evidence</h2>

        <p>
          Approved editing therapies already show where the friction goes.{" "}
          <a href={external.casgevy} target="_blank" rel="noreferrer">
            Casgevy
          </a>{" "}
          works. The biology is not in question. Uptake still moved at the pace
          of a hospital rather than the pace of the science, because the
          treatment involves stem cell mobilization, apheresis, bespoke
          manufacturing, myeloablative conditioning, and months of coordination
          at a qualified center. Vertex reported{" "}
          <a href={external.geneTherapyUptake} target="_blank" rel="noreferrer">
            301 patient starts in 2025
          </a>{" "}
          against 109 the year before, which is real growth off a small base.
          None of those constraints get easier when the nuclease improves. A
          designed enzyme that edits at 50 percent instead of 28 percent may
          lower the cell dose or widen the therapeutic window. It does nothing
          about apheresis slots or conditioning toxicity.
        </p>

        <p>
          Evidence generation has its own problem, and the design tools are the
          cause of it. If you can produce a thousand plausible enzymes for a
          target, characterization becomes the rate-limiting step. Off-target
          activity, immunogenicity of a sequence that appears nowhere in nature,
          chromosomal rearrangements, long-term persistence: this work scales
          with the number of candidates rather than the speed of the generative
          model. Regulators will reasonably ask what a 77 percent identity
          protein does in tissues nobody screened. The honest answer today is
          that we mostly do not know.
        </p>

        <p>
          There is a version of this field that optimizes hard for the metric
          in the paper and neglects the assays that would catch trouble later.
          Directed evolution had the same failure mode. Design at scale makes it
          cheaper to commit.
        </p>

        <h2>The biosecurity problem is now structural</h2>

        <p>
          The same capability that lets a lab redesign a nuclease lets someone
          redesign a toxin. In October 2025, a team published work in{" "}
          <a
            href={external.synthesisScreening}
            target="_blank"
            rel="noreferrer"
          >
            Science
          </a>{" "}
          describing what happens when you point generative design tools at
          proteins of concern. They produced more than 76,000 redesigned
          sequences across 72 hazardous proteins, ricin being the headline
          example, with altered sequences and preserved predicted structure.
          Depending on the tool, a large majority of those variants slipped past
          the biosecurity screening software that DNA synthesis providers use to
          decide which orders to fill. The screening systems were looking for
          sequence similarity to known agents, which is precisely the property a
          design model erases.
        </p>

        <p>
          The response was partial. The authors spent about ten months working
          with synthesis companies before publishing, patches were written, and
          three of the four major providers deployed them. After patching, a few
          percent of the variants judged most likely to fold and function still
          got through. That residual is the interesting number, because it shows
          the shape of the problem. Screening built on sequence homology is
          defending against a tool whose whole purpose is making homology
          optional, so any durable fix has to reason about function and
          structure and be updated on the same cadence as the models it is
          fighting. Right now that defense rests on the voluntary participation
          of a handful of firms and one research group that happened to look.
        </p>

        <p>
          Slowing the design work down is the wrong response. The TnpB paper is
          the kind of result that makes better medicine possible, and the same
          class of model will be needed to build countermeasures. What the field
          needs is a screening layer funded and maintained as shared
          infrastructure, with mandatory participation for anyone selling
          synthetic DNA, because a capability this cheap to acquire should not
          be met with a defense that runs on goodwill.
        </p>

        <h2>The measurements I would want next</h2>

        <p>
          Parameter counts and benchmark tables are the least informative things
          to ask about here. I would rather know whether designed enzymes hold up
          in primary human cells and in animals, or only in the immortalized
          lines where screening is cheap. I would want the off-target rate
          reported alongside the on-target gain, since a doubling of both is
          worth nothing. And the result that would really change the field is a
          pipeline that can produce a nuclease with a specified PAM requirement
          on demand, because PAM availability, more than raw activity, is what
          decides which mutations are addressable at all.
        </p>

        <p>
          Proteins as design problems is a real conceptual change, and it arrived
          faster than most people working on them expected. The open question is
          whether the surrounding systems can absorb a supply of novel proteins
          that no longer arrives at the pace of evolution or of fieldwork.
          Manufacturing, characterization, regulation, and screening were already
          the slow parts. Their share of the total timeline is about to get much
          larger.
        </p>
      </>
    ),
  },
  {
    slug: "access-is-infrastructure",
    title: "Disability access and the infrastructure of care",
    date: "2026-06-09",
    deck:
      "Access is built into scheduling systems, exam rooms, and software long before a patient meets a clinician. When it is missing, the clinical encounter starts with less information.",
    body: (
      <>
        <p className="essay-lead">
          A healthcare visit runs on a chain of ordinary systems. A patient
          finds information, books a time, travels or logs on, talks to staff,
          gets examined, and follows a plan afterward. Access gets built or lost
          at every link. When one of them assumes a narrow range of bodies,
          senses, or ways of communicating, the encounter begins with less
          information and fewer options than it should.
        </p>

        <p>
          Most organizations still treat accessibility as a request bolted onto
          a standard visit. That puts the work on the patient. People end up
          explaining the same needs to three staff members, coaching a scheduler
          on how to book an interpreter, or discovering after they arrive that
          the clinic cannot do a complete exam with the equipment on hand.
          Building access into scheduling, facilities, communication, and
          follow-up lets a care team prepare instead of improvise.
        </p>

        <h2>Access begins before the encounter</h2>

        <p>
          The first barrier usually appears well before anyone reaches an exam
          room. A website resists assistive technology. A booking flow has
          nowhere to record access needs. A phone tree assumes hearing, quick
          responses, and sustained attention. Transportation ends up determining
          which appointment times exist at all. Any one of these looks minor.
          Stacked, they turn routine care into a project.
        </p>

        <p>
          A good intake process asks what would make the visit work, then routes
          that answer to someone who can act on it. The reply might change the
          room, the equipment, the length of the appointment, the communication
          method, or whether a support person is expected. Staff also need a
          reliable way to confirm arrangements before the patient travels. A
          free-text note that nobody reads until check-in produces the paperwork
          of accommodation without any of the preparation.
        </p>

        <p>
          Needs vary, and they change. A person may have several disabilities,
          experience pain or fatigue differently from one week to the next, or
          use different communication methods in different settings. Some
          disabilities are obvious to staff and many are not. The systems that
          work best let patients supply specifics without having to justify them,
          and they avoid inferring needs from a diagnosis code, since two people
          with the same diagnosis can require completely different conditions for
          a productive visit.
        </p>

        <h2>Clinical quality depends on a usable encounter</h2>

        <p>
          Physical access has diagnostic consequences, which is the part that
          tends to get lost in compliance framing. The Department of
          Justice&apos;s{" "}
          <a href={external.adaMedical} target="_blank" rel="noreferrer">
            guidance on medical care for people with mobility disabilities
          </a>{" "}
          explains why examining someone who stays in their wheelchair can be
          inadequate when the same exam would put another patient on a table.
          Accessible tables, lifts, scales, and trained staff determine which
          observations and measurements a clinician ever gets to make. Treating
          them as amenities misreads what they are, which is a precondition for a
          sound physical exam.
        </p>

        <p>
          Training is the part that gets skipped. In a survey of 714 outpatient
          physicians published in{" "}
          <a href={external.physicianAda} target="_blank" rel="noreferrer">
            Health Affairs
          </a>
          , 35.8 percent said they knew little or nothing about their legal
          responsibilities under the ADA, and 71.2 percent answered incorrectly
          when asked who decides what a reasonable accommodation is. The answer
          is the patient, in consultation with the provider, and getting it
          wrong tends to produce exactly the pattern patients describe: an
          accommodation treated as a favor rather than an obligation, granted or
          refused at the convenience of the clinic.
        </p>

        <p>
          The dependence is sharpest in specialties built around looking and
          touching. Dermatologic care can require viewing areas that are hard to
          reach from a fixed position, taking consistent serial photographs, or
          walking a patient through a regimen that depends on sight and reach.
          The same logic applies when a mammography unit cannot be positioned for
          someone who uses a wheelchair, when a scale excludes anyone who cannot
          stand, or when prep instructions come only in a format the patient
          cannot read independently.
        </p>

        <p>
          The Department of Justice&apos;s 2024 rule on{" "}
          <a href={external.adaEquipment} target="_blank" rel="noreferrer">
            accessible medical diagnostic equipment
          </a>{" "}
          set requirements for state and local government entities that use
          exam tables and weight scales, with a compliance date of August 9,
          2026 for acquiring at least one of each. The{" "}
          <a href={external.ncdEquipment} target="_blank" rel="noreferrer">
            National Council on Disability
          </a>{" "}
          has documented the health consequences that follow when that equipment
          is missing. A deadline moves procurement, and procurement is only the
          first half of the job. Staff still have to know where the lift is, keep
          it charged and unblocked, and be trained to use it without injuring
          anyone. A hoist in a storage closet helps nobody.
        </p>

        <p>
          Communication access shapes clinical reasoning the same way. A
          clinician needs an accurate history and a patient needs to understand
          the choices in front of them. Qualified interpreters, captioning,
          accessible documents, plain language, and a little extra processing
          time determine whether those exchanges are complete. Family members
          often help enormously, though assuming a relative can substitute for
          professional communication services tends to compromise both accuracy
          and privacy.
        </p>

        <h2>Digital care carries the same responsibilities</h2>

        <p>
          Telehealth removes travel, shortens the distance to a specialist, and
          lets people be seen from somewhere familiar. It also introduces fresh
          barriers: inaccessible software, unreliable captioning, identity checks
          that assume dexterity, instructions that depend entirely on visual
          cues. The{" "}
          <a href={external.adaTelehealth} target="_blank" rel="noreferrer">
            Department of Justice&apos;s telehealth guidance
          </a>{" "}
          emphasizes effective communication and reasonable modifications across
          virtual care. Opening a video channel solves for distance and leaves
          every other dimension of access still to be designed.
        </p>

        <p>
          Testing is where digital accessibility usually falls short. Formal
          conformance checks catch some things. Watching someone complete the
          actual task catches more. Teams should sit with people who use screen
          readers, keyboard navigation, switch devices, captions, magnification,
          and alternative input, and they should follow the whole path: account
          creation, consent, document upload, joining the visit, receiving the
          care plan. A platform can pass an audit on its main screens while a
          third-party scheduling widget or an unlabeled PDF breaks the entire
          flow.
        </p>

        <p>
          Hybrid care adds a coordination problem, because access can shift as a
          patient moves between settings. A virtual visit surfaces the need for a
          procedure. An in-person visit hands off to portal-based monitoring.
          Information about communication and mobility needs should travel with
          the care plan, with consent and privacy handled properly. Otherwise the
          patient restarts the explanation at every transition and ends up
          serving as the coordinator of their own accommodations across
          organizations that do not talk to each other.
        </p>

        <h2>Access is maintained through routine work</h2>

        <p>
          Accessible care depends on people and processes at least as much as on
          buildings and software. Leaders can name someone accountable for
          access, write it into procurement, budget for communication services,
          and train staff on realistic scenarios rather than slide decks.
          Scheduling teams need an escalation path. Facilities teams need a way
          to report and fix barriers without a six-month ticket. Clinical teams
          need enough scheduled time to use the equipment and communicate well.
          These are operating decisions, and they are what make access ordinary.
        </p>

        <p>
          Measurement should reach past the completed appointment. Organizations
          can review accommodation requests, cancellations, transfers,
          complaints, and delays while protecting privacy. They can ask whether
          patients with disabilities get preventive services, finish referrals,
          and return for follow-up at comparable rates. The numbers get much more
          useful when someone also asks how a specific barrier arose and why a
          particular workaround succeeded.
        </p>

        <p>
          People with disabilities should shape this work from the start.
          Advisory groups help, provided the engagement has a real scope,
          compensation, accessible materials, and evidence that input changed a
          decision. Consultation convened after the building is finished or the
          platform is bought leaves participants repairing choices they had no
          part in.
        </p>

        <p>
          Universal design reduces how often individual arrangements are needed,
          and individual accommodations remain essential anyway. Adjustable
          equipment, flexible communication, clear navigation, and multiple ways
          to finish a task make care usable for more people. They also give a
          team a better starting position when someone arrives with a need no
          general design anticipated.
        </p>

        <h2>Care becomes trustworthy through preparation</h2>

        <p>
          Accessibility tends to become visible only when something goes wrong,
          which is unfortunate, because its best expression is a visit that feels
          completely unremarkable. The room is ready, the interpreter was booked
          two weeks ago, the lift works, and the discharge instructions arrive in
          a format the patient can actually read. Nobody has to improvise, and
          the appointment gets spent on health rather than logistics.
        </p>

        <p>
          Treating access as infrastructure encourages a longer view. Facilities,
          software, training, and feedback systems all need maintenance, and each
          affects the quality of information moving between patient and
          clinician. Organizations that invest in that shared foundation improve
          the odds that a service can actually be reached, understood, and used
          by the people it was built for.
        </p>
      </>
    ),
  },
  {
    slug: "what-the-drawdown-selected-for",
    title: "What the biotech drawdown selected for",
    date: "2026-07-19",
    deck:
      "Four years of closed windows did more than shrink the sector. They changed which companies got funded, where molecules came from, and what a founder now has to prove.",
    body: (
      <>
        <p className="essay-lead">
          Biotech capital moves in cycles, and everyone in the industry knows
          it. What gets discussed less often is that a cycle is a selection
          mechanism. The 2021 peak funded a particular kind of company. The long
          decline that followed killed a particular kind of company. And the
          recovery now underway is funding something different again, for
          reasons that have more to do with the structure of capital than with
          any change in the underlying science.
        </p>

        <p>
          The headline numbers look good. The XBI has returned more than 80
          percent over the past year, which puts it at a four-year high while
          still sitting well below its February 2021 peak. Biopharma companies
          raised more through IPOs in the first half of 2026 than the sector
          managed in all of 2025. Kailera&apos;s $625 million debut in April set
          a record that lasted about eight weeks before Parabilis raised $670
          million in June. Venture funding in the first half of the year
          exceeded any comparable period since early 2022.
        </p>

        <p>
          Underneath those totals is a distribution that has changed shape. Rounds
          are larger and there are fewer of them. Early-stage funding has been
          weak for several years running, even as megarounds pile into obesity,
          radiopharmaceuticals, and AI-enabled discovery. BioPharma Dive&apos;s
          analysis of the{" "}
          <a href={external.ventureGap} target="_blank" rel="noreferrer">
            first half of 2026
          </a>{" "}
          describes the gap plainly: aggregate capital is up, the number of
          companies absorbing it is down. Nature Biotechnology&apos;s reporting
          on{" "}
          <a href={external.natureFinancing} target="_blank" rel="noreferrer">
            biotech financing
          </a>{" "}
          reached the same place, describing a market that has divided rather
          than recovered.
        </p>

        <h2>Concentration is mostly a bet about exit risk</h2>

        <p>
          Investors defend concentration on quality grounds. The bar rose, weak
          programs stopped getting funded, and some of that is true. The larger
          driver is the arithmetic of a long asset class with an unreliable exit
          window: if you cannot count on being able to raise again in three
          years, the rational move is to fund fewer companies with enough cash to
          reach a value inflection on their own. That produces $200 million
          Series A rounds with three sequenced indications and a syndicate that
          can self-fund to Phase 2.
        </p>

        <p>
          The tradeoff is that the sector runs fewer independent experiments. The{" "}
          <a href={external.bioSuccessRates} target="_blank" rel="noreferrer">
            BIO analysis of clinical development success rates
          </a>{" "}
          put the likelihood of approval from Phase 1 at 7.9 percent, with the
          worst attrition in Phase 2, where fewer than a third of programs
          advance. An asset class with those odds needs a lot of shots. Cutting
          the number of companies while increasing the capital per company
          improves the survival odds of each survivor and reduces the number of
          hypotheses the field tests at all. Whether that is a good trade depends
          on whether you believe the programs that went unfunded were the bad
          ones. I am skeptical that anyone can tell at Series A.
        </p>

        <p>
          The FDA record offers a partial check on the pessimism. CDER approved
          46 novel drugs in 2025, split between{" "}
          <a href={external.novelApprovals} target="_blank" rel="noreferrer">
            new molecular entities and biologics
          </a>
          , which is a healthy year by historical standards and reflects science
          funded during a much more permissive period. Approvals lag capital by
          roughly a decade. The consequences of the 2023 to 2025 funding trough
          will show up in the approval counts of the mid-2030s, long after
          everyone has stopped attributing them to a financing environment.
        </p>

        <h2>The sourcing channel moved east</h2>

        <p>
          The most consequential change of the drawdown had nothing to do with
          American venture capital. While US early-stage funding contracted,
          large pharmaceutical companies discovered they could buy clinical-stage
          assets from Chinese biotechs faster and cheaper than they could build
          or license them domestically. Cross-border out-licensing from Greater
          China reached $137.7 billion in 2025 across 186 deals, against $13.9
          billion across 65 deals in 2021. In the first quarter of 2026 alone the
          figure was about $60 billion, up more than 70 percent year over year.
        </p>

        <p>
          Look at the composition and the shift is starker.{" "}
          <a href={external.dealforma} target="_blank" rel="noreferrer">
            DealForma
          </a>{" "}
          found that among large-cap biopharma in-licensing deals with at least
          $50 million upfront, 38 percent originated in China, and Jefferies
          estimated that roughly a third of the industry&apos;s 2025 licensing
          spend went to China-sourced molecules. BioPharma Dive has been{" "}
          <a href={external.chinaTracker} target="_blank" rel="noreferrer">
            tracking the individual deals
          </a>
          , and the pattern is consistent: fast-follower assets in validated
          mechanisms, generated by well-run development organizations at a
          fraction of the Western cost, with clinical data already in hand.
        </p>

        <p>
          For a US founder this changes the competitive question. It used to be
          enough to have a credible asset in an interesting mechanism. Now a
          business development team at a large pharma can often find a
          Phase 2-ready molecule in the same class, from Shanghai or Suzhou,
          available for an upfront payment that looks like a Series B. Being
          second in a mechanism has become much less valuable, and being first
          has become correspondingly more so. That is a meaningful reordering of
          what early capital should be buying.
        </p>

        <h2>Failure got an infrastructure</h2>

        <p>
          One quieter development of the past three years is that the industry
          built machinery for orderly failure. Public biotechs trading below cash
          became a category, and with them came reverse mergers, tender offers
          with contingent value rights, and what bankers started calling
          liquidation as a service: a structure for returning net cash to
          shareholders while preserving some claim on future proceeds from asset
          sales. Hundreds of companies went through some version of this.
        </p>

        <p>
          It is easy to read that as pure destruction, and much of it was. Good
          programs got shelved because their sponsor ran out of runway rather
          than because the data were bad. But the mechanisms themselves are
          useful, and their absence in earlier cycles caused real waste. A
          company with a failed lead asset and $80 million in the bank should be
          able to hand that money back or hand the shell to a private company
          with a better program, quickly and without a two-year bankruptcy. The
          fact that this now happens routinely is a genuine improvement in
          capital efficiency, even if nobody wants to be on the receiving end.
        </p>

        <h2>Approval turned out to be the middle of the story</h2>

        <p>
          The sharpest lesson of the cycle came from the products that made it
          all the way through. Pfizer withdrew its hemophilia B gene therapy in
          early 2025. BioMarin pulled its hemophilia A therapy, which becomes
          unavailable after May 2026. Bluebird bio, the only company to hold
          three FDA-approved gene therapies, was taken private in June 2025 for
          roughly $30 million plus a contingent value right. None of these were
          clinical failures. The products worked.
        </p>

        <p>
          Even the flagship ramped slowly. Casgevy generated about $116 million
          in 2025 on roughly 64 infusions, with 147 patients reaching cell
          collection and{" "}
          <a href={external.geneTherapyUptake} target="_blank" rel="noreferrer">
            301 starting the process
          </a>{" "}
          during the year. The gap between those numbers is the story. Every step
          between a patient saying yes and a patient being cured runs through
          qualified centers, payer authorization, mobilization, apheresis,
          bespoke manufacturing, and conditioning that carries real toxicity.
          Curative efficacy did not shorten any of it.
        </p>

        <p>
          A cycle that punished companies for missing revenue forecasts taught
          the sector something the science alone would not have. Commercial
          infrastructure, reimbursement design, and site readiness are part of
          the product. They deserve capital and attention on roughly the same
          schedule as the clinical program, and they almost never get it, because
          they are invisible in a Series B deck.
        </p>

        <h2>Questions that travel across cycles</h2>

        <p>
          Three of them have held up for me. The first: what makes this program
          worth doing if a comparable asset is available from a Chinese licensor
          for a $75 million upfront payment? The second: which milestones reduce
          scientific risk and which only extend the runway? The third is the one
          founders tend to defer, which is who administers the product, who pays
          for it, and how many months the treatment journey takes, because those
          answers determine the revenue curve more than the efficacy data does.
        </p>

        <p>
          Recoveries feel like vindication, which makes them a bad moment to
          examine what the downturn selected for. Right now the market rewards
          scale, speed to a validated mechanism, and clean capital structures.
          Those are defensible things to reward and a narrower set of virtues
          than the field will need over twenty years. The companies being funded
          this summer are the ones whose readouts we argue about in 2035.
        </p>
      </>
    ),
  },
  {
    slug: "two-clocks",
    title: "Why clinical timelines and venture timelines disagree",
    date: "2026-03-21",
    deck:
      "Healthcare companies have to learn fast while allowing enough time for evidence, trust, and institutional change to accumulate. Those two demands pull in opposite directions.",
    body: (
      <>
        <p className="essay-lead">
          Startups are taught to convert uncertainty into a sequence of cheap
          experiments. Build something small, put it in front of users, watch
          what happens, revise. The method works because most early decisions can
          be undone. Healthcare keeps the value of fast learning and adds a
          category of decisions whose consequences travel through patients,
          clinicians, budgets, and institutions long after the pilot ends.
        </p>

        <p>
          The result is a standing disagreement about what counts as progress.
          Venture markets want evidence that a company can grow faster than its
          costs. Clinical organizations want confidence that a product will hold
          up across varied patients, staff, and operating conditions. Neither
          side is being unreasonable. The trouble starts when evidence for one
          gets presented as proof of the other.
        </p>

        <h2>Speed means different things in different settings</h2>

        <p>
          In consumer software you can ship a feature to a small cohort, watch
          engagement, and roll it back before lunch. A clinical product may need
          security review, EHR integration, staff training, legal analysis, and a
          documented failure plan before a single user touches it. From outside a
          hospital, that sequence looks like bureaucratic drag. From inside, it is
          how responsibility gets distributed among people who will be
          accountable when something goes wrong.
        </p>

        <p>
          The cost of a bad iteration also differs by orders of magnitude. A
          confusing button in a shopping app costs conversion. A confusing
          recommendation in a medication workflow can delay care or quietly move
          work onto a nurse who never chose the system. Even administrative
          products touch prior authorization, scheduling, and billing, all of
          which affect whether a patient can reach a clinician. Healthcare
          companies still need a high learning rate. They need to be much more
          deliberate about where experimentation is safe and what has to be
          settled first.
        </p>

        <h2>A pilot answers a narrow question</h2>

        <p>
          Pilots are seductive because they generate motion. The startup gets a
          named customer and the institution gets a bounded way to try something
          new. But a pilot often runs on unusually motivated clinicians,
          white-glove support from the founding team, free integration work, and
          a budget that evaporates when the trial ends. Succeeding under those
          conditions demonstrates interest. It does not demonstrate a repeatable
          business.
        </p>

        <p>
          The pilots worth running are designed around a decision. Both sides
          agree in advance on what will be learned, which outcomes matter, who
          acts on the findings, and what result would justify expansion. They
          also establish a real baseline. A tool that saves time for one role
          frequently adds work for another, and forty minutes of charting time
          returned to a physician has no financial value if staffing and
          throughput cannot change in response. Measure the value the buyer can
          actually capture.
        </p>

        <p>
          The current enthusiasm for AI raises the stakes on that distinction.{" "}
          <a href={external.rockHealth} target="_blank" rel="noreferrer">
            Rock Health&apos;s 2025 digital health funding review
          </a>{" "}
          reported that AI-enabled companies took 54 percent of US digital health
          funding, up from 37 percent the year before, with capital landing in
          fewer companies. Some of that enthusiasm reflects real opportunity in
          clinical and administrative work. All of it raises the premium on
          telling a persuasive demo apart from evidence of durable adoption.
        </p>

        <h2>The long middle contains the business model</h2>

        <p>
          Between initial interest and recurring revenue sits a stretch that is
          easy to compress into one slide: procurement, security review,
          integration, validation, training, reimbursement, support, renewal.
          Each item reveals something. Integration shows whether the product can
          live inside existing systems. Validation shows whether the claims
          survive outside a friendly first partner. Renewal shows whether the
          institution still feels the benefit once the excitement of
          implementation has worn off.
        </p>

        <p>
          Founders often describe this as friction around the product. For most
          healthcare companies it becomes a substantial part of the product. A
          repeatable implementation method, an auditable data pipeline, a clear
          clinical escalation process: each one shortens every subsequent
          deployment. When the tenth customer is easier to serve than the first,
          the company has turned experience into an operating advantage that a
          competitor cannot buy.
        </p>

        <p>
          The{" "}
          <a href={external.ahrqPractice} target="_blank" rel="noreferrer">
            Agency for Healthcare Research and Quality&apos;s practice
            improvement work
          </a>{" "}
          is a useful parallel. Producing evidence about effective care does not
          mean practices can adopt it. Programs such as{" "}
          <a href={external.evidenceNow} target="_blank" rel="noreferrer">
            EvidenceNOW
          </a>{" "}
          focus on the support, data, and local capacity that changing daily work
          actually requires. Healthcare companies face the same reality. A useful
          capability creates value only when an organization can absorb it.
        </p>

        <h2>Evidence has several audiences</h2>

        <p>
          Clinical evidence often gets treated as a single milestone on the way
          to market. In practice, different audiences need different forms of
          confidence. A clinician wants to understand performance across patient
          groups and in the hard cases. A compliance team cares about
          traceability and intended use. An executive needs a financial return. A
          patient wants to know how the product influenced a decision and what
          recourse exists when it was wrong.
        </p>

        <p>
          A good evidence plan accumulates those forms of confidence in a
          deliberate order. Early studies establish technical and clinical
          plausibility. Prospective use reveals workflow effects. Broader
          deployments test generalizability and implementation cost. Commercial
          evidence shows whether the value persists once the company reduces its
          direct involvement. The sequence takes years, though each stage can be
          designed so the next one goes faster.
        </p>

        <h2>Capital should match the learning schedule</h2>

        <p>
          The mismatch between clinical and venture clocks usually surfaces as a
          financing problem. Raise against expectations of immediate scale and a
          long evidence cycle starts to look like failure even when the product is
          advancing responsibly. The pressure produces predictable distortions:
          too many pilots, claims running ahead of the data, and custom work that
          books revenue while making the product harder to repeat.
        </p>

        <p>
          Better alignment starts with specificity. A team should know which
          risks can be retired in a quarter, which require a full clinical cycle,
          and which depend on a customer&apos;s budget calendar. Investors can
          then judge whether milestones raise the probability of adoption or
          merely create activity. A year spent generating evidence, clearing a
          regulatory pathway, or building a reusable integration can represent
          real progress when it lowers the cost and uncertainty of everything
          after it.
        </p>

        <p>
          Diligence is most useful when it examines this relationship between
          time and learning. Who carries the implementation burden, which budget
          pays for the product, and what has to remain true after the founding
          team leaves the site? The most revealing question is usually the last
          one: how does evidence from this customer make the next sale easier?
          The answer shows what the slow stretches produce and whether that
          knowledge justifies the runway it consumed.
        </p>

        <p>
          The two clocks will keep disagreeing, because they protect different
          things. A thoughtful healthcare company runs on both and finds a pace
          where product learning stays fast, clinical responsibility stays
          credible, and every deployment makes the next one cheaper. Time turns
          into an advantage when a company spends it building evidence and trust
          that a faster competitor cannot reproduce.
        </p>
      </>
    ),
  },
  {
    slug: "before-the-model-runs",
    title: "What healthcare AI gets wrong before the model runs",
    date: "2026-02-03",
    deck:
      "A model reaches patients through a chain of decisions about data, workflow, authority, and follow-up. Most of its clinical value is determined before inference happens.",
    body: (
      <>
        <p className="essay-lead">
          The case for a clinical AI system usually starts with a clean
          comparison. A model reads an image, summarizes a chart, or estimates a
          patient&apos;s risk, and its output gets measured against a familiar
          benchmark. That comparison tells you something real about the method.
          It tells you very little about whether the system will help a
          particular patient in a particular clinic on a busy Tuesday afternoon.
        </p>

        <p>
          By the time a model produces an answer, most of what determines its
          clinical value has already happened. Someone chose the problem, defined
          the population, assembled the data, decided where the output would
          appear, and assigned responsibility for acting on it. These decisions
          get less scrutiny than accuracy, largely because they resist being
          summarized in a table. They also decide whether a strong model becomes
          a useful tool, a source of extra work, or a hazard nobody notices.
        </p>

        <h2>The clinical question comes first</h2>

        <p>
          A prediction target can be mathematically precise and clinically vague
          at the same time. Take a model that estimates readmission risk. Its
          usefulness depends entirely on what the estimate is supposed to change.
          A care manager might use it to arrange a home visit. A physician might
          alter discharge planning. An insurer might route the patient into a
          support program. Each of those needs a different threshold, a different
          explanation, and a different accounting of what an error costs. The same
          score can support careful medicine in one setting and indiscriminate
          intervention in another.
        </p>

        <p>
          Choosing an outcome also encodes a view about what matters. Length of
          stay, mortality, resource use, and diagnostic agreement are convenient
          to measure and only loosely connected to what patients care about. A
          system optimized for whatever is well-populated in the record can
          easily neglect symptoms, functional status, caregiver burden, or
          whether follow-up is reachable. Before asking how well a model predicts
          an outcome, a clinical team should be able to say why that outcome
          deserves to organize care.
        </p>

        <h2>Data describe a health system as much as a disease</h2>

        <p>
          Clinical data are traces of earlier decisions. A lab value records who
          got tested. A diagnosis code records what a clinician noticed,
          documented, and could bill for. A missed appointment can encode
          transportation, a shift schedule, a caregiving obligation, or a clinic
          that is genuinely hard to reach. Models learn these institutional
          patterns with impressive fidelity and then carry them into settings
          where the patterns no longer hold.
        </p>

        <p>
          External validation helps, though validating across hospitals is only
          part of the work. A deployment team needs to know which patients barely
          appear in the training data, where missingness is itself informative,
          and whether a documentation change upstream could shift the input
          distribution. The question is less about representativeness in the
          abstract and more about whether a hospital can recognize the conditions
          under which the model&apos;s evidence still applies.
        </p>

        <h2>The moment of use changes the intervention</h2>

        <p>
          A prediction has to arrive when someone can still act on it. An alert
          that fires after orders are placed cannot guide the decision it was
          built for. A recommendation living in a separate dashboard asks
          clinicians to remember one more login in an already fragmented day. A
          result routed to a crowded inbox creates responsibility without
          creating the time or authority to discharge it.
        </p>

        <p>
          Good integration therefore starts with observation rather than design.
          Who makes this decision today, and with what information? Which handoff
          is the unreliable one, and what happens to it at two in the morning on
          a holiday weekend? Answers to those questions reveal whether the system
          removes work, moves it to somebody else, or creates a new queue nobody
          owns. Sometimes they reveal that the most valuable intervention is a
          change in staffing or communication, and that the model is beside the
          point.
        </p>

        <p>
          The{" "}
          <a href={external.decideAi} target="_blank" rel="noreferrer">
            DECIDE-AI reporting guideline
          </a>{" "}
          reflects this wider view of evaluation. It asks investigators to
          describe the clinical pathway, the users, human factors, safety events,
          and the changes made during early deployment, which lets a reader
          understand what was actually tested. More recent{" "}
          <a href={external.natureReadiness} target="_blank" rel="noreferrer">
            principles for clinical AI readiness
          </a>{" "}
          make a similar argument about staged evaluation and the organizational
          capacity a system requires to be used responsibly.
        </p>

        <h2>Uncertainty needs an operating procedure</h2>

        <p>
          Clinical AI often gets described as a second opinion. The analogy gets
          slippery once the software is embedded in routine work. A clinician
          under time pressure may defer to a recommendation because it looks
          precise. Another may ignore it entirely after a run of low-value
          alerts. If the interface communicates confidence badly, both responses
          are sensible reactions to an unclear tool.
        </p>

        <p>
          A careful system leaves room for disagreement. It flags cases outside
          its intended use, surfaces the information most relevant to the
          recommendation, and gives users a practical way to contest or escalate
          a result. Disagreement should be captured with enough context to
          support learning rather than filed as evidence that someone failed to
          comply. Some of the most valuable post-deployment information comes from
          the cases where experienced users hesitated.
        </p>

        <p>
          Intended use deserves particular attention. The{" "}
          <a href={external.fdaDevices} target="_blank" rel="noreferrer">
            FDA&apos;s list of AI-enabled medical devices
          </a>{" "}
          shows how narrowly products are cleared. Once a system is in practice,
          convenience pushes outward. A tool validated on one type of image gets
          applied to another. A score designed for triage starts influencing
          treatment. Governance has to follow the real use of the product,
          including the small adaptations nobody documents after launch.
        </p>

        <h2>Deployment begins a new phase of evidence</h2>

        <p>
          Prospective evaluation surfaces effects that retrospective testing
          cannot. Clinicians document differently when they know a model is
          reading the chart. Patients enter a pathway earlier, which changes the
          prevalence of the condition the model was trained to detect. Staffing,
          referral patterns, and available treatments all drift. Performance
          metrics need to sit alongside measures of whether the intended action
          happened, whether care improved, and whether benefits and burdens
          landed evenly.
        </p>

        <p>
          Monitoring also needs an owner. A dashboard nobody is required to read
          provides no protection at all. Hospitals need thresholds that trigger
          investigation, a process for pausing or narrowing a system, and some way
          to hear about errors that never appear in structured data. All of this
          matters more when a model is updated, when a vendor changes an
          interface, or when clinical practice moves.
        </p>

        <p>
          Our{" "}
          <a href={external.aiChasm} target="_blank" rel="noreferrer">
            review of deep learning in otolaryngology
          </a>{" "}
          found the familiar gap between a large research literature and thin
          clinical translation. Dataset quality and model performance were part
          of it. So were prospective comparisons, transparent reporting, workflow
          fit, and whether another institution could interpret the evidence at
          all. A technically sophisticated system still has to survive contact
          with the ordinary variation of care.
        </p>

        <p>
          Healthcare AI deserves rigorous model science and equally disciplined
          attention to everything around the model. The decisions that end up
          mattering most concern who is included in the data, when an output
          appears, how uncertainty is communicated, and who is accountable for
          the next step. Treat those as part of the clinical intervention and an
          evaluation can finally ask the question worth asking, which is whether
          patients are better off.
        </p>
      </>
    ),
  },
  {
    slug: "policy-as-product",
    title: "The public sector is a product environment",
    date: "2026-01-18",
    deck:
      "Public programs work better when policy design accounts for the paths people take through them, the labor required to deliver them, and the feedback needed to fix them.",
    body: (
      <>
        <p className="essay-lead">
          Policy gets described through statutes, regulations, budgets, and press
          releases. People encounter it as an eligibility screen, a letter in the
          mail, a hold queue, a document they cannot find, or a caseworker
          toggling between four systems. The formal rule sets out what a program
          intends. Its forms, handoffs, and operating choices decide how that
          intention actually lands.
        </p>

        <p>
          That makes the public sector a product environment, in a useful if
          imperfect sense. Public programs have users, interfaces, edge cases, and
          observable outcomes. They also carry consequences that run well past
          anything in commercial product development. Nobody switches to a
          different unemployment insurance system when their application fails,
          and no family comparison-shops among state Medicaid programs. The
          absence of an exit gives government a deeper obligation to make its
          services legible and usable.
        </p>

        <h2>A policy has a user journey</h2>

        <p>
          Consider what follows a legislature creating a new benefit. An agency
          translates law into rules. Lawyers and program staff interpret those
          rules. Engineers update systems. Local offices revise procedures.
          Frontline workers explain the result to the public. Applicants have to
          learn the benefit exists, work out whether they qualify, gather
          evidence, complete a process, and understand the decision. Every stage
          adds an opportunity for delay or confusion even when everyone involved
          is acting in good faith.
        </p>

        <p>
          Mapping that path is routine work in product design and equally
          valuable in public administration. The map should cover everyone in the
          delivery chain: residents, clinicians, social workers, benefits staff,
          vendors, oversight bodies, and the community organizations that help
          people navigate all of it. One new field on a form can simplify
          reporting for an agency while generating hours of work for a clinic. A
          fraud-control measure can catch real errors while delaying help for
          people whose income changes week to week. Looking across the whole
          journey makes those transfers of burden visible.
        </p>

        <p>
          Medicaid telehealth policy illustrates the point well. Medicaid is a
          federal-state partnership, so coverage and payment decisions differ
          across states even when the underlying technology is identical. The{" "}
          <a
            href={external.medicaidTelehealth}
            target="_blank"
            rel="noreferrer"
          >
            Centers for Medicare &amp; Medicaid Services
          </a>{" "}
          treats telehealth as a delivery method rather than a distinct benefit.
          In practice its usefulness turns on which services are covered, which
          professionals can provide them, what technology counts, whether patients
          have private space and a decent connection, and how a virtual visit
          feeds into follow-up. A policy change can expand formal coverage and
          leave most of the practical barriers untouched.
        </p>

        <h2>Feedback has to survive the institution</h2>

        <p>
          Private products generate streams of behavioral data that rarely
          explain why anyone struggled. Public programs often have richer signals
          scattered across less connected places. Appeals expose confusing rules.
          Call-center transcripts reveal recurring failure points. Caseworkers
          know which documents people simply do not have. Community groups hear
          from residents who abandoned an application and therefore never appear
          in administrative data at all. A useful feedback system combines these
          perspectives rather than letting the most convenient metric stand in for
          the whole experience.
        </p>

        <p>
          The{" "}
          <a href={external.gaoEvidence} target="_blank" rel="noreferrer">
            Government Accountability Office&apos;s guide to evidence-based
            policymaking
          </a>{" "}
          puts planning, evidence building, evidence use, and continuous
          improvement in one operating cycle. Measurement works best when it
          starts from a decision the program has to make. A dashboard full of
          activity counts can report how many applications were processed while
          saying nothing about whether eligible people got help in time. Defining
          success around an outcome creates room to ask which measures explain
          progress and which groups are missing from the picture.
        </p>

        <p>
          The{" "}
          <a href={external.federalData} target="_blank" rel="noreferrer">
            Federal Data Strategy
          </a>{" "}
          treats responsiveness similarly, as a cycle of establishing a baseline,
          gaining support, collaborating, and refining continuously. Doing that
          requires institutional memory. Feedback loses most of its value when it
          lives inside a temporary pilot or walks out the door with the team that
          collected it. Agencies need durable routines for recording what they
          learn, assigning ownership, and explaining why a service changed.
        </p>

        <p>
          Collection mechanisms alone are not enough. People stay quiet when
          speaking up feels risky, pointless, or burdensome. Programs can lower
          those costs by accepting input through several channels, protecting
          privacy, working through trusted intermediaries, and reporting back on
          what happened. Closing the loop is what turns participation into part of
          governance rather than one more demand on someone&apos;s time.
        </p>

        <h2>The analogy has limits</h2>

        <p>
          Product thinking brings welcome attention to usability, iteration, and
          outcomes. Government still should not be run as a company with
          different branding. Commercial teams can pick a target segment and defer
          everyone else. Public institutions have legal and democratic duties to
          serve people who may be expensive to reach, wary of the system, unable
          to use a digital channel, or affected in ways that resist
          quantification. Equity and due process have to sit in the initial
          design criteria, where they can still change what gets built.
        </p>

        <p>
          Vocabulary does some of the damage. Calling every resident a customer
          obscures the fact that people relate to government as voters, rights holders,
          taxpayers, workers, patients, and members of communities, and each of
          those roles carries a different kind of accountability. The product
          analogy earns its keep when it directs attention to the quality of an
          interaction while leaving intact the public values that make the
          interaction consequential.
        </p>

        <p>
          Frontline staff are central to that quality. They get described as
          resistant to a new process when they are usually responding to
          constraints headquarters cannot see. They know where rules contradict
          each other, which workarounds keep a service moving, and which
          exceptions recur often enough to deserve a formal path. Bringing them in
          early improves implementation and produces a more honest cost estimate.
          It also respects the judgment required to administer programs whose
          written rules will never anticipate every circumstance.
        </p>

        <h2>Technology makes operating choices visible</h2>

        <p>
          Digital systems can shorten applications, connect records, and help
          staff spot patterns that would otherwise stay buried. They can also
          make a flawed decision process faster and much harder to contest. When
          an automated tool touches eligibility, prioritization, fraud review, or
          enforcement, product quality has to include the ability to understand a
          decision, correct bad data, and reach a person with authority to fix an
          exception.
        </p>

        <p>
          The{" "}
          <a href={external.gaoAi} target="_blank" rel="noreferrer">
            GAO AI Accountability Framework
          </a>{" "}
          organizes oversight around governance, data, performance, and
          monitoring. The{" "}
          <a href={external.nistAi} target="_blank" rel="noreferrer">
            NIST AI Risk Management Framework
          </a>{" "}
          treats risk management as work that continues across a
          technology&apos;s life cycle. Both point at the same practical
          principle: deployment creates new obligations for observation and
          adjustment. A procurement checklist completed before launch cannot tell
          you how a system behaves after policies, populations, data sources, or
          staff practices shift.
        </p>

        <p>
          Good public technology therefore needs an operating model wrapped
          around it. Teams need to know who reviews performance, how affected
          people raise concerns, which thresholds trigger intervention, and
          whether a vendor will supply enough information for meaningful
          oversight. They also need the authority and budget to maintain what they
          build. A polished launch followed by years of deferred maintenance
          leaves residents with a service that degrades a little every year until
          somebody writes a report about it.
        </p>

        <h2>Design continues after the announcement</h2>

        <p>
          Policy design improves when implementation is treated as a source of
          knowledge from the beginning. Teams can test language with the people
          who will have to interpret it, simulate hard cases before a system goes
          live, and choose measures that illuminate outcomes rather than
          throughput alone. They can also schedule moments to revisit their
          assumptions, since programs operate in communities where needs,
          technology, and economic conditions keep moving.
        </p>

        <p>
          Politics and value judgments still determine which outcomes get
          priority, how resources are distributed, and which tradeoffs are
          tolerable. Product methods contribute by showing how those choices
          travel through an institution and arrive in somebody&apos;s day. Public
          programs earn trust slowly, when people can understand them, use them
          without unreasonable effort, challenge them when something goes wrong,
          and see evidence that the program learned something.
        </p>
      </>
    ),
  },
];

export const essaysByDate = [...essays].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getEssay(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}
