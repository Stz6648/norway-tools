import Head from "next/head";
import { useState } from "react";

export default function RentesRenteKalkulator() {
  const [start, setStart] = useState("");
  const [monthly, setMonthly] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");

  const startAmount = Number(start) || 0;
  const monthlySaving = Number(monthly) || 0;
  const annualInterest = Number(interest) || 0;
  const savingYears = Number(years) || 0;

  const months = savingYears * 12;
  const monthlyInterest = annualInterest / 100 / 12;

  let finalValue = 0;

  if (months > 0) {
    if (monthlyInterest > 0) {
      finalValue =
        startAmount * Math.pow(1 + monthlyInterest, months) +
        monthlySaving *
          ((Math.pow(1 + monthlyInterest, months) - 1) /
            monthlyInterest);
    } else {
      finalValue = startAmount + monthlySaving * months;
    }
  }

  const totalDeposits = startAmount + monthlySaving * months;
  const earnedInterest = finalValue - totalDeposits;

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
  <title>Rentes rente kalkulator – Beregn renters rente</title>

  <meta
    name="description"
    content="Gratis rentes rente kalkulator. Beregn hvordan sparing og investering kan vokse over tid med renters rente."
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://norway-tools.vercel.app/rentes-rente"
  />
</Head>
      <h1>Rentes rente-kalkulator</h1>

      <p>
        Beregn hvordan sparing kan vokse over tid med renters rente og
        månedlige innskudd.
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
          <strong>Startbeløp</strong>
        </label>

        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="For eksempel 10000"
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
          <strong>Månedlig sparing</strong>
        </label>

        <input
          type="number"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
          placeholder="For eksempel 2000"
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
          placeholder="For eksempel 5"
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
          <strong>Antall år</strong>
        </label>

        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="For eksempel 20"
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

        {savingYears > 0 && (
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
              <strong>Sluttverdi:</strong>{" "}
              {formatNOK(finalValue)} kr
            </p>

            <p>
              <strong>Totalt innskudd:</strong>{" "}
              {formatNOK(totalDeposits)} kr
            </p>

            <p>
              <strong>Opptjente renter:</strong>{" "}
              {formatNOK(earnedInterest)} kr
            </p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "45px" }}>
        <h2>Hva er renters rente?</h2>

        <p>
          Renters rente betyr at du får avkastning både på pengene du
          opprinnelig satte inn og på tidligere opptjente renter.
        </p>

        <h2>Eksempel</h2>

        <p>
          Hvis du starter med 10 000 kr, sparer 2 000 kr hver måned og får
          5 % årlig rente over 20 år, kan kalkulatoren vise hvor mye
          sparingen kan vokse til.
        </p>

        <h2>Vanlige spørsmål</h2>

        <h3>Hvorfor er tiden viktig?</h3>

        <p>
          Jo lenger pengene står investert eller spart, desto mer tid får
          rentene til å vokse videre.
        </p>

        <h3>Hva påvirker sluttverdien?</h3>

        <p>
          Startbeløp, månedlig sparing, rente og hvor lenge du sparer har
          stor betydning.
        </p>

        <h3>Er dette en garanti for avkastning?</h3>

        <p>
          Nei. Kalkulatoren viser en matematisk beregning basert på den
          valgte renten. Faktisk avkastning kan være annerledes.
        </p>
      </section>

      <hr style={{ margin: "50px 0 20px" }} />

      <p style={{ fontSize: "14px", color: "#666" }}>
        Norway Tools – enkle kalkulatorer og nyttige verktøy for Norge.
      </p>
    </main>
  );
}
