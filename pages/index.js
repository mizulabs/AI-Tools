import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { BeatLoader } from "react-spinners";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  const [functionInput, setFunctionInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault(); // Prevent the page from reloading
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ functionInput: functionInput, descriptionInput: descriptionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setFunctionInput("");
      if (typeof window !== "undefined") {
        localStorage.setItem("descriptionInput", descriptionInput); // Save the description input to localStorage
        localStorage.setItem("functionInput", functionInput); // Save the function input to localStorage
      }
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
    setLoading(false); // Set loading state to false
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDescriptionInput(localStorage.getItem("descriptionInput") || "");
      setFunctionInput(localStorage.getItem("functionInput") || "");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Solidity NatSpec Generator</title>
        <link rel="icon" href="/mizu.png" />
      </Head>
      <main className={styles.main}>
        <img src="/mizu.png" className={styles.icon} />
        <h3>One Click NatSpec Documentation for Solidity</h3>
        <SocialIcons />
        <p>Powered by <a href="https://mizu.fi">mizu.fi</a></p>
        <div className={styles.container}>
          <form onSubmit={onSubmit}>
            <textarea
              name="function"
              placeholder="Enter your Solidity function"
              value={functionInput}
              onChange={(e) => setFunctionInput(e.target.value)}
              rows={20}
              cols={80}
            />
            <textarea
              type="text"
              name="description"
              placeholder="Enter contract description"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
            <input type="submit" value="Generate Documentation" />
          </form>
          <div className={styles.resultBox}>
            {loading && (
              <div className={styles.loading}>
                <BeatLoader color="#fff" size={20} />
              </div>
            )}
            {!loading && result && (
              <pre className={styles.code}>{result}</pre>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
