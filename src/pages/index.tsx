import yayJpg from "../assets/yay.jpg";
import SlsTracker from "@aliyun-sls/web-track-browser";

export default function HomePage() {
  const logger = new SlsTracker({} as any);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
