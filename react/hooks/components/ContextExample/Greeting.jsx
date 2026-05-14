import { useContext } from "react"
import { LanguageContext } from "../../src/context/LanguageContext";

const Greeting = () => {
  const { language } = useContext(LanguageContext);

  return (
    <h2>
      {language}
    </h2>
  )
}

export default Greeting;