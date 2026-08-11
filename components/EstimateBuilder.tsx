"use client";

import { useMemo, useState } from "react";
import { site } from "../config/site";

export default function EstimateBuilder({ initial = "" }: { initial?: string }) {
  const [project, setProject] = useState(initial || site.problems[0]);
  const [zip, setZip] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const brief = useMemo(
    () => `Hi Rojo — I'd like to talk about a project.\n\nProject: ${project}\nZIP: ${zip || "Not entered"}\nDetails: ${details || "I can explain by phone and share photos."}`,
    [project, zip, details]
  );

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="estimate-card">
      <div className="estimate-grid">
        <label>
          <span>What needs to change?</span>
          <select value={project} onChange={(e) => setProject(e.target.value)}>
            {site.problems.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Property ZIP</span>
          <input value={zip} onChange={(e) => setZip(e.target.value)} inputMode="numeric" placeholder="77573" />
        </label>
        <label className="wide">
          <span>Tell Rojo about the project</span>
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Tree near the roof, backyard redesign, paver idea…" rows={4} />
        </label>
      </div>
      <div className="estimate-actions">
        <button type="button" className="button clay" onClick={copyBrief}>{copied ? "Project brief copied" : "Copy project brief"}</button>
        <a className="button light" href={`tel:${site.tel}`}>Call {site.phone}</a>
      </div>
      <p className="micro">This preview does not submit or store your information. Copy the brief, call Rojo, and share photos directly with the business.</p>
    </div>
  );
}
