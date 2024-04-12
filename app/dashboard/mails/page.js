"use client";
import { useEffect, useState } from "react";

export default function Mails() {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    fetch("/api/mails")
      .then((res) => res.json())
      .then((data) => setMails(data));
  }, []);

  return (
    <div className="hero min-h-screen pt-20 bg-base-200">
      <div className="hero-content">
        <div className="card shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Mails</h1>
            <ul className="list">
              {mails.map((mail) => (
                <li key={mail.id} className="list-item">
                  <div>
                    <span className="text-lg font-bold">{mail.subject}</span>
                  </div>
                  <p>{mail.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
