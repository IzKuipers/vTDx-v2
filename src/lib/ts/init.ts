import { urlParams } from "./env";
import { openModule } from "./page";

export function init() {
    const URLModule = urlParams.get("m");

    if (URLModule) {
        openModule(URLModule);
    }
}