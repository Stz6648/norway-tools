import Head from "next/head";
import { useState } from "react";

export default function Lanekalkulator() {
  const [loan, setLoan] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");

  const principal = Number(loan) || 0;
  const annualInterest = Number(interest) || 0;
  const loanYears = Number(years) || 0;

  const monthlyInterest = annualInterest / 100 / 12;
  const months = loanYears * 12;

  let monthlyPayment = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (principal > 0 && loanYears > 0) {
    if (monthlyInterest > 0) {
      monthlyPayment =
        principal *
        (monthlyInterest *
          Math.pow(1 + monthlyInterest, months)) /
        (Math.pow(1 + monthlyInterest, months) - 1);
    } else {
      monthlyPayment = principal / months;
    }

    totalPayment = monthlyPayment * months;
    totalInterest = totalPayment - principal;
  }

  const formatNOK = (value) =>
    new Intl.NumberFormat("no-NO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <Head>
  <title>Lånekalkulator – Beregn månedlig betaling og renter</title>

  <meta
    name="description"
    content="Gratis lånekalkulator for Norge. Beregn månedlig betaling, total tilbakebetaling og totale renter på lån."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/lanekalkulator"
  />
</Head>
      <h1>Lånekalkulator</h1>

      <p>
        Beregn månedlig betaling, totale renter og total kostnad for et lån.
      </p>

      <section
        style={{
          marginTop: "30px",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "12px",
        }}
      >
        <label>
          <strong>Lånebeløp</strong>
        </label>

        <input
          type="number"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
          placeholder="For eksempel 3000000"
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

        <label style={{ display: "block", marginTop: "20px" }}>
          <strong>Årlig rente (%)</strong>
        </label>

        <input
          type="number"
          step="0.01"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="For eksempel 5.5"
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

        <label style={{ display: "block", marginTop: "20px" }}>
          <strong>Lånetid (år)</strong>
        </label>

        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="For eksempel 25"
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

        {principal > 0 && loanYears > 0 && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "10px",
            }}
          >
            <h2>Resultat</h2>

            <p>
              <strong>Månedlig betaling:</strong>{" "}
              {formatNOK(monthlyPayment)} kr
            </p>

            <p>
              <strong>Total betaling:</strong>{" "}
              {formatNOK(totalPayment)} kr
            </p>

            <p>
              <strong>Totale renter:</strong>{" "}
              {formatNOK(totalInterest)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hvordan fungerer en lånekalkulator?</h2>

        <p>
          En lånekalkulator beregner hvor mye du må betale hver måned basert
          på lånebeløp, rente og løpetid.
        </p>

        <p>
          Kalkulatoren bruker et annuitetslån som standard, der månedlig
          betaling normalt er den samme gjennom hele låneperioden dersom
          renten ikke endres.
        </p>

        <h2>Eksempel</h2>

        <p>
          Hvis du låner 3 000 000 kr med 5,5 % rente over 25 år, kan du bruke
          kalkulatoren for å se månedlig betaling og hvor mye renter lånet
          totalt vil koste.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hva påvirker månedlig lånebetaling?</h3>

        <p>
          Lånebeløp, rente og lånets løpetid påvirker hvor mye du betaler
          hver måned.
        </p>

        <h3>Hva skjer hvis renten øker?</h3>

        <p>
          Ved høyere rente vil den månedlige betalingen normalt bli høyere
          dersom lånebeløpet og løpetiden er uendret.
        </p>

        <h3>Er beregningen et tilbud fra banken?</h3>

        <p>
          Nei. Resultatet er et estimat og kan avvike fra bankens faktiske
          lånetilbud og kostnader.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
