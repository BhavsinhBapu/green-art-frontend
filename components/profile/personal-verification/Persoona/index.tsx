import React, { useRef, useState } from "react";
//@ts-ignore
import Persona from "persona";
import useTranslation from "next-translate/useTranslation";
import { ThirdPartyKycVerifiedAction } from "state/actions/user";

const PersonaComponent = ({ personaDetails, setPersonaVerified }: any) => {
  const [options, setOptions] = useState({
    templateId: personaDetails?.PERSONA_KYC_TEMPLATED_ID,
  });
  const { t } = useTranslation("common");

  const embeddedClientRef = useRef(null);
  const createClient = () => {
    //@ts-ignore
    const client = new Persona.Client({
      ...options,
      environment: "sandbox",
      //@ts-ignore
      onLoad: (error) => {
        if (error) {
          console.error(
            `Failed with code: ${error.code} and message ${error.message}`
          );
        }

        client.open();
      },
      //@ts-ignore
      onStart: (inquiryId) => {
        console.log(`Started inquiry ${inquiryId}`);
      },
      //@ts-ignore
      onComplete: (inquiryId) => {
        console.log(inquiryId, "inquiryIdinquiryId");
        ThirdPartyKycVerifiedAction(
          String(inquiryId.inquiryId),
          setPersonaVerified
        );
      },
      //@ts-ignore
      onEvent: (name, meta) => {
        switch (name) {
          case "start":
            console.log(`Received event: start`);
            break;
          default:
            console.log(
              `Received event: ${name} with meta: ${JSON.stringify(meta)}`
            );
        }
      },
    });
    //@ts-ignore
    embeddedClientRef.current = client;
    //@ts-ignore
    window.exit = (force) =>
      //@ts-ignore
      client ? client.exit(force) : alert("Initialize client first");
  };
  return (
    <div className="container text-center">
      <h2>{t("Verify your identity")}</h2>
      <button
        onClick={createClient}
        className="btn nimmu-user-sibmit-button mt-5"
      >
        Start
      </button>
    </div>
  );
};

export default PersonaComponent;
