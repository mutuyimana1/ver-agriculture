import { createDirectus } from "@directus/sdk";

const URL = "https://admin.verrwanda.org";
const directus = createDirectus(URL);

export default directus;