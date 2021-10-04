import React from "react";
import TeamForm from "./TeamForm";

const Level2 = () => {
  return (
    <div>
      <TeamForm
        level={2}
        url={
          "https://sheet.best/api/sheets/3f5567d6-8da7-4f0c-8395-cba87c85b2b1"
        }
      />

      <div>
        Encryption is a means of securing digital data using one or more
        mathematical techniques, along with a password or "key" used to decrypt
        the information. The encryption process translates information using an
        algorithm that makes the original information unreadable.
      </div>

      <div>Use Playfair Algorithm to Encrypt:</div>

      <div>Clue 1 : The Key is the Brain of Computer.(Use Abbreviation)</div>
      <div>
        Clue 2 : I am a malicious program that can cause damage. What am I?
      </div>

      <div>Use Atbash Algorithm to Encrypt:</div>
      <div>Clue : I am the central part of wireless network.</div>

      <a
        href="https://drive.google.com/file/d/1WJDNQjEFao6etZ6XPnJ_du2iVVqKnmA8/view?usp=sharing"
        target="_blank"
      >
        Click here to move forward.
      </a>
    </div>
  );
};

export default Level2;
