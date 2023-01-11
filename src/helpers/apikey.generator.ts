import { v4 as uuidv4 } from "uuid";

const apiKeyGenerator = (): string => {
  const date = Date.now().toString(34);
  const uid = uuidv4();
  const apiKey: string = `${date}-${uid}`;
  return apiKey;
};

export default apiKeyGenerator;
