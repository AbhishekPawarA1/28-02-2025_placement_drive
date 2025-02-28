import { useEffect, useState } from "react";

export function Timemanagement() {
  const [warning, setWarning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWarning(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

    return <>{
        warning ?
            <h2>Your session will expire soon!</h2>
        : ""
        }</>;
}
