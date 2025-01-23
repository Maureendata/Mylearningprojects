import Code from "./Code.jsx";
import Welcome from "./Welcome.jsx";
export default function Conditionalrendering() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
