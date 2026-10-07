import Head from "next/head";
import { useState } from "react";

export default function Lonnskalkulator() {
  const [annualSalary, setAnnualSalary] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("37.5");

  const salary = Number(annualSalary) || 0;
  const hours = Number(weeklyHours) || 0;

  const monthlySalary = salary / 12;
  const hourlySalary =
    hours > 0 ? salary / (hours * 52) : 0;

  const formatNOK = (value) =>
    new Intl.NumberFormat("no-NO", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <>
      <Head>
        <title>Lønnskalkulator – Beregn månedslønn og timelønn | Norway Tools</title>

        <meta
          name="description"
          content="Gratis lønnskalkulator for Norge. Beregn månedslønn og timelønn basert på årslønn og arbeidstid per uke."
        />

        <meta
          name="keywords"
          content="lønnskalkulator, årslønn, månedslønn, timelønn, lønn kalkulator Norge"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://norway-tools.vercel.app/lonnskalkulator"
        />
      </Head>

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <p>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#2563eb",
            }}
          >
            ← Tilbake til Norway Tools
          </a>
        </p>

        <header>
          <h1>Lønnskalkulator</h1>

          <p style={{ fontSize: "18px", color: "#555" }}>
            Beregn månedslønn og timelønn basert på årslønn og
            arbeidstid per uke.
          </p>
        </header>

        <section
          style={{
            marginTop: "30px",
            padding: "25px",
            background: "#f5f5f5",
            borderRadius: "14px",
          }}
        >
          <label>
            <strong>Årslønn (kr)</strong>
          </label>

          <input
            type="number"
            min="0"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value)}
            placeholder="For eksempel 600000"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "450px",
              padding: "12px",
              marginTop: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <label
            style={{
              display: "block",
              marginTop: "20px",
            }}
          >
            <strong>Arbeidstid per uke (timer)</strong>
          </label>

          <input
            type="number"
            min="0"
            step="0.5"
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              maxWidth: "450px",
              padding: "12px",
              marginTop: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          {salary > 0 && hours > 0 && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <h2>Resultat</h2>

              <p>
                <strong>Årslønn:</strong>{" "}
                {formatNOK(salary)} kr
              </p>

              <p>
                <strong>Månedslønn:</strong>{" "}
                {formatNOK(monthlySalary)} kr
              </p>

              <p>
                <strong>Timelønn:</strong>{" "}
                {formatNOK(hourlySalary)} kr
              </p>
            </div>
          )}
        </section>

        <section style={{ marginTop: "45px" }}>
          <h2>Hvordan beregnes lønnen?</h2>

          <p>
            Månedslønn beregnes ved å dele årslønnen på 12 måneder.
          </p>

          <p>
            Timelønn beregnes her ved å dele årslønnen på antall
            arbeidstimer i løpet av et år.
          </p>

          <p>
            Beregningen bruker 52 uker per år og arbeidstiden du
            oppgir per uke.
          </p>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2>Eksempel</h2>

          <p>
            Hvis årslønnen er 600 000 kr og arbeidstiden er 37,5
            timer per uke:
          </p>

          <ul>
            <li>Månedslønn: 50 000 kr</li>
            <li>Timelønn: ca. 307,69 kr</li>
          </ul>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2>Vanlige spørsmål</h2>

          <h3>Hvordan regner jeg ut månedslønn fra årslønn?</h3>

          <p>
            Del årslønnen på 12. For eksempel gir 600 000 kr i
            årslønn 50 000 kr per måned før skatt.
          </p>

          <h3>Hvordan regner jeg ut timelønn?</h3>

          <p>
            Årslønn deles på antall arbeidstimer per år. Resultatet
            avhenger derfor av hvor mange timer du arbeider per uke.
          </p>

          <h3>Er dette lønn etter skatt?</h3>

          <p>
            Nei. Kalkulatoren viser brutto lønn før skatt,
            feriepenger og eventuelle andre fradrag.
          </p>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2>Flere kalkulatorer</h2>

          <p>
            <a href="/feriepenger-kalkulator">
              Feriepengerkalkulator
            </a>
          </p>

          <p>
            <a href="/overtidskalkulator">
              Overtidskalkulator
            </a>
          </p>

          <p>
            <a href="/prosent-kalkulator">
              Prosentkalkulator
            </a>
          </p>

          <p>
            <a href="/mva-kalkulator">
              MVA-kalkulator
            </a>
          </p>
        </section>

        <hr style={{ margin: "50px 0 20px" }} />

        <footer>
          <p style={{ color: "#666" }}>
            Norway Tools tilbyr gratis og enkle kalkulatorer for
            vanlige beregninger i Norge.
          </p>
        </footer>
      </main>
    </>
  );
}
