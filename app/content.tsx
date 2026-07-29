import type { ReactNode } from "react";

export type Essay = {
  slug: string;
  title: string;
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
  gaoAi: "https://www.gao.gov/products/gao-23-106811",
  nistAi: "https://www.nist.gov/itl/ai-risk-management-framework",
  adaMedical: "https://www.ada.gov/resources/medical-care-mobility/",
  adaEquipment:
    "https://www.ada.gov/resources/2024-08-08-mde-fact-sheet/",
  adaTelehealth: "https://www.ada.gov/topics/telehealth/",
  ncdEquipment: "https://www.ncd.gov/report/eames-report/",
};

export const essays: Essay[] = [
  {
    slug: "before-the-model-runs",
    title: "What healthcare AI gets wrong before the model runs",
    deck:
      "A model enters medicine through a chain of decisions about data, workflow, authority, and follow-up. Its clinical value depends on the quality of that chain.",
    body: (
      <>
        <p className="essay-lead">
          The appeal of a clinical AI system often begins with a clean
          comparison. A model reads an image, summarizes a chart, or estimates
          a patient&apos;s risk, and its output is measured against a familiar
          benchmark. The result can tell us whether the underlying method is
          promising. It says much less about whether the system will help a
          particular patient in a particular clinic on a busy Tuesday
          afternoon.
        </p>

        <p>
          Much of what determines clinical value has already happened by the
          time a model produces an answer. Someone has chosen the problem,
          defined the population, assembled the data, decided where the output
          will appear, and assigned responsibility for acting on it. These
          choices tend to receive less attention than accuracy because they are
          harder to summarize in a table. They also shape whether a strong
          model becomes a useful tool, a source of extra work, or an invisible
          source of risk.
        </p>

        <h2>The clinical question comes first</h2>

        <p>
          A prediction target can be mathematically precise while remaining
          clinically vague. Consider a model that estimates the chance of
          readmission. Its usefulness depends on what the estimate is meant to
          change. A care manager might use it to arrange a home visit, a
          physician might alter discharge planning, and an insurer might direct
          a patient into a support program. Each use requires a different
          threshold, a different explanation, and a different understanding of
          the cost of an error. The same score can support responsible care in
          one setting and produce indiscriminate intervention in another.
        </p>

        <p>
          The choice of outcome also carries a view of what matters. Length of
          stay, mortality, resource use, and diagnostic agreement are convenient
          to measure, although they do not necessarily capture a patient&apos;s
          priorities. A system optimized for what is available in the record may
          neglect symptoms, functional status, caregiver burden, or access to
          follow-up. Before asking how well a model predicts an outcome, a
          clinical team should be able to explain why that outcome deserves to
          organize care.
        </p>

        <h2>Data describe a health system as much as a disease</h2>

        <p>
          Clinical data are traces of earlier decisions. A laboratory value
          reflects who received a test. A diagnosis code reflects what a
          clinician noticed, documented, and was able to bill. A missed
          appointment can encode transportation, work schedules, caregiving
          responsibilities, or a clinic that is difficult to reach. Models can
          learn these institutional patterns with impressive consistency, then
          carry them into a setting where the patterns no longer hold.
        </p>

        <p>
          External validation can help address this problem, although validation
          across hospitals is only part of the work. A deployment team also
          needs to know which patients rarely enter the training data, where
          missingness is informative, and whether a change in documentation
          could alter the input distribution. The question extends beyond
          representativeness in the abstract. It concerns whether a hospital can
          recognize the conditions under which the model&apos;s evidence
          applies.
        </p>

        <h2>The moment of use changes the intervention</h2>

        <p>
          A prediction has to arrive when someone can do something with it. An
          alert delivered after orders are placed has little opportunity to
          guide a decision. A recommendation displayed in a separate dashboard
          may require clinicians to remember another login during an already
          fragmented day. A result routed to a crowded inbox can create
          responsibility without creating the time or authority needed to
          respond.
        </p>

        <p>
          Good integration therefore begins with observation. Who currently
          makes the decision? What information do they use? Which handoff is
          unreliable? What happens on nights and weekends? How are exceptions
          resolved? These details reveal whether AI removes work, moves it to
          another person, or creates a new queue that nobody owns. They can also
          show that the most valuable intervention is a simpler change in
          staffing, communication, or access to existing information.
        </p>

        <p>
          The{" "}
          <a href={external.decideAi} target="_blank" rel="noreferrer">
            DECIDE-AI reporting guideline
          </a>{" "}
          reflects this broader view of evaluation. It asks investigators to
          describe the clinical pathway, the users, human factors, safety
          events, and changes made during early deployment. Those details allow
          readers to understand what was tested beyond the model itself. More
          recent{" "}
          <a href={external.natureReadiness} target="_blank" rel="noreferrer">
            principles for clinical AI readiness
          </a>{" "}
          likewise emphasize staged evaluation and the organizational capacity
          required to use a system responsibly.
        </p>

        <h2>Uncertainty needs an operating procedure</h2>

        <p>
          Clinical AI is often described as a second opinion, but the analogy
          becomes slippery when the software is embedded in routine work. A
          clinician may defer to a recommendation because it appears precise,
          especially under time pressure. Another may ignore it after several
          low-value alerts. If the interface communicates confidence poorly,
          both reactions are reasonable responses to an unclear tool.
        </p>

        <p>
          A careful system makes room for disagreement. It identifies cases
          outside the model&apos;s intended use, shows the information most
          relevant to the recommendation, and gives users a practical way to
          contest or escalate the result. Disagreement should be recorded with
          enough context to support learning rather than treated as evidence
          that a clinician failed to comply. Some of the most useful information
          after deployment will come from cases in which experienced users
          hesitate.
        </p>

        <p>
          Intended use deserves particular attention. The{" "}
          <a href={external.fdaDevices} target="_blank" rel="noreferrer">
            FDA&apos;s list of AI-enabled medical devices
          </a>{" "}
          illustrates how products are cleared for defined purposes. Once a
          system enters practice, however, convenience can encourage broader
          use. A tool validated for one type of image may be applied to another.
          A score designed to support triage may begin to influence treatment.
          Governance has to follow the actual use of the product, including the
          small adaptations that accumulate after launch.
        </p>

        <h2>Deployment begins a new phase of evidence</h2>

        <p>
          Prospective evaluation can reveal effects that retrospective testing
          cannot. Clinicians may change how they document when they know a model
          is reading the chart. Patients may enter a care pathway earlier, which
          changes the prevalence of the condition the model is trying to detect.
          Staffing, referral patterns, and available treatments may shift.
          Performance metrics should be paired with measures of whether the
          intended action occurred, whether care improved, and whether benefits
          and burdens were distributed fairly.
        </p>

        <p>
          Monitoring also needs an owner. A dashboard that no one is expected to
          review provides little protection. Hospitals need thresholds for
          investigation, a process for pausing or limiting a system, and a way
          to learn about errors that do not appear in structured data. This work
          becomes more important when a model is updated, when an upstream
          vendor changes an interface, or when clinical practice evolves.
        </p>

        <p>
          Our{" "}
          <a href={external.aiChasm} target="_blank" rel="noreferrer">
            review of deep learning in otolaryngology
          </a>{" "}
          found a familiar gap between a large research literature and limited
          clinical translation. The gap includes dataset quality and model
          performance, along with prospective comparisons, transparent
          reporting, workflow fit, and evidence that another institution can
          interpret. A technically sophisticated system has to survive contact
          with the ordinary variation of care.
        </p>

        <p>
          Healthcare AI deserves rigorous model science, and it also requires
          disciplined attention to everything surrounding the model. The most
          consequential design decisions often concern who is included, when an
          output appears, how uncertainty is communicated, and what happens
          next. When those decisions are treated as part of the clinical
          intervention, the evaluation can examine whether the system helps a
          health system deliver better care with greater consistency and
          judgment.
        </p>
      </>
    ),
  },
  {
    slug: "two-clocks",
    title: "Why clinical timelines and venture timelines disagree",
    deck:
      "Healthcare companies have to learn quickly while allowing enough time for evidence, trust, and institutional change to accumulate.",
    body: (
      <>
        <p className="essay-lead">
          A startup is usually taught to move by turning uncertainty into a
          sequence of experiments. Build something small, put it in front of
          users, observe what happens, and revise. The method works because many
          early decisions are reversible. Healthcare preserves the value of
          rapid learning, while adding decisions whose consequences travel
          through patients, clinicians, budgets, and institutions long after a
          pilot ends.
        </p>

        <p>
          This creates a persistent tension between two ways of measuring
          progress. Venture markets look for signs that a company can grow
          faster than its costs. Clinical organizations look for confidence
          that a product will remain reliable across varied patients, staff,
          and operating conditions. Both are reasonable. Trouble begins when
          the evidence for one kind of progress is presented as proof of the
          other.
        </p>

        <h2>Speed means different things in different settings</h2>

        <p>
          In consumer software, a team can often release a feature to a small
          group, watch engagement, and reverse course within days. A clinical
          product may need security review, integration into an electronic
          health record, training, legal analysis, and a plan for failures
          before the first user interacts with it. These steps can look like
          organizational drag from the outside. Inside a hospital, they are
          part of how responsibility is distributed.
        </p>

        <p>
          The costs of iteration also differ. A confusing button on a shopping
          app might reduce conversion. A confusing recommendation in a
          medication workflow can delay care or shift work to a nurse who did
          not choose the system. Even when a product is aimed at administration,
          errors can affect prior authorization, scheduling, billing, or a
          patient&apos;s ability to reach a clinician. Healthcare companies
          still need a high rate of learning, but they have to choose carefully
          where experimentation is safe and what needs to be settled before use.
        </p>

        <h2>A pilot can answer only a narrow set of questions</h2>

        <p>
          Pilots are attractive because they create movement. They give a
          startup a recognizable customer and give an institution a limited way
          to explore a new capability. Yet a pilot may depend on unusually
          motivated clinicians, white-glove support from the founding team,
          free integration work, or a budget that disappears when the trial
          concludes. Success under those conditions can demonstrate interest
          without demonstrating a repeatable business.
        </p>

        <p>
          Useful pilots are designed around a decision. The company and the
          customer agree on what will be learned, which outcomes matter, who
          will act on the findings, and what conditions would justify
          expansion. They also establish a credible baseline. A tool that saves
          time for one role may add work for another, and a reduction in
          charting time may have little financial value if staffing or
          throughput cannot change. Measurement should follow the value that
          the buyer can actually capture.
        </p>

        <p>
          The current enthusiasm for artificial intelligence makes the
          distinction especially important.{" "}
          <a href={external.rockHealth} target="_blank" rel="noreferrer">
            Rock Health&apos;s 2025 digital health funding review
          </a>{" "}
          reported that AI-enabled companies received more than half of U.S.
          digital health funding, with capital concentrated among a smaller
          group of companies. The enthusiasm reflects genuine opportunities in
          clinical and administrative work. It also raises the value of
          distinguishing a persuasive demonstration from evidence of durable
          adoption.
        </p>

        <h2>The long middle contains the business model</h2>

        <p>
          Between product interest and recurring revenue lies a period that is
          easy to compress in a pitch deck: procurement, security, integration,
          validation, training, reimbursement, support, and renewal. Each item
          reveals something about the company. Integration shows whether the
          product can fit into existing systems. Validation shows whether its
          claims survive outside an early partner. Renewal shows whether the
          institution feels the benefit after the excitement of implementation
          fades.
        </p>

        <p>
          Founders sometimes describe this work as friction around the product.
          For many healthcare companies, it becomes a substantial part of the
          product. A reliable implementation method, an auditable data
          pipeline, or a clear clinical escalation process can shorten every
          later deployment. When the tenth customer is easier to serve than the
          first, the company has converted experience into an operating
          advantage.
        </p>

        <p>
          The{" "}
          <a href={external.ahrqPractice} target="_blank" rel="noreferrer">
            Agency for Healthcare Research and Quality&apos;s practice
            improvement work
          </a>{" "}
          offers a useful parallel. Producing evidence about effective care does
          not guarantee that practices can adopt it. Programs such as{" "}
          <a href={external.evidenceNow} target="_blank" rel="noreferrer">
            EvidenceNOW
          </a>{" "}
          focus on the support, data, and local capacity required to change
          daily work. A healthcare company faces the same implementation
          reality. A useful capability creates value only when an organization
          can incorporate it.
        </p>

        <h2>Evidence has several audiences</h2>

        <p>
          Clinical evidence is sometimes treated as a single milestone on the
          route to market. In practice, different audiences need different
          forms of confidence. A clinician may want to understand performance
          across patient groups and difficult cases. A compliance team may care
          about traceability and intended use. An executive may need evidence
          of financial return. A patient may want to know how the product
          influences a decision and what recourse exists when it is wrong.
        </p>

        <p>
          A useful evidence plan accumulates these forms of confidence in a
          deliberate order. Early studies can establish technical and clinical
          plausibility. Prospective use can reveal workflow effects. Broader
          deployments can test generalizability and implementation cost.
          Commercial evidence can then show whether value persists after the
          company reduces its direct involvement. The sequence takes time,
          although each stage can be designed to answer questions that make the
          next stage faster.
        </p>

        <h2>Capital should match the learning schedule</h2>

        <p>
          A mismatch between clinical and venture timelines often becomes a
          financing problem. If a company raises money against expectations of
          immediate scale, a long evidence cycle can appear to be failure even
          when the product is advancing responsibly. The pressure may encourage
          too many pilots, claims that run ahead of the data, or customization
          that creates revenue while making the product harder to repeat.
        </p>

        <p>
          Better alignment starts with specificity. A team should know which
          risks can be retired within a quarter, which require a full clinical
          cycle, and which depend on a customer&apos;s budgeting calendar.
          Investors can then evaluate whether milestones increase the
          probability of adoption rather than merely create activity. A year
          spent producing evidence, completing a regulatory pathway, or
          building a reusable integration can represent substantial progress
          when it lowers the cost and uncertainty of future growth.
        </p>

        <p>
          Diligence is most useful when it examines this relationship between
          time and learning. Who carries the implementation burden? Which
          budget pays for the product? What must remain true after the founding
          team leaves the site? How does evidence from one customer make the
          next sale easier? The answers show what the slow parts of the journey
          produce and whether the knowledge will justify the runway they
          consume.
        </p>

        <p>
          Clinical and venture timelines will continue to disagree because they
          protect different forms of value. A thoughtful healthcare company
          works with both clocks and develops a pace at which product learning
          remains rapid, clinical responsibility remains credible, and each
          deployment makes the business more repeatable. Time becomes an
          advantage when the company uses it to build evidence and trust that a
          faster competitor cannot easily reproduce.
        </p>
      </>
    ),
  },
  {
    slug: "policy-as-product",
    title: "The public sector is a product environment",
    deck:
      "Public programs become more effective when policy design includes the paths people take through them, the work required to deliver them, and the feedback needed to improve them.",
    body: (
      <>
        <p className="essay-lead">
          Policy is often described through statutes, regulations, budgets, and
          announcements. People encounter it through a different set of
          objects: an eligibility screen, a letter in the mail, a call-center
          queue, a required document, or a caseworker who has several systems
          open at once. The formal rule establishes what a program intends to
          do. Its forms, handoffs, and operating choices determine how that
          intention is experienced.
        </p>

        <p>
          This makes the public sector a product environment in a useful, if
          imperfect, sense. Public programs have users, interfaces, edge cases,
          and outcomes that can be observed. They also have consequences that
          reach far beyond the conventions of commercial product development. A
          person cannot simply choose another unemployment insurance system
          when an application fails, and a family cannot comparison-shop among
          state Medicaid programs. The absence of an easy exit gives government
          a deeper obligation to make its services understandable and usable.
        </p>

        <h2>A policy has a user journey</h2>

        <p>
          Consider what happens after a legislature creates a new benefit. An
          agency translates the law into rules. Lawyers and program staff
          interpret those rules, engineers update systems, local offices change
          procedures, and frontline workers explain the result to the public.
          Applicants must learn that the benefit exists, determine whether they
          qualify, assemble evidence, complete a process, and understand the
          decision. Each stage adds an opportunity for delay or confusion, even
          when every participant is acting reasonably.
        </p>

        <p>
          Mapping that path is familiar work in product design, and it is
          equally valuable in public administration. The map should include
          everyone who participates in delivery: residents, clinicians, social
          workers, benefits staff, vendors, oversight bodies, and community
          organizations that help people navigate the system. A new field on a
          form might simplify reporting for an agency while creating hours of
          work for a clinic. A fraud-control measure might catch genuine errors
          while also delaying assistance for people whose income changes from
          week to week. Looking across the entire journey makes these transfers
          of burden easier to see.
        </p>

        <p>
          Medicaid telehealth policy offers a good illustration. Medicaid is a
          federal-state partnership, so coverage and payment choices vary
          across states even when they respond to the same technology. The{" "}
          <a
            href={external.medicaidTelehealth}
            target="_blank"
            rel="noreferrer"
          >
            Centers for Medicare &amp; Medicaid Services
          </a>{" "}
          describes telehealth as a delivery method rather than a distinct
          benefit. In practice, its usefulness depends on which services are
          covered, which professionals may provide them, what technology is
          permitted, whether patients have private space and connectivity, and
          how a visit fits into follow-up care. A policy change can expand
          formal coverage while leaving several practical barriers in place.
        </p>

        <h2>Feedback has to survive the institution</h2>

        <p>
          Private products generate streams of behavioral data, though those
          data do not always reveal why people struggle. Public programs often
          have richer signals distributed across less connected places.
          Appeals reveal confusing rules. Call-center transcripts expose
          recurring points of failure. Caseworkers learn which documents people
          rarely have. Community groups hear about problems from residents who
          never finish an application and therefore disappear from
          administrative data. A useful feedback system combines these
          perspectives instead of allowing the easiest metrics to stand in for
          the whole experience.
        </p>

        <p>
          The{" "}
          <a href={external.gaoEvidence} target="_blank" rel="noreferrer">
            Government Accountability Office&apos;s guide to evidence-based
            policymaking
          </a>{" "}
          places planning, evidence building, evidence use, and continuous
          improvement in the same operating cycle. Measurement works best when
          it begins with a decision the program needs to make. A dashboard full
          of activity measures can show how many applications were processed
          while saying little about whether eligible people received help in
          time. Defining success around an outcome creates space to ask which
          measures will explain progress and which groups may be missing from
          the picture.
        </p>

        <p>
          The{" "}
          <a href={external.federalData} target="_blank" rel="noreferrer">
            Federal Data Strategy
          </a>{" "}
          similarly treats responsiveness as an ongoing cycle of establishing
          a baseline, engaging stakeholders, gathering input, and refining a
          program. This work requires institutional memory. Feedback loses much
          of its value when it lives in a temporary pilot or leaves with the
          team that collected it. Agencies need durable routines for recording
          what they learn, assigning responsibility, and explaining why a
          service changed.
        </p>

        <p>
          Feedback also needs more than a collection mechanism. People are less
          likely to describe problems when doing so feels risky, futile, or
          burdensome. Programs can reduce those costs by accepting input
          through several channels, protecting privacy, working with trusted
          intermediaries, and reporting back on what happened. Closing the loop
          helps residents see participation as part of governance rather than
          another request for their time.
        </p>

        <h2>The analogy has limits</h2>

        <p>
          Product thinking can bring welcome attention to usability, iteration,
          and outcomes, but government should not be treated as a company with
          different branding. Commercial teams can choose a target segment and
          leave other customers for later. Public institutions have legal and
          democratic duties to serve people who may be expensive to reach,
          suspicious of the system, unable to use a digital channel, or
          affected in ways that are difficult to quantify. Equity and due
          process belong in the initial design criteria.
        </p>

        <p>
          Language matters here. Calling every resident a customer can obscure
          the fact that people relate to government as voters, rights holders,
          taxpayers, workers, patients, and members of communities. Each role
          carries a different form of accountability. The product analogy is
          most helpful when it directs attention to the quality of an
          interaction while preserving the public values that make the
          interaction consequential.
        </p>

        <p>
          Frontline staff are central to that quality. They are sometimes
          described as resistance to a new process when they are responding to
          constraints that a policy team cannot see from headquarters. They
          know where rules conflict, which workarounds keep a service moving,
          and which exceptions recur often enough to deserve a formal path.
          Involving them early improves implementation and produces a more
          honest picture of cost. It also respects the judgment required to
          administer programs whose written rules will never anticipate every
          circumstance.
        </p>

        <h2>Technology makes operating choices visible</h2>

        <p>
          Digital systems can shorten applications, connect records, and help
          staff identify patterns that would otherwise remain buried. They can
          also make a flawed decision process faster and harder to contest. When
          an automated tool affects eligibility, prioritization, fraud review,
          or enforcement, product quality includes the ability to understand a
          decision, correct bad data, and reach a person with authority to
          resolve an exception.
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
          likewise treats risk management as work that continues across a
          technology&apos;s life cycle. Both frameworks point toward a
          practical principle: deployment creates new responsibilities for
          observation and adjustment. A procurement checklist completed before
          launch cannot reveal how a system behaves after policies,
          populations, data sources, or staff practices change.
        </p>

        <p>
          Good public technology therefore needs an operating model around it.
          Teams need to know who reviews performance, how affected people can
          raise concerns, which thresholds trigger intervention, and whether a
          vendor can provide enough information for meaningful oversight. They
          also need the authority and budget to maintain what they build. A
          polished launch followed by years of deferred maintenance leaves
          residents with a service whose quality declines quietly.
        </p>

        <h2>Design continues after the announcement</h2>

        <p>
          Policy design improves when implementation is treated as a source of
          knowledge from the beginning. Teams can test language with the people
          who must interpret it, simulate difficult cases before a system goes
          live, and choose measures that illuminate outcomes as well as
          throughput. They can also schedule moments to revisit assumptions,
          since programs operate in communities where needs, technology, and
          economic conditions continue to change.
        </p>

        <p>
          Politics and value judgments still shape which outcomes receive
          priority, how resources are distributed, and which tradeoffs are
          acceptable. Product methods contribute by showing how those choices
          travel through an institution and arrive in someone&apos;s day. A
          public program earns trust gradually when people can understand it,
          use it without unnecessary effort, challenge it when something goes
          wrong, and see that it learns from experience.
        </p>
      </>
    ),
  },
  {
    slug: "access-is-infrastructure",
    title: "Disability access and the infrastructure of care",
    deck:
      "Disability access shapes the information, spaces, and routines through which healthcare becomes clinically useful.",
    body: (
      <>
        <p className="essay-lead">
          A healthcare encounter depends on a chain of ordinary systems. A
          patient finds information, schedules an appointment, travels or
          connects to a visit, communicates with staff, receives an
          examination, and follows a plan afterward. Disability access is
          created across that chain. When one link assumes a narrow range of
          bodies, senses, or ways of communicating, the clinical encounter
          begins with less information and fewer options.
        </p>

        <p>
          Accessibility is sometimes handled as a special request attached to
          an otherwise standard visit. That approach places too much
          responsibility on the patient and too little on the operation. People
          may have to repeat the same needs to several staff members, explain
          how to arrange an interpreter, or discover after arriving that the
          available equipment cannot support a complete exam. Designing access
          into scheduling, facilities, communication, and follow-up allows care
          teams to prepare rather than improvise.
        </p>

        <h2>Access begins before the encounter</h2>

        <p>
          The first barrier often appears before anyone enters an examination
          room. A website may be difficult to navigate with assistive
          technology. A booking system may have no place to record access
          needs. A phone tree may require hearing, quick responses, or sustained
          concentration. Transportation may determine which appointment times
          are possible. Each obstacle can look modest in isolation while their
          accumulation makes care exhausting or unavailable.
        </p>

        <p>
          A well-designed intake process asks what will help the visit work and
          sends that information to people who can act on it. The answer might
          affect the room, equipment, appointment length, communication method,
          or presence of a support person. Staff also need a reliable way to
          confirm arrangements before the patient travels. A free-text note
          that no one sees until check-in creates the appearance of
          documentation without the benefit of preparation.
        </p>

        <p>
          Access needs are diverse and can change. A person may have several
          disabilities, experience fatigue or pain differently from one day to
          the next, or use different communication methods depending on the
          setting. Some disabilities are apparent to staff, while many are not.
          The most useful systems make room for individual information without
          forcing patients to defend it. They also avoid relying on diagnosis
          alone, since two people with the same diagnosis may need very
          different conditions for a productive visit.
        </p>

        <h2>Clinical quality depends on a usable encounter</h2>

        <p>
          Physical access has direct diagnostic consequences. The Department of
          Justice&apos;s{" "}
          <a href={external.adaMedical} target="_blank" rel="noreferrer">
            guidance on medical care for people with mobility disabilities
          </a>{" "}
          explains why examining a patient while they remain in a wheelchair
          can be inadequate when the same examination would place another
          patient on a table. Accessible examination tables, lifts, scales, and
          trained staff influence which observations and measurements are
          available to a clinician. These features belong to the conditions of
          a sound exam.
        </p>

        <p>
          The relationship is especially clear in specialties that depend on
          visual or physical examination. Dermatologic care may require viewing
          areas that are difficult to see from a fixed position, taking
          consistent photographs, or helping a patient follow a treatment plan
          involving touch and sight. Similar issues arise when a mammography
          machine cannot be positioned for someone who uses a wheelchair, when
          a scale excludes people who cannot stand, or when diagnostic
          instructions are unavailable in a format the patient can use
          independently.
        </p>

        <p>
          The Department of Justice&apos;s 2024 rule on{" "}
          <a href={external.adaEquipment} target="_blank" rel="noreferrer">
            accessible medical diagnostic equipment
          </a>{" "}
          sets requirements for state and local government entities that use
          equipment such as examination tables and weight scales. The{" "}
          <a href={external.ncdEquipment} target="_blank" rel="noreferrer">
            National Council on Disability
          </a>{" "}
          has also documented the health consequences associated with
          inaccessible equipment. The policy details matter, and so does the
          operational work around them. Equipment helps only when staff know
          where it is, keep it available, and are trained to use it safely.
        </p>

        <p>
          Communication access influences clinical reasoning in the same way. A
          clinician needs an accurate history, and a patient needs to understand
          choices, risks, and follow-up. Qualified interpreters, captioning,
          accessible documents, plain language, and additional processing time
          can determine whether those exchanges are complete. Family members
          may provide valuable support, though they should not be assumed to
          replace appropriate communication services or the patient&apos;s own
          preferences.
        </p>

        <h2>Digital care carries the same responsibilities</h2>

        <p>
          Telehealth can reduce travel, simplify access to specialists, and make
          it easier to receive care from a familiar environment. It can also
          introduce barriers through inaccessible software, poor captioning,
          difficult identity checks, or instructions that depend on visual
          cues. The{" "}
          <a href={external.adaTelehealth} target="_blank" rel="noreferrer">
            Department of Justice&apos;s telehealth guidance
          </a>{" "}
          emphasizes effective communication and reasonable modifications
          across virtual care. Opening a video channel addresses distance while
          leaving many other dimensions of access to be designed.
        </p>

        <p>
          Digital accessibility benefits from testing that goes beyond
          technical compliance. Teams can involve people who use screen
          readers, keyboard navigation, switch devices, captions,
          magnification, and alternative input methods. They can examine the
          full task, including account creation, consent, document upload,
          joining the visit, and receiving the care plan. A platform may meet a
          formal standard on its main screens while a third-party scheduling
          tool or PDF breaks the patient&apos;s path.
        </p>

        <p>
          Hybrid care adds another design challenge because access can shift
          between settings. A virtual visit may identify the need for an
          in-person procedure, or an in-person visit may lead to monitoring
          through a portal. Information about communication and mobility needs
          should travel with the care plan, with appropriate consent and privacy
          protections. Otherwise the patient starts over at every transition
          and becomes responsible for coordinating accommodations across
          organizations.
        </p>

        <h2>Access is maintained through routine work</h2>

        <p>
          Accessible care depends on people and processes as much as buildings
          and software. Leaders can assign responsibility for access, include
          it in procurement, budget for communication services, and train staff
          through realistic scenarios. Scheduling teams need clear escalation
          paths. Facilities teams need a way to report and repair barriers.
          Clinical teams need enough time to use equipment and communicate
          well. These choices make access part of ordinary operations.
        </p>

        <p>
          Measurement should capture the experience behind a completed
          appointment. Organizations can review accommodation requests,
          cancellations, transfers, complaints, and delays while protecting
          patient privacy. They can ask whether people with disabilities receive
          preventive services, complete referrals, and return for follow-up at
          comparable rates. Quantitative data becomes more useful when paired
          with conversations that reveal how a barrier arose and why a
          workaround succeeded.
        </p>

        <p>
          People with disabilities should shape this work from the beginning.
          Advisory groups can identify priorities, but participation needs clear
          scope, compensation, accessible materials, and evidence that feedback
          affects decisions. Consultation held after a facility is built or a
          platform is purchased leaves fewer options and asks participants to
          repair choices they had no role in making.
        </p>

        <p>
          Universal design can reduce the number of individual arrangements
          required, yet individualized accommodations remain essential.
          Adjustable equipment, flexible communication, clear navigation, and
          multiple ways to complete a task make care usable for more people.
          They also create a stronger base from which a team can respond to
          needs that no general design will anticipate.
        </p>

        <h2>Care becomes trustworthy through preparation</h2>

        <p>
          Accessibility often becomes visible at moments of friction, although
          its best expression is preparation that makes a visit feel ordinary.
          The room is ready, the interpreter has been scheduled, the equipment
          works, and instructions arrive in a usable form. The patient can spend
          the encounter discussing health instead of coordinating the
          conditions required to receive care.
        </p>

        <p>
          Treating disability access as healthcare infrastructure encourages a
          longer view. Facilities, digital tools, training, and feedback systems
          all require maintenance, and each affects the quality of information
          moving between patient and clinician. When organizations invest in
          that shared foundation, they improve the likelihood that a medical
          service can be reached, understood, and used by the people it is
          intended to serve.
        </p>
      </>
    ),
  },
];

export function getEssay(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}
