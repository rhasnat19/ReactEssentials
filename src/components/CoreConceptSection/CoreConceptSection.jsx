import { CORE_CONCEPTS } from "../../data.js";

import CoreConcept from "../../components/CoreConcept.jsx";

export default function CoreConceptSection() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </section>
  );
}
